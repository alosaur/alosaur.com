---
sidebar_position: 5
---

# Microservice

Микросервисы в Alosaur реализованы как сервер но для связи между клиентами в отличии от основного используют другой транспорт, не HTTP. 

Микросервисы поддерживают такую же структуру как и обычый http сервер, за исключением методов контроллера.

### Server

Для создания обычного микросервиса необходимо создать это приложение и приступить к прослушке событий.

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

**@MPattern -** это декоратор метода который может принимать Object

**@MEvent -** это декоратор метода который может принимать string

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

Для примера мы будем использовать обычное приложение Alosaur, и в качестве примера создадим клиент по умолчанию.

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

Использование клиента внутри приложения:

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

Полный пример приложения: [https://github.com/alosaur/alosaur/tree/master/examples/microservice](https://github.com/alosaur/alosaur/tree/master/examples/microservice)
