"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[1396],{"./packages/input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccentColor:()=>AccentColor,Basic:()=>Basic,ErrorsOverlapCase:()=>ErrorsOverlapCase,Label:()=>Label,Small:()=>Small,WithButton:()=>WithButton,WithDecorators:()=>WithDecorators,WithError:()=>WithError,WithIdenticon:()=>WithIdenticon,WithSuccess:()=>WithSuccess,WithWarning:()=>WithWarning,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,ref9,ref10,ref11,ref12,ref13,ref14,ref15,ref16,ref17,ref18,ref19,ref20,ref21,ref22,ref23,ref24,ref25,ref26,ref27,ref28,ref29,ref30,ref31,ref32,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_icons_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/index.tsx"),_block_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/block/index.ts"),_button_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/button/index.ts"),_identicon_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/identicon/index.ts"),_Input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/input/Input.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/input/types.ts"),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/index.js"),_modal_Modal__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/modal/Modal.tsx");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Input__WEBPACK_IMPORTED_MODULE_5__.Z,title:"Controls/Input",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props});Basic.args={placeholder:"Amount",label:"",type:"text"},Basic.argTypes={type:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.n$),control:"inline-radio"},color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Sl),control:"inline-radio"}};const Small=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props});Small.args={variant:"small",placeholder:"Amount"},Small.argTypes={variant:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Jf),control:"inline-radio"}};const Label=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props});Label.args={label:"Email address"},Label.argTypes={color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Sl),control:"inline-radio"}};const EthIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP)(_icons_index__WEBPACK_IMPORTED_MODULE_1__.Eth)`
  fill: var(--lido-color-text);
