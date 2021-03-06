---
sidebar_position: 7
---

# Hooks

Hooks - as well as Middleware is a function which is called before and after action is performed by controller. Hook is specified without a root and can be registered in Area, Controller, Action having access to their providers.

Hooks interface looks like this:

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

Hooks can be registered at different levels: 

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
You can see examples of hooks on this page [https://github.com/alosaur/alosaur/tree/master/examples/hooks](https://github.com/alosaur/alosaur/tree/master/examples/hooks)
:::