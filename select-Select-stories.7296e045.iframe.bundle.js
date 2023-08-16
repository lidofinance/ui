"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[7828],{"./packages/select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icons:()=>Icons,Labeled:()=>Labeled,OnlyIcon:()=>OnlyIcon,Small:()=>Small,WithInput:()=>WithInput,default:()=>Select_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons=__webpack_require__("./packages/icons/index.tsx"),Input=__webpack_require__("./packages/input/Input.tsx"),InputGroup=__webpack_require__("./packages/input/InputGroup.tsx"),types=(__webpack_require__("./packages/input/SliderInput.tsx"),__webpack_require__("./packages/input/OptionsSlider.tsx"),__webpack_require__("./packages/input/Textarea.tsx"),__webpack_require__("./packages/input/types.ts")),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const smallCSS=styled_components_browser_esm.iv`
  input {
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    line-height: 1.7em;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 800;
  }
`,SelectWrapperStyle=(0,styled_components_browser_esm.ZP)(Input.Z)`
  &,
  input {
    user-select: none;
    cursor: ${({disabled})=>disabled?"default":"pointer"};

    &::selection {
      background: transparent;
    }
  }

  input {
    appearance: none;
    overflow: hidden;
  }

  ${({variant})=>"small"===variant?smallCSS:""}
`,commonCSS=styled_components_browser_esm.iv`
  transform: rotate(${({$opened})=>$opened?180:0}deg);
  transition: transform ${({theme})=>theme.duration.norm} ease;
  opacity: ${({$disabled})=>$disabled?.5:1};
`,SelectArrowBigStyle=(0,styled_components_browser_esm.ZP)(icons.ArrowBottom)`
  ${commonCSS};
  fill: var(--lido-color-textSecondary);
`,SelectArrowSmallStyle=styled_components_browser_esm.ZP.div`
  ${commonCSS};
  color: var(--lido-color-text);

  border: 3px solid currentColor;
  border-bottom-width: 0px;
  border-left-color: transparent;
  border-right-color: transparent;
`,SelectArrow=({arrow,disabled=!1,opened})=>{const commonProps={$opened:opened,$disabled:disabled};return"default"===arrow?(0,jsx_runtime.jsx)(SelectArrowBigStyle,{...commonProps}):"small"===arrow?(0,jsx_runtime.jsx)(SelectArrowSmallStyle,{...commonProps}):null};var hooks=__webpack_require__("./packages/hooks/index.ts"),PopupMenu=__webpack_require__("./packages/popup-menu/PopupMenu.tsx"),PopupMenuItem=__webpack_require__("./packages/popup-menu/PopupMenuItem.tsx"),react_is=(__webpack_require__("./packages/popup-menu/types.ts"),__webpack_require__("./node_modules/react-is/index.js"));function Select({wrapperRef:externalWrapperRef,anchorRef:externalAnchorRef,arrow="default",variant,value,defaultValue,disabled,children,onClick,onKeyDown,onChange,...rest},ref){const localAnchorRef=(0,react.useRef)(null),wrapperRef=(0,hooks.qq)([localAnchorRef,externalWrapperRef]),anchorRef=externalAnchorRef||localAnchorRef,{opened,options,title,handleClick,handleClose,handleKeyDown}=(({value,defaultValue,disabled,onClick,onChange,onKeyDown,children})=>{const[opened,setOpened]=(0,react.useState)(!1),handleOpen=(0,react.useCallback)((()=>{disabled||setOpened(!0)}),[disabled]),handleClick=(0,react.useCallback)((event=>{handleOpen(),null==onClick||onClick(event)}),[handleOpen,onClick]),handleClose=(0,react.useCallback)((()=>{setOpened(!1)}),[]),handleChange=(0,react.useCallback)((value=>{handleClose(),setLocalValue(value),null==onChange||onChange(value)}),[handleClose,onChange]),handleKeyDown=(0,react.useCallback)((event=>{["ArrowDown","ArrowUp","Enter"," "].includes(event.key)&&(event.preventDefault(),handleOpen()),null==onKeyDown||onKeyDown(event)}),[handleOpen,onKeyDown]);var ref;const outerValue=null!==(ref=null!=value?value:defaultValue)&&void 0!==ref?ref:null,[localValue,setLocalValue]=(0,react.useState)(outerValue);(0,react.useEffect)((()=>{setLocalValue(outerValue)}),[outerValue]);const{values,options}=(0,react.useMemo)((()=>{const values=new Map,options=react.Children.map(children,(child=>{if(!(0,react_is.isElement)(child))return child;const value=child.props.value,title=String(child.props.children);return void 0===values.get(value)&&values.set(value,title),(0,react.cloneElement)(child,{active:value===localValue,onChange:handleChange})}));return{values,options}}),[localValue,children,handleChange]),selectedTitle=null!=localValue?values.get(localValue):null,defaultTitle=String(null!=localValue?localValue:"");return{handleClick,handleClose,handleKeyDown,opened,title:null!=selectedTitle?selectedTitle:defaultTitle,options}})({value,defaultValue,disabled,onClick,onChange,onKeyDown,children}),width=((opened,anchorRef)=>{const[width,setWidth]=(0,react.useState)(),updateWidth=(0,react.useCallback)((()=>{if(!anchorRef.current)return;const rect=anchorRef.current.getBoundingClientRect();setWidth(rect.width)}),[anchorRef]);return(0,react.useEffect)((()=>{if(!opened||!anchorRef.current)return;const observer=new ResizeObserver(updateWidth);return observer.observe(anchorRef.current),()=>observer.disconnect()}),[opened,anchorRef,updateWidth]),width})(opened,anchorRef);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SelectWrapperStyle,{onClick:handleClick,onKeyDown:handleKeyDown,active:opened,value:title,rightDecorator:(0,jsx_runtime.jsx)(SelectArrow,{arrow,disabled,opened}),wrapperRef,variant,...rest,ref,readOnly:!0}),(0,jsx_runtime.jsx)(PopupMenu.Z,{open:opened,variant,anchorRef,style:{minWidth:width},onClose:handleClose,children:options})]})}const select_Select=(0,react.forwardRef)(Select),SelectIconStyle=(0,styled_components_browser_esm.ZP)(select_Select)`
  input {
    width: 0;
  }
`,SelectIconDecoratorStyle=styled_components_browser_esm.ZP.span`
  margin-right: -24px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  justify-self: stretch;
`;function SelectIcon({icon,...rest},ref){return(0,jsx_runtime.jsx)(SelectIconStyle,{...rest,fullwidth:!1,arrow:"small",leftDecorator:(0,jsx_runtime.jsx)(SelectIconDecoratorStyle,{children:icon}),ref})}const select_SelectIcon=(0,react.forwardRef)(SelectIcon);function Option({value,onClick,onChange,...rest},ref){const handleClick=(0,react.useCallback)((event=>{null==onChange||onChange(value),null==onClick||onClick(event)}),[value,onChange,onClick]);return(0,jsx_runtime.jsx)(PopupMenuItem.Z,{onClick:handleClick,ref,...rest})}const select_Option=(0,react.forwardRef)(Option);var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,ref9,ref10,ref11,ref12,ref13,ref14,ref15,ref16,ref17;const Select_stories={component:select_Select,title:"Controls/Select",args:{disabled:!1,fullwidth:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>(0,jsx_runtime.jsxs)(select_Select,{...props,value:1,children:[(0,jsx_runtime.jsx)(select_Option,{value:1,children:"First"}),(0,jsx_runtime.jsx)(select_Option,{value:2,children:"Second"}),(0,jsx_runtime.jsx)(select_Option,{value:3,children:"Third"})]}),Labeled=props=>(0,jsx_runtime.jsxs)(select_Select,{...props,label:"Labeled select",value:1,children:[(0,jsx_runtime.jsx)(select_Option,{value:1,children:"First"}),(0,jsx_runtime.jsx)(select_Option,{value:2,children:"Second"}),(0,jsx_runtime.jsx)(select_Option,{value:3,children:"Third"})]}),iconsMap={eth:(0,jsx_runtime.jsx)(icons.Eth,{}),steth:(0,jsx_runtime.jsx)(icons.Steth,{}),sol:(0,jsx_runtime.jsx)(icons.Solana,{})},Icons=props=>{const[value,setValue]=(0,react.useState)("eth");return(0,jsx_runtime.jsxs)(select_Select,{...props,leftDecorator:iconsMap[value],value,onChange:value=>setValue(value),children:[(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.eth,value:"eth",children:"Ethereum (ETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.steth,value:"steth",children:"Lido (STETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.sol,value:"sol",children:"Solana (SOL)"})]})},OnlyIcon=props=>{const[value,setValue]=(0,react.useState)("eth");return(0,jsx_runtime.jsxs)(select_SelectIcon,{...props,icon:iconsMap[value],value,onChange:value=>setValue(value),children:[(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.eth,value:"eth",children:"Ethereum (ETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.steth,value:"steth",children:"Lido (STETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.sol,value:"sol",children:"Solana (SOL)"})]})};OnlyIcon.argTypes={fullwidth:{table:{disable:!0}}};const WithInput=({fullwidth,disabled,color,...rest})=>{const[value,setValue]=(0,react.useState)("eth"),ref=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(InputGroup.Z,{fullwidth,ref,children:[(0,jsx_runtime.jsxs)(select_SelectIcon,{...rest,disabled,color,anchorRef:ref,icon:iconsMap[value],value,onChange:value=>setValue(value),children:[(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.eth,value:"eth",children:"Ethereum (ETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.steth,value:"steth",children:"Lido (STETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.sol,value:"sol",children:"Solana (SOL)"})]}),(0,jsx_runtime.jsx)(Input.Z,{fullwidth,disabled,color,placeholder:"Amount"})]})};var enumObject;WithInput.argTypes={color:{options:(enumObject=types.Sl,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}};const Small=props=>(0,jsx_runtime.jsxs)(select_Select,{...props,variant:"small",arrow:"small",value:1,children:[(0,jsx_runtime.jsx)(select_Option,{value:1,children:"First"}),(0,jsx_runtime.jsx)(select_Option,{value:2,children:"Second"}),(0,jsx_runtime.jsx)(select_Option,{value:3,children:"Third"})]});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Select {...props} value={1}>\n    <Option value={1}>First</Option>\n    <Option value={2}>Second</Option>\n    <Option value={3}>Third</Option>\n  </Select>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},Labeled.parameters={...Labeled.parameters,docs:{...null===(ref3=Labeled.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <Select {...props} label='Labeled select' value={1}>\n    <Option value={1}>First</Option>\n    <Option value={2}>Second</Option>\n    <Option value={3}>Third</Option>\n  </Select>",...null===(ref4=Labeled.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},Icons.parameters={...Icons.parameters,docs:{...null===(ref6=Icons.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState<keyof typeof iconsMap>('eth');\n  return <Select {...props} leftDecorator={iconsMap[value]} value={value} onChange={value => setValue((value as keyof typeof iconsMap))}>\n      <Option leftDecorator={iconsMap.eth} value='eth'>\n        Ethereum (ETH)\n      </Option>\n      <Option leftDecorator={iconsMap.steth} value='steth'>\n        Lido (STETH)\n      </Option>\n      <Option leftDecorator={iconsMap.sol} value='sol'>\n        Solana (SOL)\n      </Option>\n    </Select>;\n}",...null===(ref7=Icons.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}},OnlyIcon.parameters={...OnlyIcon.parameters,docs:{...null===(ref9=OnlyIcon.parameters)||void 0===ref9?void 0:ref9.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState<keyof typeof iconsMap>('eth');\n  return <SelectIcon {...props} icon={iconsMap[value]} value={value} onChange={value => setValue((value as keyof typeof iconsMap))}>\n      <Option leftDecorator={iconsMap.eth} value='eth'>\n        Ethereum (ETH)\n      </Option>\n      <Option leftDecorator={iconsMap.steth} value='steth'>\n        Lido (STETH)\n      </Option>\n      <Option leftDecorator={iconsMap.sol} value='sol'>\n        Solana (SOL)\n      </Option>\n    </SelectIcon>;\n}",...null===(ref10=OnlyIcon.parameters)||void 0===ref10||null===(ref11=ref10.docs)||void 0===ref11?void 0:ref11.source}}},WithInput.parameters={...WithInput.parameters,docs:{...null===(ref12=WithInput.parameters)||void 0===ref12?void 0:ref12.docs,source:{originalSource:"({\n  fullwidth,\n  disabled,\n  color,\n  ...rest\n}) => {\n  const [value, setValue] = useState<keyof typeof iconsMap>('eth');\n  const ref = useRef<HTMLSpanElement>(null);\n  return <InputGroup fullwidth={fullwidth} ref={ref}>\n      <SelectIcon {...rest} disabled={disabled} color={color} anchorRef={ref} icon={iconsMap[value]} value={value} onChange={value => setValue((value as keyof typeof iconsMap))}>\n        <Option leftDecorator={iconsMap.eth} value='eth'>\n          Ethereum (ETH)\n        </Option>\n        <Option leftDecorator={iconsMap.steth} value='steth'>\n          Lido (STETH)\n        </Option>\n        <Option leftDecorator={iconsMap.sol} value='sol'>\n          Solana (SOL)\n        </Option>\n      </SelectIcon>\n      <Input fullwidth={fullwidth} disabled={disabled} color={color} placeholder='Amount' />\n    </InputGroup>;\n}",...null===(ref13=WithInput.parameters)||void 0===ref13||null===(ref14=ref13.docs)||void 0===ref14?void 0:ref14.source}}},Small.parameters={...Small.parameters,docs:{...null===(ref15=Small.parameters)||void 0===ref15?void 0:ref15.docs,source:{originalSource:"props => <Select {...props} variant='small' arrow='small' value={1}>\n    <Option value={1}>First</Option>\n    <Option value={2}>Second</Option>\n    <Option value={3}>Third</Option>\n  </Select>",...null===(ref16=Small.parameters)||void 0===ref16||null===(ref17=ref16.docs)||void 0===ref17?void 0:ref17.source}}}},"./packages/input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_InputStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputStyles.ts"),_LabelStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/input/LabelStyles.ts");function Input({label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",leftDecorator,rightDecorator,className,style,variant="default",color="default",id,disabled=!1,wrapperRef,children,...rest},ref){const hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success,hasLeftDecorator=!!leftDecorator,hasRightDecorator=!!rightDecorator;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.GR,{className,style,$disabled:disabled,$fullwidth:fullwidth,htmlFor:id,ref:wrapperRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.oT,{$color:color,$variant:variant,$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,children:[hasLeftDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.fR,{children:leftDecorator}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Xe,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.x2,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,type:"text",ref,...rest}),hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyles__WEBPACK_IMPORTED_MODULE_3__.ou,{$color:color,children:label})]}),hasRightDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Ty,{children:rightDecorator})]}),hasErrorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"success",$bordered:!0,children:success})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Input)},"./packages/input/InputGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>input_InputGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),InputStyles=__webpack_require__("./packages/input/InputStyles.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputGroupStyle=styled_components_browser_esm.ZP.span`
  display: inline-flex;
  position: relative;
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};
`,InputGroupContentStyle=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 100%;

  & > ${InputStyles.GR} {
    margin: 0 -1px 0 0;

    &:first-child {
      & ${InputStyles.oT} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:last-child {
      & ${InputStyles.oT} {
        margin-right: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;function InputGroup({fullwidth=!1,error,success,children,...rest},ref){const hasError=!!error,hasSuccess=!!success&&!error;return(0,jsx_runtime.jsxs)(InputGroupStyle,{$fullwidth:fullwidth,...rest,ref,children:[(0,jsx_runtime.jsx)(InputGroupContentStyle,{children}),hasError&&(0,jsx_runtime.jsx)(InputStyles.Qz,{$variant:"error",children:error}),hasSuccess&&(0,jsx_runtime.jsx)(InputStyles.Qz,{$variant:"success",children:success})]})}const input_InputGroup=(0,react.forwardRef)(InputGroup)},"./packages/input/InputStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GR:()=>InputWrapperStyle,Qz:()=>InputMessageStyle,Ty:()=>InputRightDecoratorStyle,Xe:()=>InputControlWrapperStyle,fR:()=>InputLeftDecoratorStyle,mE:()=>TextareaStyle,oT:()=>InputContentStyle,x2:()=>InputStyle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_LabelStyles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/input/LabelStyles.ts");const statesCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
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
`},"./packages/input/OptionsSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_SliderInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/input/SliderInput.tsx");const __WEBPACK_DEFAULT_EXPORT__=({options,value,onChange})=>{let sliderIndex=options.findIndex((option=>option.value===value));-1===sliderIndex&&(sliderIndex=0);const max=options.length-1,labels=options.map((({label},index)=>({value:index,label})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SliderInput__WEBPACK_IMPORTED_MODULE_1__.Z,{min:0,max,value:sliderIndex,onChange:e=>{const optionIndex=Number(e.target.value);onChange(options[optionIndex].value,optionIndex)},getLabel:optionIndex=>options[optionIndex].label,labels,borderNone:!0,onLabelClick:optionIndex=>onChange(options[optionIndex].value,optionIndex)})}},"./packages/input/SliderInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>input_SliderInput});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const RangeInputSlider=styled_components_browser_esm.ZP.input.attrs({type:"range"})`
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  position: absolute;
  margin: 0;
  top: 56px;
  left: 0;
  right: 0;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: transparent;
    border: 0;
    border-radius: 10px;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    margin-top: -8px;
    width: 18px;
    height: 18px;
    background: #ffffff;
    box-shadow:
      0 0.5px 4px rgba(0, 0, 0, 0.12),
      0 6px 13px rgba(0, 0, 0, 0.12);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    background: #00a3ff;
    border: 0;
    border-radius: 10px;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
  }

  &::-ms-track {
    background: transparent;
    color: transparent;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
`,Track=styled_components_browser_esm.ZP.div`
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--lido-color-border);

  ${props=>props.borderNone&&"\n    background: none;\n    "};

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    bottom: 0;
    left: 0;
    background: var(--lido-color-primary);
    width: ${props=>props.fillPercentage||0}%;
  }
`,Slider=styled_components_browser_esm.ZP.div`
  position: relative;
  height: 56px;
  padding: 16px 20px;
  box-sizing: border-box;

  background: var(--lido-color-accentControlBg);
  border-right: 1px solid var(--lido-color-border);
  border-left: 1px solid var(--lido-color-border);
  border-top: 1px solid var(--lido-color-border);

  ${props=>props.borderNone&&"\n    border-right: none;\n    border-left: none;\n    border-top: none;\n    "};

  border-radius: 10px;
  overflow: hidden;
`,SliderWrapper=styled_components_browser_esm.ZP.div`
  position: relative;
`,LabelContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`,Label=styled_components_browser_esm.ZP.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
`,LabelButton=styled_components_browser_esm.ZP.button`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
  cursor: pointer;
`;const input_SliderInput=function SliderInput({value,onChange,onLabelClick,min=0,max=100,step=1,minLabel,maxLabel,getLabel=val=>String(val),borderNone,labels}){const fillPercentage=(value-min)/(max-min)*100,LabelComponent=onLabelClick?LabelButton:Label,createClickHandler=value=>()=>null==onLabelClick?void 0:onLabelClick(value);return(0,jsx_runtime.jsxs)(SliderWrapper,{children:[(0,jsx_runtime.jsxs)(Slider,{borderNone,children:[getLabel(value),(0,jsx_runtime.jsx)(Track,{fillPercentage,borderNone})]}),(0,jsx_runtime.jsx)(RangeInputSlider,{value,step,onChange,min,max}),(0,jsx_runtime.jsxs)(LabelContainer,{children:[minLabel&&(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(min),children:minLabel}),null==labels?void 0:labels.map((({value,label})=>(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(value),children:label},value))),maxLabel&&(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(max),children:maxLabel})]})]})}},"./packages/input/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_InputStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputStyles.ts"),_LabelStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/input/LabelStyles.ts");function Textarea({label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",className,style,variant="default",color="default",id,disabled=!1,wrapperRef,children,...rest},ref){const hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.GR,{className,style,$disabled:disabled,$fullwidth:fullwidth,htmlFor:id,ref:wrapperRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.oT,{$color:color,$variant:variant,$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Xe,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.mE,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,ref,...rest}),hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyles__WEBPACK_IMPORTED_MODULE_3__.ie,{$color:color,children:label})]})}),hasErrorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"success",$bordered:!0,children:success})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Textarea)},"./packages/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var InputMessageVariant,InputType,InputVariant,InputColor;__webpack_require__.d(__webpack_exports__,{Jf:()=>InputVariant,Sl:()=>InputColor,n$:()=>InputType}),function(InputMessageVariant){InputMessageVariant[InputMessageVariant.error=0]="error",InputMessageVariant[InputMessageVariant.warning=1]="warning",InputMessageVariant[InputMessageVariant.success=2]="success"}(InputMessageVariant||(InputMessageVariant={})),function(InputType){InputType[InputType.text=0]="text",InputType[InputType.password=1]="password",InputType[InputType.number=2]="number",InputType[InputType.email=3]="email",InputType[InputType.search=4]="search",InputType[InputType.tel=5]="tel",InputType[InputType.url=6]="url"}(InputType||(InputType={})),function(InputVariant){InputVariant[InputVariant.small=0]="small",InputVariant[InputVariant.default=1]="default"}(InputVariant||(InputVariant={})),function(InputColor){InputColor[InputColor.default=0]="default",InputColor[InputColor.accent=1]="accent"}(InputColor||(InputColor={}))}}]);