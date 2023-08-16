"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[2195],{"./packages/pagination/PaginationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/pagination/types.ts"),_PaginationItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/pagination/PaginationItem.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_PaginationItem__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Pagination/PaginationItem",args:{variant:_types__WEBPACK_IMPORTED_MODULE_1__.V.default,disabled:!1,icon:"2"},argTypes:{variant:{options:_types__WEBPACK_IMPORTED_MODULE_1__.V,control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_2__.Z,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <PaginationItem {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/pagination/PaginationItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>pagination_PaginationItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),types=__webpack_require__("./packages/pagination/types.ts");const variantColors={[types.V.active]:styled_components_browser_esm.iv`
    border-color: var(--lido-color-primary);
    color: var(--lido-color-primary);

    :not(:disabled):hover {
      border-color: var(--lido-color-primaryVisited);
      color: var(--lido-color-primaryVisited);
    }
  `,[types.V.default]:styled_components_browser_esm.iv`
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    :not(:disabled):hover {
      border-color: var(--lido-color-primary);
      color: var(--lido-color-primary);
    }
  `},PaginationItemStyle=styled_components_browser_esm.ZP.button`
  width: 32px;
  height: 32px;
  background-color: var(--lido-color-foreground);
  border: 1px solid;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  padding: 0;

  ${({$variant})=>variantColors[$variant]}

  :disabled {
    border-color: var(--lido-color-border);
    color: var(--lido-color-textSecondary);
    cursor: unset;
  }
`,pagination_PaginationItem=({icon,variant=types.V.default,...rest})=>(0,jsx_runtime.jsx)(PaginationItemStyle,{$variant:variant,...rest,children:icon})},"./packages/pagination/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var PaginationItemVariant;__webpack_require__.d(__webpack_exports__,{V:()=>PaginationItemVariant}),function(PaginationItemVariant){PaginationItemVariant.default="default",PaginationItemVariant.active="active"}(PaginationItemVariant||(PaginationItemVariant={}))}}]);