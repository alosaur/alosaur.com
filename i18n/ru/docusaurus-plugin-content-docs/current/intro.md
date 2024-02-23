---
sidebar_position: 1
---

# Intro

Alosaur - это фреймворк чтобы строить масштабируемые приложения на Deno. Deno - в первую очередь это современный хост для выполнения TypeScript/ JS кода на серверной машине имеющий свои преимущества над другими. [Deno](https://deno.land)

Alosaur предоставляет из коробки множество сущностей для разработки действительно больших приложений, но тем не менее на нем можно разрабатывать действительно маленькие приложения.

Если вы взглянете на общую структуру создания приложения на Alosaur и какие ограничения он вводит, то возможно вы уже такое встречали. Действительно многие идеи были взяты из .NET Core и Ktor, а DI целиком взята из microsoft/tsyringe https://github.com/microsoft/tsyringe

## Перед установкой

У вас должен быть установлен **Deno** версии выше v1 [https://deno.land/](https://deno.land/)

## Начало работ

Alosaur не предполагает никакой установки, вы можете запустить приложения как любой другой скрипт. Единственной зависимостью является сам Deno.

Для того чтобы сгенерировать стартовый проект вы можете воспользоваться Alosaur CLI:

```shell
deno run --allow-read --allow-write --allow-net https://deno.land/x/alosaur/cli.ts new default myProject
```

Затем вы можете запустить сам проект зайдя непосредственно в папку проекта:

```shell
deno run --allow-net --allow-read --importmap=imports.json --config ./tsconfig.json app.ts
```

Подробнее про Deno CLI вы можете узнать на странице https://github.com/alosaur/cli


## Простой пример

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

And run

`deno run --allow-net app.ts`
