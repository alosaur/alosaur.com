"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[615],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(v,i(i({ref:n},l),{},{components:t})):r.createElement(v,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4476:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:6},c="Dependency injection",p={unversionedId:"basics/DI",id:"basics/DI",isDocsHomePage:!1,title:"Dependency injection",description:"Dependency injection (DI) \u0438\u043b\u0438 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u043b\u0430\u0431\u043e\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c\u0438. \u0422\u0430\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0447\u0435\u0440\u0435\u0437 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u0439, \u0431\u043e\u043b\u0435\u0435 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0439.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/basics/DI.md",sourceDirName:"basics",slug:"/basics/DI",permalink:"/ru/docs/basics/DI",editUrl:"https://github.com/alosaur/docs/edit/master/docs/basics/DI.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/ru/docs/basics/Middleware"},next:{title:"Hooks",permalink:"/ru/docs/basics/Hooks"}},l=[{value:"<strong>Providers</strong>",id:"providers",children:[]},{value:"Custom DI container",id:"custom-di-container",children:[]}],u={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependency-injection"},"Dependency injection"),(0,a.kt)("p",null,"Dependency injection (DI) \u0438\u043b\u0438 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u043b\u0430\u0431\u043e\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c\u0438. \u0422\u0430\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0447\u0435\u0440\u0435\u0437 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u0439, \u0431\u043e\u043b\u0435\u0435 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0439."),(0,a.kt)("p",null,"\u041d\u0435\u0440\u0435\u0434\u043a\u043e \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b - IoC-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b (Inversion of Control). \u0422\u0430\u043a\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0441\u043b\u0443\u0436\u0430\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u043e\u0434\u0430 \u0444\u0430\u0431\u0440\u0438\u043a\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u0435\u0436\u0434\u0443 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u044f\u043c\u0438 \u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u0438, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043c \u044d\u0442\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."),(0,a.kt)("p",null,"Alosaur \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"microsoft/TSyringe")," . \u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0440\u0435\u0437\u043e\u043b\u0432\u044f\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0430\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 \u0438 \u0445\u0443\u043a\u043e\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),(0,a.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",(0,a.kt)("strong",{parentName:"p"},"TSyringe for Alosaur")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/src/injection"},"https://github.com/alosaur/alosaur/tree/master/src/injection")),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'**// Service**\n\nexport class FooService {\n  getName(): string {\n    return "My name is Foo";\n  }\n**}\n\n// Instance of controller**\n\n@Controller("/home")\nexport class HomeController {\n\n  constructor(private service: FooService) {}\n\n  @Get("/text")\n  text(@QueryParam("name") name: string) {\n    return `Hey! ${this.service.getName()}, ${name}`;\n  }\n}\n\n****@Area({\n  controllers: [HomeController],\n})\nexport class HomeArea {\n}\n\n**// Create app**\n\nconst app = new App({\n  areas: [HomeArea],\n  logging: false,\n});\n\napp.listen();\n')),(0,a.kt)("h2",{id:"providers"},(0,a.kt)("strong",{parentName:"h2"},"Providers")),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u044f\u0445 Injectable container: App, Area, Controller \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 Hook."),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/src/injection#providers"},"https://github.com/alosaur/alosaur/tree/master/src/injection#providers")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ProviderDeclaration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Rewrite injectable in App\nconst app = new App({\n  providers: []\n})\n\n// Rewrite injectable in Area\n@Area({\n  providers: []\n})\n\n// Rewrite injectable in Controller\n@Controller({\n  providers: []\n})\n")),(0,a.kt)("h2",{id:"custom-di-container"},"Custom DI container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { App, InternalDependencyContainer } from "alosaur/mod.ts";\nimport { FooService } from "./services/foo.service.ts";\n\nconst container = new InternalDependencyContainer();\n\nconst service = new FooService();\nservice.setName("Bar");\n\ncontainer.registerInstance("FooService", service);\n\nconst app = new App({\n  areas: [HomeArea],\n  container,\n});\n\napp.listen();\n')))}m.isMDXComponent=!0}}]);