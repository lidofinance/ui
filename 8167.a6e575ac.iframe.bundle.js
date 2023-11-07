"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[8167],{"./packages/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,rp:()=>ButtonColor,Ei:()=>ButtonIcon,qE:()=>ButtonSize,Wu:()=>ButtonVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),loaders=__webpack_require__("./packages/loaders/index.ts");const sizes={xxs:styled_components_wrapper.iv`
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
`,ButtonIcon=(0,react.forwardRef)((({icon,children,...rest},ref)=>{const hasNoChildren=!children;return(0,jsx_runtime.jsx)(Button,{square:hasNoChildren,...rest,ref,children:(0,jsx_runtime.jsxs)(ButtonWrapperStyle,{children:[(0,jsx_runtime.jsx)(ButtonIconStyle,{$square:hasNoChildren,children:icon}),(0,jsx_runtime.jsx)(ButtonIconStyles_ButtonContentStyle,{children})]})})}));var ButtonSize,ButtonVariant,ButtonColor;ButtonIcon.displayName="ButtonIcon",function(ButtonSize){ButtonSize[ButtonSize.xxs=0]="xxs",ButtonSize[ButtonSize.xs=1]="xs",ButtonSize[ButtonSize.sm=2]="sm",ButtonSize[ButtonSize.md=3]="md",ButtonSize[ButtonSize.lg=4]="lg"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant[ButtonVariant.filled=0]="filled",ButtonVariant[ButtonVariant.outlined=1]="outlined",ButtonVariant[ButtonVariant.text=2]="text",ButtonVariant[ButtonVariant.ghost=3]="ghost",ButtonVariant[ButtonVariant.translucent=4]="translucent"}(ButtonVariant||(ButtonVariant={})),function(ButtonColor){ButtonColor[ButtonColor.primary=0]="primary",ButtonColor[ButtonColor.secondary=1]="secondary",ButtonColor[ButtonColor.warning=2]="warning",ButtonColor[ButtonColor.error=3]="error",ButtonColor[ButtonColor.success=4]="success"}(ButtonColor||(ButtonColor={}))},"./packages/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y5:()=>useEscape,ch:()=>useInterceptFocus,F5:()=>useLockScroll,qq:()=>useMergeRefs,O3:()=>useOutsideClick,iP:()=>useWindowSize});__webpack_require__("./packages/hooks/useBreakpoint.ts");var react=__webpack_require__("./node_modules/react/index.js");const useEscape=callback=>{const handleKeyDown=(0,react.useCallback)((event=>{"Escape"===event.key&&(null==callback||callback())}),[callback]);(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown))),[handleKeyDown])},useInterceptFocus=()=>{const savedElement=(0,react.useRef)(null),restoreFocus=(0,react.useCallback)((()=>{savedElement.current instanceof HTMLElement&&savedElement.current.focus()}),[]);return[(0,react.useCallback)((node=>{savedElement.current=document.activeElement;node.contains(document.activeElement)||node.focus()}),[]),restoreFocus]},setStyleProperty=(element,property,value)=>{value?element.style.setProperty(property,value):element.style.removeProperty(property)},useLockScroll=(element=document.body)=>{const lockScroll=(0,react.useCallback)((()=>{if(!(element=>document.body===element?window.innerWidth>document.documentElement.clientWidth:element.scrollHeight>element.clientHeight)(element))return;const previousValues={paddingRight:element.style.paddingRight,overflow:element.style.overflow},paddingRight=(element=>parseInt(window.getComputedStyle(element).paddingRight,10)||0)(element)+(()=>{const tempDiv=document.createElement("div");Object.assign(tempDiv.style,{position:"absolute",left:"-9000px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(tempDiv);const scrollbarSize=tempDiv.offsetWidth-tempDiv.clientWidth;return document.body.removeChild(tempDiv),scrollbarSize})();setStyleProperty(element,"padding-right",`${paddingRight}px`),setStyleProperty(element,"overflow","hidden");return()=>{const{paddingRight,overflow}=previousValues;setStyleProperty(element,"padding-right",paddingRight),setStyleProperty(element,"overflow",overflow)}}),[element]);(0,react.useLayoutEffect)((()=>lockScroll()),[lockScroll])};var useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");const useMergeRefs=refs=>(0,useMergeRef.q)(refs.filter((ref=>!!ref))),useOutsideClick=callback=>{const ref=(0,react.useRef)(null),handleOutsideClick=(0,react.useCallback)((event=>{const popover=ref.current,{target}=event;if(!(target instanceof Element))return;!1===(null==popover?void 0:popover.contains(target))&&(null==callback||callback())}),[callback]);return(0,react.useEffect)((()=>(document.addEventListener("mousedown",handleOutsideClick),()=>document.removeEventListener("mousedown",handleOutsideClick))),[handleOutsideClick]),{ref}},getWindowSize=()=>[window.innerWidth,window.innerHeight],useWindowSize=()=>{const[size,setSize]=(0,react.useState)(getWindowSize),handleResize=(0,react.useCallback)((()=>{setSize(getWindowSize())}),[]);return(0,react.useEffect)((()=>(window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize))),[handleResize]),size};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;__webpack_require__("./packages/theme/index.ts")},"./packages/hooks/useBreakpoint.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useBreakpoint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const useBreakpoint=breakpoint=>{const maxWidth=(0,_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.Fg)().breakpointsMap[breakpoint].width,[isBreakpoint,seIsBreakpoint]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{try{return window.matchMedia(`(max-width: ${maxWidth})`).matches}catch(error){return!1}}));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{try{const mql=window.matchMedia(`(max-width: ${maxWidth})`),setMobileFromQuery=({matches})=>{seIsBreakpoint(matches)};return mql.addEventListener("change",setMobileFromQuery),setMobileFromQuery(mql),()=>{mql.removeEventListener("change",setMobileFromQuery)}}catch(error){return}}),[maxWidth]),isBreakpoint}},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>InlineLoader,_:()=>InlineLoaderColor,aN:()=>Loader,ux:()=>LoaderColor,gI:()=>LoaderSize});var LoaderSize,LoaderColor,InlineLoaderColor,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}));var styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const rotation=styled_components_wrapper.F4`
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
`,InlineLoader=(0,react.forwardRef)((({color,...rest},ref)=>{const heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}));InlineLoader.displayName="InlineLoader"},"./packages/modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),icons=__webpack_require__("./packages/icons/index.tsx"),packages_button=__webpack_require__("./packages/button/index.ts");const ModalStyle=styled_components_wrapper.ZP.div`
  ${({theme:{fontSizesMap,borderRadiusesMap,colors,boxShadows},$center})=>styled_components_wrapper.iv`
    width: 432px;
    max-width: 100%;
    font-weight: 400;
    font-size: ${fontSizesMap.xs}px;
    line-height: 1.5em;
    text-align: ${$center?"center":"left"};
    border-radius: ${borderRadiusesMap.xl}px;
    box-shadow: ${boxShadows.xxl} ${colors.shadowDark};
  `}
