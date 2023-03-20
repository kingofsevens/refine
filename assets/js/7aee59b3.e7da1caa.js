"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48347],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"useCustom",siderbar_label:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},i=void 0,s={unversionedId:"api-reference/core/hooks/data/useCustom/index",id:"api-reference/core/hooks/data/useCustom/index",title:"useCustom",description:"useCustom is an extended version of TanStack Query's useQuery. It supports all the features of useQuery and adds some extra features.",source:"@site/docs/api-reference/core/hooks/data/useCustom/index.md",sourceDirName:"api-reference/core/hooks/data/useCustom",slug:"/api-reference/core/hooks/data/useCustom/",permalink:"/docs/api-reference/core/hooks/data/useCustom/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useCustom/index.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1679320189,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{title:"useCustom",siderbar_label:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},sidebar:"someSidebar",previous:{title:"useCreateMany",permalink:"/docs/api-reference/core/hooks/data/useCreateMany/"},next:{title:"useCustomMutation",permalink:"/docs/api-reference/core/hooks/data/useCustomMutation/"}},l={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>url</code> <PropTag required />",id:"url-",level:3},{value:"<code>method</code> <PropTag required />",id:"method-",level:3},{value:"<code>config.headers</code>",id:"configheaders",level:3},{value:"<code>config.query</code>",id:"configquery",level:3},{value:"<code>config.payload</code>",id:"configpayload",level:3},{value:"<code>config.sorters</code>",id:"configsorters",level:3},{value:"<code>config.filters</code>",id:"configfilters",level:3},{value:"<del><code>config.sort</code></del>",id:"configsort",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=d("PropTag"),c=d("PropsTable"),m={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," is an extended version of TanStack Query's ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")),". It supports all the features of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," and adds some extra features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"custom")," method as the ",(0,r.kt)("strong",{parentName:"li"},"query function")," from the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,r.kt)("p",null,"It is useful when you want to send a custom query request using the TanStack Query advantages."),(0,r.kt)("admonition",{title:"attention",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," should ",(0,r.kt)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. To do these; ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCreate/"},"useCreate"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate/"},"useUpdate")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},"useDelete")," hooks should be used instead."),(0,r.kt)("p",{parentName:"admonition"},"This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom"),", unlike other data hooks, does not ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,r.kt)("p",{parentName:"admonition"},"If you need to custom mutation request, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCustomMutation/"},"useCustomMutation")," hook.")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," hook expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," properties. These parameters will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.kt)("p",null,"When properties are changed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," hook will trigger a new request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom, useApiUrl } from "@refinedev/core";\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n    url: `${apiUrl}/posts-unique-check`,\n    method: "get",\n    config: {\n        headers: {\n            "x-custom-header": "foo-bar",\n        },\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"url-"},(0,r.kt)("inlineCode",{parentName:"h3"},"url")," ",(0,r.kt)(u,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    url: "www.example.com/api/get-products",\n});\n')),(0,r.kt)("h3",{id:"method-"},(0,r.kt)("inlineCode",{parentName:"h3"},"method")," ",(0,r.kt)(u,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    method: "get",\n});\n')),(0,r.kt)("h3",{id:"configheaders"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.headers")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    config: {\n        headers: {\n            "x-custom-header": "foo-bar",\n        },\n    },\n});\n')),(0,r.kt)("h3",{id:"configquery"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.query")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the query parameters of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    config: {\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n')),(0,r.kt)("h3",{id:"configpayload"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.payload")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the payload of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    config: {\n        payload: {\n            title: "Foo bar",\n        },\n    },\n});\n')),(0,r.kt)("h3",{id:"configsorters"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.sorters")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the sort query parameters of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    config: {\n        sorters: [\n            {\n                field: "title",\n                order: "asc",\n            },\n        ],\n    },\n});\n')),(0,r.kt)("h3",{id:"configfilters"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.filters")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the filter query parameters of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    config: {\n        filters: [\n            {\n                field: "title",\n                operator: "contains",\n                value: "Foo",\n            },\n        ],\n    },\n});\n')),(0,r.kt)("h3",{id:"configsort"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"config.sort"))),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"config.sorters")," instead.")),(0,r.kt)("h3",{id:"queryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useCustom({\n    queryOptions: {\n        retry: 3,\n        enabled: false,\n    },\n});\n")),(0,r.kt)("h3",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h3"},"meta")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},(0,r.kt)("inlineCode",{parentName:"a"},"meta"))," is used following two purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,r.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,r.kt)("a",{parentName:"li",href:"/docs/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    meta: {\n        foo: "bar",\n    },\n});\n\nconst myDataProvider = {\n    //...\n    custom: async ({\n        url,\n        method,\n        sort,\n        filters,\n        payload,\n        query,\n        headers,\n        meta,\n    }) => {\n        const foo = meta?.foo;\n\n        console.log(foo); // "bar"\n\n        //...\n    },\n    //...\n};\n')),(0,r.kt)("h3",{id:"dataprovidername"},(0,r.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,r.kt)("p",null,"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    dataProviderName: "second-data-provider",\n});\n')),(0,r.kt)("h3",{id:"successnotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data is fetched successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," can call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    successNotification: (data, values, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,r.kt)("h3",{id:"errornotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data fetching is failed, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," will call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n    errorNotification: (data, values, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(c,{module:"@refinedev/core/useCustom",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for query params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"unknown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TPayload"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TPayload")),(0,r.kt)("td",{parentName:"tr",align:null},"unknown")))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useQuery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<CustomResponse<TData>, TError>")))))))}k.isMDXComponent=!0}}]);