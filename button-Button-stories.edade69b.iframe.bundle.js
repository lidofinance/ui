"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[6057],{"./packages/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>Icon,WithIcon:()=>WithIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_icons_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/button/index.ts");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_2__.zx,title:"Controls/Button",args:{size:"md",variant:"filled",color:"primary",disabled:!1,fullwidth:!1,loading:!1,children:"Example"},argTypes:{size:{options:getOptions(___WEBPACK_IMPORTED_MODULE_2__.qE),control:"inline-radio"},variant:{options:getOptions(___WEBPACK_IMPORTED_MODULE_2__.Wu),control:"inline-radio"},color:{options:getOptions(___WEBPACK_IMPORTED_MODULE_2__.rp),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.zx,{...props}),WithIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Ei,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_1__.Whitepaper,{}),...props}),Icon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Ei,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index_js__WEBPACK_IMPORTED_MODULE_1__.Whitepaper,{}),...props});Icon.args={children:void 0},Icon.argTypes={children:{table:{disable:!0}}},Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Button {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...null===(ref3=WithIcon.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <ButtonIcon icon={<Whitepaper />} {...props} />",...null===(ref4=WithIcon.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},Icon.parameters={...Icon.parameters,docs:{...null===(ref6=Icon.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => <ButtonIcon icon={<Whitepaper />} {...props} />",...null===(ref7=Icon.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}}},"./packages/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,rp:()=>ButtonColor,Ei:()=>ButtonIcon,qE:()=>ButtonSize,Wu:()=>ButtonVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),loaders=__webpack_require__("./packages/loaders/index.ts");const sizes={xxs:styled_components_wrapper.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xxxs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
    padding: ${({$square})=>$square?"11px":"11px 16px"};
    min-width: ${({$square})=>$square?"0":"50px"};
  `,xs:styled_components_wrapper.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
    padding: ${({$square})=>$square?"10px":"10px 16px"};
    min-width: ${({$square})=>$square?"0":"60px"};
  `,sm:styled_components_wrapper.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
    padding: ${({$square})=>$square?"16px":"16px 24px"};
    min-width: ${({$square})=>$square?"0":"100px"};
  `,md:styled_components_wrapper.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
    padding: ${({$square})=>$square?"21px":"21px 44px"};
    min-width: ${({$square})=>$square?"0":"120px"};
  `,lg:styled_components_wrapper.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.sm}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
    box-shadow: ${({theme})=>theme.boxShadows.md}
      var(--lido-color-shadowDark);
    padding: ${({$square})=>$square?"24px":"24px 64px"};
    min-width: ${({$square})=>$square?"0":"160px"};
  `},getMainColor=props=>({primary:"var(--lido-color-primary)",secondary:"var(--lido-color-secondary)",warning:"var(--lido-color-warning)",error:"var(--lido-color-error)",success:"var(--lido-color-success)"}[props.$color]),getContrastColor=props=>({primary:"var(--lido-color-primaryContrast)",secondary:"var(--lido-color-secondaryContrast)",warning:"var(--lido-color-warningContrast)",error:"var(--lido-color-errorContrast)",success:"var(--lido-color-successContrast)"}[props.$color]),getHoverColor=props=>({primary:"var(--lido-color-primaryHover)",secondary:"var(--lido-color-secondaryHover)",warning:"var(--lido-color-warningHover)",error:"var(--lido-color-errorHover)",success:"var(--lido-color-successHover)"}[props.$color]),variants={filled:styled_components_wrapper.iv`
    color: ${getContrastColor};
    background-color: ${getMainColor};
    transition: background-color ${({theme})=>theme.duration.fast} ease;

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
    }
  `,outlined:styled_components_wrapper.iv`
    color: ${getMainColor};
    transition:
      background-color ${({theme})=>theme.duration.fast} ease,
      color ${({theme})=>theme.duration.fast} ease;

    ::before {
      display: block;
      border: 1px solid ${getMainColor};
    }

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
      color: ${getContrastColor};
    }
  `,text:styled_components_wrapper.iv`
    color: ${getMainColor};
    background-color: var(--lido-color-foreground);

    ::before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({theme})=>theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      /* stylelint-disable-next-line no-descending-specificity */
      ::before {
        opacity: 0.1;
      }
    }
  `,ghost:styled_components_wrapper.iv`
    color: ${getMainColor};

    ::before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({theme})=>theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      /* stylelint-disable-next-line no-descending-specificity */
      ::before {
        opacity: 0.1;
      }
    }
  `,translucent:styled_components_wrapper.iv`
    color: ${getMainColor};

    ::before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({theme})=>theme.duration.fast} ease;
      opacity: 0.1;
    }

    :not(:disabled):hover,
    :focus-visible {
      /* stylelint-disable-next-line no-descending-specificity */
      ::before {
        opacity: 0.2;
      }
    }
  `},ButtonStyle=styled_components_wrapper.ZP.button`
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  background: transparent;
  font-family: inherit;
  font-weight: 700;
  width: ${({$fullwidth})=>$fullwidth?" 100%":"auto"};

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    display: none;
  }

  :not(:disabled) {
    cursor: pointer;
  }

  :disabled {
    opacity: ${({$loading})=>$loading?1:.5};
  }

  ${props=>sizes[props.$size]}
  ${props=>variants[props.$variant]}
