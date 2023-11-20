"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[5248],{"./packages/content-theme/content-theme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_block_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block/index.ts"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/content-theme/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Content Theme"},Basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.x,{darkContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_block_index_js__WEBPACK_IMPORTED_MODULE_1__.gO,{children:"You see only dark content! Light content is hidden!"}),lightContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_block_index_js__WEBPACK_IMPORTED_MODULE_1__.gO,{children:"You see only light content! Dark content is hidden!"})})});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"() => <>\n    <ContentTheme darkContent={<Block>You see only dark content! Light content is hidden!</Block>} lightContent={<Block>You see only light content! Dark content is hidden!</Block>} />\n  </>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gO:()=>Block,SB:()=>BlockColor,pD:()=>BlockVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const colors={foreground:styled_components_wrapper.iv`
    background: var(--lido-color-foreground);
    color: var(--lido-color-textSecondary);
  `,background:styled_components_wrapper.iv`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,accent:styled_components_wrapper.iv`
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
  `},variants={flat:styled_components_wrapper.iv`
    box-shadow: none;
  `,shadow:styled_components_wrapper.iv`
    box-shadow: ${({theme})=>theme.boxShadows.lg}
      var(--lido-colors-shadowLight);
  `},paddings=styled_components_wrapper.iv`
  padding: ${({theme})=>theme.spaceMap.xxl}px;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
  }
`,BlockStyle=styled_components_wrapper.ZP.div`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
  margin: 0;

  ${({$paddingLess})=>!$paddingLess&&paddings}

  ${({$variant})=>variants[$variant]}
  ${({$color})=>colors[$color]}
`,Block=(0,react.forwardRef)((({color="foreground",variant="flat",paddingLess=!1,...rest},ref)=>(0,jsx_runtime.jsx)(BlockStyle,{$color:color,$variant:variant,$paddingLess:paddingLess,ref,...rest})));var BlockVariant,BlockColor;Block.displayName="Block",function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))},"./packages/content-theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ContentTheme});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const ContentThemeOnlyDark=styled_components_wrapper.ZP.div`
  display: var(--lido-color-darkDisplay, contents);
`,ContentThemeOnlyLight=styled_components_wrapper.ZP.div`
  display: var(--lido-color-lightDisplay, contents);
`,ContentTheme=({darkContent,lightContent,...rest})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContentThemeOnlyDark,{...rest,children:darkContent}),(0,jsx_runtime.jsx)(ContentThemeOnlyLight,{...rest,children:lightContent})]})}}]);