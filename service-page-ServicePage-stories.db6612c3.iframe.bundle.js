"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[4461],{"./packages/service-page/ServicePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>ServicePage_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ServicePageStyle=styled_components_browser_esm.ZP.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`,ServicePageInsideStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 32px;
  max-width: 560px;
`;var Heading=__webpack_require__("./packages/heading/Heading.tsx"),packages_text=(__webpack_require__("./packages/heading/types.ts"),__webpack_require__("./packages/text/index.ts"));function ServicePage(props,ref){const{title,children,...rest}=props;return(0,jsx_runtime.jsx)(ServicePageStyle,{...rest,ref,children:(0,jsx_runtime.jsxs)(ServicePageInsideStyle,{children:[(0,jsx_runtime.jsx)(Heading.H1,{children:title}),(0,jsx_runtime.jsx)(packages_text.xv,{color:"secondary",children})]})})}const service_page_ServicePage=(0,react.forwardRef)(ServicePage);var ref,ref1,ref2;const ServicePage_stories={component:service_page_ServicePage,title:"Layout/ServicePage",args:{title:"404",children:"Page Not Found"}},Basic=props=>(0,jsx_runtime.jsx)(service_page_ServicePage,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <ServicePage {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,Z:()=>heading_Heading});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={sm:styled_components_browser_esm.iv`
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
`;function Heading(props,ref){const{size="md",color="text",...rest}=props;return(0,jsx_runtime.jsx)(HeadingStyle,{$size:size,$color:color,ref,...rest})}const heading_Heading=(0,react.forwardRef)(Heading),H1=(0,react.forwardRef)((function H1(props,ref){const{color="text",...rest}=props;return(0,jsx_runtime.jsx)(H1Style,{$color:color,ref,...rest})})),H2=(0,react.forwardRef)((function H2(props,ref){const{color="text",...rest}=props;return(0,jsx_runtime.jsx)(H2Style,{$color:color,ref,...rest})})),H3=(0,react.forwardRef)((function H3(props,ref){const{color="text",...rest}=props;return(0,jsx_runtime.jsx)(H3Style,{$color:color,ref,...rest})}))},"./packages/heading/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var HeadingColor,HeadingSize;__webpack_require__.d(__webpack_exports__,{G:()=>HeadingSize,p:()=>HeadingColor}),function(HeadingColor){HeadingColor[HeadingColor.text=0]="text",HeadingColor[HeadingColor.secondary=1]="secondary"}(HeadingColor||(HeadingColor={})),function(HeadingSize){HeadingSize[HeadingSize.sm=0]="sm",HeadingSize[HeadingSize.md=1]="md",HeadingSize[HeadingSize.lg=2]="lg"}(HeadingSize||(HeadingSize={}))},"./packages/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>text_Text});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={xxs:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    line-height: 1.5em;
  `,xs:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    line-height: 1.5em;
  `,sm:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.sm}px;
    line-height: 1.5em;
  `,md:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.md}px;
    line-height: 1.5em;
  `,lg:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.lg}px;
    line-height: 1.4em;
  `,xl:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xl}px;
    line-height: 1.4em;
  `},getTextColor=props=>{const{theme:{colors},color}=props;return{default:colors.text,secondary:colors.textSecondary,primary:colors.primary,warning:colors.warning,error:colors.error,success:colors.success}[color]},getTextDecoration=props=>{const{underline,strikeThrough}=props;switch(!0){case underline:return"underline";case strikeThrough:return"line-through";default:return"none"}},TextStyle=styled_components_browser_esm.ZP.p`
  ${({weight,italic,size})=>styled_components_browser_esm.iv`
    font-style: ${italic?"italic":"normal"};
    font-weight: ${weight};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`;function Text(props,ref){const{size="md",weight=400,color="default",strong,...rest}=props;return(0,jsx_runtime.jsx)(TextStyle,{size,weight:strong?700:weight,color,ref,...rest})}const text_Text=(0,react.forwardRef)(Text)},"./packages/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xv:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.Z});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/text/Text.tsx");__webpack_require__("./packages/text/types.ts")},"./packages/text/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TextColor,TextSize;__webpack_require__.d(__webpack_exports__,{d:()=>TextColor,y:()=>TextSize}),function(TextColor){TextColor[TextColor.default=0]="default",TextColor[TextColor.secondary=1]="secondary",TextColor[TextColor.primary=2]="primary",TextColor[TextColor.warning=3]="warning",TextColor[TextColor.error=4]="error",TextColor[TextColor.success=5]="success"}(TextColor||(TextColor={})),function(TextSize){TextSize[TextSize.xxs=0]="xxs",TextSize[TextSize.xs=1]="xs",TextSize[TextSize.sm=2]="sm",TextSize[TextSize.md=3]="md",TextSize[TextSize.lg=4]="lg",TextSize[TextSize.xl=5]="xl"}(TextSize||(TextSize={}))}}]);