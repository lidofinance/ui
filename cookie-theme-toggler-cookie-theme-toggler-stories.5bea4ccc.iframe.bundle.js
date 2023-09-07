"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[7885],{"./packages/cookie-theme-toggler/cookie-theme-toggler.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Providers:()=>Providers,default:()=>cookie_theme_toggler_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),block=__webpack_require__("./packages/block/index.ts"),content_theme=__webpack_require__("./packages/content-theme/index.ts"),packages_text=__webpack_require__("./packages/text/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),packages_button=__webpack_require__("./packages/button/index.ts"),icons=__webpack_require__("./packages/icons/index.tsx");const CookieThemeTogglerStyle=(0,styled_components_browser_esm.ZP)(packages_button.zx).attrs({variant:"text",size:"xs"})`
  display: inline-grid;
  grid-template-areas: 'a';
  min-width: 0;
  margin-left: ${({theme})=>theme.spaceMap.sm}px;
  line-height: 0;
  font-size: 0;
  padding: 0;

  width: 44px;
  height: 44px;
  // button element contains span as children container, we want to bypass it.
  // by aiming explicit "span:first-child" we're verifying that this is what we are aiming for
  // witout breaking our SVGs
  & > span:first-child {
    display: contents;
  }
`,CookieThemeTogglerLightIcon=(0,styled_components_browser_esm.ZP)(icons.Light)`
  grid-area: a;
  align-self: center;
  justify-self: center;
  visibility: var(--lido-color-darkModeVisibility);
`,CookieThemeTogglerDarkIcon=(0,styled_components_browser_esm.ZP)(icons.Dark)`
  grid-area: a;
  align-self: center;
  justify-self: center;
  visibility: var(--lido-color-lightModeVisibility);
`;var theme=__webpack_require__("./packages/theme/index.ts");const ThemeToggler=()=>{const{toggleTheme}=(0,theme.M1)();return(0,jsx_runtime.jsxs)(CookieThemeTogglerStyle,{color:"secondary",onClick:toggleTheme,children:[(0,jsx_runtime.jsx)(CookieThemeTogglerLightIcon,{}),(0,jsx_runtime.jsx)(CookieThemeTogglerDarkIcon,{})]})};var ref,ref1,ref2;const cookie_theme_toggler_stories={title:"Theme/Cookie Theme Provider",args:{themeOverride:"follow cookie and system"}},Providers=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Use button to toggle theme"," ",(0,jsx_runtime.jsx)("span",{role:"img","aria-label":"right",children:"👉"})," ",(0,jsx_runtime.jsx)(ThemeToggler,{})," and reload page!",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_text.xv,{children:"The block depended by theme cookie"}),(0,jsx_runtime.jsx)(block.gO,{children:"Lorem ipsum dolor sit amet..."}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_text.xv,{children:"Example of using ContentTheme component"}),(0,jsx_runtime.jsx)(content_theme.x,{darkContent:(0,jsx_runtime.jsx)(block.gO,{children:"You see only dark content!"}),lightContent:(0,jsx_runtime.jsx)(block.gO,{children:"You see only light content!"})})]});Providers.parameters={...Providers.parameters,docs:{...null===(ref=Providers.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"() => <>\n    Use button to toggle theme{' '}\n    <span role='img' aria-label='right'>\n      👉\n    </span>{' '}\n    <ThemeToggler /> and reload page!\n    <br />\n    <br />\n    <Text>The block depended by theme cookie</Text>\n    <Block>Lorem ipsum dolor sit amet...</Block>\n    <br />\n    <br />\n    <Text>Example of using ContentTheme component</Text>\n    <ContentTheme darkContent={<Block>You see only dark content!</Block>} lightContent={<Block>You see only light content!</Block>} />\n  </>",...null===(ref1=Providers.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gO:()=>Block,SB:()=>BlockColor,pD:()=>BlockVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={foreground:styled_components_browser_esm.iv`
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
`,Block=(0,react.forwardRef)((({color="foreground",variant="flat",paddingLess=!1,...rest},ref)=>(0,jsx_runtime.jsx)(BlockStyle,{$color:color,$variant:variant,$paddingLess:paddingLess,ref,...rest})));var BlockVariant,BlockColor;Block.displayName="Block",function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))},"./packages/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,rp:()=>ButtonColor,Ei:()=>ButtonIcon,qE:()=>ButtonSize,Wu:()=>ButtonVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),loaders=__webpack_require__("./packages/loaders/index.ts");const sizes={xxs:styled_components_browser_esm.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xxxs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
    padding: ${({$square})=>$square?"11px":"11px 16px"};
    min-width: ${({$square})=>$square?"0":"50px"};
  `,xs:styled_components_browser_esm.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
    padding: ${({$square})=>$square?"10px":"10px 16px"};
    min-width: ${({$square})=>$square?"0":"60px"};
  `,sm:styled_components_browser_esm.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
    padding: ${({$square})=>$square?"16px":"16px 24px"};
    min-width: ${({$square})=>$square?"0":"100px"};
  `,md:styled_components_browser_esm.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
    padding: ${({$square})=>$square?"21px":"21px 44px"};
    min-width: ${({$square})=>$square?"0":"120px"};
  `,lg:styled_components_browser_esm.iv`
    line-height: 1em;
    font-size: ${({theme})=>theme.fontSizesMap.sm}px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
    box-shadow: ${({theme})=>theme.boxShadows.md}
      var(--lido-color-shadowDark);
    padding: ${({$square})=>$square?"24px":"24px 64px"};
    min-width: ${({$square})=>$square?"0":"160px"};
  `},getMainColor=props=>({primary:"var(--lido-color-primary)",secondary:"var(--lido-color-secondary)",warning:"var(--lido-color-warning)",error:"var(--lido-color-error)",success:"var(--lido-color-success)"}[props.$color]),getContrastColor=props=>({primary:"var(--lido-color-primaryContrast)",secondary:"var(--lido-color-secondaryContrast)",warning:"var(--lido-color-warningContrast)",error:"var(--lido-color-errorContrast)",success:"var(--lido-color-successContrast)"}[props.$color]),getHoverColor=props=>({primary:"var(--lido-color-primaryHover)",secondary:"var(--lido-color-secondaryHover)",warning:"var(--lido-color-warningHover)",error:"var(--lido-color-errorHover)",success:"var(--lido-color-successHover)"}[props.$color]),variants={filled:styled_components_browser_esm.iv`
    color: ${getContrastColor};
    background-color: ${getMainColor};
    transition: background-color ${({theme})=>theme.duration.fast} ease;

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
    }
  `,outlined:styled_components_browser_esm.iv`
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
  `,text:styled_components_browser_esm.iv`
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
  `,ghost:styled_components_browser_esm.iv`
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
  `,translucent:styled_components_browser_esm.iv`
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
  `},ButtonStyle=styled_components_browser_esm.ZP.button`
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
`,ripple=styled_components_browser_esm.F4`
  to {
    transform: scale(4);
    opacity: 0;
  }
