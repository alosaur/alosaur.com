---
sidebar_position: 4
---

# Context, Request, Response

Часть данных, используемых в приложении, можно отнести к его состоянию. Это могут быть как какие-то глобальные данные, так и данные, которые непосредственно относятся к запросу и пользователю. И в зависимости от вида данных, существуют различные способы для их хранения.

В объекте Context определен state для таких данных, которые непосредственно связаны с текущим запросом. После завершения запроса все данные из state удаляются. State может быть затипизирован как угодно и иметь один тип на все приложение через `App<TState>`.

## HttpContext

В обычном приложении вы можете работать с обьектом HttpContext, который содержит в себе request, response, state

HttpContext может быть доступен в различных местах вашего приложения например:

Controller:

```ts
@Controller()
class HomeController {
  @Get()
  @ActionParam(0, Ctx())
  getText(context: HttpContext) {
	   // something
  }
}
```

Middleware по умолчанию:

```ts
export interface MiddlewareTarget<TState = unknown> {
  onPreRequest(context: HttpContext<TState>): void;
  onPostRequest(context: HttpContext<TState>): void;
}
```

 Hooks по умолчанию:

```ts
export interface HookTarget<TState, TPayload> {
  onPreAction?(context: HttpContext<TState>, payload: TPayload): void;
  onPostAction?(context: HttpContext<TState>, payload: TPayload): void;
  onCatchAction?(context: HttpContext<TState>, payload: TPayload): void;
}
```

## Request

**AlosaurRequest**

Этот объект включает параметры запроса:

```ts
public readonly url: string;
public readonly headers: Headers;
public readonly method: string;
public readonly serverRequest: ServerRequest // Request object from Deno serve
public async body(): unknown // Parse body with RequestBodyParseOptions
```

## Response

**AlosaurResponse**

Этот объект включает параметры ответа сервера и создается на моменте запроса и может формировать различные состояния в себе.

```ts
type ResponseBody = Uint8Array | Deno.Reader | string | any;

class Response {
	public status?: number;
	public body?: ResponseBody;
	public result?: ActionResult | any;
```

**context.response.setImmediately();**

Используется для того чтобы ответ был немедленным после выполнения текущего кода, без выполнения других Hook, Middleware. 

**context.response.setNotRespond();**

Используется для того чтобы запрос оставался в рамках сервера, например в middleware WebSocket или SSE

## Extends HttpContext, custom Context

Если вы хотите расширить использование глобального контекста, вы можете использовать такую технику:

```ts
@Injectable()
export class MySecurityContext<T = any> extends HttpContext<T> {
  constructor(@Inject(SERVER_REQUEST) serverRequest: ServerRequest) {
    super(serverRequest);
  }

  //... your code here
}
```

Затем с помощью техники DI вы можете переопределить создание HttpContext:

```ts
const app = new App({
  // ...

  providers: [{
    token: HttpContext,
    useClass: MySecurityContext,
  }],
});
```
