---
sidebar_position: 4
---

# CORS

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to allow the user agent to obtain permissions to access selected resources from a server on a source (domain) other than the one the site is currently using. The user agent is said to make a cross-origin HTTP request if the source of the current document differs from the requested resource by domain, protocol, or port.

In Alosaur, you can use a special Middleware, CorsBuilder, to allow you to give page data as for single-page software.

```jsx
import { HomeArea } from "./areas/home/home.area.ts";
import { App, CorsBuilder } from "alosaur/mod.ts";

const app = new App({
  areas: [HomeArea],
});

// Accept any headers
app.useCors(
  new CorsBuilder()
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader(),
);

// Specific config
// app.useCors(
//   new CorsBuilder()
//     .WithOrigins("origin")  // Access-Control-Allow-Origin
//     .WithMethods("GET")     // Access-Control-Allow-Methods
//     .WithHeaders("Header"), // Access-Control-Allow-Headers
// );

app.listen();
```

:::tip Example
https://github.com/alosaur/alosaur/tree/master/examples/cors
:::