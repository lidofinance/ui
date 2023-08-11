"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9699],{"./packages/text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/text/Text.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/text/types.ts");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Text__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Typography/Text",args:{children:"Example Text",color:"default",size:"md",underline:!1,strikeThrough:!1,strong:!1,italic:!1},argTypes:{children:{control:"text"},color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.d),control:"inline-radio"},size:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.y),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Text {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>text_Text});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={xxs:styled_components_browser_esm.iv`
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
`;function Text(props,ref){const{size="md",weight=400,color="default",strong,...rest}=props;return(0,jsx_runtime.jsx)(TextStyle,{size,weight:strong?700:weight,color,ref,...rest})}const text_Text=(0,react.forwardRef)(Text)},"./packages/text/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TextColor,TextSize;__webpack_require__.d(__webpack_exports__,{d:()=>TextColor,y:()=>TextSize}),function(TextColor){TextColor[TextColor.default=0]="default",TextColor[TextColor.secondary=1]="secondary",TextColor[TextColor.primary=2]="primary",TextColor[TextColor.warning=3]="warning",TextColor[TextColor.error=4]="error",TextColor[TextColor.success=5]="success"}(TextColor||(TextColor={})),function(TextSize){TextSize[TextSize.xxs=0]="xxs",TextSize[TextSize.xs=1]="xs",TextSize[TextSize.sm=2]="sm",TextSize[TextSize.md=3]="md",TextSize[TextSize.lg=4]="lg",TextSize[TextSize.xl=5]="xl"}(TextSize||(TextSize={}))}}]);