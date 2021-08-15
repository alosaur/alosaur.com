---
sidebar_position: 5
---

# Middleware

Middleware - это функция которая вызывается до и после выполнения action у controller. Внимание, в отличии от Hook, Middleware ограниченно поддерживает DI, так как регистрируется на верхнем уровне в месте с самим приложением.

В Alosaur Middlware имеет следующий интерфейс:

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

Для того чтобы зарегистрировать свой Middlware вы можете с помощью декоратора `@Middleware` передав внутрь Regexp роута, на котором вы бы хотели чтобы ваш Middleware сработал.

Пример простого Middlware:

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

Далее вы можете регистрировать его на уровне AppSettings или же после инициализации:

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
Так же вы можете посмотреть более сложные в исполнении Middleware в разделах WebSocket или SSE.
:::