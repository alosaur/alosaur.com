---
sidebar_position: 10
---

# Standart Hooks

Alosaur поддерживает несколько стандартных хуков, некоторые из них представлены ниже:

## Response cache Hook

Этот хук используется для сохранения ответа в первый раз и немедленной отдаче его в следующих запросах.

Для того чтобы использовать этот хук необходимо запровайдить CasheStore:

```jsx
const app = new App({
  areas: [CoreArea],
  providers: [{
    token: ResponseCacheStoreToken,
    useClass: MemoryResponseCacheStore, // by default implemented in Alosaur
  }],
});
```

И далее использовать декоратор `@ResponseCache` в controller action:

```jsx
@Get()
  @ResponseCache({ duration: 2000 })
  async text() {
    // long task
    await delay(200);
    return "Hello world";
  }
```

@ResponseCache принимает интерфейс ResponseCachePayload который включает параметры:

- duration: number; - Врямя сохранения результата запроса в ms.
- getHash?: (context: Context) => string; - Функция для получения хэша запроса из контекста, по умолчанию это serverRequest.url