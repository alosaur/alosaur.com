---
sidebar_position: 1
---

# App

For create an application in Alosaur, you must use the class **App**.

```ts
// HomeArea

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

// Listen :8000 port by default
app.listen();
```

The application can be plisted with TState, TState need to typing the status of the context of the request.

```ts
// App<TState> 
// example uses in Controller action

@Get()
getBody(@Context() context: HttpContext<TState>): TState {
  return context.state;
}
```

:::important
You can read more about **Context** in - [Context, Request, Response](/docs/basics/context)
:::

### AppSettings

The App constructor takes the AppSettings interface

**areas**

Areas of controllers

**middlewares**

Middleware that registers in the entire application

**staticConfig**

Configure to output static files from a certain directory by a certain route

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

Configuration to use the default renderer in method outputs, via a function such as `return View('index')`

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
Read more about the outputs of the controller methods in the section: [Controllers](/docs/basics/controllers)
:::
**logging**

Output to the console service information on the registration of controllers and routes to them

**container**

Provides default base container implementation in the DI 

**providers**

Providers declared at the root level

:::important
Подробнее про **providers** в разделе: [Dependency injection](/docs/basics/di)
:::

### App.listen()

With this function you start the server to listen for http requests. By default, the server runs on port :8000.

You can also run the server by selecting the one you want:
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