"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9621],{"./packages/cookies-tooltip/cookies-tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>cookies_tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),packages_text=__webpack_require__("./packages/text/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./packages/icons/index.tsx"),content_theme=__webpack_require__("./packages/content-theme/index.ts"),utils=__webpack_require__("./packages/utils/index.ts"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const ExternalLink=styled_components_wrapper.ZP.a.attrs({target:"_blank",rel:"nofollow noopener"})`
  cursor: pointer;
`,Wrap=styled_components_wrapper.ZP.div`
  z-index: 999;
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme})=>theme.mediaQueries.lg} {
    bottom: 0;
    left: 0;
    right: 0;
  }
`,Box=styled_components_wrapper.ZP.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-radius: 20px;
  background-color: var(--lido-color-foreground);
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.08);

  ${({theme})=>theme.mediaQueries.lg} {
    flex-direction: column;
    border-radius: 0;
    width: 100%;
  }
`,CookieIconWrap=styled_components_wrapper.ZP.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;

  ${({theme})=>theme.mediaQueries.lg} {
    display: none;
  }
`,Text=styled_components_wrapper.ZP.div`
  margin-right: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: var(--lido-color-textSecondary);
  width: 340px;

  ${({theme})=>theme.mediaQueries.lg} {
    margin-right: 0;
    margin-bottom: 8px;
    width: 100%;
    text-align: center;
  }
`,ButtonsWrap=styled_components_wrapper.ZP.div`
  display: flex;
`,ButtonBasic=styled_components_wrapper.ZP.button.attrs({type:"button"})`
  font-weight: 800;
  font-size: 12px;
  line-height: 20px;
  border-radius: 6px;
  width: 72px;
  height: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  transition:
    background-color ease 0.25s,
    border-color ease 0.25s,
    color ease 0.25s;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    background-color: #0e1621;
  }

  &:active {
    transform: translateY(1px);
  }

  ${({theme})=>theme.mediaQueries.lg} {
    width: 112px;
  }
`,AllowButton=(0,styled_components_wrapper.ZP)(ButtonBasic)`
  background-color: var(--lido-color-text);
  color: var(--lido-color-foreground);

  &:hover {
    background-color: var(--lido-color-textSecondary);
  }
`,DeclineButton=(0,styled_components_wrapper.ZP)(ButtonBasic)`
  background-color: var(--lido-color-foreground);
  color: var(--lido-color-text);
  border: 1px solid var(--lido-color-text);

  &:hover {
    background-color: var(--lido-color-background);
  }
`,Link=(0,styled_components_wrapper.ZP)(ExternalLink)`
  color: inherit;
  text-decoration: underline !important;
`,allowCookies=()=>{(0,utils.YD)("cookie-allowed","yes"),document.cookie.includes("cookie-allowed=yes")||(0,utils.bS)("cookie-allowed","yes")},declineCookies=()=>{(0,utils.YD)("cookie-allowed","no"),document.cookie.includes("cookie-allowed=no")||(0,utils.bS)("cookie-allowed","no")},CookiesTooltip=()=>{const[isVisible,setVisibility]=(0,react.useState)(!1),checkCookieAllowedEarlier=(0,react.useCallback)((()=>{(0,utils.Vp)("cookie-allowed")&&(setVisibility(!1),window.removeEventListener("focus",checkCookieAllowedEarlier))}),[]);return(0,react.useEffect)((()=>{(0,utils.Vp)("cookie-allowed")||(setVisibility(!0),window.addEventListener("focus",checkCookieAllowedEarlier))}),[checkCookieAllowedEarlier]),isVisible?(0,jsx_runtime.jsx)(Wrap,{children:(0,jsx_runtime.jsxs)(Box,{children:[(0,jsx_runtime.jsx)(CookieIconWrap,{children:(0,jsx_runtime.jsx)(content_theme.x,{darkContent:(0,jsx_runtime.jsx)(icons.CookieInverse,{}),lightContent:(0,jsx_runtime.jsx)(icons.Cookie,{})})}),(0,jsx_runtime.jsxs)(Text,{children:["We use cookies to collect anonymous site visitation data to improve performance of our website. For more info, read our ",(0,jsx_runtime.jsx)(Link,{href:"https://lido.fi/privacy-notice",children:"Privacy Notice"})]}),(0,jsx_runtime.jsxs)(ButtonsWrap,{children:[(0,jsx_runtime.jsx)(AllowButton,{onClick:()=>{allowCookies(),setVisibility(!1)},children:"Allow"}),(0,jsx_runtime.jsx)(DeclineButton,{onClick:()=>{declineCookies(),setVisibility(!1)},children:"Decline"})]})]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};var ref,ref1,ref2;const cookies_tooltip_stories={title:"CookiesTooltip/Basic"},Basic=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_text.xv,{children:"CookiesTooltip component has an ability to detect a user choice in other tabs and third level domain."}),(0,jsx_runtime.jsxs)(packages_text.xv,{children:["You can check above if you:",(0,jsx_runtime.jsx)("br",{}),"1. duplicate this tab;",(0,jsx_runtime.jsx)("br",{}),"2. allow or decline cookie;",(0,jsx_runtime.jsx)("br",{}),"3. and check in another tab;",(0,jsx_runtime.jsx)("br",{}),"4. and click to work area (to handler window.onfocus event)."]}),(0,jsx_runtime.jsx)(CookiesTooltip,{})]});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"() => <>\n    <Text>\n      CookiesTooltip component has an ability to detect a user choice in other\n      tabs and third level domain.\n    </Text>\n    <Text>\n      You can check above if you:\n      <br />\n      1. duplicate this tab;\n      <br />\n      2. allow or decline cookie;\n      <br />\n      3. and check in another tab;\n      <br />\n      4. and click to work area (to handler window.onfocus event).\n    </Text>\n    <CookiesTooltip />\n  </>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/content-theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ContentTheme});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const ContentThemeOnlyDark=styled_components_wrapper.ZP.div`
  display: var(--lido-color-darkDisplay, contents);
`,ContentThemeOnlyLight=styled_components_wrapper.ZP.div`
  display: var(--lido-color-lightDisplay, contents);
`,ContentTheme=({darkContent,lightContent,...rest})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContentThemeOnlyDark,{...rest,children:darkContent}),(0,jsx_runtime.jsx)(ContentThemeOnlyLight,{...rest,children:lightContent})]})},"./packages/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xv:()=>Text,d9:()=>TextColor,yH:()=>TextSize});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const sizes={xxs:styled_components_wrapper.iv`
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