`,ModalBaseStyle=styled_components_wrapper.ZP.div`
  ${({theme:{colors}})=>styled_components_wrapper.iv`
    color: ${colors.text};
    background: ${colors.foreground};
    border-radius: inherit;
    position: relative;
    z-index: 1;
  `}
`,ModalHeaderStyle=styled_components_wrapper.ZP.div`
  ${({theme:{spaceMap,fontSizesMap,mediaQueries},$short})=>styled_components_wrapper.iv`
    display: flex;
    align-items: flex-start;
    min-height: 32px;
    margin-bottom: ${$short?-spaceMap.md:0}px;
    padding: ${spaceMap.xl}px ${spaceMap.xxl}px;
    font-size: ${fontSizesMap.md}px;
    line-height: 1.5em;

    ${mediaQueries.md} {
      padding: ${spaceMap.lg}px;
    }
  `}
`,ModalTitleStyle=styled_components_wrapper.ZP.div`
  ${({theme:{fontSizesMap,spaceMap,mediaQueries},$center,$withBackButton,$withCloseButton,$withTitleIcon})=>styled_components_wrapper.iv`
    font-size: ${fontSizesMap.sm}px;
    line-height: 1.5em;
    font-weight: 700;
    margin-left: ${$center&&!$withBackButton?spaceMap.xxl:"0"}px;
    margin-right: ${$center&&!$withCloseButton?spaceMap.xxl:"0"}px;
    padding-top: ${$withTitleIcon?spaceMap.sm:"0"}px;
    padding-left: 0;
    padding-right: ${spaceMap.sm}px;
    flex-grow: 1;
    align-self: center;

    ${mediaQueries.md} {
      padding-right: ${spaceMap.xs}px;
    }
  `}
