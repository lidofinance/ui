"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[2686],{"./packages/link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/link/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.r,title:"Typography/Link",args:{children:"Lido",href:"https://lido.fi",fadeVisited:!1},argTypes:{fadeVisited:{description:"Fade visited links"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Link {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const LinkStyle=styled_components_browser_esm.ZP.a`
  text-decoration: none;
  color: var(--lido-color-primary);

  :hover {
    color: var(--lido-color-primaryHover);
  }

  ${props=>props.fadeVisited&&styled_components_browser_esm.iv`
      :visited {
        color: var(--lido-color-primaryVisited);
      }
    `}
`,Link=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(LinkStyle,{target:"_blank",rel:"nofollow noopener",ref,...props})));Link.displayName="Link"}}]);