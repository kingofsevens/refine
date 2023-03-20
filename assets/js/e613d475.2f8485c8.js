"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"real-time",title:"Live / Realtime",sidebar_label:"Live / Realtime"},o=void 0,s={unversionedId:"advanced-tutorials/real-time",id:"advanced-tutorials/real-time",title:"Live / Realtime",description:"refine lets you add Realtime support to your app via the liveProvider prop for ``. It can be used to update and show data in Realtime throughout your app. refine remains agnostic in its API to allow different solutions(Ably, Socket.IO, Mercure, supabase, etc.) to be integrated.",source:"@site/docs/advanced-tutorials/real-time.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/real-time",permalink:"/docs/advanced-tutorials/real-time",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/real-time.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1679320189,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"real-time",title:"Live / Realtime",sidebar_label:"Live / Realtime"},sidebar:"someSidebar",previous:{title:"CSV Import",permalink:"/docs/advanced-tutorials/import-export/csv-import"},next:{title:"Multi Level Menu",permalink:"/docs/advanced-tutorials/multi-level-menu/"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding <code>liveProvider</code>",id:"adding-liveprovider",level:2},{value:"Configuring <code>liveMode</code>",id:"configuring-livemode",level:2},{value:"Custom Subscriptions",id:"custom-subscriptions",level:2},{value:"Example",id:"example",level:2}],p=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,a.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,a.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,a.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the Live Provider documentation for detailed information. ","\u2192")),(0,a.kt)("p",null,"We will be using ",(0,a.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably")," in this guide to provide Realtime features."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"We need to install the Ably live provider package from ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/ably\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Since we will need ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," from Ably, you must first register and get the key from ",(0,a.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),"."),(0,a.kt)("p",null,"The app will have one resource: ",(0,a.kt)("strong",{parentName:"p"},"posts")," with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/base-antd/src/pages/posts"},"CRUD pages(list, create, edit, and show) similar to base example"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#example"},"You can also refer to CodeSandbox to see the final state of the app ","\u2192")),(0,a.kt)("h2",{id:"adding-liveprovider"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h2"},"liveProvider")),(0,a.kt)("p",null,"Firstly we create a Ably client for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," live provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility/ablyClient.ts"',title:'"src/utility/ablyClient.ts"'},'import { Ably } from "@refinedev/ably";\n\nexport const ablyClient = new Ably.Realtime("your-api-key");\n')),(0,a.kt)("p",null,"Then pass ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport "@refinedev/antd/dist/reset.css";\n\n//highlight-next-line\nimport { liveProvider } from "@refinedev/ably";\n\n//highlight-next-line\nimport { ablyClient } from "utility/ablyClient";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider}\n                //highlight-start\n                liveProvider={liveProvider(ablyClient)}\n                options={{ liveMode: "auto" }}\n                //highlight-end\n                resources={[\n                    {\n                        name: "posts",\n                        list: "/posts",\n                        create: "/posts/create",\n                        edit: \'/posts/edit/:id",\n                        show: "/posts/show/:id",\n                        meta: { canDelete: true },\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route\n                        element={(\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        )}\n                    >\n                        <Route index element={<NavigateToResource />} />\n                        <Route path="/posts" element={<PostList />} />\n                        <Route path="/posts/create" element={<PostCreate />} />\n                        <Route path="/posts/show/:id" element={<PostShow />} />\n                        <Route path="/posts/edit/:id" element={<PostEdit />} />\n                    </Route>\n                    <Route path="*" element={<ErrorComponent />} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For live features to work automatically we added ",(0,a.kt)("inlineCode",{parentName:"p"},'liveMode: "auto"')," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider#livemode"},"Refer to the Live Provider documentation for detailed information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/Realtime/real-time.gif",alt:"Realtime Demo"})),(0,a.kt)("h2",{id:"configuring-livemode"},"Configuring ",(0,a.kt)("inlineCode",{parentName:"h2"},"liveMode")),(0,a.kt)("p",null,"We may not want to make Realtime changes instantly in some cases. In these cases, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"manual")," mode to prevent the data from changing instantly. Then we can handle the event manually."),(0,a.kt)("p",null,"For example in an edit page for a record, It would be better to handle Realtime data manually to prevent synchronization problems caused by multiple editing sources. We would not want the data changing while we are trying to edit a record."),(0,a.kt)("p",null,"We will be alerted about changes in an alert box on top of the form instead of changing the data instantly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// ...\n\nexport const PostEdit: React.FC = () => {\n    //highlight-start\n    const [deprecated, setDeprecated] = useState<\n        "deleted" | "updated" | undefined\n    >();\n    //highlight-end\n\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n        //highlight-start\n        liveMode: "manual",\n        onLiveEvent: (event) => {\n            if (event.type === "deleted" || event.type === "updated") {\n                setDeprecated(event.type);\n            }\n        },\n        //highlight-end\n    });\n\n    //highlight-start\n    const handleRefresh = () => {\n        queryResult?.refetch();\n        setDeprecated(undefined);\n    };\n    //highlight-end\n\n    // ...\n\n    return (\n        <Edit /* ... */>\n            //highlight-start\n            {deprecated === "deleted" && (\n                <Alert\n                    message="This post is deleted."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={<ListButton size="small" />}\n                />\n            )}\n            {deprecated === "updated" && (\n                <Alert\n                    message="This post is updated. Refresh to see changes."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={\n                        <RefreshButton size="small" onClick={handleRefresh} />\n                    }\n                />\n            )}\n            //highlight-end\n            <Form {...formProps} layout="vertical">\n                // ....\n            </Form>\n        </Edit>\n    );\n};\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We can also implement a similar thing on the show page."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"#example"},"Refer to the CodeSandbox example for detailed information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/manual-mode.gif",alt:"Manual Mode Demo"})),(0,a.kt)("h2",{id:"custom-subscriptions"},"Custom Subscriptions"),(0,a.kt)("p",null,"You can subscribe to events emitted within ",(0,a.kt)("strong",{parentName:"p"},"refine")," in any place in your app with ",(0,a.kt)("inlineCode",{parentName:"p"},"useSubscription"),"."),(0,a.kt)("p",null,"For example, we can subscribe to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"create"))," event for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"posts"))," resource and we can show a badge for the number of events in the sider menu."),(0,a.kt)("p",null,"Firstly, let's implement a custom sider like in ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/customization/customSider"},"this example"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Custom Sider Menu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider.tsx"',title:'"src/components/sider.tsx"'},'import React, { useState } from "react";\nimport { TreeMenuItem, CanAccess, useMenu } from "@refinedev/core";\nimport { Layout, Menu, Grid } from "antd";\nimport { UnorderedListOutlined } from "@ant-design/icons";\n\nimport { Link } from "react-router-dom";\n\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = ({ Title }) => {\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const renderTreeView = (tree: TreeMenuItem[], selectedKey?: string) => {\n        return tree.map((item: TreeMenuItem) => {\n            const { icon, label, route, key, name, children, meta } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={key}\n                        icon={icon ?? <UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = key === selectedKey;\n            const isRoute = !(\n                meta?.parent !== undefined && children.length === 0\n            );\n\n            return (\n                <CanAccess\n                    key={key}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={key}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        <Link to={route}>{label}</Link>\n                        {!collapsed && isSelected && <UnorderedListOutlined />}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <Layout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={({ key }) => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </Layout.Sider>\n    );\n};\n'))),(0,a.kt)("p",null,"Now, let's add a badge for the number of create and update events for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"posts"))," menu items."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport {\n    TreeMenuItem,\n    CanAccess,\n    useMenu,\n    //highlight-start\n    useSubscription,\n    //highlight-end\n} from "@refinedev/core";\nimport {\n    Layout,\n    Menu,\n    Grid,\n    //highlight-start\n    Badge,\n    //highlight-end\n} from "antd";\nimport { UnorderedListOutlined } from "@ant-design/icons";\n\nimport { Link } from "react-router-dom";\n\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = ({ Title }) => {\n    const [subscriptionCount, setSubscriptionCount] = useState(0);\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    //highlight-start\n    useSubscription({\n        channel: "resources/posts",\n        type: ["created", "updated"],\n        onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n    });\n    //highlight-end\n\n    const renderTreeView = (tree: TreeMenuItem[], selectedKey?: string) => {\n        return tree.map((item: TreeMenuItem) => {\n            const { icon, label, route, key, name, children, meta } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={key}\n                        icon={icon ?? <UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = key === selectedKey;\n            const isRoute = !(\n                meta?.parent !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={key}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={key}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        //highlight-start\n                        <div>\n                            <Link to={route}>{label}</Link>\n                            {label === "Posts" && (\n                                <Badge\n                                    size="small"\n                                    count={subscriptionCount}\n                                    offset={[2, -15]}\n                                />\n                            )}\n                        </div>\n                        //highlight-end\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <Layout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n\n                    //highlight-start\n                    if (key === "/posts") {\n                        setSubscriptionCount(0);\n                    }\n                    //highlight-end\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </Layout.Sider>\n    );\n};\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can subscribe to specific ",(0,a.kt)("inlineCode",{parentName:"p"},"ids")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"params"),". For example, you can subscribe to ",(0,a.kt)("strong",{parentName:"p"},"deleted")," and ",(0,a.kt)("strong",{parentName:"p"},"updated")," events from ",(0,a.kt)("strong",{parentName:"p"},"posts")," resource with ",(0,a.kt)("strong",{parentName:"p"},"id")," ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useSubscription({\n    channel: "resources/posts",\n    type: ["deleted", "updated"],\n    //highlight-start\n    params: {\n        ids: ["1", "2"],\n    },\n    //highlight-end\n    onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n});\n'))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/custom-sider.gif",alt:"Custom Sider Demo"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(p,{path:"live-provider-ably",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);