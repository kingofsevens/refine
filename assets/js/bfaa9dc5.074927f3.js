"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(r),u=i,d=h["".concat(c,".").concat(u)]||h[u]||p[u]||n;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},57980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",source:"@site/blog/2022-02-14-refine-ecommerce-blog.md",title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"e-commerce",permalink:"/blog/tags/e-commerce"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"chakra-ui",permalink:"/blog/tags/chakra-ui"},{label:"next.js",permalink:"/blog/tags/next-js"}],readingTime:10.915,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},nextItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},relatedPosts:[{title:"Adding CRUD Actions and Authentication",permalink:"/blog/refine-pixels-3",formattedDate:"February 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:28.405,date:"2023-02-16T00:00:00.000Z"},{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.31,date:"2022-04-29T00:00:00.000Z"},{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.645,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.505,date:"2022-03-16T00:00:00.000Z"},{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.195,date:"2022-01-18T00:00:00.000Z"},{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.655,date:"2022-03-22T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-14-refine-ecommerce-blog/basket.gif",alt:"basket"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"In this article, we will create the e-commerce client of our ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/multi-tenancy/strapi-v4"},"Strapi-Multitenancy")," admin panel that we have done before."),(0,i.kt)("p",null,"It is now used ",(0,i.kt)("strong",{parentName:"p"},"headless")," with the ",(0,i.kt)("strong",{parentName:"p"},"refine")," 3 version. You can use any UI library you want with the ",(0,i.kt)("strong",{parentName:"p"},"headless")," feature."),(0,i.kt)("p",null,"We will use ",(0,i.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," and ",(0,i.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra-UI")," together with ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/ssr/nextjs/"},(0,i.kt)("strong",{parentName:"a"},"Next.js"))," in our E-commerce client example application."))}p.isMDXComponent=!0}}]);