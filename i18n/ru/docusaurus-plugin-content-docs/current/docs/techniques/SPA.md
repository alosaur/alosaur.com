---
sidebar_position: 3
---

# SPA (Single page application)

Single Page Application

В Alosaur вы можете воспользоваться специальным Middleware - SpaBuiler, чтобы позволить отдавать данные страниц как для одностраничного программного обеспечения.

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
