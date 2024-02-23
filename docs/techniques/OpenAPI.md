---
sidebar_position: 8
---

# OpenAPI

OpenAPI is a formalized specification and a complete framework for describing, creating, using, and visualizing REST Web services. The goal is to allow client systems and documentation to synchronize their updates with changes on the server. This is achieved by integrating methods, parameters, models, and other elements through OpenAPI with the server software and keeping them in sync all the time

:::tip example
[Simple example](https://github.com/alosaur/alosaur/tree/master/examples/basic)

[Example with parse type reference](https://github.com/alosaur/alosaur/tree/master/openapi/e2e/)
:::

In order to generate an OpenApi file, you need to prepare the application settings for it, for example:

```jsx
export const settings: AppSettings = {
  areas: [HomeArea, InfoArea, HealthArea, RootArea],
  middlewares: [Log],
  logging: false,
};
```

Then make basic OpenApi settings with AlosaurOpenApiBuilder:

openapi.ts

```jsx
AlosaurOpenApiBuilder.create(settings)
  .registerControllers()
  .addTitle("Basic Application")
  .addVersion("1.0.0")
  .addDescription("Example Alosaur OpenApi generate")
  .addServer({
    url: "http://localhost:8000",
    description: "Local server",
  })
  .saveToFile("./examples/basic/api.json");
```

Then run the command to generate the api.json file

```jsx
deno run -A --config ./src/tsconfig.lib.json examples/basic/openapi.ts
```

### Type reference

For support type references you can use JSDoc with Deno doc parse like this:

```jsx
// Parse controllers. Input path to your application
const docs = await AlosaurOpenApiBuilder.parseDenoDoc("./openapi/e2e/app.ts");

// create builder and add docs, then register controllers and add scheme components
const builder = AlosaurOpenApiBuilder.create(settings)
      .addDenoDocs(docs)
      .registerControllers()
      .addSchemeComponents()
```

How to teaching how to correctly assemble controllers?

Example:

```jsx
/**
 * Product controller
 * @decorator Controller
 */
@Controller()
export class ProductController {
  /**
   * Gets product by id
   * @summary action test
   * @remarks Awesomeness!
   * @param {id} The product id
   * @decorator Get
   */
  @Get("/:id")
  GetById(@Param("id") id: string) {
    return new Product();
  }
}
```

You can also add what media types can be expected in the body. Use RequestBody param in JsDoc

```jsx
/**
   * Create product
   * @param product
   * @RequestBody application/xml
   * @RequestBody application/json
   */
  @Post("/")
  @ActionParam(0, Body())
  Create(product: Product) {
  }
```

You can also add what types can be returned from a controller method. Use decorator ProducesResponse

```jsx
/**
 * Gets product by id
 * @summary action test
 * @remarks Awesomeness!
 * @param {id} The product id
 */
@Get("/:id")
@ProducesResponse({ code: 200, type: Product, description: "Product found" })
@ProducesResponse({ code: 404, type: NotFoundResult, description: "Product has missing/invalid values" })
@ProducesResponse({ code: 500, description: "Oops! Can't create your product right now" })
@ActionParam(0, Param("id"))
GetById(id: string) {
  return new Product();
}
```

To declare more information in types and models you can add other JsDoc parameters

```jsx
/**
 * Entity of product
 */
export class Product {
  /**
   * @summary Identifer of code
   * @example 1
   */
  id?: number;

  /**
   * @summary Array of test case
   * @example [1,2,3]
   */
  arr?: number[];

  /**
   * @summary Type of product
   * @example {id:1}
   */
  type?: ProductType;

  /**
   * @maximum 100
   */
  count?: number;
}
```

Alosaur openapi parser currently supports the following types and expressions:

```jsx
interface PropertyJsDocObject {
  title?: string;
  pattern?: string;
  multipleOf?: number;
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: boolean;
}
```

Keywords:

```jsx
export interface JsDocObject {
  example?: string;
  decorator?: string;
  default?: string;
  description?: string;
  deprecated?: boolean;
  required?: boolean;
  remarks?: string;
  summary?: string;
  format?: string;
  params?: string[];

  /**
   * Request body media type uses in controllers
   * application/json, application/xml, text/plain, etc
   * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#requestBodyObject
   */
  RequestBody?: string[];
}
```

Ts types, `Object Date Symbol Map JSON RegExp String ArrayBuffer DataView Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array`
