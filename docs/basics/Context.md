---
sidebar_position: 4
---

# Context, Request, Response

Some of the data used in an application can be attributed to its state. This can be either some global data or data that is directly related to the request and the user. And depending on the type of data, there are different ways to store it.

In the Context object, a state is defined for such data that is directly related to the current request. When the request is complete, all data from the state is removed. The state can be typed as desired and have one type for the entire application through `App<TState>`.

## HttpContext

In a basic application you can work with HttpContext object, which contains request, response, state

HttpContext can be available in different places of your application, e.g:

Controller:

```ts
@Controller()
class HomeController {
  @Get()
  getText(@Ctx() context: HttpContext) {
	   // something
  }
}
```

Middleware by default:

```ts
export interface MiddlewareTarget<TState = unknown> {
  onPreRequest(context: HttpContext<TState>): void;
  onPostRequest(context: HttpContext<TState>): void;
}
```

 Hooks by default:

```ts
export interface HookTarget<TState, TPayload> {
  onPreAction?(context: HttpContext<TState>, payload: TPayload): void;
  onPostAction?(context: HttpContext<TState>, payload: TPayload): void;
  onCatchAction?(context: HttpContext<TState>, payload: TPayload): void;
}
```

## Request

**AlosaurRequest**

This object includes request parameters:

```ts
public readonly url: string;
public readonly headers: Headers;
public readonly method: string;
public readonly serverRequest: ServerRequest // Request object from std/http
public async body(): unknown // Parse body with RequestBodyParseOptions
```

## Response

**AlosaurResponse**

This object includes server response parameters and is created at the moment of the request and can form different states in itself.

```ts
type ResponseBody = Uint8Array | Deno.Reader | string | any;

class AlosaurResponse {
	public status?: number;
	public body?: ResponseBody;
	public result?: ActionResult | any;
```

**context.response.setImmediately();**

Используется для того чтобы ответ был немедленным после выполнения текущего кода, без выполнения других Hook, Middleware. 

**context.response.setNotRespond();**

Used to ensure that the response is immediate after the execution of the current code, without executing other Hook, Middleware.

## Extends HttpContext, custom Context

If you want to extend the use of global context, you can use this technique:

```ts
@Injectable()
export class MySecurityContext<T = any> extends HttpContext<T> {
  constructor(@Inject(SERVER_REQUEST) serverRequest: ServerRequest) {
    super(serverRequest);
  }

  //... your code here
}
```

You can then use the DI technique to override the creation of the HttpContext:

```ts
const app = new App({
  // ...

  providers: [{
    token: HttpContext,
    useClass: MySecurityContext,
  }],
});
```