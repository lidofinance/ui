"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[1553],{"./packages/checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Uncontrolled:()=>Uncontrolled,WithLabel:()=>WithLabel,default:()=>Checkbox_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./packages/icons/index.tsx");const CheckboxWrapperStyle=styled_components_browser_esm.ZP.label`
  flex-shrink: 0;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  line-height: 0;
  align-items: center;
`,CheckboxIconStyle=(0,styled_components_browser_esm.ZP)(icons.Check)`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  transition:
    box-shadow 0.1s ease,
    background-color 0.1s ease;
  fill: var(--lido-color-primaryContrast);
`,CheckboxInputStyle=styled_components_browser_esm.ZP.input`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:not(:disabled) ~ * {
    cursor: pointer;
  }

  label:hover &:not(:disabled):not(:checked) + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px var(--lido-color-borderHover);
  }

  & + ${CheckboxIconStyle} {
    background-color: var(--lido-color-controlBg);
    box-shadow: inset 0 0 0 1px var(--lido-color-border);

    path {
      opacity: 0;
    }
  }

  &:checked + ${CheckboxIconStyle} {
    background-color: var(--lido-color-primary);
    box-shadow: none;

    path {
      opacity: 1;
    }
  }

  &:disabled + ${CheckboxIconStyle} {
    opacity: 0.5;
    cursor: default;
  }

  &:focus-visible + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px var(--lido-color-primary);
  }

  &:focus-visible:checked + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px var(--lido-color-borderHover);
  }
`;var packages_text=__webpack_require__("./packages/text/index.ts"),box=__webpack_require__("./packages/box/index.ts");function Checkbox({className,style,wrapperRef,disabled,children,label,...rest},inputRef){return(0,jsx_runtime.jsxs)(CheckboxWrapperStyle,{className,style,ref:wrapperRef,children:[(0,jsx_runtime.jsx)(CheckboxInputStyle,{type:"checkbox",disabled,ref:inputRef,...rest}),(0,jsx_runtime.jsx)(CheckboxIconStyle,{}),label&&(0,jsx_runtime.jsx)(box.x,{ml:8,children:(0,jsx_runtime.jsx)(packages_text.xv,{size:"xxs",color:disabled?"secondary":"default",children:label})})]})}const checkbox_Checkbox=(0,react.forwardRef)(Checkbox);var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8;const Checkbox_stories={component:checkbox_Checkbox,title:"Controls/Checkbox",args:{disabled:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Uncontrolled=props=>(0,jsx_runtime.jsx)(checkbox_Checkbox,{...props});Uncontrolled.args={defaultChecked:!1};const Controlled=props=>(0,jsx_runtime.jsx)(checkbox_Checkbox,{...props});Controlled.args={checked:!0};const WithLabel=props=>(0,jsx_runtime.jsx)(checkbox_Checkbox,{...props});WithLabel.args={label:"Label"},Uncontrolled.parameters={...Uncontrolled.parameters,docs:{...null===(ref=Uncontrolled.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Checkbox {...props} />",...null===(ref1=Uncontrolled.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},Controlled.parameters={...Controlled.parameters,docs:{...null===(ref3=Controlled.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => {\n  return <Checkbox {...props} />;\n}",...null===(ref4=Controlled.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...null===(ref6=WithLabel.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => {\n  return <Checkbox {...props} />;\n}",...null===(ref7=WithLabel.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}}},"./packages/box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>box_Box});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),withStyledSystem=__webpack_require__("./packages/styled-system/withStyledSystem.tsx");const Box=styled_components_browser_esm.ZP.div``,box_Box=(0,withStyledSystem.Z)(Box)},"./packages/box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.Z});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/box/Box.tsx")},"./packages/styled-system/withStyledSystem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function withStyledSystem(Component){return(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Component).withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_0__.ZP})((0,styled_system__WEBPACK_IMPORTED_MODULE_1__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_1__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_1__.$_,styled_system__WEBPACK_IMPORTED_MODULE_1__.cp,styled_system__WEBPACK_IMPORTED_MODULE_1__.bK,styled_system__WEBPACK_IMPORTED_MODULE_1__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.eC,styled_system__WEBPACK_IMPORTED_MODULE_1__.Oq,styled_system__WEBPACK_IMPORTED_MODULE_1__.Cg,styled_system__WEBPACK_IMPORTED_MODULE_1__.FK,styled_system__WEBPACK_IMPORTED_MODULE_1__.AF))}},"./packages/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>text_Text});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={xxs:styled_components_browser_esm.iv`
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
  `},getTextColor=({theme:{colors},color})=>({default:colors.text,secondary:colors.textSecondary,primary:colors.primary,warning:colors.warning,error:colors.error,success:colors.success}[color]),getTextDecoration=({underline,strikeThrough})=>{switch(!0){case underline:return"underline";case strikeThrough:return"line-through";default:return"none"}},TextStyle=styled_components_browser_esm.ZP.p`
  ${({weight,italic,size})=>styled_components_browser_esm.iv`
    font-style: ${italic?"italic":"normal"};
    font-weight: ${weight};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`;function Text({size="md",weight=400,color="default",strong,...rest},ref){return(0,jsx_runtime.jsx)(TextStyle,{size,weight:strong?700:weight,color,ref,...rest})}const text_Text=(0,react.forwardRef)(Text)},"./packages/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xv:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.Z});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/text/Text.tsx");__webpack_require__("./packages/text/types.ts")},"./packages/text/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TextColor,TextSize;__webpack_require__.d(__webpack_exports__,{d:()=>TextColor,y:()=>TextSize}),function(TextColor){TextColor[TextColor.default=0]="default",TextColor[TextColor.secondary=1]="secondary",TextColor[TextColor.primary=2]="primary",TextColor[TextColor.warning=3]="warning",TextColor[TextColor.error=4]="error",TextColor[TextColor.success=5]="success"}(TextColor||(TextColor={})),function(TextSize){TextSize[TextSize.xxs=0]="xxs",TextSize[TextSize.xs=1]="xs",TextSize[TextSize.sm=2]="sm",TextSize[TextSize.md=3]="md",TextSize[TextSize.lg=4]="lg",TextSize[TextSize.xl=5]="xl"}(TextSize||(TextSize={}))}}]);