`,ButtonRippleStyle=styled_components_browser_esm.ZP.span`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
  animation: ${ripple} 0.8s linear;
  background-color: currentcolor;
  opacity: 0.4;
`,ButtonContentStyle=styled_components_browser_esm.ZP.span`
  position: relative;
  pointer-events: none;
  visibility: ${({$hidden})=>$hidden?"hidden":"visible"};
`,ButtonLoaderStyle=(0,styled_components_browser_esm.ZP)(loaders.aN)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: currentcolor;
  pointer-events: none;
`,loaderSizes={xxs:"small",xs:"small",sm:"small",md:"medium",lg:"medium"},Button=(0,react.forwardRef)((({size="md",variant="filled",color="primary",square=!1,fullwidth=!1,loading=!1,active=!1,onClick,disabled,children,...rest},ref)=>{const{handleClick,ripple}=(({onClick})=>{const[ripple,setRipple]=(0,react.useState)(null);return{ripple,handleClick:(0,react.useCallback)((event=>{const button=event.currentTarget,rect=button.getBoundingClientRect(),diameter=Math.max(button.clientWidth,button.clientHeight),radius=diameter/2,isMouseClick=event.clientX>0&&event.clientY>0,style={width:diameter,height:diameter,left:(isMouseClick?event.clientX-rect.left:button.clientWidth/2)-radius,top:(isMouseClick?event.clientY-rect.top:button.clientHeight/2)-radius};setRipple((0,jsx_runtime.jsx)(ButtonRippleStyle,{style},event.timeStamp)),null==onClick||onClick(event)}),[onClick])}})({onClick}),loaderSize=loaderSizes[size];return(0,jsx_runtime.jsxs)(ButtonStyle,{$size:size,$variant:variant,$fullwidth:fullwidth,$color:color,$square:square,$loading:loading,$active:active,onClick:handleClick,disabled:disabled||loading,type:"button",ref,...rest,children:[(0,jsx_runtime.jsx)(ButtonContentStyle,{$hidden:loading,children}),loading&&(0,jsx_runtime.jsx)(ButtonLoaderStyle,{size:loaderSize}),!active&&ripple]})}));Button.displayName="Butotn";const ButtonWrapperStyle=styled_components_browser_esm.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1em;
  min-width: 1em;
`,ButtonIconStyle=styled_components_browser_esm.ZP.span`
  margin: ${({$square})=>$square?"-12px":"-12px -6px"};
  line-height: 0;
  flex-shrink: 0;

  svg {
    fill: currentcolor;
  }
`,ButtonIconStyles_ButtonContentStyle=styled_components_browser_esm.ZP.span`
  margin-left: 10px;

  :empty {
    display: none;
  }
