"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[6098],{"./packages/theme/theme-provider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Providers:()=>Providers,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_theme_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theme/theme-provider.tsx"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theme/themes.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Providers"},themeCustom={..._themes__WEBPACK_IMPORTED_MODULE_2__.Qp,colors:{..._themes__WEBPACK_IMPORTED_MODULE_2__.Qp.colors,text:"#FFA29A",foreground:"#323161"}},Block=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  padding: ${({theme})=>theme.spaceMap.xxl}px;
  margin: ${({theme})=>theme.spaceMap.md}px 0;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);

  &:not(:only-child):first-child {
    margin-top: 0;
  }

  &:not(:only-child):last-child {
    margin-bottom: 0;
  }
`,Providers=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Component inherits global theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_provider__WEBPACK_IMPORTED_MODULE_1__.Mq,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in LightThemeProvider"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_provider__WEBPACK_IMPORTED_MODULE_1__.DD,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in DarkThemeProvider"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_provider__WEBPACK_IMPORTED_MODULE_1__.f6,{theme:themeCustom,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in ThemeProvider, which provides custom theme"})})]});Providers.parameters={...Providers.parameters,docs:{...null===(ref=Providers.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <>\n    <Block>Component inherits global theme</Block>\n    <LightThemeProvider>\n      <Block>Wrapped in LightThemeProvider</Block>\n    </LightThemeProvider>\n    <DarkThemeProvider>\n      <Block>Wrapped in DarkThemeProvider</Block>\n    </DarkThemeProvider>\n    <ThemeProvider theme={themeCustom} {...props}>\n      <Block>Wrapped in ThemeProvider, which provides custom theme</Block>\n    </ThemeProvider>\n  </>",...null===(ref1=Providers.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}}}]);