---
sidebar_position: 5
---

# Middleware

Middleware is a function that is called before and after controller's action is executed. Note, unlike Hook, Middleware has limited DI support because it is registered at the top level in place of the application itself.

In Alosaur, Middlware has the following interface:

```ts
export type IMiddleware<TState = unknown> =
  | PreRequestMiddleware<TState>
  | PostRequestMiddleware<TState>
  | MiddlewareTarget<TState>;

export interface PreRequestMiddleware<TState = unknown> {
  onPreRequest(context: HttpContext<TState>): void;
}

export interface PostRequestMiddleware<TState = unknown> {
  onPreRequest(context: HttpContext<TState>): void;
}

export interface MiddlewareTarget<TState = unknown> {
  onPreRequest(context: HttpContext<TState>): void;
  onPostRequest(context: HttpContext<TState>): void;
}
```

In order to register your Middlware you can use the `@Middleware` decorator to pass in the Regexp router on which you would like your Middleware to run.

An example of a simple Middlware:

```ts
@Middleware(new RegExp("/"))
export class Log implements MiddlewareTarget<TState> {
  date: Date = new Date();

  onPreRequest(context: Context<TState>) {
    return new Promise<void>((resolve, reject) => {
      this.date = new Date();
      resolve();
    });
  }

  onPostRequest(context: Context<TState>) {
    return new Promise<void>((resolve, reject) => {
      console.log(new Date().getTime() - this.date.getTime());
      resolve();
    });
  }
}
```

Then you can register it at the AppSettings level or after initialization:

```ts
const settings: AppSettings = {
  areas: [HomeArea, InfoArea],
  middlewares: [Log], // The order in this array corresponds to the order of the run middleware
};

// or in app use:

const app = new App(settings);
app.use(/\//, new Log());
```

:::tip
You can also check out more advanced Middleware under WebSocket or SSE.
:::