`,ripple=styled_components_wrapper.F4`
  to {
    transform: scale(4);
    opacity: 0;
  }
`,ButtonRippleStyle=styled_components_wrapper.ZP.span`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
  animation: ${ripple} 0.8s linear;
  background-color: currentcolor;
  opacity: 0.4;
`,ButtonContentStyle=styled_components_wrapper.ZP.span`
  position: relative;
  pointer-events: none;
  visibility: ${({$hidden})=>$hidden?"hidden":"visible"};
`,ButtonLoaderStyle=(0,styled_components_wrapper.ZP)(loaders.aN)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: currentcolor;
  pointer-events: none;
`,loaderSizes={xxs:"small",xs:"small",sm:"small",md:"medium",lg:"medium"},Button=(0,react.forwardRef)((({size="md",variant="filled",color="primary",square=!1,fullwidth=!1,loading=!1,active=!1,onClick,disabled,children,...rest},ref)=>{const{handleClick,ripple}=(({onClick})=>{const[ripple,setRipple]=(0,react.useState)(null);return{ripple,handleClick:(0,react.useCallback)((event=>{const button=event.currentTarget,rect=button.getBoundingClientRect(),diameter=Math.max(button.clientWidth,button.clientHeight),radius=diameter/2,isMouseClick=event.clientX>0&&event.clientY>0,style={width:diameter,height:diameter,left:(isMouseClick?event.clientX-rect.left:button.clientWidth/2)-radius,top:(isMouseClick?event.clientY-rect.top:button.clientHeight/2)-radius};setRipple((0,jsx_runtime.jsx)(ButtonRippleStyle,{style},event.timeStamp)),null==onClick||onClick(event)}),[onClick])}})({onClick}),loaderSize=loaderSizes[size];return(0,jsx_runtime.jsxs)(ButtonStyle,{$size:size,$variant:variant,$fullwidth:fullwidth,$color:color,$square:square,$loading:loading,$active:active,onClick:handleClick,disabled:disabled||loading,type:"button",ref,...rest,children:[(0,jsx_runtime.jsx)(ButtonContentStyle,{$hidden:loading,children}),loading&&(0,jsx_runtime.jsx)(ButtonLoaderStyle,{size:loaderSize}),!active&&ripple]})}));Button.displayName="Butotn";const ButtonWrapperStyle=styled_components_wrapper.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1em;
  min-width: 1em;
`,ButtonIconStyle=styled_components_wrapper.ZP.span`
  margin: ${({$square})=>$square?"-12px":"-12px -6px"};
  line-height: 0;
  flex-shrink: 0;

  svg {
    fill: currentcolor;
  }
`,ButtonIconStyles_ButtonContentStyle=styled_components_wrapper.ZP.span`
  margin-left: 10px;

  :empty {
    display: none;
  }
