---
sidebar_position: 7
---

# Custom decorators

You can add any decorator and put it in the DI system.

Example with hooks:

```jsx
import {
  BusinessType,
  container,
  Content,
  Context,
  getMetadataArgsStorage,
  HookTarget,
} from "https://deno.land/x/alosaur/mod.ts";

type AuthorizeRoleType = string | undefined;

/**
 * Authorize decorator with role
 */
export function CustomAuthorize(
    scheme: AuthenticationScheme,
    payload?: AuthPayload,
): Function {
    return function (object: any, context: { kind: "method" | "class"; name: string }) {
        const controllerId = getOrSetControllerId(context as ClassMethodDecoratorContext);

        // add hook to global metadata
        getMetadataArgsStorage().hooks.push({
            type: context.kind === "method" ? BusinessType.Action : BusinessType.Controller,
            object,
            target: object.constructor,
            method: context.name,
            instance: SLContainer.create(AutorizeHook),
            payload: { scheme, payload },
            controllerId,
        });
    };
}

export class AutorizeHook implements HookTarget<unknown, AuthorizeRoleType> {
  onPreAction(context: Context<unknown>, role: AuthorizeRoleType) {
    const queryParams = getQueryParams(context.request.url);

    if (queryParams == undefined || queryParams.get("role") !== role) {
      context.response.result = Content({ error: { token: false } }, 403);
      context.response.setImmediately();
    }
  }
}
```

Then you can add wherever you like. For example a controller method:

```jsx
// ..controller

  // action
  @CustomAuthorize("admin")
  @Get("/protected")
  getAdminPage() {
    return "Hi! this protected info";
  }
```
