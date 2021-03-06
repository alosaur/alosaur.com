---
sidebar_position: 2
---

# SSE (Server Sent Events)

:::danger
Currently not working with Deno native http
:::

SSE is a technology for sending notifications from the server to the web browser as DOM events.

SSE in Alosaur is organized like normal Middleware.

Use `context.response.setNotRespond()` to interrupt the request in Middleware

:::important
You can read more about `context.response.setNotRespond()` in [Middleware](/docs/basics/Middleware).
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