`,ModalTitleIconStyle=styled_components_wrapper.ZP.div`
  ${({theme:{spaceMap},$center})=>styled_components_wrapper.iv`
    display: ${$center?"flex":"block"};
    justify-content: ${$center?"center":"flex-start"};
    line-height: 0.7;
    margin-bottom: ${spaceMap.md}px;
  `}
`,ModalTitleTextStyle=styled_components_wrapper.ZP.div`
  margin: ${({theme})=>theme.spaceMap.xs}px 0;
`,ModalSubtitleStyle=styled_components_wrapper.ZP.div`
  ${({theme:{colors,fontSizesMap,spaceMap,mediaQueries}})=>styled_components_wrapper.iv`
    color: ${colors.textSecondary};
    font-size: ${fontSizesMap.xs}px;
    font-weight: 400;
    line-height: 24px;
    margin-top: -${spaceMap.xl}px;
    padding: 0 ${spaceMap.xxl}px ${spaceMap.sm}px;

    ${mediaQueries.md} {
      padding-left: ${spaceMap.xl}px;
      padding-right: ${spaceMap.xl}px;
    }
  `}
`,ModalContentStyle=styled_components_wrapper.ZP.div`
  ${({theme:{spaceMap,mediaQueries}})=>styled_components_wrapper.iv`
    padding: 0 ${spaceMap.xxl}px ${spaceMap.xxl}px;

    ${mediaQueries.md} {
      padding: 0 ${spaceMap.lg}px ${spaceMap.lg}px;
    }
  `}
`,ModalCloseStyle=(0,styled_components_wrapper.ZP)(packages_button.Ei).attrs({icon:(0,jsx_runtime.jsx)(icons.Close,{}),color:"secondary",variant:"ghost",size:"xs"})`
  margin: 0 -10px 0 0;
  color: var(--lido-color-textSecondary);
  flex-shrink: 0;
  border-radius: 50%;
`,ModalBackStyle=(0,styled_components_wrapper.ZP)(packages_button.Ei).attrs({icon:(0,jsx_runtime.jsx)(icons.ArrowBack,{}),color:"secondary",variant:"ghost",size:"xs"})`
  ${({theme:{colors,spaceMap}})=>styled_components_wrapper.iv`
    color: ${colors.textSecondary};
    flex-shrink: 0;
    margin: 0 ${spaceMap.sm}px 0 -6px;
    border-radius: 50%;
    background: transparent !important;
  `}
