---
sidebar_position: 1
---

# Intro

Alosaur is a framework for building scalable applications on Deno. [Deno](https://deno.land) is primarily a modern host for running TypeScript/JavaScript code on a server machine and has its own advantages over others.

Alosaur gives you out of the box many entities for developing really big applications, but you can still develop really small applications on it.

If you take a look at the overall structure of creating an application on Alosaur and the constraints it imposes, you may have seen this before. Indeed many of the ideas were taken from .NET Core and Ktor.

## Before installing

You must have **Deno** version above v1 [https://deno.land/](https://deno.land/)

## Getting start

Alosaur does not assume any installation, you can run applications as any other script. The only dependence is Deno himself.

In order to generate the starting project, you can use Alosaur CLI:

```shell
deno run --allow-read --allow-write --allow-net https://deno.land/x/alosaur/cli.ts new default myProject
```

Then you can run the project itself by going directly to the project folder:

```shell
deno run --allow-net --allow-read --importmap=imports.json --config ./tsconfig.json app.ts
```

Read more about [Deno CLI](https://github.com/alosaur/cli).

## Simple example

```ts
import {
  App,
  Area,
  Controller,
  Get,
} from "https://deno.land/x/alosaur@v1.1.0/mod.ts";

@Controller() // or specific path @Controller("/home")
export class HomeController {
  @Get() // or specific path @Get("/hello")
  text() {
    return "Hello world";
  }
}

// Declare module
@Area({
  controllers: [HomeController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen();
```

And run `deno run --allow-net app.ts`.
