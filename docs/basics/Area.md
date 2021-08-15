---
sidebar_position: 2
---

# Area

This is the application area that registers controllers and defines route behavior for the controllers in it.

An Area is not a module in the classic sense; it cannot be embedded in other Areas.

The Area decorator takes on the following object: 

`baseRoute?: string` - the route to be defined for this area

`providers?: ProviderDeclaration[];` - DI providers available at scope level.

`controllers` - Area controllers

```ts
@Area({
    controllers: [MyController],
})
export class MyArea
```