`;var ModalOverlay=__webpack_require__("./packages/modal/ModalOverlay.tsx");const Modal=(0,react.forwardRef)((({children,title,titleIcon,subtitle,center=!1,extra,open,onClose,onBack,...rest},ref)=>{const withTitleIcon=!!titleIcon,withSubtitle=!!subtitle,withCloseButton=!!onClose,withBackButton=!!onBack,modalHeader=(0,jsx_runtime.jsxs)(ModalHeaderStyle,{$short:!title,children:[withBackButton&&(0,jsx_runtime.jsx)(ModalBackStyle,{onClick:onBack}),(0,jsx_runtime.jsxs)(ModalTitleStyle,{$center:center,$withTitleIcon:withTitleIcon,$withCloseButton:withCloseButton,$withBackButton:withBackButton,children:[withTitleIcon&&(0,jsx_runtime.jsx)(ModalTitleIconStyle,{$center:center,children:titleIcon}),(0,jsx_runtime.jsx)(ModalTitleTextStyle,{children:title})]}),withCloseButton&&(0,jsx_runtime.jsx)(ModalCloseStyle,{onClick:onClose})]});return(0,jsx_runtime.jsx)(ModalOverlay.Z,{in:open,...rest,ref,children:(0,jsx_runtime.jsxs)(ModalStyle,{$center:center,children:[(0,jsx_runtime.jsxs)(ModalBaseStyle,{children:[modalHeader,withSubtitle&&(0,jsx_runtime.jsx)(ModalSubtitleStyle,{children:subtitle}),(0,jsx_runtime.jsx)(ModalContentStyle,{children})]}),extra]})})}));Modal.displayName="Modal"},"./packages/modal/ModalOverlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ModalOverlay});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts"),utils=__webpack_require__("./packages/utils/index.ts"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const ModalPortalStyle=styled_components_wrapper.ZP.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--lido-color-overlay);
  cursor: ${({$closable})=>$closable?"pointer":"default"};
  transition: opacity ${({$duration})=>$duration}ms ease;
  opacity: ${({$transition})=>["exiting","exited"].includes($transition)?0:1};
`,ModalOverflowStyle=styled_components_wrapper.ZP.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
`,ModalContentStyle=styled_components_wrapper.ZP.div`
  box-sizing: border-box;
  max-width: 100%;
  padding: ${({theme})=>theme.spaceMap.lg}px;
  outline: none;
  margin: auto;
  cursor: default;
  transition: transform ${({$duration})=>$duration}ms ease-out;
  transform: ${({$transition})=>["exiting","exited"].includes($transition)?"translateY(6px)":"translateY(0)"};
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`,FOCUSABLE_ELEMENTS=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],ModalOverlay=(0,transition.Y)((0,react.forwardRef)((({onClose,onBack,duration,transitionStatus,...rest},externalRef)=>{const closable=!!onClose;(0,hooks.Y5)(onClose),(0,hooks.F5)();const controlRef=(()=>{const modalRef=(0,react.useRef)(null),getFocusableNodes=(0,react.useCallback)((()=>{var ref,ref1;const nodes=null!==(ref1=null===(ref=modalRef.current)||void 0===ref?void 0:ref.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")))&&void 0!==ref1?ref1:[];return Array.from(nodes).filter((node=>node&&node instanceof HTMLElement&&null!==node.offsetParent))}),[]),handleRetainFocus=(0,react.useCallback)((event=>{const focusableNodes=getFocusableNodes();if(0===focusableNodes.length)return;const currentElement=document.activeElement,focusedItemIndex=currentElement instanceof HTMLElement&&focusableNodes.indexOf(currentElement);event.shiftKey&&0===focusedItemIndex&&(focusableNodes[focusableNodes.length-1].focus(),event.preventDefault()),!event.shiftKey&&focusableNodes.length>0&&focusedItemIndex===focusableNodes.length-1&&(focusableNodes[0].focus(),event.preventDefault())}),[getFocusableNodes]);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Tab"===event.code&&handleRetainFocus(event)};return document.addEventListener("keydown",handleKeyDown),()=>document.removeEventListener("keydown",handleKeyDown)}),[handleRetainFocus]);const[interceptFocus,restoreFocus]=(0,hooks.ch)();return(0,react.useEffect)((()=>{if(modalRef.current)return interceptFocus(modalRef.current),restoreFocus}),[interceptFocus,restoreFocus]),modalRef})(),{ref:closeRef,handleClick}=(callback=>{const ref=(0,react.useRef)(null),handleClick=(0,react.useCallback)((event=>{const contentElement=ref.current;contentElement&&event.target instanceof Node&&(contentElement.contains(event.target)||null==callback||callback())}),[callback]);return{ref,handleClick}})(onClose),mergedRef=(0,hooks.qq)([controlRef,closeRef,externalRef]);return utils.cV?react_dom.createPortal((0,jsx_runtime.jsx)(ModalPortalStyle,{$closable:closable,$duration:duration,$transition:transitionStatus,onClick:handleClick,children:(0,jsx_runtime.jsx)(ModalOverflowStyle,{children:(0,jsx_runtime.jsx)(ModalContentStyle,{tabIndex:-1,role:"dialog","aria-modal":"true",ref:mergedRef,$transition:transitionStatus,$duration:duration,...rest})})}),utils.cV):null})));ModalOverlay.displayName="ModalOverlay"},"./packages/transition/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>withTransition});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),hooks=__webpack_require__("./packages/hooks/index.ts");const DEFAULT_DURATION=150;function withTransition(Component){function Wrapped({in:state=!1,timeout=DEFAULT_DURATION,mountOnEnter=!0,unmountOnExit=!0,appear=!0,enter=!0,exit=!0,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited,...rest},externalRef){const transitionProps={in:state,timeout,mountOnEnter,unmountOnExit,appear,enter,exit,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited},ref=(0,hooks.qq)([externalRef]);return(0,jsx_runtime.jsx)(Transition.ZP,{...transitionProps,nodeRef:ref,children:status=>(0,jsx_runtime.jsx)(Component,{...rest,duration:timeout,transitionStatus:status,ref})})}return(0,react.forwardRef)(Wrapped)}}}]);