---
sidebar_position: 4
---

# Alosaur Lite


## Intro

Lightweight version of Alosaur (2.4kb, gzip, one file) without dependencies. Specially designed to work with deno deploy.

## Features

- [x]  Controllers
- [x]  Actions methods (GET, POST, etc)
- [x]  Serve static files
- [x]  Render pages (React jsx, markdown files)

## Example

### Basic

```ts
import {App, Content, Controller, Get, Param, QueryParam} from "https://deno.land/x/alosaur_lite/dist/mod.js";

@Controller()
export class MainController {
  @Get()
  indexPage() {
    return "index page";
  }

  @Get("/home")
  homePage() {
    return "home page";
  }

  @Get("/json")
  jsonPage() {
    return {data: "test"};
  }

  @Get("/not")
  notPage() {
    return Content("Not authorized", 401);
  }

  @Get("/page/:id")
  paramPage(@Param("id") id: string, @QueryParam('filter') filter: string) {
    return `Id: ${id} Filter: ${filter}`;
  }
}

const app = new App({
  controllers: [MainController],
});

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(app.handleRequest(event.request));
});
```

### Serve static files

```ts
app.useStatic({
      root: import.meta.url,
      index: "index.html",
      baseRoute: "/www/",
    } // or undefined for default route /
);
```

### Render pages

```ts
app.useViewRender({
  type: "react",
  basePath: `/views/`,
  getBody: async (path: string, model: Object, config: any) =>
      await getPage(path, model),
});
```

:::tip example
Example with react:  [https://github.com/alosaur/alosaur-lite/tree/master/examples/react](https://github.com/alosaur/alosaur-lite/tree/master/examples/react)
:::

### Render markdown files

Example: [https://github.com/alosaur/alosaur-lite/tree/master/examples/markdown](https://github.com/alosaur/alosaur-lite/tree/master/examples/markdown)

Demo: [https://alosaur-lite-markdown.deno.dev/](https://alosaur-lite-markdown.deno.dev/)
