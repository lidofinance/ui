"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[7126],{"./packages/input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{II:()=>Input,Sl:()=>InputColor,BZ:()=>InputGroup,n$:()=>InputType,Jf:()=>InputVariant,zl:()=>OptionsSlider,a:()=>SliderInput,gx:()=>Textarea});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const colors={default:styled_components_wrapper.iv`
    color: var(--lido-color-textSecondary);
  `,accent:styled_components_wrapper.iv`
    color: var(--lido-color-accentContrastSecondary);
  `},labelEmptyValueCSS=styled_components_wrapper.iv`
  ${({$color})=>colors[$color]}

  transform: scale(1);
  opacity: 0.5;
`,labelFilledValueCSS=styled_components_wrapper.iv`
  ${({$color})=>colors[$color]}

  transform: translateY(-14px) scale(0.75);
  opacity: 1;
`,labelFocusCSS=styled_components_wrapper.iv`
  color: var(--lido-color-primary);
  opacity: 1;
`,labelErrorCSS=styled_components_wrapper.iv`
  color: var(--lido-color-error);
`,labelWarningCSS=styled_components_wrapper.iv`
  color: var(--lido-color-warning);
`,InputLabelStyle=styled_components_wrapper.ZP.span`
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
`,TextareaLabelStyle=(0,styled_components_wrapper.ZP)(InputLabelStyle)`
  top: 10px;
`,statesCSS=styled_components_wrapper.iv`
  &:hover {
    z-index: 1;
  }

  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`,activeCSS=styled_components_wrapper.iv`
  &,
  &:hover,
  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`,errorCSS=styled_components_wrapper.iv`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-error);

    ${InputLabelStyle} {
      ${labelErrorCSS}
    }
  }
`,warningCSS=styled_components_wrapper.iv`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-warning);

    ${InputLabelStyle} {
      ${labelWarningCSS}
    }
  }
`,wrapperColors={default:styled_components_wrapper.iv`
    background: var(--lido-color-controlBg);
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    ${({$disabled})=>$disabled?"background: var(--lido-color-background);":"\n          &:hover {\n            border-color: var(--lido-color-borderHover);\n          }\n    "};
  `,accent:styled_components_wrapper.iv`
    background: var(--lido-color-accentControlBg);
    border-color: var(--lido-color-accentBorder);
    color: var(--lido-color-accentText);

    ${({$disabled})=>$disabled?"background: var(--lido-color-controlBg);":"\n          &:hover {\n            border-color: var(--lido-color-accentBorderHover);\n          }\n    "};
  `},decoratorCSS=styled_components_wrapper.iv`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`,InputLeftDecoratorStyle=styled_components_wrapper.ZP.span`
  ${decoratorCSS}
  padding-right: 16px;
`,InputRightDecoratorStyle=styled_components_wrapper.ZP.span`
  ${decoratorCSS}
  padding-left: 16px;
`,InputWrapperStyle=styled_components_wrapper.ZP.label`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  box-sizing: border-box;
  cursor: ${({$disabled})=>$disabled?"default":"text"};
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};
`,contentVariants={default:styled_components_wrapper.iv`
    padding-top: 17px;
    padding-bottom: 17px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      margin-top: -17px;
      margin-bottom: -17px;
    }
  `,small:styled_components_wrapper.iv`
    padding-top: 9px;
    padding-bottom: 9px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      padding-top: -9px;
      padding-bottom: -9px;
    }
  `},InputContentStyle=styled_components_wrapper.ZP.span`
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
`,InputControlWrapperStyle=styled_components_wrapper.ZP.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`,labeledCSS=styled_components_wrapper.iv`
  &:not(:focus):placeholder-shown {
    & + ${InputLabelStyle} {
      ${labelEmptyValueCSS}
    }

    &::placeholder {
      opacity: 0;
    }
  }
`,inputColors={default:styled_components_wrapper.iv`
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
  `,accent:styled_components_wrapper.iv`
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
  `},InputStyle=styled_components_wrapper.ZP.input`
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
`,TextareaStyle=(0,styled_components_wrapper.ZP)(InputStyle).attrs({as:"textarea"})`
  resize: none;