`,MaxButton=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_3__.zx,{variant:"translucent",size:"xxs",style:{marginRight:"-4px"},children:"MAX"}),WithDecorators=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EthIcon,{}),rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaxButton,{}),...props});WithDecorators.args={label:"Amount"},WithDecorators.argTypes={color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Sl),control:"inline-radio"}};const WithIdenticon=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props,value,onChange:event=>{var ref;setValue(event.currentTarget.value),null===(ref=props.onChange)||void 0===ref||ref.call(props,event)},rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_identicon_index__WEBPACK_IMPORTED_MODULE_4__.bK,{address:String(null!=value?value:"")})})};WithIdenticon.args={placeholder:"Ethereum address"};const WithButton=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_3__.zx,{size:"sm",style:{marginRight:"-10px"},disabled:props.disabled,children:"Subscribe"}),...props});WithButton.args={fullwidth:!0,label:"Email address"},WithButton.argTypes={color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Sl),control:"inline-radio"}};const WithError=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props});WithError.args={fullwidth:!0,defaultValue:"info@lido.",label:"Email address",error:"Email is invalid"},WithError.argTypes={color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Sl),control:"inline-radio"}};const WithWarning=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props});WithWarning.args={fullwidth:!0,defaultValue:"10",label:"Token amount",warning:"Amount may be insufficient."};const Success=styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP.span`
  font-weight: 600;
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  color: var(--lido-color-success);
`,WithSuccess=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Success,{children:"Subscribed"}),...props});WithSuccess.args={fullwidth:!0,disabled:!0,defaultValue:"info@lido.fi",success:"Thank you for subscribing! We will notify you once we kick off our platform."};const AccentColor=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_block_index__WEBPACK_IMPORTED_MODULE_2__.gO,{color:"accent",style:{display:"flex",background:"linear-gradient(60deg, #413e58 20%, #30363f 100%)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props,value,onChange:event=>{var ref;setValue(event.currentTarget.value),null===(ref=props.onChange)||void 0===ref||ref.call(props,event)},rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_identicon_index__WEBPACK_IMPORTED_MODULE_4__.bK,{address:String(null!=value?value:"")}),color:"accent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_3__.zx,{style:{marginLeft:12,flexShrink:0},children:"Calculate"})]})};AccentColor.args={fullwidth:!0,label:"",placeholder:"Ethereum address"};const ErrorsOverlapCase=props=>{const{state,handleOpen,handleClose}=(props=>{const{onClose,onBack}=props,[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(!1);return{state,handleOpen:(0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((()=>setState(!0)),[]),handleClose:(0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((()=>{setState(!1),null==onClose||onClose()}),[onClose]),handleBack:(0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((()=>{null==onBack||onBack()}),[onBack])}})(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_3__.zx,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modal_Modal__WEBPACK_IMPORTED_MODULE_8__.Z,{open:state,onClose:handleClose,title:"Modal Title",subtitle:"",center:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})]})]})};ErrorsOverlapCase.args={fullwidth:!0,label:"Email address",error:"Email is invalid"},ErrorsOverlapCase.argTypes={color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_6__.Sl),control:"inline-radio"}},Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Input {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},Small.parameters={...Small.parameters,docs:{...null===(ref3=Small.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <Input {...props} />",...null===(ref4=Small.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},Label.parameters={...Label.parameters,docs:{...null===(ref6=Label.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => <Input {...props} />",...null===(ref7=Label.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}},WithDecorators.parameters={...WithDecorators.parameters,docs:{...null===(ref9=WithDecorators.parameters)||void 0===ref9?void 0:ref9.docs,source:{originalSource:"props => <Input leftDecorator={<EthIcon />} rightDecorator={<MaxButton />} {...props} />",...null===(ref10=WithDecorators.parameters)||void 0===ref10||null===(ref11=ref10.docs)||void 0===ref11?void 0:ref11.source}}},WithIdenticon.parameters={...WithIdenticon.parameters,docs:{...null===(ref12=WithIdenticon.parameters)||void 0===ref12?void 0:ref12.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState('');\n  return <Input {...props} value={value} onChange={event => {\n    setValue(event.currentTarget.value);\n    props.onChange?.(event);\n  }} rightDecorator={<Identicon address={String(value ?? '')} />} />;\n}",...null===(ref13=WithIdenticon.parameters)||void 0===ref13||null===(ref14=ref13.docs)||void 0===ref14?void 0:ref14.source}}},WithButton.parameters={...WithButton.parameters,docs:{...null===(ref15=WithButton.parameters)||void 0===ref15?void 0:ref15.docs,source:{originalSource:"props => <Input rightDecorator={<Button size='sm' style={{\n  marginRight: '-10px'\n}} disabled={props.disabled}>\n        Subscribe\n      </Button>} {...props} />",...null===(ref16=WithButton.parameters)||void 0===ref16||null===(ref17=ref16.docs)||void 0===ref17?void 0:ref17.source}}},WithError.parameters={...WithError.parameters,docs:{...null===(ref18=WithError.parameters)||void 0===ref18?void 0:ref18.docs,source:{originalSource:"props => <Input {...props} />",...null===(ref19=WithError.parameters)||void 0===ref19||null===(ref20=ref19.docs)||void 0===ref20?void 0:ref20.source}}},WithWarning.parameters={...WithWarning.parameters,docs:{...null===(ref21=WithWarning.parameters)||void 0===ref21?void 0:ref21.docs,source:{originalSource:"props => <Input {...props} />",...null===(ref22=WithWarning.parameters)||void 0===ref22||null===(ref23=ref22.docs)||void 0===ref23?void 0:ref23.source}}},WithSuccess.parameters={...WithSuccess.parameters,docs:{...null===(ref24=WithSuccess.parameters)||void 0===ref24?void 0:ref24.docs,source:{originalSource:"props => <Input rightDecorator={<Success>Subscribed</Success>} {...props} />",...null===(ref25=WithSuccess.parameters)||void 0===ref25||null===(ref26=ref25.docs)||void 0===ref26?void 0:ref26.source}}},AccentColor.parameters={...AccentColor.parameters,docs:{...null===(ref27=AccentColor.parameters)||void 0===ref27?void 0:ref27.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState('');\n  return <Block color='accent' style={{\n    display: 'flex',\n    background: 'linear-gradient(60deg, #413e58 20%, #30363f 100%)'\n  }}>\n      <Input {...props} value={value} onChange={event => {\n      setValue(event.currentTarget.value);\n      props.onChange?.(event);\n    }} rightDecorator={<Identicon address={String(value ?? '')} />} color='accent' />\n      <Button style={{\n      marginLeft: 12,\n      flexShrink: 0\n    }}>\n        Calculate\n      </Button>\n    </Block>;\n}",...null===(ref28=AccentColor.parameters)||void 0===ref28||null===(ref29=ref28.docs)||void 0===ref29?void 0:ref29.source}}},ErrorsOverlapCase.parameters={...ErrorsOverlapCase.parameters,docs:{...null===(ref30=ErrorsOverlapCase.parameters)||void 0===ref30?void 0:ref30.docs,source:{originalSource:"props => {\n  const {\n    state,\n    handleOpen,\n    handleClose\n  } = useModal(props);\n  return <>\n      <Input {...props} />\n      <br />\n      <br />\n      <Input {...props} />\n      <br />\n      <br />\n      <Button onClick={handleOpen}>Show modal</Button>\n      <Modal open={state} onClose={handleClose} title='Modal Title' subtitle='' center={false}>\n        <Input {...props} />\n        <br />\n        <br />\n        <Input {...props} />\n        <br />\n        <br />\n        <br />\n      </Modal>\n    </>;\n}",...null===(ref31=ErrorsOverlapCase.parameters)||void 0===ref31||null===(ref32=ref31.docs)||void 0===ref32?void 0:ref32.source}}}},"./packages/block/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>block_Block});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={foreground:styled_components_browser_esm.iv`
    background: var(--lido-color-foreground);
    color: var(--lido-color-textSecondary);
  `,background:styled_components_browser_esm.iv`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,accent:styled_components_browser_esm.iv`
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
  `},variants={flat:styled_components_browser_esm.iv`
    box-shadow: none;
  `,shadow:styled_components_browser_esm.iv`
    box-shadow: ${({theme})=>theme.boxShadows.lg}
      var(--lido-colors-shadowLight);
  `},paddings=styled_components_browser_esm.iv`
  padding: ${({theme})=>theme.spaceMap.xxl}px;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
  }
`,BlockStyle=styled_components_browser_esm.ZP.div`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
  margin: 0;

  ${({$paddingLess})=>!$paddingLess&&paddings}

  ${({$variant})=>variants[$variant]}
  ${({$color})=>colors[$color]}
`;function Block(props,ref){const{color="foreground",variant="flat",paddingLess=!1,...rest}=props;return(0,jsx_runtime.jsx)(BlockStyle,{$color:color,$variant:variant,$paddingLess:paddingLess,ref,...rest})}const block_Block=(0,react.forwardRef)(Block)},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gO:()=>_Block__WEBPACK_IMPORTED_MODULE_0__.Z});var _Block__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/block/Block.tsx");__webpack_require__("./packages/block/types.tsx")},"./packages/block/types.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var BlockVariant,BlockColor;__webpack_require__.d(__webpack_exports__,{S:()=>BlockColor,p:()=>BlockVariant}),function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))},"./packages/identicon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bK:()=>_Identicon__WEBPACK_IMPORTED_MODULE_1__.Z,pv:()=>_IdenticonBadge__WEBPACK_IMPORTED_MODULE_0__.Z});var _IdenticonBadge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/identicon/IdenticonBadge.tsx"),_Identicon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/identicon/Identicon.tsx");__webpack_require__("./packages/identicon/types.ts")},"./packages/input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_InputStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputStyles.ts"),_LabelStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/input/LabelStyles.ts");function Input(props,ref){const{label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",leftDecorator,rightDecorator,className,style,variant="default",color="default",wrapperRef,children,...rest}=props,{id,disabled=!1}=props,wrapperProps={className,style},hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success,hasLeftDecorator=!!leftDecorator,hasRightDecorator=!!rightDecorator;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.GR,{$disabled:disabled,$fullwidth:fullwidth,htmlFor:id,ref:wrapperRef,...wrapperProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.oT,{$color:color,$variant:variant,$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,children:[hasLeftDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.fR,{children:leftDecorator}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Xe,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.x2,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,type:"text",ref,...rest}),hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyles__WEBPACK_IMPORTED_MODULE_3__.ou,{$color:color,children:label})]}),hasRightDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Ty,{children:rightDecorator})]}),hasErrorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"success",$bordered:!0,children:success})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Input)},"./packages/input/InputStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GR:()=>InputWrapperStyle,Qz:()=>InputMessageStyle,Ty:()=>InputRightDecoratorStyle,Xe:()=>InputControlWrapperStyle,fR:()=>InputLeftDecoratorStyle,mE:()=>TextareaStyle,oT:()=>InputContentStyle,x2:()=>InputStyle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_LabelStyles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/input/LabelStyles.ts");const statesCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &:hover {
    z-index: 1;
  }

  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.fl}
    }
  }
