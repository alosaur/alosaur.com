"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[413],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:9},c="Security",u={unversionedId:"basics/Security",id:"basics/Security",isDocsHomePage:!1,title:"Security",description:"\u0412 Alosaur \u044d\u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043c\u043e\u0434\u0443\u043b\u0435\u0439. \u0422\u0430\u043a \u0436\u0435 \u0434\u043b\u044f \u0435\u0433\u043e \u043f\u043e\u0434\u043c\u0435\u043d\u044b \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043c\u0435\u043d\u0438\u0442\u044c HttpContext \u043d\u0430 SecurityContext. \u041d\u0438\u0436\u0435 \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 \u0432\u044b \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/basics/Security.md",sourceDirName:"basics",slug:"/basics/Security",permalink:"/ru/docs/basics/Security",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/basics/Security.md",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Render pages",permalink:"/ru/docs/basics/Render pages"},next:{title:"Standart Hooks",permalink:"/ru/docs/basics/Standart Hooks"}},l=[{value:"Session",id:"session",children:[]},{value:"Authorization &amp; Authentication",id:"authorization--authentication",children:[{value:"AuthMiddleware",id:"authmiddleware",children:[]},{value:"AuthenticationScheme",id:"authenticationscheme",children:[]}]},{value:"SecurityContext",id:"securitycontext",children:[]},{value:"Authorize Decorators",id:"authorize-decorators",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("p",null,"\u0412 Alosaur \u044d\u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043c\u043e\u0434\u0443\u043b\u0435\u0439. \u0422\u0430\u043a \u0436\u0435 \u0434\u043b\u044f \u0435\u0433\u043e \u043f\u043e\u0434\u043c\u0435\u043d\u044b \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043c\u0435\u043d\u0438\u0442\u044c HttpContext \u043d\u0430 SecurityContext. \u041d\u0438\u0436\u0435 \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 \u0432\u044b \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c."),(0,i.kt)("h2",{id:"session"},"Session"),(0,i.kt)("p",null,"\u0421\u0435\u0441\u0441\u0438\u0438 \u0432 Alosaur \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Cookies. \u0412\u043a\u043b\u044e\u0447\u0430\u044f \u044d\u0442\u043e\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Authorization. "),(0,i.kt)("p",null,"\u0421\u0435\u0441\u0441\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u0432 \u043a\u0443\u043a\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f c \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u043c sessionId \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0442\u0430\u043a \u0436\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0447\u0430\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'...\n\n// Create store for sessions\nconst store = new MemoryStore();\nawait store.init();\n\n// App settings\nnew App({\n    ...\n    providers: [{ // need for create security context\n        token: Context,\n        useClass: SecurityContext, \n    }],\n    ...\n});\n\n// Key for sign session id\napp.use(/\\//,  new SessionMiddleware(store, {secret: "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"}));\n\n// then you can use Context in action:\n// action\n@Get(\'counter\')\npublic action(@Ctx() context: SecurityContext) {\n    context.security.session.set("testValue", 1);\n    context.security.session.get("testValue", 1);\n    \n    const sid = context.security.session.sessionId;\n    \n    console.log(sid);\n    \n    // and use your store\n    await context.security.session.store.exist(sid);\n}\n')),(0,i.kt)("p",null,"SessionMiddleware \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 2 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: SessionStore \u0438 SessionOptions. Session store \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u043e sessionId \u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0439 \u0432 session \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Alosaur \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,i.kt)("strong",{parentName:"p"},"MemoryStore"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0432 \u043f\u0430\u043c\u044f\u0442\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u0422\u0430\u043a \u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 Store \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441: ",(0,i.kt)("strong",{parentName:"p"},"SessionStore"),". \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/src/security/session"},"https://github.com/alosaur/alosaur/tree/master/src/security/session")))),(0,i.kt)("p",null,"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 SessionOptions \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SessionOptions {\n  /** Security key for sign hash **/\n  secret: Uint8Array | bigint | number | string;\n  /** Key for save in cookie default 'sid' **/\n  name?: string;\n  /** Expiration date of the cookie. */\n  expires?: Date;\n  /** Max-Age of the session Cookie. Must be integer superior to 0. */\n  maxAge?: number;\n  /** Specifies those hosts to which the cookie will be sent. */\n  domain?: string;\n  /** Indicates a URL path that must exist in the request. */\n  path?: string;\n  /** Indicates if the cookie is made using SSL & HTTPS. */\n  secure?: boolean;\n  /** Indicates that cookie is not accessible via JavaScript. **/\n  httpOnly?: boolean;\n  /** Allows servers to assert that a cookie ought not to\n   * be sent along with cross-site requests. */\n  sameSite?: SameSite;\n}\n")),(0,i.kt)("h2",{id:"authorization--authentication"},"Authorization & Authentication"),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/examples/auth"},"https://github.com/alosaur/alosaur/tree/master/examples/auth")),(0,i.kt)("h3",{id:"authmiddleware"},"AuthMiddleware"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 AuthMiddleware \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0432 \u043d\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 AuthenticationScheme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const app = new App({\n  providers: [{ // need for create security context\n    token: Context,\n    useClass: SecurityContext,\n  }],\n});\n\n// create session store\nconst sessionStore = new MemoryStore();\nawait sessionStore.init();\n\n// create middleware with options\nconst sessionMiddleware = new SessionMiddleware(sessionStore, {\n  secret: 123456789n,\n  maxAge: DAYS_30,\n  path: "/",\n});\n\n// create auth middleware with schemes\nconst authMiddleware = new AuthMiddleware([\n  CookiesAuthentication.DefaultScheme,\n]);\n\napp.use(new RegExp("/"), sessionMiddleware);\napp.use(new RegExp("/"), authMiddleware);\n')),(0,i.kt)("h3",{id:"authenticationscheme"},"AuthenticationScheme"),(0,i.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f SecurityContext, Authentificate, verify, signin, signout."),(0,i.kt)("p",null,"\u0412 Alosaur \u0438\u043c\u0435\u044e\u0442\u0441\u044f 2 \u0442\u0438\u043f\u0430 \u0441\u0445\u0435\u043c: ",(0,i.kt)("inlineCode",{parentName:"p"},"CookiesAuthentication.DefaultScheme")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"JwtBearerScheme"),"."),(0,i.kt)("p",null,"\u0418\u043c\u0435\u044e\u0449\u0438\u0439 \u043e\u0431\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 AuthenticationScheme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AuthenticationScheme {\n  /**\n   * This function assign to context identity info, uses in Authorization middleware\n   */\n  authenticate(context: SecurityContext): Promise<void>;\n\n  /**\n   * Create sign identity and assign to context identity info\n   */\n  signInAsync<I, R = any>(\n    context: SecurityContext,\n    identity: Identity<I>,\n  ): Promise<R>;\n\n  /**\n   * Clear sign in info and destroy identity context\n   */\n  signOutAsync<T, R>(context: SecurityContext): Promise<R>;\n\n  /**\n   * Uses in Authorize decorators for handle if AuthPayload result failure\n   */\n  onFailureResult(context: SecurityContext): void;\n\n  /**\n   * Uses in Authorize decorators for handle if AuthPayload result success\n   */\n  onSuccessResult(context: SecurityContext): void;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CookiesScheme")),(0,i.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 Cookies \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0435\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export namespace CookiesAuthentication {\n  export const DefaultScheme = new CookiesScheme(\n    "/account/login",\n  );\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JwtBearerScheme")),(0,i.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 JSON Web Tokens \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u043d\u0435\u0433\u043e: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"https://en.wikipedia.org/wiki/JSON_Web_Token")),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0438 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c instance \u044d\u0442\u043e\u0439 \u0441\u0445\u0435\u043c\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export const JWTscheme = new JwtBearerScheme(\n  "HS512",\n  "secret_key",\n  30 * 24 * 60 * 60 * 1000,\n);\n//     private readonly algorithm: Algorithm,\n//     private readonly secret: string,\n//     private readonly expires: number = DAYS_30,\n\n// and use JWTscheme in other cases, when need scheme\n\nconst app = new App({\n  providers: [{ // need for create security context\n    token: Context,\n    useClass: SecurityContext,\n  }],\n});\n\n// create auth middlware with schemes\nconst authMiddleware = new AuthMiddleware([JWTscheme]);\n\napp.use(new RegExp("/"), authMiddleware);\n')),(0,i.kt)("h2",{id:"securitycontext"},"SecurityContext"),(0,i.kt)("p",null,"SecurityContext \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432\u0435\u0437\u0434\u0435 \u043a\u0430\u043a \u0438 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 HttpContext. \u0414\u043b\u044f \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new App({\n  providers: [{ // need for create security context\n    token: Context,\n    useClass: SecurityContext,\n  }],\n});\n")),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 SecurityContext \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller("/account")\nexport class AccountController {\n  name: string | undefined = undefined;\n\n  constructor(private service: AuthService) {}\n\n  @Get("/login")\n  getLogin(@Ctx() context: SecurityContext) {\n    if (context.security.auth.identity()) {\n      return Redirect("/home/protected");\n    }\n\n    return `<form method="post">\n                login: admin <br>\n                password: admin <br>\n              <input type="text" name="login" placeholder="login" value="admin"><br>\n              <input type="password" name="password" placeholder="password" value="admin"><br>\n              <input type="submit">\n            </form>`;\n  }\n\n  @Post("/login")\n  async postLogin(\n    @Ctx() context: SecurityContext,\n    @Body() account: LoginModel,\n  ) {\n    const user = this.service.validate(account.login, account.password);\n\n    if (user) {\n      await context.security.auth.signInAsync<UserModel>(scheme, user);\n      return Redirect("/home/protected");\n    }\n\n    return Redirect("/account/login");\n  }\n\n  @Get("/logout")\n  async logOut(@Ctx() context: SecurityContext) {\n    await context.security.auth.signOutAsync(scheme);\n    return Redirect("/account/login");\n  }\n}\n\n// validation user service\nexport class AuthService {\n  validate(login: string, password: string): UserModel | undefined {\n    if (login === "admin" && password === "admin") {\n      return { id: "1", login: "admin" };\n    }\n    return undefined;\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"auth.signInAsync")," "),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 AuthenticationScheme \u0438 \u043e\u0431\u044a\u0435\u043a\u0442 Identity"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"auth.signOutAsync")),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 AuthenticationScheme"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Identity")),(0,i.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u0430\u043b\u0435\u0435 \u0432 SecurityContext, roles \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorize")," \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0435;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'  export interface Identity<T> {\n  id: string | number;\n  data?: T;\n  readonly roles?: string[];\n}\n\n// example of use\n\nawait context.security.auth.signInAsync(\n   CookieScheme,\n   { id: 1, roles: ["admin"] }\n);\n')),(0,i.kt)("h2",{id:"authorize-decorators"},"Authorize Decorators"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Authorize")," \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Authorize(scheme, payload)")," - \u044d\u0442\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0445\u0443\u043a \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043d\u0430 \u0440\u0430\u0437\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435: actions, controllers, areas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@Authorize(CookiesAuthentication.DefaultScheme)\n@Get("/protected")\ngetProtectedData() {\n    return "Hi! this protected info. <br>  <a href=\'/account/logout\'>logout</a>";\n  }\n')),(0,i.kt)("p",null,"Authorize with roles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@Authorize(CookieScheme, {roles: ["admin"]})\n')),(0,i.kt)("p",null,"Authorize with custom policy function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst CostomAuthPolicy = (context: SecurityContext) => {\n    result = false ;// validate with context\n    return result;\n}\n\n@Authorize(CookieScheme, { policy: CostomAuthPolicy })\n")))}d.isMDXComponent=!0}}]);