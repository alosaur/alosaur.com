---
sidebar_position: 3
---

# SPA (Single page application)

Single Page Application

In Alosaur you can use a special Middleware, the SpaBuiler, to allow you to give page data as for single-page software.

```jsx
const app = new App({
  areas: [HomeArea],
  logging: false,
});

app.use(
  /^\/www/,
  new SpaBuilder({
    root: `${Deno.cwd()}/examples/spa/www`,
    index: "index.html",
    baseRoute: "/www/",
  }),
);

// OR in default route

// app.use(
//     new RegExp('/'),
//     new SpaBuilder({
//         root: `${Deno.cwd()}/examples/spa/www`,
//         index: 'index.html',
//     }),
// );
```

:::tip Example
[https://github.com/alosaur/alosaur/tree/master/examples/spa](https://github.com/alosaur/alosaur/tree/master/examples/spa)

:::
