---
sidebar_position: 1
---

# WebSocket

WebSocket is a communication protocol over a TCP connection for real-time messaging between a browser and a web server.

Websocket in Alosaur is organized like normal Middleware.

:::important
You can read more about `context.response.setNotRespond()` in [Middleware](/docs/basics/Middleware).
:::

```ts
import { HttpContext, PreRequestMiddleware } from "alosaur/mod.ts";
import { ChatHandler } from "./chat.handler.ts";

export class WebsocketMiddleware implements PreRequestMiddleware {
  async onPreRequest(context: HttpContext) {
    const { request, respondWith } = context.request.serverRequest;

    if (request.headers.get("upgrade") != "websocket") {
      return respondWith(
        new Response("not trying to upgrade as websocket.", { status: 400 }),
      );
    }

    const { socket, response } = Deno.upgradeWebSocket(request);

    ChatHandler(socket);
    respondWith(response);

    context.response.setNotRespond();
  }
}
```

:::tip Example

https://github.com/alosaur/alosaur/tree/master/examples/ws

:::