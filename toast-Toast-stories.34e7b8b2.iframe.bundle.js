"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[2945],{"./packages/toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Error:()=>Error,Info:()=>Info,Pending:()=>Pending,Success:()=>Success,default:()=>Toast_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),packages_button=__webpack_require__("./packages/button/index.ts"),accordion=__webpack_require__("./packages/accordion/index.ts"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ToastContainer=(0,styled_components_browser_esm.ZP)(react_toastify_esm.Ix).attrs({draggable:!1})`
  /* Animations */
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  @keyframes Toastify__bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }

  @keyframes Toastify__bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }

  @keyframes Toastify__slideInRight {
    0% {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInLeft {
    0% {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInUp {
    0% {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInDown {
    0% {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideOutRight {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutLeft {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutDown {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }

  @keyframes Toastify__slideOutUp {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }

  @keyframes Toastify__flipIn {
    0% {
      transform: perspective(400px) rotateX(90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotateX(-20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotateX(10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotateX(-5deg);
    }
    to {
      transform: perspective(400px);
    }
  }

  @keyframes Toastify__flipOut {
    0% {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotateX(-20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotateX(90deg);
      opacity: 0;
    }
  }
  /* /Animations */

  & {
    width: auto;
    max-width: calc(100vw - ${({theme})=>2*theme.spaceMap.lg}px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 480px) {
      max-width: calc(100vw - ${({theme})=>2*theme.spaceMap.sm}px);
    }

    &.Toastify__toast-container {
      z-index: 9999;
      transform: translateZ(9999px);
      position: fixed;
      padding: 4px;
      box-sizing: border-box;
      color: #fff;

      /* Positions */
      &--top-left {
        top: ${({theme})=>theme.spaceMap.lg}px;
        left: ${({theme})=>theme.spaceMap.lg}px;

        @media screen and (max-width: 480px) {
          top: ${({theme})=>theme.spaceMap.sm}px;
          left: ${({theme})=>theme.spaceMap.sm}px;
        }
      }
      &--top-center {
        top: ${({theme})=>theme.spaceMap.lg}px;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (max-width: 480px) {
          top: ${({theme})=>theme.spaceMap.sm}px;
          left: 45%;
          transform: translateX(-40%);
        }
      }
      &--top-right {
        top: ${({theme})=>theme.spaceMap.lg}px;
        right: ${({theme})=>theme.spaceMap.lg}px;
        left: auto;

        @media screen and (max-width: 480px) {
          top: ${({theme})=>theme.spaceMap.sm}px;
          right: ${({theme})=>theme.spaceMap.sm}px;
          transform: none;
        }
      }
      &--bottom-left {
        bottom: ${({theme})=>theme.spaceMap.lg}px;
        left: ${({theme})=>theme.spaceMap.lg}px;

        @media screen and (max-width: 480px) {
          bottom: ${({theme})=>theme.spaceMap.sm}px;
          left: ${({theme})=>theme.spaceMap.sm}px;
        }
      }
      &--bottom-center {
        bottom: ${({theme})=>theme.spaceMap.lg}px;
        transform: translateX(-50%);
        left: 50%;

        @media screen and (max-width: 480px) {
          bottom: ${({theme})=>theme.spaceMap.sm}px;
          left: 45%;
          transform: translateX(-40%);
        }
      }
      &--bottom-right {
        bottom: ${({theme})=>theme.spaceMap.lg}px;
        right: ${({theme})=>theme.spaceMap.lg}px;
        left: auto;

        @media screen and (max-width: 480px) {
          bottom: ${({theme})=>theme.spaceMap.sm}px;
          right: ${({theme})=>theme.spaceMap.sm}px;
          transform: none;
        }
      }
      /* /Positions */
    }
  }

  .Toastify {
    &__toast {
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      direction: ltr;
      max-width: 360px;
      max-height: 800px;
      min-height: 0;

      border-radius: ${({theme})=>theme.borderRadiusesMap.md}px;
      box-shadow: ${({theme})=>theme.boxShadows.xs}
        var(--lido-color-shadowLight);
      margin: ${({theme})=>theme.spaceMap.xs}px 0;
      padding: ${({theme})=>theme.spaceMap.sm}px
        ${({theme})=>theme.spaceMap.md}px;
      background-color: var(--lido-color-accent);
      color: var(--lido-color-accentContrast);
      font-size: ${({theme})=>theme.fontSizesMap.xs}px;
      line-height: 1.3em;
      font-family: inherit;
      cursor: default;

      &-body {
        margin: auto 0;
        flex: 1 1 auto;
        padding: 6px;
      }

      a,
      a:hover {
        color: currentColor;
        text-decoration: underline;
      }
    }

    &--animate {
      animation-fill-mode: both;
      animation-duration: 0.7s;
    }

    &__progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      z-index: 9999;
      opacity: 0.7;
      background: rgba(255, 255, 255, 0.25);
      transform-origin: left;

      &--animated {
        animation: Toastify__trackProgress linear 1 forwards;
      }

      &--controlled {
        transition: transform 0.2s;
      }

      &--rtl {
        right: 0;
        left: auto;
        transform-origin: right;
      }
    }

    &__toast--rtl {
      direction: rtl;
    }

    /* Variants */
    //&__toast--dark {
    //  background: #121212;
    //  color: #fff;
    //}
    //&__toast--default {
    //  background: #fff;
    //  color: #aaa;
    //}
    &__toast--info {
      background-color: var(--lido-color-accent);
      color: var(--lido-color-accentContrast);
    }
    &__toast--error {
      background-color: var(--lido-color-error);
      color: var(--lido-color-errorContrast);
    }
    &__toast--warning {
      background-color: var(--lido-color-warning);
      color: var(--lido-color-warningContrast);
    }
    &__toast--success {
      background-color: var(--lido-color-success);
      color: var(--lido-color-successContrast);
    }
    /* /Variants */

    /* For animations */
    &__flip-enter {
      animation-name: Toastify__flipIn;
    }

    &__flip-exit {
      animation-name: Toastify__flipOut;
    }

    &__bounce-enter--bottom-left,
    &__bounce-enter--top-left {
      animation-name: Toastify__bounceInLeft;
    }

    &__bounce-enter--bottom-right,
    &__bounce-enter--top-right {
      animation-name: Toastify__bounceInRight;
    }

    &__bounce-enter--top-center {
      animation-name: Toastify__bounceInDown;
    }

    &__bounce-enter--bottom-center {
      animation-name: Toastify__bounceInUp;
    }

    &__bounce-exit--bottom-left,
    &__bounce-exit--top-left {
      animation-name: Toastify__bounceOutLeft;
    }

    &__bounce-exit--bottom-right,
    &__bounce-exit--top-right {
      animation-name: Toastify__bounceOutRight;
    }

    &__bounce-exit--top-center {
      animation-name: Toastify__bounceOutUp;
    }

    &__bounce-exit--bottom-center {
      animation-name: Toastify__bounceOutDown;
    }
    /* /For animations */
  }
`,TOASTS_DEFAULT_OPTIONS={position:react_toastify_esm.Am.POSITION.BOTTOM_LEFT,closeButton:!1,hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!1,autoClose:6e3,delay:0},TOASTS_ERROR_OPTIONS={...TOASTS_DEFAULT_OPTIONS,closeOnClick:!0},TOASTS_SUCCESS_OPTIONS={...TOASTS_DEFAULT_OPTIONS},TOASTS_INFO_OPTIONS={...TOASTS_DEFAULT_OPTIONS,closeOnClick:!0},TOASTS_PENDING_OPTIONS={...TOASTS_DEFAULT_OPTIONS,autoClose:!1};var loaders=__webpack_require__("./packages/loaders/index.ts");const ToastPendingStyle=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
`,ToastPendingTextStyle=styled_components_browser_esm.ZP.div``,ToastPendingLoaderStyle=(0,styled_components_browser_esm.ZP)(loaders.aN)`
  margin: ${({theme})=>-theme.spaceMap.xs}px;
  margin-right: ${({theme})=>theme.spaceMap.md}px;

  svg {
    color: var(--lido-color-accentContrast);
  }
`;const ToastPosition=react_toastify_esm.Am.POSITION;var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,ref9,ref10,ref11,ref12,ref13,ref14;const Toast_stories={component:ToastContainer,title:"Notify/Toast",args:{text:"🚀🚀🚀 Wow so easy!",position:ToastPosition.BOTTOM_LEFT},argTypes:{position:{options:(enumObject=ToastPosition,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}}};var enumObject;const Basic=({text,...options})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(accordion.U,{summary:"IMPORTANT",children:"Remember to render the ToastContainer once in your application tree. If you can not figure out where to put it, rendering it in the application root would be the best bet."}),(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastDefault(content,options){return(0,react_toastify_esm.Am)(content,{...TOASTS_DEFAULT_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show default notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]}),Error=({text,...options})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastError(content,options){return react_toastify_esm.Am.error(content,{...TOASTS_ERROR_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show error notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]}),Success=({text,...options})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastSuccess(content,options){return react_toastify_esm.Am.success(content,{...TOASTS_SUCCESS_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show success notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]}),Info=({text,...options})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastInfo(content,options){return react_toastify_esm.Am.info(content,{...TOASTS_INFO_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show info notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]}),Pending=({text,...options})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastPending(content,options){return(0,react_toastify_esm.Am)((0,jsx_runtime.jsxs)(ToastPendingStyle,{children:[(0,jsx_runtime.jsx)(ToastPendingLoaderStyle,{}),(0,jsx_runtime.jsx)(ToastPendingTextStyle,{children:content})]}),{...TOASTS_PENDING_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show pending notify!"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>react_toastify_esm.Am.dismiss(),size:"xs",variant:"translucent",children:"Dismiss all"}),(0,jsx_runtime.jsx)(ToastContainer,{})]});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"({\n  text,\n  ...options\n}) => {\n  const notifyDefault = () => ToastDefault(text, options);\n  return <>\n      <Accordion summary='IMPORTANT'>\n        Remember to render the ToastContainer once in your application tree. If\n        you can not figure out where to put it, rendering it in the application\n        root would be the best bet.\n      </Accordion>\n\n      <Button onClick={notifyDefault} size='xs'>\n        Show default notify!\n      </Button>\n      <ToastContainer />\n    </>;\n}",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},Error.parameters={...Error.parameters,docs:{...null===(ref3=Error.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"({\n  text,\n  ...options\n}) => {\n  const notifyError = () => ToastError(text, options);\n  return <>\n      <Button onClick={notifyError} size='xs'>\n        Show error notify!\n      </Button>\n      <ToastContainer />\n    </>;\n}",...null===(ref4=Error.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},Success.parameters={...Success.parameters,docs:{...null===(ref6=Success.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"({\n  text,\n  ...options\n}) => {\n  const notifySuccess = () => ToastSuccess(text, options);\n  return <>\n      <Button onClick={notifySuccess} size='xs'>\n        Show success notify!\n      </Button>\n      <ToastContainer />\n    </>;\n}",...null===(ref7=Success.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}},Info.parameters={...Info.parameters,docs:{...null===(ref9=Info.parameters)||void 0===ref9?void 0:ref9.docs,source:{originalSource:"({\n  text,\n  ...options\n}) => {\n  const notifyInfo = () => ToastInfo(text, options);\n  return <>\n      <Button onClick={notifyInfo} size='xs'>\n        Show info notify!\n      </Button>\n      <ToastContainer />\n    </>;\n}",...null===(ref10=Info.parameters)||void 0===ref10||null===(ref11=ref10.docs)||void 0===ref11?void 0:ref11.source}}},Pending.parameters={...Pending.parameters,docs:{...null===(ref12=Pending.parameters)||void 0===ref12?void 0:ref12.docs,source:{originalSource:"({\n  text,\n  ...options\n}) => {\n  const notifyPending = () => ToastPending(text, options);\n  const dismissAll = () => toast.dismiss();\n  return <>\n      <Button onClick={notifyPending} size='xs'>\n        Show pending notify!\n      </Button>\n      <br />\n      <br />\n      <Button onClick={dismissAll} size='xs' variant='translucent'>\n        Dismiss all\n      </Button>\n      <ToastContainer />\n    </>;\n}",...null===(ref13=Pending.parameters)||void 0===ref13||null===(ref14=ref13.docs)||void 0===ref14?void 0:ref14.source}}}},"./packages/accordion/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Accordion});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./packages/icons/index.tsx");const AccordionStyle=styled_components_browser_esm.ZP.div`
  margin: 0 0 ${({theme})=>theme.spaceMap.sm}px 0;
  background: var(--lido-color-foreground);
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
`,AccordionSummaryStyle=styled_components_browser_esm.ZP.div`
  padding: ${({theme})=>theme.spaceMap.lg}px
    ${({theme})=>theme.spaceMap.xxl}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  min-height: 40px;
  box-sizing: content-box;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
  }
