"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[305],{"./packages/heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HeadingH1:()=>HeadingH1,HeadingH2:()=>HeadingH2,HeadingH3:()=>HeadingH3,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,ref9,ref10,ref11,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/heading/index.tsx");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.X6,title:"Typography/Heading",args:{children:"Example Heading",color:"text"},argTypes:{children:{control:"text"},color:{options:getOptions(___WEBPACK_IMPORTED_MODULE_1__.pu),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.X6,{...props});Basic.args={size:"md"},Basic.argTypes={size:{options:getOptions(___WEBPACK_IMPORTED_MODULE_1__.Gm),control:"inline-radio"}};const HeadingH1=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.H1,{...props}),HeadingH2=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.H2,{...props}),HeadingH3=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.H3,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Heading {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},HeadingH1.parameters={...HeadingH1.parameters,docs:{...null===(ref3=HeadingH1.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <H1 {...props} />",...null===(ref4=HeadingH1.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},HeadingH2.parameters={...HeadingH2.parameters,docs:{...null===(ref6=HeadingH2.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => <H2 {...props} />",...null===(ref7=HeadingH2.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}},HeadingH3.parameters={...HeadingH3.parameters,docs:{...null===(ref9=HeadingH3.parameters)||void 0===ref9?void 0:ref9.docs,source:{originalSource:"props => <H3 {...props} />",...null===(ref10=HeadingH3.parameters)||void 0===ref10||null===(ref11=ref10.docs)||void 0===ref11?void 0:ref11.source}}}},"./packages/heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,X6:()=>Heading,pu:()=>HeadingColor,Gm:()=>HeadingSize});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={sm:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xl}px;
    line-height: 1.3em;
  `,md:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxl}px;
    line-height: 1.3em;
  `,lg:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxxl}px;
    line-height: 1.3em;
  `},commonCSS=styled_components_browser_esm.iv`
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: ${props=>({text:"var(--lido-color-text)",secondary:"var(--lido-color-textSecondary)"}[props.$color])};
`,HeadingStyle=styled_components_browser_esm.ZP.div`
  ${commonCSS}
  ${props=>sizes[props.$size]}
`,H1Style=styled_components_browser_esm.ZP.h1`
  ${commonCSS}
  ${sizes.lg}
`,H2Style=styled_components_browser_esm.ZP.h2`
  ${commonCSS}
  ${sizes.md}
`,H3Style=styled_components_browser_esm.ZP.h3`
  ${commonCSS}
  ${sizes.sm}
`,Heading=(0,react.forwardRef)((({size="md",color="text",...rest},ref)=>(0,jsx_runtime.jsx)(HeadingStyle,{$size:size,$color:color,ref,...rest})));Heading.displayName="Heading";const H1=(0,react.forwardRef)((({color="text",...rest},ref)=>(0,jsx_runtime.jsx)(H1Style,{$color:color,ref,...rest})));H1.displayName="H1";const H2=(0,react.forwardRef)((({color="text",...rest},ref)=>(0,jsx_runtime.jsx)(H2Style,{$color:color,ref,...rest})));H2.displayName="H2";const H3=(0,react.forwardRef)((({color="text",...rest},ref)=>(0,jsx_runtime.jsx)(H3Style,{$color:color,ref,...rest})));var HeadingColor,HeadingSize;H3.displayName="H3",function(HeadingColor){HeadingColor[HeadingColor.text=0]="text",HeadingColor[HeadingColor.secondary=1]="secondary"}(HeadingColor||(HeadingColor={})),function(HeadingSize){HeadingSize[HeadingSize.sm=0]="sm",HeadingSize[HeadingSize.md=1]="md",HeadingSize[HeadingSize.lg=2]="lg"}(HeadingSize||(HeadingSize={}))}}]);