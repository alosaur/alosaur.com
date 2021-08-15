---
sidebar_position: 6
---

# Dependency injection

Dependency injection (DI) или внедрение зависимостей представляет механизм, который позволяет сделать взаимодействующие в приложении объекты слабосвязанными. Такие объекты связаны между собой через абстракции, например, через интерфейсы, что делает всю систему более гибкой, более адаптируемой и расширяемой.

Нередко для установки зависимостей в подобных системах используются специальные контейнеры - IoC-контейнеры (Inversion of Control). Такие контейнеры служат своего рода фабриками, которые устанавливают зависимости между абстракциями и конкретными объектами и, как правило, управляют созданием этих объектов.

Alosaur в данный момент имеет встроенный контейнер созданный с помощью `microsoft/TSyringe` . Провайдеры по умолчанию резолвятся в конструкторах контроллеров и хуков автоматически.

Подробные возможности реализации можете найти на странице **TSyringe for Alosaur** [https://github.com/alosaur/alosaur/tree/master/src/injection](https://github.com/alosaur/alosaur/tree/master/src/injection)

Простой пример использования:

```ts
**// Service**

export class FooService {
  getName(): string {
    return "My name is Foo";
  }
**}

// Instance of controller**

@Controller("/home")
export class HomeController {

  constructor(private service: FooService) {}

  @Get("/text")
  text(@QueryParam("name") name: string) {
    return `Hey! ${this.service.getName()}, ${name}`;
  }
}

****@Area({
  controllers: [HomeController],
})
export class HomeArea {
}

**// Create app**

const app = new App({
  areas: [HomeArea],
  logging: false,
});

app.listen();
```

## **Providers**

Вы можете регистрировать провайдеры на разных уровнях Injectable container: App, Area, Controller и использовать в Hook.

:::important
 Подробнее на странице: [https://github.com/alosaur/alosaur/tree/master/src/injection#providers](https://github.com/alosaur/alosaur/tree/master/src/injection#providers)
:::

**ProviderDeclaration**

```ts
// Rewrite injectable in App
const app = new App({
  providers: []
})

// Rewrite injectable in Area
@Area({
  providers: []
})

// Rewrite injectable in Controller
@Controller({
  providers: []
})
```

## Custom DI container

```ts
import { App, InternalDependencyContainer } from "alosaur/mod.ts";
import { FooService } from "./services/foo.service.ts";

const container = new InternalDependencyContainer();

const service = new FooService();
service.setName("Bar");

container.registerInstance("FooService", service);

const app = new App({
  areas: [HomeArea],
  container,
});

app.listen();
```