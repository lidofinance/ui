"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[4461],{"./packages/service-page/ServicePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>ServicePage_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const ServicePageStyle=styled_components_wrapper.ZP.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`,ServicePageInsideStyle=styled_components_wrapper.ZP.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 32px;
  max-width: 560px;
`;var heading=__webpack_require__("./packages/heading/index.tsx"),packages_text=__webpack_require__("./packages/text/index.ts");const ServicePage=(0,react.forwardRef)((({title,children,...rest},ref)=>(0,jsx_runtime.jsx)(ServicePageStyle,{...rest,ref,children:(0,jsx_runtime.jsxs)(ServicePageInsideStyle,{children:[(0,jsx_runtime.jsx)(heading.H1,{children:title}),(0,jsx_runtime.jsx)(packages_text.xv,{color:"secondary",children})]})})));var ref,ref1,ref2;ServicePage.displayName="ServicePage";const ServicePage_stories={component:ServicePage,title:"Layout/ServicePage",args:{title:"404",children:"Page Not Found"}},Basic=props=>(0,jsx_runtime.jsx)(ServicePage,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <ServicePage {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,X6:()=>Heading,pu:()=>HeadingColor,Gm:()=>HeadingSize});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const sizes={sm:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xl}px;
    line-height: 1.3em;
  `,md:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxl}px;
    line-height: 1.3em;
  `,lg:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxxl}px;
    line-height: 1.3em;
  `},commonCSS=styled_components_wrapper.iv`
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: ${props=>({text:"var(--lido-color-text)",secondary:"var(--lido-color-textSecondary)"}[props.$color])};
`,HeadingStyle=styled_components_wrapper.ZP.div`
  ${commonCSS}
  ${props=>sizes[props.$size]}
`,H1Style=styled_components_wrapper.ZP.h1`
  ${commonCSS}
  ${sizes.lg}
`,H2Style=styled_components_wrapper.ZP.h2`
  ${commonCSS}
  ${sizes.md}
`,H3Style=styled_components_wrapper.ZP.h3`
  ${commonCSS}
  ${sizes.sm}
`,Heading=(0,react.forwardRef)((({size="md",color="text",...rest},ref)=>(0,jsx_runtime.jsx)(HeadingStyle,{$size:size,$color:color,ref,...rest})));Heading.displayName="Heading";const H1=(0,react.forwardRef)((({color="text",...rest},ref)=>(0,jsx_runtime.jsx)(H1Style,{$color:color,ref,...rest})));H1.displayName="H1";const H2=(0,react.forwardRef)((({color="text",...rest},ref)=>(0,jsx_runtime.jsx)(H2Style,{$color:color,ref,...rest})));H2.displayName="H2";const H3=(0,react.forwardRef)((({color="text",...rest},ref)=>(0,jsx_runtime.jsx)(H3Style,{$color:color,ref,...rest})));var HeadingColor,HeadingSize;H3.displayName="H3",function(HeadingColor){HeadingColor[HeadingColor.text=0]="text",HeadingColor[HeadingColor.secondary=1]="secondary"}(HeadingColor||(HeadingColor={})),function(HeadingSize){HeadingSize[HeadingSize.sm=0]="sm",HeadingSize[HeadingSize.md=1]="md",HeadingSize[HeadingSize.lg=2]="lg"}(HeadingSize||(HeadingSize={}))},"./packages/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xv:()=>Text,d9:()=>TextColor,yH:()=>TextSize});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const sizes={xxs:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    line-height: 1.5em;
  `,xs:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    line-height: 1.5em;
  `,sm:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.sm}px;
    line-height: 1.5em;
  `,md:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.md}px;
    line-height: 1.5em;
  `,lg:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.lg}px;
    line-height: 1.4em;
  `,xl:styled_components_wrapper.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xl}px;
    line-height: 1.4em;
  `},getTextColor=({theme:{colors},color})=>({default:colors.text,secondary:colors.textSecondary,primary:colors.primary,warning:colors.warning,error:colors.error,success:colors.success}[color]),getTextDecoration=({underline,strikeThrough})=>{switch(!0){case underline:return"underline";case strikeThrough:return"line-through";default:return"none"}},TextStyle=styled_components_wrapper.ZP.p`
  ${({weight,italic,size})=>styled_components_wrapper.iv`
    font-style: ${italic?"italic":"normal"};
    font-weight: ${weight};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`,Text=(0,react.forwardRef)((({size="md",weight=400,color="default",strong,...rest},ref)=>(0,jsx_runtime.jsx)(TextStyle,{size,weight:strong?700:weight,color,ref,...rest})));var TextColor,TextSize;Text.displayName="Text",function(TextColor){TextColor[TextColor.default=0]="default",TextColor[TextColor.secondary=1]="secondary",TextColor[TextColor.primary=2]="primary",TextColor[TextColor.warning=3]="warning",TextColor[TextColor.error=4]="error",TextColor[TextColor.success=5]="success"}(TextColor||(TextColor={})),function(TextSize){TextSize[TextSize.xxs=0]="xxs",TextSize[TextSize.xs=1]="xs",TextSize[TextSize.sm=2]="sm",TextSize[TextSize.md=3]="md",TextSize[TextSize.lg=4]="lg",TextSize[TextSize.xl=5]="xl"}(TextSize||(TextSize={}))}}]);