`,activeCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &,
  &:hover,
  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.fl}
    }
  }
`,errorCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-error);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.NL}
    }
  }
`,warningCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-warning);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.PN}
    }
  }
`,wrapperColors={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-controlBg);
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    ${({$disabled})=>$disabled?"background: var(--lido-color-background);":"\n          &:hover {\n            border-color: var(--lido-color-borderHover);\n          }\n    "};
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-accentControlBg);
    border-color: var(--lido-color-accentBorder);
    color: var(--lido-color-accentText);

    ${({$disabled})=>$disabled?"background: var(--lido-color-controlBg);":"\n          &:hover {\n            border-color: var(--lido-color-accentBorderHover);\n          }\n    "};
  `},decoratorCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`,InputLeftDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  ${decoratorCSS}
  padding-right: 16px;
`,InputRightDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  ${decoratorCSS}
  padding-left: 16px;
`,InputWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.label`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  box-sizing: border-box;
  cursor: ${({$disabled})=>$disabled?"default":"text"};
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};
`,contentVariants={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    padding-top: 17px;
    padding-bottom: 17px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      margin-top: -17px;
      margin-bottom: -17px;
    }
  `,small:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    padding-top: 9px;
    padding-bottom: 9px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      padding-top: -9px;
      padding-bottom: -9px;
    }
  `},InputContentStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  border: 1px solid;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  transition: border-color ${({theme})=>theme.duration.fast} ease;

  ${({$variant})=>contentVariants[$variant]};
  ${({$color})=>wrapperColors[$color]};
  ${({$disabled})=>$disabled?"":statesCSS};
  ${({$active})=>$active?activeCSS:""};
  ${({$warning})=>$warning?warningCSS:""};
  ${({$error})=>$error?errorCSS:""};
