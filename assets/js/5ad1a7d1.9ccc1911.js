"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(d,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"index",title:"Resources",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/index"}},i=void 0,p={unversionedId:"tutorial/understanding-resources/index",id:"version-3.xx.xx/tutorial/understanding-resources/index",title:"Resources",description:"In the Unit 2.4, we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the resources prop of the `` component using the mock components.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/3-understanding-resources/0-intro.md",sourceDirName:"tutorial/3-understanding-resources",slug:"/tutorial/understanding-resources/index",permalink:"/docs/3.xx.xx/tutorial/understanding-resources/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/3-understanding-resources/0-intro.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1678877869,formattedLastUpdatedAt:"Mar 15, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"Resources",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/index"}}},d={},s=[{value:"Learn More",id:"learn-more",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},l=c("UIConditional"),u=c("Checklist"),m=c("ChecklistItem"),h={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Remember",type:"info"},(0,o.kt)(l,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(l,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(l,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(l,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(l,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components."))),(0,o.kt)("p",null,"Before we start, let's understand what is ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," is the starting point of the ",(0,o.kt)("strong",{parentName:"p"},"refine")," app. It is a wrapper component that provides the context to the ",(0,o.kt)("strong",{parentName:"p"},"refine")," components and hooks. It is used to configure the highest level settings of the app."),(0,o.kt)("p",null,"In order to initialize the app, the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," props must be provided. Additionally, it also has other props such as ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout")," etc. These props allow for the configuration of different aspects of the app, including data management, routing, authentication, localization, layout etc."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information ","\u2192")),(0,o.kt)("p",null,"In the context of a CRUD application, a resource typically refers to a data entity that can be created, read, updated, or deleted. For example, a resource could be a user account, a blog post, a product in an online store, or any other piece of data that can be managed by the CRUD app."),(0,o.kt)("p",null,"To add a ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," to our app, we need use ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component. This prop accepts an array of objects. Each object represents a resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            //highlight-start\n            resources={[\n                {\n                    name: "products",\n                    list: () => <div>Products List Page</div>,\n                    show: <div>Product Detail Page</div>,\n                    create: <div>Product Create Page</div>,\n                    edit: <div>Product Edit Page</div>,\n                },\n            ]}\n            //highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"In the above example, we have added a ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," with name ",(0,o.kt)("inlineCode",{parentName:"p"},"products"),". This resource will have 5 pages that assigned to ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," properties. ",(0,o.kt)("strong",{parentName:"p"},"refine")," link the pages with routes for us.  "),(0,o.kt)("p",null,"When we define ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", clone page will be generated automatically. We can access these pages by visiting the following routes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products")," - Product List Page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/show/:id")," - Product Detail Page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/create")," - Product Create Page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/clone/:id")," - Product Clone Page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/edit/:id")," - Product Edit Page")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When using the ",(0,o.kt)("strong",{parentName:"p"},"refine")," hooks and components in the created pages, the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," will be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," functions, by default.")),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#resources"},"resources")," in the API reference."),(0,o.kt)(u,{mdxType:"Checklist"},(0,o.kt)(m,{id:"understanding-resource",mdxType:"ChecklistItem"},"I understood what a resource is and how to add a resource to the app.")))}f.isMDXComponent=!0}}]);