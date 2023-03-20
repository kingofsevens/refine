"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"access-control",title:"Access Control",sidebar_label:"Access Control"},s=void 0,i={unversionedId:"advanced-tutorials/access-control",id:"version-3.xx.xx/advanced-tutorials/access-control",title:"Access Control",description:"Introduction",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/access-control.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/access-control",permalink:"/docs/3.xx.xx/advanced-tutorials/access-control",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/access-control.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1679320189,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"access-control",title:"Access Control",sidebar_label:"Access Control"},sidebar:"someSidebar",previous:{title:"Advanced Tutorials",permalink:"/docs/3.xx.xx/advanced-tutorials"},next:{title:"Auth0 Login",permalink:"/docs/3.xx.xx/advanced-tutorials/auth/auth0"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding Policy and Model",id:"adding-policy-and-model",level:2},{value:"Adding <code>accessControlProvider</code>",id:"adding-accesscontrolprovider",level:2},{value:"Adding Different Roles",id:"adding-different-roles",level:2},{value:"Handling access with params",id:"handling-access-with-params",level:2},{value:"ID Based Access",id:"id-based-access",level:3},{value:"Field Based Access",id:"field-based-access",level:3},{value:"Example",id:"example",level:2},{value:"Casbin",id:"casbin",level:3},{value:"Cerbos",id:"cerbos",level:3}],p=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Access control is a broad topic where there are lots of advanced solutions that provide a different sets of features. ",(0,r.kt)("strong",{parentName:"p"},"refine")," is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos"),", ",(0,r.kt)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method would be the entry point for those solutions."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},"Refer to the Access Control Provider documentation for detailed information. ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," must implement only one async method named ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," to be used to check if the desired access will be granted."),(0,r.kt)("p",null,"We will be using ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://casbin.org/"},"Casbin"))," in this guide for users with different roles who have different access rights for parts of the app."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We need to install Casbin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The app will have three resources: ",(0,r.kt)("strong",{parentName:"p"},"posts"),", ",(0,r.kt)("strong",{parentName:"p"},"users"),", and ",(0,r.kt)("strong",{parentName:"p"},"categories")," with CRUD pages(list, create, edit, and show)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#example"},"You can refer to CodeSandbox to see how they are implemented ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," will look like this before we begin implementing access control:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport { UserList, UserCreate, UserEdit, UserShow } from "pages/users";\nimport {\n    CategoryList,\n    CategoryCreate,\n    CategoryEdit,\n    CategoryShow,\n} from "pages/categories";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                    canDelete: true,\n                },\n                {\n                    name: "users",\n                    list: UserList,\n                    create: UserCreate,\n                    edit: UserEdit,\n                    show: UserShow,\n                },\n                {\n                    name: "categories",\n                    list: CategoryList,\n                    create: CategoryCreate,\n                    edit: CategoryEdit,\n                    show: CategoryShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("h2",{id:"adding-policy-and-model"},"Adding Policy and Model"),(0,r.kt)("p",null,"The way ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://casbin.org/"},"Casbin"))," works is that access rights are checked according to policies that are defined based on a model. You can find further information about how models and policies work ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/docs/how-it-works"},"here"),"."),(0,r.kt)("p",null,"Let's add a model and a policy for a role ",(0,r.kt)("strong",{parentName:"p"},"editor")," that have ",(0,r.kt)("strong",{parentName:"p"},"list")," access for ",(0,r.kt)("strong",{parentName:"p"},"posts")," resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/accessControl.ts"',title:'"src/accessControl.ts"'},'import { newModel, StringAdapter } from "casbin";\n\nexport const model = newModel(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n`);\n\nexport const adapter = new MemoryAdapter(`\np, editor, posts, list\n`);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can can find more examples in ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/docs/supported-models"},"Casbin documentation")," or play with lots of examples in ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"Casbin editor"))),(0,r.kt)("h2",{id:"adding-accesscontrolprovider"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h2"},"accessControlProvider")),(0,r.kt)("p",null,"Now we will implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method for ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to integrate our policy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n// highlight-next-line\nimport { newEnforcer } from "casbin";\n\n// highlight-next-line\nimport { model, adapter } from "./accessControl";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            // ...\n            // highlight-start\n            accessControlProvider={{\n                can: async ({ resource, action }) => {\n                    const enforcer = await newEnforcer(model, adapter);\n                    const can = await enforcer.enforce(\n                        "editor",\n                        resource,\n                        action,\n                    );\n\n                    return Promise.resolve({ can });\n                },\n            }}\n            // highlight-end\n            // ...\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Whenever a part of the app checks for access control, refine passes ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," and then we can use these parameters to integrate our specific access control solution which is ",(0,r.kt)("strong",{parentName:"p"},"Casbin")," in this case."),(0,r.kt)("p",null,"Our model provides that user with role ",(0,r.kt)("strong",{parentName:"p"},"editor")," have access for ",(0,r.kt)("strong",{parentName:"p"},"list")," action on ",(0,r.kt)("strong",{parentName:"p"},"posts")," resource. Even though we have two other resources, since our policy doesn't include them, they will not appear on the sidebar menu. Also in the list page of ",(0,r.kt)("inlineCode",{parentName:"p"},"posts"),", buttons for ",(0,r.kt)("strong",{parentName:"p"},"create"),", ",(0,r.kt)("strong",{parentName:"p"},"edit")," and ",(0,r.kt)("strong",{parentName:"p"},"show")," buttons will be disabled since they are not included in the policy."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/access-control/simple-access.png",alt:"Simple Access Control"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"adding-different-roles"},"Adding Different Roles"),(0,r.kt)("p",null,"We can provide different access rights to a different types of users for different parts of the app. We can do that by adding policies for the different roles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const adapter = new MemoryAdapter(`\np, admin, posts, (list)|(create)\np, admin, users, (list)|(create)\np, admin, categories, (list)|(create)\n\np, editor, posts, (list)|(create)\np, editor, categories, list\n`);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"admin")," will have access to ",(0,r.kt)("strong",{parentName:"li"},"list")," and ",(0,r.kt)("strong",{parentName:"li"},"create")," for every resource"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editor")," will have access to ",(0,r.kt)("strong",{parentName:"li"},"list")," and ",(0,r.kt)("strong",{parentName:"li"},"create")," for ",(0,r.kt)("strong",{parentName:"li"},"posts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editor")," won't have any access for ",(0,r.kt)("strong",{parentName:"li"},"users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editor")," will have only ",(0,r.kt)("strong",{parentName:"li"},"list")," access for ",(0,r.kt)("strong",{parentName:"li"},"categories"))),(0,r.kt)("p",null,"We can demonstrate the effect of different roles by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," dynamically. Let's implement a switch in the header for selecting either ",(0,r.kt)("strong",{parentName:"p"},"admin")," or ",(0,r.kt)("strong",{parentName:"p"},"editor")," role to see the effect on the app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n// highlight-next-line\nimport { Header } from "components/header";\n\nconst App: React.FC = () => {\n    // highlight-next-line\n    const [role, setRole] = useState("admin");\n\n    return (\n        <Refine\n            // ...\n            accessControlProvider={{\n                can: async ({ resource, action }) => {\n                    const enforcer = await newEnforcer(model, adapter);\n                    // highlight-next-line\n                    const can = await enforcer.enforce(role, resource, action);\n\n                    return Promise.resolve({\n                        can,\n                    });\n                },\n            }}\n            // highlight-next-line\n            Header={() => <Header role={role} setRole={setRole} />}\n            // ...\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Header Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { AntdLayout, Radio } from "@pankod/refine-antd";\n\ninterface HeaderProps {\n    role: string;\n    setRole: React.Dispatch<React.SetStateAction<string>>;\n}\n\nexport const Header: React.FC<HeaderProps> = ({ role, setRole }) => {\n    return (\n        <AntdLayout.Header\n            style={{\n                display: "flex",\n                justifyContent: "center",\n                alignItems: "center",\n                height: "48px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            <Radio.Group\n                value={role}\n                onChange={(event) => setRole(event.target.value)}\n            >\n                <Radio.Button value="admin">Admin</Radio.Button>\n                <Radio.Button value="editor">Editor</Radio.Button>\n            </Radio.Group>\n        </AntdLayout.Header>\n    );\n};\n'))),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/access-control/dynamic-role.gif",alt:"Dynamic Role"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"handling-access-with-params"},"Handling access with params"),(0,r.kt)("h3",{id:"id-based-access"},"ID Based Access"),(0,r.kt)("p",null,"Let's update our policies to handle ",(0,r.kt)("strong",{parentName:"p"},"id")," based access control points like ",(0,r.kt)("strong",{parentName:"p"},"edit"),", ",(0,r.kt)("strong",{parentName:"p"},"show")," pages, and ",(0,r.kt)("strong",{parentName:"p"},"delete")," button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const adapter = new MemoryAdapter(`\np, admin, posts, (list)|(create)\n// highlight-next-line\np, admin, posts/*, (edit)|(show)|(delete)\n\np, admin, users, (list)|(create)\n// highlight-next-line\np, admin, users/*, (edit)|(show)|(delete)\n\np, admin, categories, (list)|(create)\n// highlight-next-line\np, admin, categories/*, (edit)|(show)|(delete)\n\np, editor, posts, (list)|(create)\n// highlight-next-line\np, editor, posts/*, (edit)|(show)\n\np, editor, categories, list\n`);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"admin")," will have ",(0,r.kt)("strong",{parentName:"li"},"edit"),", ",(0,r.kt)("strong",{parentName:"li"},"show")," and ",(0,r.kt)("strong",{parentName:"li"},"delete")," access for every resource"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editor")," will have ",(0,r.kt)("strong",{parentName:"li"},"edit")," and ",(0,r.kt)("strong",{parentName:"li"},"show")," access for ",(0,r.kt)("strong",{parentName:"li"},"posts"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"*")," is a wildcard. Specific ids can be targeted too. For example If you want ",(0,r.kt)("strong",{parentName:"p"},"editor")," role to have ",(0,r.kt)("strong",{parentName:"p"},"delete")," access for ",(0,r.kt)("strong",{parentName:"p"},"post")," with ",(0,r.kt)("strong",{parentName:"p"},"id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),", you can add this policy:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const adapter = new MemoryAdapter(`\np, editor, posts/5, delete\n`);\n"))),(0,r.kt)("p",null,"We must handle id based access controls in the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method. ",(0,r.kt)("strong",{parentName:"p"},"id")," parameter will be accessible in ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n\nconst App: React.FC = () => {\n    // ...\n\n    return (\n        <Refine\n            // ...\n            accessControlProvider={{\n                // highlight-start\n                can: async ({ resource, action, params }) => {\n                    const enforcer = await newEnforcer(model, adapter);\n                    if (\n                        action === "delete" ||\n                        action === "edit" ||\n                        action === "show"\n                    ) {\n                        const can = await enforcer.enforce(\n                            role,\n                            `${resource}/${params?.id}`,\n                            action,\n                        );\n                        return Promise.resolve({ can });\n                    }\n                    // highlight-end\n\n                    const can = await enforcer.enforce(role, resource, action);\n                    return Promise.resolve({ can });\n                },\n            }}\n            // ...\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("h3",{id:"field-based-access"},"Field Based Access"),(0,r.kt)("p",null,"We can also check access control for specific areas in our app like a certain field of a table. This can be achieved by adding a special action for the custom access control point in our policies."),(0,r.kt)("p",null,"For example, we may want to ",(0,r.kt)("strong",{parentName:"p"},"deny")," ",(0,r.kt)("strong",{parentName:"p"},"editor")," roles to access ",(0,r.kt)("strong",{parentName:"p"},"hit")," field in the ",(0,r.kt)("strong",{parentName:"p"},"posts")," resource without denying the ",(0,r.kt)("strong",{parentName:"p"},"admin")," role. This can be done with ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/docs/supported-models"},"RBAC with deny-override")," model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const model = newModel(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\n// highlight-next-line\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\n// highlight-next-line\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n\n[matchers]\nm = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n`);\n\nexport const adapter = new MemoryAdapter(`\np, admin, posts, (list)|(create)\np, admin, posts/*, (edit)|(show)|(delete)\n// highlight-next-line\np, admin, posts/*, field\n\np, admin, users, (list)|(create)\np, admin, users/*, (edit)|(show)|(delete)\n\np, admin, categories, (list)|(create)\np, admin, categories/*, (edit)|(show)|(delete)\n\np, editor, posts, (list)|(create)\np, editor, posts/*, (edit)|(show)\n// highlight-next-line\np, editor, posts/hit, field, deny\n\np, editor, categories, list\n`);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"admin")," have ",(0,r.kt)("strong",{parentName:"li"},"field")," access for every field of ",(0,r.kt)("strong",{parentName:"li"},"posts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editor")," won't have ",(0,r.kt)("strong",{parentName:"li"},"field")," access for ",(0,r.kt)("strong",{parentName:"li"},"hit")," field of ",(0,r.kt)("strong",{parentName:"li"},"posts"))),(0,r.kt)("p",null,"Then we must handle the ",(0,r.kt)("strong",{parentName:"p"},"field")," action in the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n\nconst App: React.FC = () => {\n    // ...\n\n    return (\n        <Refine\n            // ...\n            accessControlProvider={{\n                can: async ({ resource, action, params }) => {\n                    const enforcer = await newEnforcer(model, adapter);\n                    if (\n                        action === "delete" ||\n                        action === "edit" ||\n                        action === "show"\n                    ) {\n                        const can = await enforcer.enforce(\n                            role,\n                            `${resource}/${params?.id}`,\n                            action,\n                        );\n                        return Promise.resolve({ can });\n                    }\n\n                    // highlight-start\n                    if (action === "field") {\n                        const can = await enforcer.enforce(\n                            role,\n                            `${resource}/${params?.field}`,\n                            action,\n                        );\n                        return Promise.resolve({ can });\n                    }\n                    // highlight-end\n\n                    const can = await enforcer.enforce(role, resource, action);\n                    return Promise.resolve({ can });\n                },\n            }}\n            // ...\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Then it can be used with ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan"))," in the related area:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n    // ...\n    useCan,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n    // ...\n\n    // highlight-start\n    const { data: canAccess } = useCan({\n        resource: "posts",\n        action: "field",\n        params: { field: "hit" },\n    });\n    // highlight-end\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                // ... // highlight-start\n                {canAccess?.can && (\n                    <Table.Column\n                        dataIndex="hit"\n                        title="Hit"\n                        render={(value: number) => (\n                            <NumberField\n                                value={value}\n                                options={{ notation: "compact" }}\n                            />\n                        )}\n                    />\n                )}\n                // highlight-end // ...\n            </Table>\n        </List>\n    );\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/accessControl/can-access"},(0,r.kt)("inlineCode",{parentName:"a"},"<CanAccess />"))," can be used too to check access control in custom places in your app.")),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/access-control/access-control.gif",alt:"Full Example Sample"})),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"casbin"},"Casbin"),(0,r.kt)(p,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}),(0,r.kt)("h3",{id:"cerbos"},"Cerbos"),(0,r.kt)(p,{path:"access-control-cerbos",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);