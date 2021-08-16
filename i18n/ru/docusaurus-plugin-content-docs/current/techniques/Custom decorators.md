---
sidebar_position: 7
---

# Custom decorators

Вы можете добавить любой декоратор и поместить его в систему DI.

Пример с hooks:

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
export function CustomAuthorize(role?: AuthorizeRoleType): Function {
  return function (object: any, methodName?: string) {
    // add hook to global metadata
    getMetadataArgsStorage().hooks.push({
      type: methodName ? BusinessType.Action : BusinessType.Controller,
      object,
      target: object.constructor,
      method: methodName,
      instance: container.resolve(AutorizeHook),
      payload: role,
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

Затем вы можете добавить где угодно. Например метод контроллера:

```jsx
// ..controller

  // action
  @CustomAuthorize("admin")
  @Get("/protected")
  getAdminPage() {
    return "Hi! this protected info";
  }
```