`,InputControlWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`,labeledCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &:not(:focus):placeholder-shown {
    & + ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.gS}
    }

    &::placeholder {
      opacity: 0;
    }
  }
`,inputColors={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    color: var(--lido-color-text);

    &:disabled {
      color: var(--lido-color-textSecondary);
    }

    &::placeholder {
      color: var(--lido-color-textSecondary);
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--lido-color-controlBg) inset !important;
      color: var(--lido-color-text) !important;
      -webkit-text-fill-color: var(--lido-color-text) !important;
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-text) !important;
      -webkit-text-fill-color: var(--lido-color-text) !important;
    }
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    color: var(--lido-color-accentText);
    opacity: 1;

    &:disabled {
      color: var(--lido-color-accentText);
      opacity: 0.5;
    }

    &::placeholder {
      color: var(--lido-color-accentText);
      opacity: 0.5;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--lido-color-accentControlBg) inset !important;
      color: var(--lido-color-accentContrast) !important;
      -webkit-text-fill-color: var(--lido-color-accentContrast) !important;
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-accentContrast) !important;
      -webkit-text-fill-color: var(--lido-color-accentContrast) !important;
    }
  `},InputStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.input`
  width: 100%;
  font-family: inherit;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.43em;
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  position: relative;
  top: ${({$labeled})=>$labeled?8:0}px;

  &::placeholder {
    transition: opacity ${({theme})=>theme.duration.fast} ease;
  }

  ${({$color})=>inputColors[$color]}
  ${({$labeled})=>$labeled?labeledCSS:""}
`,TextareaStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(InputStyle).attrs({as:"textarea"})`
  resize: none;
`,messageVariants={error:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-error);
    color: var(--lido-color-errorContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,warning:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-warning);
    color: var(--lido-color-warningContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,success:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-success);
    color: var(--lido-color-successContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `},InputMessageStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  margin-top: ${({$bordered})=>$bordered?5:6}px;
  left: ${({$bordered})=>$bordered?-1:0}px;
  position: absolute;
  top: 100%;
  line-height: 1.6em;
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
  padding: 6px 10px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  max-width: ${({$bordered})=>$bordered?"calc(100% + 2px)":"100%"};
  z-index: 3;

  ${({$variant})=>messageVariants[$variant]}
`},"./packages/input/LabelStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NL:()=>labelErrorCSS,PN:()=>labelWarningCSS,fl:()=>labelFocusCSS,gS:()=>labelEmptyValueCSS,ie:()=>TextareaLabelStyle,ou:()=>InputLabelStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={default:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    color: var(--lido-color-textSecondary);
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    color: var(--lido-color-accentContrastSecondary);
  `},labelEmptyValueCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  ${({$color})=>colors[$color]}

  transform: scale(1);
  opacity: 0.5;
`,labelFilledValueCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  ${({$color})=>colors[$color]}

  transform: translateY(-14px) scale(0.75);
  opacity: 1;
