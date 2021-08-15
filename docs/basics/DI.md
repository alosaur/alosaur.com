---
sidebar_position: 6
---

# Dependency injection

Dependency injection (DI), or dependency injection, is a mechanism for making objects that interact in an application loosely coupled. Such objects are linked through abstractions, such as interfaces, which makes the whole system more flexible, more adaptable, and more extensible.

Often special containers - IoC-containers (Inversion of Control) - are used to set dependencies in such systems. Such containers serve as a kind of factories that establish dependencies between abstractions and concrete objects, and usually manage the creation of these objects.

Alosaur currently has an embedded container created with `microsoft/TSyringe` . The default providers are automatically resolved in the controller and hook constructors.

For more details on this implementation, see **TSyringe for Alosaur** [https://github.com/alosaur/alosaur/tree/master/src/injection] (https://github.com/alosaur/alosaur/tree/master/src/injection).

A simple example of use:

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

You can register providers at different levels of Injectable container: App, Area, Controller and use in Hook.

:::important
 Read more on the page: [https://github.com/alosaur/alosaur/tree/master/src/injection#providers](https://github.com/alosaur/alosaur/tree/master/src/injection#providers)
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