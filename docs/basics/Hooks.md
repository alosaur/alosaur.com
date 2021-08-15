---
sidebar_position: 7
---

# Hooks

<!-- [Standart Hooks](Hooks/Standart%20Hooks.md) -->

Hooks - так же как и Middleware это функция которая вызывается до и после выполнения action у controller. Hook указывается без роута и может быть зарегистрирована в Area, Controller, Action имея доступ к их провайдерам.

Интерфейс хуков имеет следующий вид:

```ts
export class MyHook implements HookTarget<State, PayloadType> {

/**
  *  this hook run before controller action
  */
  onPreAction(context: Context<State>, payload: PayloadType) {
    // you can rewrite result and set request immediately
    context.response.result = Content({ error: { token: false } }, 403);
    context.response.setImmediately();
    // if response setted immediately no further action will be taken
  } // this hook run after controller action

/**
  * this hook run after successful run action
  */
  onPostAction(context: Context<State>, payload: PayloadType) {
    // you can filtered response result here
  } 

/**
  * this hook run only throw exception in controller action
  */
  onCatchAction(context: Context<State>, payload: PayloadType) {
  }
}
```

Регистрировать хуки можно на разных уровнях: 

```ts
// for all actions in controller
@UseHook(MyContollerHook) // or @UseHook(MyContollerHook, 'payload')
@Controller()
export class HomeController {

  @UseHook(MyHook, "payload") // only for one action
  @Get("/")
  text(@Res() res: any) {
    return ``;
  }
}

@UseHook(MyAreaHook)
@Area()
export class MyArea {
}
```

:::tip example
Примеры хуков вы сможете увидеть на этой странице [https://github.com/alosaur/alosaur/tree/master/examples/hooks](https://github.com/alosaur/alosaur/tree/master/examples/hooks)
:::