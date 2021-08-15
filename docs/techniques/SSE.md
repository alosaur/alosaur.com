---
sidebar_position: 2
---

# SSE (Server Sent Events)

:::danger
В данный момент не работает с Deno native http
:::

SSE представляет собой технологию отправки уведомлений от сервера к веб-браузеру в виде DOM-событий.

SSE в Alosaur организуется как обычный Middleware.

Используйте `context.response.setNotRespond()` для прерывания запроса в Middleware

:::important
Более подробно про `context.response.setNotRespond()` вы можете прочитать в разделе [Middleware](/docs/basics/Middleware).
:::

```jsx
import {
  acceptSSE,
  HttpContext,
  PreRequestMiddleware,
} from "https://deno.land/x/alosaur/mod.ts";

export class SseMiddleware implements PreRequestMiddleware {
  async onPreRequest(context: HttpContext) {
    acceptSSE(context).then(ChatHandler) // execute chat
      .catch(async (e) => {
        console.error(`failed to accept sse: ${e}`);
        await context.request.serverRequest.respond({ status: 400 });
      });

    context.response.setNotRespond();
  }
}
```

:::tip Example
[https://github.com/alosaur/alosaur/tree/master/examples/sse](https://github.com/alosaur/alosaur/tree/master/examples/sse)
:::