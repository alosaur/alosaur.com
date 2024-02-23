---
sidebar_position: 1
---

# App

Для создания приложения в Alosaur необходимо воспользоваться конструктором класса **App**.

```ts
// HomeArea

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

// Listen :8000 port by default
app.listen();
```

Приложение может быть затипизировано с помощью TState, TState нужен для типизации состояния контекста запроса.

```ts
// App<TState> 
// example uses in Controller action

@Get()
@ActionParam(0, Context())
getBody(context: HttpContext<TState>): TState {
  return context.state;
}
```

:::important
Подробнее про **Context** вы можете прочитать в разделе - [Context, Request, Response](/docs/basics/context)
:::

### AppSettings

Конструктор App принимает интерфейс AppSettings

**areas**

Области контроллеров, подробнее в разделе - ссылка


**middlewares**

Middleware которые регистрируются во всем приложении , подробнее в разделе - ссылка

**staticConfig**

Конфиг для того чтобы выдавать по определенному маршруту статические файлы из определенного каталога

```ts
{
  root: `${Deno.cwd()}/examples/static/www`,
  index: "index.html",
  baseRoute: "/www/", // or undefined for default route /
} 

// or use method
const app = new App();

app.useStatic({
...
})
```

**viewRenderConfig**

Конфигурация для использования дефолтного рендера в выводах метода, через функцию например `return View('index')`

```ts
// Create Handlebars config
const handle = new Handlebars({
  baseDir: viewPath,
  extname: ".hbs",
  layoutsDir: "layouts/",
  partialsDir: "partials/",
  defaultLayout: "main",
  helpers: undefined,
  compilerOptions: undefined,
});

app.useViewRender({
  type: "handlebars",
  basePath: `${Deno.cwd()}/examples/handlebars/views`,
  getBody: async (path: string, model: any, config: ViewRenderConfig) =>
    await handle.renderView(path, model),
});
```

:::important
Подробнее про выводы методов контроллера в разделе: [Controllers](/docs/basics/controllers)
:::
**logging**

Вывод в консоль служебной информации по регистрации контроллеров и маршрутов к ним

**container**

Обеспечивает внедрение дефолтного базового контейнера в DI 

**providers**

Провайдеры задекларированные на корневом уровне

:::important
Подробнее про **providers** в разделе: [Dependency injection](/docs/basics/di)
:::

### App.listen()

C этой функцией вы запускаете сервер на прослушивание http запросов. По умолчанию сервер запускается на :8000 порту.

Вы так же можете запустить сервер выбрав необходимый вам:
```ts
app.listen("http://localhost:8080") 

// or 
app.listen(":8080")

// or with custom listener

app.listen(null, Deno.listen({ port: 8080 }))
```

### Global error handler

Errors that haven't been caught elsewhere get in here

```ts
const app = new App(
  // app settings
);

// added global error handler
app.error((context: Context<any>, error: Error) => {
  context.response.result = Content(
    "This page unprocessed error",
    (error as HttpError).httpCode || 500,
  );
  context.response.setImmediately();
});
```
