---
sidebar_position: 3
---


# Controllers

Controllers are responsible for processing incoming requests and returning responses to the client.

The purpose of a controller is to receive specific requests for an application. The routing mechanism controls which controller receives which requests. Often each controller has more than one route, and different routes can perform different actions. We use classes and decorators to create the underlying controller.

You can use the CLI to create a controller:
```shell
deno run --allow-read --allow-write --allow-net https://deno.land/x/alosaur/cli.ts g controller 
MyController 
```

### Routing

The routing in Alosaur is registered at the moment when the application is created. In order to define routes in an application, they are usually laid inside the Controller, Get and other decorators:

```tsx
import { App, Area, Controller, Get } from "https://deno.land/x/alosaur/mod.ts";

@Controller() // or specific path @Controller("/home")
export class HomeController {
  @Get() // or specific path @Get("/hello")
  text() {
    return "Hello world";
  }
}

// Declare module
@Area({
  controllers: [HomeController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen();
```

In this application, call the GET [localhost:8000](http://localhost:3000/) request (8000 is the standard Alosaur port)

## **Controller Actions**

Application routing is based on these methods by labeled route decorators:

**Get** 

**Post**

**Put**

**Patch**

**Delete**

A route can either take a string as input or remain empty, in which case it will give the default value to the controller. 

```tsx
@Get()
defaultReturnTextAction() {
		return "Hello world!";
}

@Get("/hi")
sayHiTextAction() {
		return "Hi!";
}
```

### Action Parameters

Each route can take different parameters and they can also be marked with decorators.

Example:

```tsx
@Post("/")
@ActionParam(0, Body())
Create(product: Product) {
  // @Body - action parameter 
}
```

**@Cookie**

Implements a Cookie in the parameter request received from getCookies [https://deno.land/std@0.103.0/http](https://deno.land/std@0.103.0/http) 

**@Ctx**

Introduces context object parameter (HttpContext, AuthContext)

Can contain `request`, `response`, `state` and many other things that are directly related to the current request

**@Req**

Implements a `AlosaurRequest` object in the parameter

**@Res**

Implements a `AlosaurResponse` object in the parameter

**@Param**

Pulls the key parameter from the url and embeds it in the method parameter 

```tsx
// Example request
// /controller/123

@Get("/:id")
GetById(@Param("id") id: number) {
   // id = 123
}

```

**@QueryParam**

Pulls the key parameter from the url query and embeds it in the method parameter 

```tsx
Request to "/test?name=john&city=London"

@Get("/test")
  query(
    @QueryParam("name") name: string,
    @QueryParam("city") city: string) {
  // name = john 
  // city = London

}
```

**@QueryParams**

Pulls a parameter from the url query and embeds it in the method parameter

```tsx
Request to "/test?name=john&city=London"

@Get("/test")
  query(@QueryParams() query: any) {
  // query.name = john 
  // query.city = London

}
```

**@Body**

Pulls its body from the request and implements it in the method parameter

```tsx
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"type":"tea","name":"Ceilon"}' \
  http://localhost:8000/api/product

interface Product {
	type: string;
  name: string;
}

@Post("/")
@ActionParam(0, Body())
Create(product: Product) {
  
}
```

Body can take in various transformers, you can turn on the default serializer to configure this.

```tsx
const { plainToClass } = "[https://jspm.dev/class-transformer@0.2.3](https://jspm.dev/class-transformer@0.2.3)";

// add transform function
app.useTransform({
  type: "body", // parse body params
  getTransform: (transform: any, body: any) => {
    return plainToClass(transform, body);
  },
});
```

This can be well combined with various validators, such as class-validator:

post.model.ts

```ts
import validator from "https://jspm.dev/class-validator@0.8.5";

const { Length, Contains, IsInt, Min, Max, IsEmail, IsFQDN, IsDate } =
  validator;

export class PostModel {
  @Length(10, 20)
  title?: string;

  @Contains("hello")
  text?: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating?: number;

  @IsEmail()
  email?: string;
}
```

app.ts

```ts
import validator from "https://jspm.dev/class-validator@0.8.5";
import transformer from "https://jspm.dev/class-transformer@0.2.3";
import {
  App,
  Area,
  Body,
  Controller,
  Post,
} from "https://deno.land/x/alosaur/mod.ts";
import { PostModel } from "./post.model.ts";

const { validate } = validator;
const { plainToClass } = transformer;

// Create controller
@Controller()
export class HomeController {
  @Post("/")
  @ActionParam(0, Body(PostModel))
  async post(data: PostModel) {
    return {
      data,
      errors: await validate(data),
    };
  }
}

// Declare controller in area
@Area({
  controllers: [HomeController],
})
export class HomeArea {}

// Create app
const app = new App({
  areas: [HomeArea],
});

// add transform function
app.useTransform({
  type: "body", // parse body params
  getTransform: (transform: any, body: any) => {
    return plainToClass(transform, body);
  },
});

// serve application
app.listen();
```

You can also insert the custom parser directly into the Body:

```ts
function parser(body): ParsedObject {
    // your code
    return body;
}

...
@Post('/')
@ActionParam(0, Body(parser))
post(data: ParsedObject) {

}
```

### Multipart form-data, upload files

The Body Decorator also allows you to extract files from a request.

```ts
import { FormFile } from "https://deno.land/std@0.102.0/mime/multipart.ts";
import { move } from "https://deno.land/std@0.102.0/fs/move.ts";

...

@Post()
@ActionParam(0, Body())
async formData(body: { [key: string]: FormFile | string }) {
  const file: FormFile = body.file as FormFile;

  if (file) {
    const fileDest = "./examples/form-data/files/" + file.filename;

    // write file if file has content in memory
    if (file.content) {
      await Deno.writeFile(fileDest, file.content!, { append: true });
    } else if (file.tempfile) {
      // move file if file has tempfile
      move(file.tempfile, fileDest);
    }

    return "Uploaded";
  }

  return "File not exist";
}
```

You can also add options for parsing files

`Body(NoopTransform, CustomBodyParser)`

```ts
const CustomBodyParser: RequestBodyParseOptions = {
  formData: {
    maxMemory: 100, // in mb by default 10mb for default parser
    parser: func, // function of custom parser; (request: ServerRequest, contentType: string) => Promise<any>;
  },
};
```

## Action outputs: Content, View, Redirect

There are several different options for returning the query result:

- **Content -** similar to `return {};` returns Status 200 OK by default
- **View** - used in conjunction with the Template Engine, you can read more about the template in the Render pages section.
- **Redirect** and **RedirectPermanent** returns status `301`, `302` using return `Redirect('/to/page')`
- **Response** - Object of type [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

```ts
return {}; // return 200 status

// return 404 status
return Content("Text", 404);

// return 404 status
return Content({ "Object": true }, 404); 

// return 404 status
return View("page", 404);

// return 404 status with headers
return new Response("not found", {
  status: 404,
  headers: new Headers([["x-alosaur-header","not found"]]);
})
```
