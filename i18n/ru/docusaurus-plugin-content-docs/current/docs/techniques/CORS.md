---
sidebar_position: 4
---

# CORS

Cross-Origin Resource Sharing (CORS) — механизм, использующий дополнительные HTTP-заголовки, чтобы дать возможность агенту пользователя получать разрешения на доступ к выбранным ресурсам с сервера на источнике (домене), отличном от того, что сайт использует в данный момент. Говорят, что агент пользователя делает запрос с другого источника (cross-origin HTTP request), если источник текущего документа отличается от запрашиваемого ресурса доменом, протоколом или портом.

В Alosaur вы можете воспользоваться специальным Middleware - CorsBuilder, чтобы позволить отдавать данные страниц как для одностраничного программного обеспечения.

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