`,labelFocusCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  color: var(--lido-color-primary);
  opacity: 1;
`,labelErrorCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  color: var(--lido-color-error);
`,labelWarningCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  color: var(--lido-color-warning);
`,InputLabelStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 1em;
  line-height: 1.25em;
  margin: -0.625em 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: inherit;
  transform-origin: 0% 100%;
  transition: transform ${({theme})=>theme.duration.fast} ease;
  transition-property: transform, opacity, color;
  ${labelFilledValueCSS};
`,TextareaLabelStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(InputLabelStyle)`
  top: 10px;
`},"./packages/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jf:()=>InputVariant,Sl:()=>InputColor,n$:()=>InputType});var InputMessageVariant,InputType,InputVariant,InputColor;__webpack_require__("./node_modules/react/index.js");!function(InputMessageVariant){InputMessageVariant[InputMessageVariant.error=0]="error",InputMessageVariant[InputMessageVariant.warning=1]="warning",InputMessageVariant[InputMessageVariant.success=2]="success"}(InputMessageVariant||(InputMessageVariant={})),function(InputType){InputType[InputType.text=0]="text",InputType[InputType.password=1]="password",InputType[InputType.number=2]="number",InputType[InputType.email=3]="email",InputType[InputType.search=4]="search",InputType[InputType.tel=5]="tel",InputType[InputType.url=6]="url"}(InputType||(InputType={})),function(InputVariant){InputVariant[InputVariant.small=0]="small",InputVariant[InputVariant.default=1]="default"}(InputVariant||(InputVariant={})),function(InputColor){InputColor[InputColor.default=0]="default",InputColor[InputColor.accent=1]="accent"}(InputColor||(InputColor={}))}}]);