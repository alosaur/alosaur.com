"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[269],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2258:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:1},s="App",l={unversionedId:"basics/App",id:"basics/App",isDocsHomePage:!1,title:"App",description:"For create an application in Alosaur, you must use the class App.",source:"@site/docs/basics/App.md",sourceDirName:"basics",slug:"/basics/App",permalink:"/docs/basics/App",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/basics/App.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Area",permalink:"/docs/basics/Area"}},c=[{value:"AppSettings",id:"appsettings",children:[]},{value:"App.listen()",id:"applisten",children:[]},{value:"Global error handler",id:"global-error-handler",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app"},"App"),(0,o.kt)("p",null,"For create an application in Alosaur, you must use the class ",(0,o.kt)("strong",{parentName:"p"},"App"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// HomeArea\n\n// Create alosaur application\nconst app = new App({\n  areas: [HomeArea],\n});\n\n// Listen :8000 port by default\napp.listen();\n")),(0,o.kt)("p",null,"The application can be plisted with TState, TState need to typing the status of the context of the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// App<TState> \n// example uses in Controller action\n\n@Get()\ngetBody(@Context() context: HttpContext<TState>): TState {\n  return context.state;\n}\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can read more about ",(0,o.kt)("strong",{parentName:"p"},"Context")," in - ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/context"},"Context, Request, Response")))),(0,o.kt)("h3",{id:"appsettings"},"AppSettings"),(0,o.kt)("p",null,"The App constructor takes the AppSettings interface"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"areas")),(0,o.kt)("p",null,"Areas of controllers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"middlewares")),(0,o.kt)("p",null,"Middleware that registers in the entire application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"staticConfig")),(0,o.kt)("p",null,"Configure to output static files from a certain directory by a certain route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  root: `${Deno.cwd()}/examples/static/www`,\n  index: "index.html",\n  baseRoute: "/www/", // or undefined for default route /\n} \n\n// or use method\nconst app = new App();\n\napp.useStatic({\n...\n})\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"viewRenderConfig")),(0,o.kt)("p",null,"Configuration to use the default renderer in method outputs, via a function such as ",(0,o.kt)("inlineCode",{parentName:"p"},"return View('index')")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Create Handlebars config\nconst handle = new Handlebars({\n  baseDir: viewPath,\n  extname: ".hbs",\n  layoutsDir: "layouts/",\n  partialsDir: "partials/",\n  defaultLayout: "main",\n  helpers: undefined,\n  compilerOptions: undefined,\n});\n\napp.useViewRender({\n  type: "handlebars",\n  basePath: `${Deno.cwd()}/examples/handlebars/views`,\n  getBody: async (path: string, model: any, config: ViewRenderConfig) =>\n    await handle.renderView(path, model),\n});\n')),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Read more about the outputs of the controller methods in the section: ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/controllers"},"Controllers")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"logging")),(0,o.kt)("p",null,"Output to the console service information on the registration of controllers and routes to them"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"container")),(0,o.kt)("p",null,"Provides default base container implementation in the DI "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"providers")),(0,o.kt)("p",null,"Providers declared at the root level"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e ",(0,o.kt)("strong",{parentName:"p"},"providers")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435: ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/di"},"Dependency injection")))),(0,o.kt)("h3",{id:"applisten"},"App.listen()"),(0,o.kt)("p",null,"With this function you start the server to listen for http requests. By default, the server runs on port :8000."),(0,o.kt)("p",null,"You can also run the server by selecting the one you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'app.listen("http://localhost:8080") \n\n// or \napp.listen(":8080")\n\n// or with custom listener\n\napp.listen(null, Deno.listen({ port: 8080 }))\n')),(0,o.kt)("h3",{id:"global-error-handler"},"Global error handler"),(0,o.kt)("p",null,"Errors that haven't been caught elsewhere get in here"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const app = new App(\n  // app settings\n);\n\n// added global error handler\napp.error((context: Context<any>, error: Error) => {\n  context.response.result = Content(\n    "This page unprocessed error",\n    (error as HttpError).httpCode || 500,\n  );\n  context.response.setImmediately();\n});\n')))}d.isMDXComponent=!0}}]);