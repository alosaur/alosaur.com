---
sidebar_position: 3
---


# Controllers

Контроллеры отвечают за обработку входящих запросов и возврат ответов клиенту.

Цель контроллера - получать конкретные запросы для приложения. Механизм маршрутизации контролирует, какой контроллер получает какие запросы. Часто у каждого контроллера есть более одного маршрута, и разные маршруты могут выполнять разные действия. Для создания базового контроллера мы используем классы и декораторы.

Для создания контроллера вы можете воспользоваться CLI:
```shell
deno run --allow-read --allow-write --allow-net https://deno.land/x/alosaur/cli.ts g controller 
MyController 
```

### Маршрутизация

Маршутизация в Alosaur регистрируется на моменте создания приложения. Для того чтобы определить маршруты в приложении обычно закладываются внутрь декораторов Controller, Get и других:

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

В данном приложении вызов запроса GET [localhost:8000](http://localhost:3000/) (8000 - стандартный порт Alosaur)

## **Controller Actions**

Маршрутизация приложения строится на основе этих методов помеченными декораторами маршрута:

**Get** 

**Post**

**Put**

**Patch**

**Delete**

Маршрут может принимать на вход string либо оставаться пустым, тогда этот метод будет отдавать значение по умолчанию у контроллера. 

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

Каждый маршрут может принимать различные параметры и их так же можно пометить декораторами.

Например:

```tsx
@Post("/")
Create(@Body() product: Product) {
  // @Body - action parameter 
}
```

**@Cookie**

Внедряет Cookie в запрос параметра, полученный из getCookies [https://deno.land/std@0.103.0/http](https://deno.land/std@0.103.0/http) 

**@Ctx**

Внедряет в параметр объекта контекста (HttpContext, AuthContext)

Может содержать в себе request, response, state и многое другое что относится непосредственно к текущему запросу

> подробнее про него можете прочитать на странице Context

**@Req**

Внедряет в параметр объект Request

**@Res**

Внедряет в параметр объект Response

**@Param**

Вытаскивает из url параметр по ключу и внедряет его в параметр метода 

```tsx
// Example request
// /controller/123

@Get("/:id")
GetById(@Param("id") id: number) {
   // id = 123
}

```

**@QueryParam**

Вытаскивает из url query параметр по ключу и внедряет его в параметр метода 

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

Вытаскивает из url query параметр и внедряет его в параметр метода 

```tsx
Request to "/test?name=john&city=London"

@Get("/test")
  query(@QueryParams() query: any) {
  // query.name = john 
  // query.city = London

}
```

**@Body**

Вытаскивает из запроса его тело и внедряет в параметр метода

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
Create(@Body() product: Product) {
  
}
```

Body может принимать в себя различные трансформеры, для того чтобы это настроить можно включить дефолтный сериализатор.

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

Это хорошо можно совместить с различными валидаторами, например такими как class-validator:

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
  async post(@Body(PostModel) data: PostModel) {
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

Вы также можете вставить кастомный парсер напрямую в Body:

```ts
function parser(body): ParsedObject {
    // your code
    return body;
}

...
@Post('/')
post(@Body(parser) data: ParsedObject) {

}
```

### Multipart form-data, upload files

Декоратор Body так же позволяет извлекать из запроса файлы.

```ts
import { FormFile } from "https://deno.land/std@0.102.0/mime/multipart.ts";
import { move } from "https://deno.land/std@0.102.0/fs/move.ts";

...

@Post()
async formData(@Body() body: { [key: string]: FormFile | string }) {
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

Так же вы можете добавить опции для парсинга файлов

`@Body(NoopTransform, CustomBodyParser)`

```ts
const CustomBodyParser: RequestBodyParseOptions = {
  formData: {
    maxMemory: 100, // in mb by default 10mb for default parser
    parser: func, // function of custom parser; (request: ServerRequest, contentType: string) => Promise<any>;
  },
};
```

## Action outputs: Content, View, Redirect

Есть несколько различных вариантов для того чтобы вернуть результат запроса:

- **Content -** похож на `return {};` по умолчанию вернет Status 200 OK
- **View** - используется совместно с Template Engine установленным по умолчанию, подробнее про template вы можете прочитать в разделе Render pages.
- **Redirect** и **RedirectPermanent** возвращает  status `301`, `302` используя return `Redirect('/to/page')`
- **Response** - Объкет типа [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

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