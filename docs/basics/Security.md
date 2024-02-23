---
sidebar_position: 9
---

# Security

In Alosaur, this module includes several sub-modules. You also need to substitute HttpContext with SecurityContext in order to substitute it. You can see it below in the examples.

## Session

Sessions in Alosaur are cookie-based. By enabling this functionality, you can take advantage of other features such as Authorization. 

Sessions add a user to the cookie with a so called sessionId which also includes a signature part, so a unique secret key must be specified. 

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
@ActionParam(0, Ctx())
public action(context: SecurityContext) {
    context.security.session.set("testValue", 1);
    context.security.session.get("testValue", 1);
    
    const sid = context.security.session.sessionId;
    
    console.log(sid);
    
    // and use your store
    await context.security.session.store.exist(sid);
}
```

SessionMiddleware takes 2 values: SessionStore and SessionOptions. Session store is needed to store the sessionId information and the information written in session.

:::note
Alosaur provides by default a **MemoryStore** that stores information in runtime application memory. You can also implement your Store using the **SessionStore** interface: **SessionStore**. Learn more: [https://github.com/alosaur/alosaur/tree/master/src/security/session](https://github.com/alosaur/alosaur/tree/master/src/security/session)
:::

The SessionOptions interface looks like this:

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

Example authorization application: [https://github.com/alosaur/alosaur/tree/master/examples/auth](https://github.com/alosaur/alosaur/tree/master/examples/auth)

### AuthMiddleware

For authorization to work, you must enable AuthMiddleware support by passing the appropriate AuthenticationScheme to it.

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

Required to use SecurityContext, Authenticate, verify, signin, signout.

There are 2 types of schemes in Alosaur: `CookiesAuthentication.DefaultScheme` and `JwtBearerScheme`.

Having a common interface AuthenticationScheme:

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

Includes support for Cookies for authorization. You can use the default scheme and override its behavior

```ts
export namespace CookiesAuthentication {
  export const DefaultScheme = new CookiesScheme(
    "/account/login",
  );
}
```

**JwtBearerScheme**

Includes JSON Web Tokens support for authorization. Read more about it: [https://en.wikipedia.org/wiki/JSON_Web_Token](https://en.wikipedia.org/wiki/JSON_Web_Token)

For login and authentication you need to create instance of this scheme:

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

SecurityContext can be used everywhere just like regular HttpContext. To use it, you must redefine it at the application level:

```ts
const app = new App({
  providers: [{ // need for create security context
    token: Context,
    useClass: SecurityContext,
  }],
});
```

An example of working with SecurityContext and a possible implementation of authorization:

```ts
@Controller("/account")
export class AccountController {
  name: string | undefined = undefined;

  constructor(private service: AuthService) {}

  @Get("/login")
  @ActionParam(0, Ctx())
  getLogin(context: SecurityContext) {
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
  @ActionParam(0, Ctx())
  @ActionParam(1, Body())
  async postLogin(
    context: SecurityContext,
    account: LoginModel,
  ) {
    const user = this.service.validate(account.login, account.password);

    if (user) {
      await context.security.auth.signInAsync<UserModel>(scheme, user);
      return Redirect("/home/protected");
    }

    return Redirect("/account/login");
  }

  @Get("/logout")
  @ActionParam(0, Ctx())
  async logOut(context: SecurityContext) {
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

Accepts AuthenticationScheme and Identity object

**auth.signOutAsync**

Accepts AuthenticationScheme

**Identity**

The object that will be available later in the SecurityContext, roles can be used in the `Authorize` decorator

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

You can use the `@Authorize` decorator out of the box for ease of use.

`@Authorize(scheme, payload)` is a special decorator hook that can be used at different levels: actions, controllers, areas.

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
