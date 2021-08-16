---
sidebar_position: 1
---

# WebSocket

WebSocket — протокол связи поверх TCP-соединения, предназначенный для обмена сообщениями между браузером и веб-сервером в режиме реального времени.

Websocket в Alosaur организуется как обычный Middleware.

:::important
Более подробно про `context.response.setNotRespond()` вы можете прочитать в разделе [Middleware](/docs/basics/Middleware).
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