`,messageVariants={error:styled_components_wrapper.iv`
    background: var(--lido-color-error);
    color: var(--lido-color-errorContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,warning:styled_components_wrapper.iv`
    background: var(--lido-color-warning);
    color: var(--lido-color-warningContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,success:styled_components_wrapper.iv`
    background: var(--lido-color-success);
    color: var(--lido-color-successContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `},InputMessageStyle=styled_components_wrapper.ZP.span`
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
`,Input=(0,react.forwardRef)((({label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",leftDecorator,rightDecorator,className,style,variant="default",color="default",id,disabled=!1,wrapperRef,children,...rest},ref)=>{const hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success,hasLeftDecorator=!!leftDecorator,hasRightDecorator=!!rightDecorator;return(0,jsx_runtime.jsxs)(InputWrapperStyle,{className,style,$disabled:disabled,$fullwidth:fullwidth,htmlFor:id,ref:wrapperRef,children:[(0,jsx_runtime.jsxs)(InputContentStyle,{$color:color,$variant:variant,$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,children:[hasLeftDecorator&&(0,jsx_runtime.jsx)(InputLeftDecoratorStyle,{children:leftDecorator}),(0,jsx_runtime.jsxs)(InputControlWrapperStyle,{children:[(0,jsx_runtime.jsx)(InputStyle,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,type:"text",ref,...rest}),hasLabel&&(0,jsx_runtime.jsx)(InputLabelStyle,{$color:color,children:label})]}),hasRightDecorator&&(0,jsx_runtime.jsx)(InputRightDecoratorStyle,{children:rightDecorator})]}),hasErrorMessage&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"success",$bordered:!0,children:success})]})}));Input.displayName="Input";const InputGroupStyle=styled_components_wrapper.ZP.span`
  display: inline-flex;
  position: relative;
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};
`,InputGroupContentStyle=styled_components_wrapper.ZP.span`
  display: flex;
  width: 100%;

  & > ${InputWrapperStyle} {
    margin: 0 -1px 0 0;

    &:first-child {
      & ${InputContentStyle} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:last-child {
      & ${InputContentStyle} {
        margin-right: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`,InputGroup=(0,react.forwardRef)((({fullwidth=!1,error,success,children,...rest},ref)=>{const hasError=!!error,hasSuccess=!!success&&!error;return(0,jsx_runtime.jsxs)(InputGroupStyle,{$fullwidth:fullwidth,...rest,ref,children:[(0,jsx_runtime.jsx)(InputGroupContentStyle,{children}),hasError&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"error",children:error}),hasSuccess&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"success",children:success})]})}));InputGroup.displayName="InputGroup";const RangeInputSlider=styled_components_wrapper.ZP.input`
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
`,Track=styled_components_wrapper.ZP.div`
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
`,Slider=styled_components_wrapper.ZP.div`
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
`,SliderWrapper=styled_components_wrapper.ZP.div`
  position: relative;
`,LabelContainer=styled_components_wrapper.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`,Label=styled_components_wrapper.ZP.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
`,LabelButton=styled_components_wrapper.ZP.button`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
  cursor: pointer;
`,SliderInput=({value,onChange,onLabelClick,min=0,max=100,step=1,minLabel,maxLabel,getLabel=val=>String(val),borderNone,labels,...rest})=>{const fillPercentage=(value-min)/(max-min)*100,LabelComponent=onLabelClick?LabelButton:Label,createClickHandler=value=>()=>null==onLabelClick?void 0:onLabelClick(value);return(0,jsx_runtime.jsxs)(SliderWrapper,{children:[(0,jsx_runtime.jsxs)(Slider,{borderNone,children:[getLabel(value),(0,jsx_runtime.jsx)(Track,{fillPercentage,borderNone})]}),(0,jsx_runtime.jsx)(RangeInputSlider,{type:"range",value,step,onChange,min,max,...rest}),(0,jsx_runtime.jsxs)(LabelContainer,{children:[minLabel&&(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(min),children:minLabel}),null==labels?void 0:labels.map((({value,label})=>(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(value),children:label},value))),maxLabel&&(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(max),children:maxLabel})]})]})},OptionsSlider=({options,value,onChange,...rest})=>{let sliderIndex=options.findIndex((option=>option.value===value));-1===sliderIndex&&(sliderIndex=0);const max=options.length-1,labels=options.map((({label},index)=>({value:index,label})));return(0,jsx_runtime.jsx)(SliderInput,{min:0,max,value:sliderIndex,onChange:e=>{const optionIndex=Number(e.target.value);onChange(options[optionIndex].value,optionIndex)},getLabel:optionIndex=>options[optionIndex].label,labels,borderNone:!0,onLabelClick:optionIndex=>onChange(options[optionIndex].value,optionIndex),...rest})},Textarea=(0,react.forwardRef)((({label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",className,style,variant="default",color="default",id,disabled=!1,wrapperRef,children,...rest},ref)=>{const hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success;return(0,jsx_runtime.jsxs)(InputWrapperStyle,{className,style,$disabled:disabled,$fullwidth:fullwidth,htmlFor:id,ref:wrapperRef,children:[(0,jsx_runtime.jsx)(InputContentStyle,{$color:color,$variant:variant,$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,children:(0,jsx_runtime.jsxs)(InputControlWrapperStyle,{children:[(0,jsx_runtime.jsx)(TextareaStyle,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,ref,...rest}),hasLabel&&(0,jsx_runtime.jsx)(TextareaLabelStyle,{$color:color,children:label})]})}),hasErrorMessage&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,jsx_runtime.jsx)(InputMessageStyle,{$variant:"success",$bordered:!0,children:success})]})}));var InputMessageVariant,InputType,InputVariant,InputColor;Textarea.displayName="Textarea",function(InputMessageVariant){InputMessageVariant[InputMessageVariant.error=0]="error",InputMessageVariant[InputMessageVariant.warning=1]="warning",InputMessageVariant[InputMessageVariant.success=2]="success"}(InputMessageVariant||(InputMessageVariant={})),function(InputType){InputType[InputType.text=0]="text",InputType[InputType.password=1]="password",InputType[InputType.number=2]="number",InputType[InputType.email=3]="email",InputType[InputType.search=4]="search",InputType[InputType.tel=5]="tel",InputType[InputType.url=6]="url"}(InputType||(InputType={})),function(InputVariant){InputVariant[InputVariant.small=0]="small",InputVariant[InputVariant.default=1]="default"}(InputVariant||(InputVariant={})),function(InputColor){InputColor[InputColor.default=0]="default",InputColor[InputColor.accent=1]="accent"}(InputColor||(InputColor={}))}}]);