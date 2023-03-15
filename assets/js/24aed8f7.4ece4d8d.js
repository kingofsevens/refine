"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66579],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24326:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/mui/hooks/useAutocomplete/crud-live-preview",id:"version-3.xx.xx/api-reference/mui/hooks/useAutocomplete/crud-live-preview",title:"crud-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/hooks/useAutocomplete/crud-live-preview.md",sourceDirName:"api-reference/mui/hooks/useAutocomplete",slug:"/api-reference/mui/hooks/useAutocomplete/crud-live-preview",permalink:"/docs/3.xx.xx/api-reference/mui/hooks/useAutocomplete/crud-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/hooks/useAutocomplete/crud-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1678877869,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=400px",live:!0,url:"http://localhost:3000",previewHeight:"400px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport {\n    Create,\n    Box,\n    Autocomplete,\n    useAutocomplete,\n    TextField,\n} from "@pankod/refine-mui";\nimport { useForm, Controller } from "@pankod/refine-react-hook-form";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst PostCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        refineCore: { formLoading, queryResult },\n        register,\n        control,\n        formState: { errors },\n    } = useForm<IPost, HttpError, IPost & { category: ICategory }>();\n\n    const { autocompleteProps } = useAutocomplete<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <Box component="form">\n                <Controller\n                    control={control}\n                    name="category"\n                    rules={{ required: "This field is required" }}\n                    render={({ field }) => (\n                        <Autocomplete\n                            //highlight-next-line\n                            {...autocompleteProps}\n                            {...field}\n                            onChange={(_, value) => {\n                                field.onChange(value);\n                            }}\n                            getOptionLabel={({ title }) => title}\n                            isOptionEqualToValue={(option, value) =>\n                                value === undefined ||\n                                option.id.toString() === value.toString()\n                            }\n                            placeholder="Select a category"\n                            renderInput={(params) => (\n                                <TextField\n                                    {...params}\n                                    label="Category"\n                                    margin="normal"\n                                    variant="outlined"\n                                    error={!!errors.category}\n                                    helperText={errors.category?.message}\n                                    required\n                                />\n                            )}\n                        />\n                    )}\n                />\n            </Box>\n        </Create>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: PostCreate,\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}p.isMDXComponent=!0}}]);