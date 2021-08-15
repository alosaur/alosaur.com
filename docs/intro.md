---
sidebar_position: 1
---

# Intro

Alosaur is a framework for building scalable applications on Deno. Deno is primarily a modern host for running TypeScript/ JS code on a server machine and has its own advantages over others. [Deno](https://deno.land)

Alosaur gives you out of the box many entities for developing really big applications, but you can still develop really small applications on it.

If you take a look at the overall structure of creating an application on Alosaur and the constraints it imposes, you may have seen this before. Indeed many of the ideas were taken from .NET Core and Ktor, and the DI is taken entirely from microsoft/tsyringe https://github.com/microsoft/tsyringe

## Before installing

You must have **Deno** version above v1 [https://deno.land/](https://deno.land/)

## Getting start

Alosaur does not assume any installation, you can run applications as any other script.The only dependence is Deno himself.
In order to generate the starting project, you can use Alosaur CLI:

```shell
deno run --allow-read --allow-write --allow-net https://deno.land/x/alosaur/cli.ts new default myProject
```

Then you can run the project itself by going directly to the project folder:

```shell
deno run --allow-net --allow-read --importmap=imports.json --config ./tsconfig.json app.ts
```

Read more about Deno CLI on the page https://github.com/alosaur/cli