`,ButtonIcon=(0,react.forwardRef)((({icon,children,...rest},ref)=>{const hasNoChildren=!children;return(0,jsx_runtime.jsx)(Button,{square:hasNoChildren,...rest,ref,children:(0,jsx_runtime.jsxs)(ButtonWrapperStyle,{children:[(0,jsx_runtime.jsx)(ButtonIconStyle,{$square:hasNoChildren,children:icon}),(0,jsx_runtime.jsx)(ButtonIconStyles_ButtonContentStyle,{children})]})})}));var ButtonSize,ButtonVariant,ButtonColor;ButtonIcon.displayName="ButtonIcon",function(ButtonSize){ButtonSize[ButtonSize.xxs=0]="xxs",ButtonSize[ButtonSize.xs=1]="xs",ButtonSize[ButtonSize.sm=2]="sm",ButtonSize[ButtonSize.md=3]="md",ButtonSize[ButtonSize.lg=4]="lg"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant[ButtonVariant.filled=0]="filled",ButtonVariant[ButtonVariant.outlined=1]="outlined",ButtonVariant[ButtonVariant.text=2]="text",ButtonVariant[ButtonVariant.ghost=3]="ghost",ButtonVariant[ButtonVariant.translucent=4]="translucent"}(ButtonVariant||(ButtonVariant={})),function(ButtonColor){ButtonColor[ButtonColor.primary=0]="primary",ButtonColor[ButtonColor.secondary=1]="secondary",ButtonColor[ButtonColor.warning=2]="warning",ButtonColor[ButtonColor.error=3]="error",ButtonColor[ButtonColor.success=4]="success"}(ButtonColor||(ButtonColor={}))},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>InlineLoader,_:()=>InlineLoaderColor,aN:()=>Loader,ux:()=>LoaderColor,gI:()=>LoaderSize});var LoaderSize,LoaderColor,InlineLoaderColor,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}));var styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const rotation=styled_components_wrapper.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,LoaderStyle=styled_components_wrapper.ZP.div`
  margin: 0;
  padding: 0;
  line-height: 0;
  width: ${props=>props.$size}px;
  height: ${props=>props.$size}px;
  color: ${({$color})=>`var(--lido-color-${$color})`};
`,LoaderCircleBgStyle=styled_components_wrapper.ZP.circle`
  fill: none;
  stroke: currentcolor;
  stroke-width: ${props=>props.$thickness};
  opacity: 0.2;
`,LoaderCircleFgStyle=styled_components_wrapper.ZP.circle`
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-width: ${props=>props.$thickness};
  stroke-dasharray: ${props=>{const circumference=2*props.r*Math.PI;return`${.25*circumference} ${.75*circumference}`}};
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 1.4s linear infinite;
`,Loader=(0,react.forwardRef)((({size="medium",thickness=3,color="primary",...rest},ref)=>{const pxSize=LoaderSize[size],center=pxSize/2,radius=pxSize/2-thickness/2;return(0,jsx_runtime.jsx)(LoaderStyle,{$size:pxSize,$color:color,...rest,ref,children:(0,jsx_runtime.jsxs)("svg",{width:pxSize,height:pxSize,viewBox:`0 0 ${pxSize} ${pxSize}`,children:[(0,jsx_runtime.jsx)(LoaderCircleBgStyle,{$thickness:thickness,cx:center,cy:center,r:radius}),(0,jsx_runtime.jsx)(LoaderCircleFgStyle,{$thickness:thickness,cx:center,cy:center,r:radius})]})})}));Loader.displayName="Loader";const translation=styled_components_wrapper.F4`
  100% {
    background-position: 0 0;
  }
`,InlineLoaderStyle=styled_components_wrapper.ZP.span`
  --loader-color: ${({$color})=>$color?`var(--lido-color-${$color})`:"currentColor"};

  width: 100%;
  display: inline-block;
  vertical-align: top;
  border-radius: 1000px;
  position: relative;
  overflow: hidden;
  user-select: none;
  opacity: 0.05;
  animation: ${translation} 2s infinite;
  background-size: 300% 100%;
  background-position: 100% 0;
  background-image: linear-gradient(
    90deg,
    var(--loader-color) 0,
    var(--loader-color) 33.33%,
    transparent 44.44%,
    transparent 55.55%,
    var(--loader-color) 66.66%,
    var(--loader-color) 100%
  );

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--loader-color);
    opacity: 0.2;
  }
`,InlineLoader=(0,react.forwardRef)((({color,...rest},ref)=>{const heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}));InlineLoader.displayName="InlineLoader"}}]);