---
sidebar_position: 9
---

# Security

В Alosaur этот модуль включает несколько подмодулей. Так же для его подмены вам необходимо подменить HttpContext на SecurityContext. Ниже в примерах вы это можете увидеть.

## Session

Сессии в Alosaur работают на основе Cookies. Включая этот функционал вы можете воспользоваться и другими функциями, например Authorization. 

Сессии добавляют в куку пользователя c так называемым sessionId который так же включает в себя часть подписи, поэтому необходимо задать уникальный секретный ключ. 

```ts
...

// Create store for sessions
const store = new MemoryStore();
await store.init();

// App settings
new App({
    ...
    providers: [{ // need for create security context
        token: Context,
        useClass: SecurityContext, 
    }],
    ...
});

// Key for sign session id
app.use(/\//,  new SessionMiddleware(store, {secret: "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"}));

// then you can use Context in action:
// action
@Get('counter')
public action(@Ctx() context: SecurityContext) {
    context.security.session.set("testValue", 1);
    context.security.session.get("testValue", 1);
    
    const sid = context.security.session.sessionId;
    
    console.log(sid);
    
    // and use your store
    await context.security.session.store.exist(sid);
}
```

SessionMiddleware принимает 2 значения: SessionStore и SessionOptions. Session store необходим для хранения информации про sessionId и записанной в session информации.

