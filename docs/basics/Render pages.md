---
sidebar_position: 8
---

# Render pages

Alosaur может поддерживать любой html renderer. Все что вам нужно, это настроить и имплементировать template renderer.

:::tip example
В примерах приложений вы можете найти: Dejs, Handlebars, Angular, React, Eta [https://github.com/alosaur/alosaur/tree/master/examples/](https://github.com/alosaur/alosaur/tree/master/examples/)
:::

Пример настройки Handlebars:

```ts
// Handlebars
...
// Basedir path
const viewPath = `${Deno.cwd()}/examples/handlebars/views`;

// Create Handlebars render
const handle = new Handlebars();

app.useViewRender({
    type: 'handlebars',
    basePath: viewPath,
    getBody: async (path: string, model: any, config: ViewRenderConfig) => await handle.renderView(path, model),
});

...
```

Handlebars support custom config, more about handlebars for deno: [https://github.com/alosaur/handlebars](https://github.com/alosaur/handlebars)

```ts
new Handlebars(
  {
    baseDir: viewPath,
    extname: ".hbs",
    layoutsDir: "layouts/",
    partialsDir: "partials/",
    defaultLayout: "main",
    helpers: undefined,
    compilerOptions: undefined,
  },
);
```