`,ButtonIcon=(0,react.forwardRef)((({icon,children,...rest},ref)=>{const hasNoChildren=!children;return(0,jsx_runtime.jsx)(Button,{square:hasNoChildren,...rest,ref,children:(0,jsx_runtime.jsxs)(ButtonWrapperStyle,{children:[(0,jsx_runtime.jsx)(ButtonIconStyle,{$square:hasNoChildren,children:icon}),(0,jsx_runtime.jsx)(ButtonIconStyles_ButtonContentStyle,{children})]})})}));var ButtonSize,ButtonVariant,ButtonColor;ButtonIcon.displayName="ButtonIcon",function(ButtonSize){ButtonSize[ButtonSize.xxs=0]="xxs",ButtonSize[ButtonSize.xs=1]="xs",ButtonSize[ButtonSize.sm=2]="sm",ButtonSize[ButtonSize.md=3]="md",ButtonSize[ButtonSize.lg=4]="lg"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant[ButtonVariant.filled=0]="filled",ButtonVariant[ButtonVariant.outlined=1]="outlined",ButtonVariant[ButtonVariant.text=2]="text",ButtonVariant[ButtonVariant.ghost=3]="ghost",ButtonVariant[ButtonVariant.translucent=4]="translucent"}(ButtonVariant||(ButtonVariant={})),function(ButtonColor){ButtonColor[ButtonColor.primary=0]="primary",ButtonColor[ButtonColor.secondary=1]="secondary",ButtonColor[ButtonColor.warning=2]="warning",ButtonColor[ButtonColor.error=3]="error",ButtonColor[ButtonColor.success=4]="success"}(ButtonColor||(ButtonColor={}))},"./packages/content-theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ContentTheme});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ContentThemeOnlyDark=styled_components_browser_esm.ZP.div`
  display: var(--lido-color-darkDisplay, contents);
`,ContentThemeOnlyLight=styled_components_browser_esm.ZP.div`
  display: var(--lido-color-lightDisplay, contents);
`,ContentTheme=props=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContentThemeOnlyDark,{children:props.darkContent}),(0,jsx_runtime.jsx)(ContentThemeOnlyLight,{children:props.lightContent})]})},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>InlineLoader,_:()=>InlineLoaderColor,aN:()=>Loader,ux:()=>LoaderColor,gI:()=>LoaderSize});var LoaderSize,LoaderColor,InlineLoaderColor,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}));var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const rotation=styled_components_browser_esm.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,LoaderStyle=styled_components_browser_esm.ZP.div`
  margin: 0;
  padding: 0;
  line-height: 0;
  width: ${props=>props.$size}px;
  height: ${props=>props.$size}px;
  color: ${({$color})=>`var(--lido-color-${$color})`};
`,LoaderCircleBgStyle=styled_components_browser_esm.ZP.circle`
  fill: none;
  stroke: currentcolor;
  stroke-width: ${props=>props.$thickness};
  opacity: 0.2;
`,LoaderCircleFgStyle=styled_components_browser_esm.ZP.circle`
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-width: ${props=>props.$thickness};
  stroke-dasharray: ${props=>{const circumference=2*props.r*Math.PI;return`${.25*circumference} ${.75*circumference}`}};
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 1.4s linear infinite;
`,Loader=(0,react.forwardRef)((({size="medium",thickness=3,color="primary",...rest},ref)=>{const pxSize=LoaderSize[size],center=pxSize/2,radius=pxSize/2-thickness/2;return(0,jsx_runtime.jsx)(LoaderStyle,{$size:pxSize,$color:color,...rest,ref,children:(0,jsx_runtime.jsxs)("svg",{width:pxSize,height:pxSize,viewBox:`0 0 ${pxSize} ${pxSize}`,children:[(0,jsx_runtime.jsx)(LoaderCircleBgStyle,{$thickness:thickness,cx:center,cy:center,r:radius}),(0,jsx_runtime.jsx)(LoaderCircleFgStyle,{$thickness:thickness,cx:center,cy:center,r:radius})]})})}));Loader.displayName="Loader";const translation=styled_components_browser_esm.F4`
  100% {
    background-position: 0 0;
  }
`,InlineLoaderStyle=styled_components_browser_esm.ZP.span`
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
`,InlineLoader=(0,react.forwardRef)((({color,...rest},ref)=>{const heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}));InlineLoader.displayName="InlineLoader"},"./packages/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xv:()=>Text,d9:()=>TextColor,yH:()=>TextSize});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={xxs:styled_components_browser_esm.iv`
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
`,Text=(0,react.forwardRef)((({size="md",weight=400,color="default",strong,...rest},ref)=>(0,jsx_runtime.jsx)(TextStyle,{size,weight:strong?700:weight,color,ref,...rest})));var TextColor,TextSize;Text.displayName="Text",function(TextColor){TextColor[TextColor.default=0]="default",TextColor[TextColor.secondary=1]="secondary",TextColor[TextColor.primary=2]="primary",TextColor[TextColor.warning=3]="warning",TextColor[TextColor.error=4]="error",TextColor[TextColor.success=5]="success"}(TextColor||(TextColor={})),function(TextSize){TextSize[TextSize.xxs=0]="xxs",TextSize[TextSize.xs=1]="xs",TextSize[TextSize.sm=2]="sm",TextSize[TextSize.md=3]="md",TextSize[TextSize.lg=4]="lg",TextSize[TextSize.xl=5]="xl"}(TextSize||(TextSize={}))}}]);