:::note
Alosaur по умолчанию предоставляет **MemoryStore**, который хранит информацию в памяти приложения во время выполнения. Так же вы можете реализовать свой Store использую интерфейс: **SessionStore**. Подробнее: [https://github.com/alosaur/alosaur/tree/master/src/security/session](https://github.com/alosaur/alosaur/tree/master/src/security/session)
:::

Интерфейс SessionOptions выглядит следующим образом:

```ts
export interface SessionOptions {
  /** Security key for sign hash **/
  secret: Uint8Array | bigint | number | string;
  /** Key for save in cookie default 'sid' **/
  name?: string;
  /** Expiration date of the cookie. */
  expires?: Date;
  /** Max-Age of the session Cookie. Must be integer superior to 0. */
  maxAge?: number;
  /** Specifies those hosts to which the cookie will be sent. */
  domain?: string;
  /** Indicates a URL path that must exist in the request. */
  path?: string;
  /** Indicates if the cookie is made using SSL & HTTPS. */
  secure?: boolean;
  /** Indicates that cookie is not accessible via JavaScript. **/
  httpOnly?: boolean;
  /** Allows servers to assert that a cookie ought not to
   * be sent along with cross-site requests. */
  sameSite?: SameSite;
}
```

## Authorization & Authentication

Пример приложения авторизации: [https://github.com/alosaur/alosaur/tree/master/examples/auth](https://github.com/alosaur/alosaur/tree/master/examples/auth)

### AuthMiddleware

Для работы авторизации необходимо включить поддержку AuthMiddleware передав в него соответствующий AuthenticationScheme.

```ts
const app = new App({
  providers: [{ // need for create security context
    token: Context,
    useClass: SecurityContext,
  }],
});

// create session store
const sessionStore = new MemoryStore();
await sessionStore.init();

// create middleware with options
const sessionMiddleware = new SessionMiddleware(sessionStore, {
  secret: 123456789n,
  maxAge: DAYS_30,
  path: "/",
});

// create auth middleware with schemes
const authMiddleware = new AuthMiddleware([
  CookiesAuthentication.DefaultScheme,
]);

app.use(new RegExp("/"), sessionMiddleware);
app.use(new RegExp("/"), authMiddleware);
```

### AuthenticationScheme

Необходим для использования SecurityContext, Authentificate, verify, signin, signout.

В Alosaur имеются 2 типа схем: `CookiesAuthentication.DefaultScheme` и `JwtBearerScheme`.

Имеющий общий интерфейс AuthenticationScheme:

```ts
export interface AuthenticationScheme {
  /**
   * This function assign to context identity info, uses in Authorization middleware
   */
  authenticate(context: SecurityContext): Promise<void>;

  /**
   * Create sign identity and assign to context identity info
   */
  signInAsync<I, R = any>(
    context: SecurityContext,
    identity: Identity<I>,
  ): Promise<R>;

  /**
   * Clear sign in info and destroy identity context
   */
  signOutAsync<T, R>(context: SecurityContext): Promise<R>;

  /**
   * Uses in Authorize decorators for handle if AuthPayload result failure
   */
  onFailureResult(context: SecurityContext): void;

  /**
   * Uses in Authorize decorators for handle if AuthPayload result success
   */
  onSuccessResult(context: SecurityContext): void;
}
```

**CookiesScheme**

Включает в себя поддержку Cookies для авторизации. Вы можете использовать схему по умолчанию и переопределить его поведение

```ts
export namespace CookiesAuthentication {
  export const DefaultScheme = new CookiesScheme(
    "/account/login",
  );
}
```

**JwtBearerScheme**

Включает в себя поддержку JSON Web Tokens для авторизации. Подробнее про него: [https://en.wikipedia.org/wiki/JSON_Web_Token](https://en.wikipedia.org/wiki/JSON_Web_Token)

Для входа и аутентификации вам необходимо создать instance этой схемы:

```ts
const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

export const JWTscheme = new JwtBearerScheme(
  "HS512",
  key,
  30 * 24 * 60 * 60 * 1000,
);
//     private readonly algorithm: Algorithm,
//     private readonly key: CryptoKey,
//     private readonly expires: number = DAYS_30,

// and use JWTscheme in other cases, when need scheme

const app = new App({
  providers: [{ // need for create security context
    token: Context,
    useClass: SecurityContext,
  }],
});

// create auth middlware with schemes
const authMiddleware = new AuthMiddleware([JWTscheme]);

app.use(new RegExp("/"), authMiddleware);
```

## SecurityContext

SecurityContext может быть использован везде как и обычный HttpContext. Для его использования необходимо переопределить его на уровне приложения:

```ts
const app = new App({
  providers: [{ // need for create security context
    token: Context,
    useClass: SecurityContext,
  }],
});
```

Пример работы с SecurityContext и возможный вариант реализации авторизации:

```ts
@Controller("/account")
export class AccountController {
  name: string | undefined = undefined;

  constructor(private service: AuthService) {}

  @Get("/login")
  getLogin(@Ctx() context: SecurityContext) {
    if (context.security.auth.identity()) {
      return Redirect("/home/protected");
    }

    return `<form method="post">
                login: admin <br>
                password: admin <br>
              <input type="text" name="login" placeholder="login" value="admin"><br>
              <input type="password" name="password" placeholder="password" value="admin"><br>
              <input type="submit">
            </form>`;
  }

  @Post("/login")
  async postLogin(
    @Ctx() context: SecurityContext,
    @Body() account: LoginModel,
  ) {
    const user = this.service.validate(account.login, account.password);

    if (user) {
      await context.security.auth.signInAsync<UserModel>(scheme, user);
      return Redirect("/home/protected");
    }

    return Redirect("/account/login");
  }

  @Get("/logout")
  async logOut(@Ctx() context: SecurityContext) {
    await context.security.auth.signOutAsync(scheme);
    return Redirect("/account/login");
  }
}

// validation user service
export class AuthService {
  validate(login: string, password: string): UserModel | undefined {
    if (login === "admin" && password === "admin") {
      return { id: "1", login: "admin" };
    }
    return undefined;
  }
}
```

**auth.signInAsync** 

Принимает AuthenticationScheme и объект Identity

**auth.signOutAsync**

Принимает AuthenticationScheme

**Identity**

Объект который будет доступен далее в SecurityContext, roles может быть использован в `Authorize` декораторе;

```ts
  export interface Identity<T> {
  id: string | number;
  data?: T;
  readonly roles?: string[];
}

// example of use

await context.security.auth.signInAsync(
   CookieScheme,
   { id: 1, roles: ["admin"] }
);
```

## Authorize Decorators

Для удобства использования вы можете использовать декоратор `@Authorize` из коробки.

`@Authorize(scheme, payload)` - это специальный хук декоратор который может быть использован на разном уровне: actions, controllers, areas.

```ts
@Authorize(CookiesAuthentication.DefaultScheme)
@Get("/protected")
getProtectedData() {
    return "Hi! this protected info. <br>  <a href='/account/logout'>logout</a>";
  }
```

Authorize with roles:

```ts
@Authorize(CookieScheme, {roles: ["admin"]})
```

Authorize with custom policy function:

```ts

const CostomAuthPolicy = (context: SecurityContext) => {
    result = false ;// validate with context
    return result;
}

@Authorize(CookieScheme, { policy: CostomAuthPolicy })
```