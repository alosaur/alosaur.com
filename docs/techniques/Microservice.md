---
sidebar_position: 5
---

# Microservice

Microservices in Alosaur are implemented as a server, but use a different transport, not HTTP, to communicate between clients. 

Microservices maintain the same structure as a regular http server, except for the controller methods.

### Server

To create a normal microservice, you need to create this application and start listening to events.

```jsx
import { Microservice, MicroserviceType } from "alosaur/microservice/mod.ts";
import { HomeArea } from "./home.area.ts";

const server = new Microservice({
  areas: [HomeArea],
  type: MicroserviceType.TCP,
  config: {
    hostname: "localhost",
    port: 4500,
  },
});

await server.listen();
```

### Controller actions

**@MPattern -** is a method decorator that can accept Object

**@MEvent -** is a method decorator that can take string

```jsx
import { Area, Body, Controller } from "alosaur/mod.ts";
import { MEvent, MPattern } from "alosaur/microservice/mod.ts";

@Controller()
export class HomeController {
  @MPattern({ cmd: "sum" })
  @ActionParam(0, Body())
  async sum(body: number[]) {
    return Array.isArray(body) ? body.reduce((acc, cur) => acc + cur, 0) : 0;
  }

  @MEvent("calculated")
  @ActionParam(0, Body())
  async event(body: string) {
    return body;
  }
}

@Area({
  controllers: [HomeController],
})
export class HomeArea {}
```

### Client

We will use the usual Alosaur application as an example and create a default client.

```jsx
import { App } from "alosaur/mod.ts";
import { CoreArea } from "./areas/core.area.ts";
import { MsTcpClient } from "alosaur/microservice/mod.ts";

const app = new App({
  areas: [CoreArea],
  providers: [
    {
      token: "TCP_CLIENT",
      useFactory: () => new MsTcpClient({ hostname: "localhost", port: 4500 }),
    },
  ],
  logging: false,
});

app.listen();
```

Using the client inside the application:

```jsx
import { Area, Controller, Get, Inject } from "alosaur/mod.ts";
import { MsTcpClient } from "alosaur/microservice/mod.ts";

@Controller()
export class CoreController {
  constructor(@Inject("TCP_CLIENT") private client: MsTcpClient) {
  }

  @Get()
  async text() {
    const answer = await this.client.send({ cmd: "sum" }, [1, 2, 3, 4]);
    return "Hello world, " + answer;
  }
}

@Area({
  controllers: [CoreController],
})
export class CoreArea {}
```

Full application example: [https://github.com/alosaur/alosaur/tree/master/examples/microservice](https://github.com/alosaur/alosaur/tree/master/examples/microservice)
