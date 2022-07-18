---
sidebar_position: 10
---

# Standard Hooks

Alosaur supports several standard hooks, some of which are shown below:

## Response cache Hook

This hook is used to save the response for the first time and give it away immediately in subsequent requests.

In order to use this hook it is necessary to request CasheStore:

```jsx
const app = new App({
  areas: [CoreArea],
  providers: [{
    token: ResponseCacheStoreToken,
    useClass: MemoryResponseCacheStore, // by default implemented in Alosaur
  }],
});
```

And then use the `@ResponseCache` decorator on the controller action:

```jsx
@Get()
  @ResponseCache({ duration: 2000 })
  async text() {
    // long task
    await delay(200);
    return "Hello world";
  }
```

@ResponseCache takes ResponseCachePayload interface which includes parameters:

- duration: number; - The time to save the query result in ms.
- getHash?: (context: Context) => string; - Function to get request hash from context, by default it is serverRequest.url