`,AccordionTitleStyle=styled_components_browser_esm.ZP.div`
  color: var(--lido-color-text);
  flex-grow: 1;
  font-weight: 800;
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  line-height: 1.6em;
`,AccordionArrowStyle=(0,styled_components_browser_esm.ZP)(icons.ArrowBottom)`
  flex-shrink: 0;
  transform: rotate(${props=>props.$expanded?180:0}deg);
  transition: transform ${({theme})=>theme.duration.norm} ease;
  margin: -2px;
  margin-left: ${({theme})=>theme.spaceMap.md}px;
  fill: var(--lido-color-textSecondary);
`,AccordionContentStyle=styled_components_browser_esm.ZP.div`
  color: var(--lido-color-textSecondary);
  padding: ${({theme})=>theme.spaceMap.xxl}px;
  padding-top: 0;
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
    padding-top: 0;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.6em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  ul,
  /* stylelint-disable-next-line no-descending-specificity */
  ol {
    padding: 0 0 0 1.5em;
  }
`;var react_collapsed_esm=__webpack_require__("./node_modules/react-collapsed/dist/react-collapsed.esm.js");const Accordion=(0,react.forwardRef)((({defaultExpanded,summary,children,...rest},ref)=>{const{toggleProps,collapseProps,isExpanded}=(({defaultExpanded=!1})=>{const[isExpanded,setExpanded]=(0,react.useState)(defaultExpanded);(0,react.useEffect)((()=>{setExpanded(defaultExpanded)}),[defaultExpanded]);const handleToggle=(0,react.useCallback)((()=>setExpanded((previous=>!previous))),[]),{getToggleProps,getCollapseProps}=(0,react_collapsed_esm.Z)({isExpanded});return{toggleProps:getToggleProps({onClick:handleToggle}),collapseProps:getCollapseProps(),isExpanded}})({defaultExpanded});return(0,jsx_runtime.jsxs)(AccordionStyle,{...rest,ref,children:[(0,jsx_runtime.jsxs)(AccordionSummaryStyle,{...toggleProps,children:[(0,jsx_runtime.jsx)(AccordionTitleStyle,{children:summary}),(0,jsx_runtime.jsx)(AccordionArrowStyle,{$expanded:isExpanded})]}),(0,jsx_runtime.jsx)("div",{...collapseProps,children:(0,jsx_runtime.jsx)(AccordionContentStyle,{children})})]})}));Accordion.displayName="Accordion"},"./packages/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,rp:()=>ButtonColor,Ei:()=>ButtonIcon,qE:()=>ButtonSize,Wu:()=>ButtonVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),loaders=__webpack_require__("./packages/loaders/index.ts");const sizes={xxs:styled_components_browser_esm.iv`
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
`,ButtonIcon=(0,react.forwardRef)((({icon,children,...rest},ref)=>{const hasNoChildren=!children;return(0,jsx_runtime.jsx)(Button,{square:hasNoChildren,...rest,ref,children:(0,jsx_runtime.jsxs)(ButtonWrapperStyle,{children:[(0,jsx_runtime.jsx)(ButtonIconStyle,{$square:hasNoChildren,children:icon}),(0,jsx_runtime.jsx)(ButtonIconStyles_ButtonContentStyle,{children})]})})}));var ButtonSize,ButtonVariant,ButtonColor;ButtonIcon.displayName="ButtonIcon",function(ButtonSize){ButtonSize[ButtonSize.xxs=0]="xxs",ButtonSize[ButtonSize.xs=1]="xs",ButtonSize[ButtonSize.sm=2]="sm",ButtonSize[ButtonSize.md=3]="md",ButtonSize[ButtonSize.lg=4]="lg"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant[ButtonVariant.filled=0]="filled",ButtonVariant[ButtonVariant.outlined=1]="outlined",ButtonVariant[ButtonVariant.text=2]="text",ButtonVariant[ButtonVariant.ghost=3]="ghost",ButtonVariant[ButtonVariant.translucent=4]="translucent"}(ButtonVariant||(ButtonVariant={})),function(ButtonColor){ButtonColor[ButtonColor.primary=0]="primary",ButtonColor[ButtonColor.secondary=1]="secondary",ButtonColor[ButtonColor.warning=2]="warning",ButtonColor[ButtonColor.error=3]="error",ButtonColor[ButtonColor.success=4]="success"}(ButtonColor||(ButtonColor={}))},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>InlineLoader,_:()=>InlineLoaderColor,aN:()=>Loader,ux:()=>LoaderColor,gI:()=>LoaderSize});var LoaderSize,LoaderColor,InlineLoaderColor,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}));var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const rotation=styled_components_browser_esm.F4`
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
`,InlineLoader=(0,react.forwardRef)((({color,...rest},ref)=>{const heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}));InlineLoader.displayName="InlineLoader"}}]);