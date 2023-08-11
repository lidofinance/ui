"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9768],{"./packages/data-table/DataTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,WithHighlighted:()=>WithHighlighted,WithHint:()=>WithHint,default:()=>DataTable_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),loaders=__webpack_require__("./packages/loaders/index.ts"),Tooltip=__webpack_require__("./packages/tooltip/Tooltip.tsx"),icons=__webpack_require__("./packages/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DataTableStyle=styled_components_browser_esm.ZP.div``,DataTableRowStyle=styled_components_browser_esm.ZP.div`
  display: flex;
  margin: ${({theme})=>theme.spaceMap.md}px 0;
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,DataTableTitleStyle=styled_components_browser_esm.ZP.div`
  color: var(--lido-color-textSecondary);
  flex-grow: 1;
`,DataTableValueStyle=styled_components_browser_esm.ZP.div`
  color: var(
    --lido-color-${({$highlight})=>$highlight?"success":"text"}
  );
  text-align: right;
  margin-left: ${({theme})=>theme.spaceMap.xxl}px;
  flex-grow: 1;
`,DataTableQuestionStyle=(0,styled_components_browser_esm.ZP)(icons.Question)`
  margin: -6px 0 -5px;
  vertical-align: middle;
`;function DataTable(props,ref){return(0,jsx_runtime.jsx)(DataTableStyle,{ref,...props})}const data_table_DataTable=(0,react.forwardRef)(DataTable),DataTableRow=(0,react.forwardRef)((function DataTableRow(props,ref){const{title,loading=!1,highlight=!1,help,children,...rest}=props,hasHelper=!!help;return(0,jsx_runtime.jsxs)(DataTableRowStyle,{ref,...rest,children:[(0,jsx_runtime.jsxs)(DataTableTitleStyle,{children:[title,hasHelper&&(0,jsx_runtime.jsx)(Tooltip.Z,{placement:"bottomLeft",title:help,children:(0,jsx_runtime.jsx)(DataTableQuestionStyle,{})})]}),(0,jsx_runtime.jsx)(DataTableValueStyle,{$highlight:highlight,children:loading?(0,jsx_runtime.jsx)(loaders.Gl,{color:"text"}):children})]})}));var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8;const DataTable_stories={component:data_table_DataTable,title:"Layout/DataTable",parameters:{layout:"centered"}},Base=props=>{const{loading,...rest}=props;return(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(data_table_DataTable,{...rest,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"You will receive",loading,children:"100 LDO"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",loading,children:"$0.12"})]})})};Base.args={loading:!1};const WithHint=props=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(data_table_DataTable,{...props,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"Staking rewards fee",help:"This fee is split between node operators, the DAO, and an insurance fund",children:"10%"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",children:"$0.12"})]})}),WithHighlighted=props=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(data_table_DataTable,{...props,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"Staking rewards fee",highlight:!0,children:"10%"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",children:"$0.12"})]})});Base.parameters={...Base.parameters,docs:{...null===(ref=Base.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => {\n  const {\n    loading,\n    ...rest\n  } = props;\n  return <div style={{\n    width: 300\n  }}>\n      <DataTable {...rest}>\n        <DataTableRow title='You will receive' loading={loading}>\n          100&nbsp;LDO\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost' loading={loading}>\n          $0.12\n        </DataTableRow>\n      </DataTable>\n    </div>;\n}",...null===(ref1=Base.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},WithHint.parameters={...WithHint.parameters,docs:{...null===(ref3=WithHint.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => {\n  return <div style={{\n    width: 300\n  }}>\n      <DataTable {...props}>\n        <DataTableRow title='Staking rewards fee' help='This fee is split between node operators, the DAO, and an insurance fund'>\n          10%\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>\n      </DataTable>\n    </div>;\n}",...null===(ref4=WithHint.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},WithHighlighted.parameters={...WithHighlighted.parameters,docs:{...null===(ref6=WithHighlighted.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => {\n  return <div style={{\n    width: 300\n  }}>\n      <DataTable {...props}>\n        <DataTableRow title='Staking rewards fee' highlight>\n          10%\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>\n      </DataTable>\n    </div>;\n}",...null===(ref7=WithHighlighted.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}}},"./packages/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,Y5:()=>useEscape,ch:()=>useInterceptFocus,F5:()=>useLockScroll,qq:()=>useMergeRefs,O3:()=>useOutsideClick,iP:()=>useWindowSize});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const useBreakpoint=breakpoint=>{const maxWidth=(0,styled_components_browser_esm.Fg)().breakpointsMap[breakpoint].width,[isBreakpoint,seIsBreakpoint]=(0,react.useState)((()=>{try{return window.matchMedia(`(max-width: ${maxWidth})`).matches}catch(error){return!1}}));return(0,react.useEffect)((()=>{try{const mql=window.matchMedia(`(max-width: ${maxWidth})`),setMobileFromQuery=({matches})=>{seIsBreakpoint(matches)};return mql.addEventListener("change",setMobileFromQuery),setMobileFromQuery(mql),()=>{mql.removeEventListener("change",setMobileFromQuery)}}catch(error){return}}),[maxWidth]),isBreakpoint},useEscape=callback=>{const handleKeyDown=(0,react.useCallback)((event=>{"Escape"===event.key&&(null==callback||callback())}),[callback]);(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown))),[handleKeyDown])},useInterceptFocus=()=>{const savedElement=(0,react.useRef)(null),restoreFocus=(0,react.useCallback)((()=>{savedElement.current instanceof HTMLElement&&savedElement.current.focus()}),[]);return[(0,react.useCallback)((node=>{savedElement.current=document.activeElement;node.contains(document.activeElement)||node.focus()}),[]),restoreFocus]},setStyleProperty=(element,property,value)=>{value?element.style.setProperty(property,value):element.style.removeProperty(property)},useLockScroll=(element=document.body)=>{const lockScroll=(0,react.useCallback)((()=>{if(!(element=>document.body===element?window.innerWidth>document.documentElement.clientWidth:element.scrollHeight>element.clientHeight)(element))return;const previousValues={paddingRight:element.style.paddingRight,overflow:element.style.overflow},paddingRight=(element=>parseInt(window.getComputedStyle(element).paddingRight,10)||0)(element)+(()=>{const tempDiv=document.createElement("div");Object.assign(tempDiv.style,{position:"absolute",left:"-9000px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(tempDiv);const scrollbarSize=tempDiv.offsetWidth-tempDiv.clientWidth;return document.body.removeChild(tempDiv),scrollbarSize})();setStyleProperty(element,"padding-right",`${paddingRight}px`),setStyleProperty(element,"overflow","hidden");return()=>{const{paddingRight,overflow}=previousValues;setStyleProperty(element,"padding-right",paddingRight),setStyleProperty(element,"overflow",overflow)}}),[element]);(0,react.useLayoutEffect)((()=>lockScroll()),[lockScroll])};var useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");const useMergeRefs=refs=>(0,useMergeRef.q)(refs.filter((ref=>!!ref))),useOutsideClick=callback=>{const ref=(0,react.useRef)(null),handleOutsideClick=(0,react.useCallback)((event=>{const popover=ref.current,{target}=event;if(!(target instanceof Element))return;!1===(null==popover?void 0:popover.contains(target))&&(null==callback||callback())}),[callback]);return(0,react.useEffect)((()=>(document.addEventListener("mousedown",handleOutsideClick),()=>document.removeEventListener("mousedown",handleOutsideClick))),[handleOutsideClick]),{ref}},getWindowSize=()=>[window.innerWidth,window.innerHeight],useWindowSize=()=>{const[size,setSize]=(0,react.useState)(getWindowSize),handleResize=(0,react.useCallback)((()=>{setSize(getWindowSize())}),[]);return(0,react.useEffect)((()=>(window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize))),[handleResize]),size};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;__webpack_require__("./packages/theme/index.ts")},"./packages/loaders/InlineLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>loaders_InlineLoader});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const translation=styled_components_browser_esm.F4`
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
`;function InlineLoader(props,ref){const{color,...rest}=props,heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}const loaders_InlineLoader=(0,react.forwardRef)(InlineLoader)},"./packages/loaders/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>loaders_Loader});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),types=__webpack_require__("./packages/loaders/types.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const rotation=styled_components_browser_esm.F4`
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
`;function Loader(props,ref){const{size="medium",thickness=3,color="primary",...rest}=props,pxSize=types.gI[size],center=pxSize/2,radius=pxSize/2-thickness/2;return(0,jsx_runtime.jsx)(LoaderStyle,{$size:pxSize,$color:color,...rest,ref,children:(0,jsx_runtime.jsxs)("svg",{width:pxSize,height:pxSize,viewBox:`0 0 ${pxSize} ${pxSize}`,children:[(0,jsx_runtime.jsx)(LoaderCircleBgStyle,{$thickness:thickness,cx:center,cy:center,r:radius}),(0,jsx_runtime.jsx)(LoaderCircleFgStyle,{$thickness:thickness,cx:center,cy:center,r:radius})]})})}const loaders_Loader=(0,react.forwardRef)(Loader)},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>_InlineLoader__WEBPACK_IMPORTED_MODULE_1__.Z,aN:()=>_Loader__WEBPACK_IMPORTED_MODULE_0__.Z});var _Loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/loaders/Loader.tsx"),_InlineLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/loaders/InlineLoader.tsx");__webpack_require__("./packages/loaders/types.ts")},"./packages/loaders/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var LoaderSize,LoaderColor,InlineLoaderColor;__webpack_require__.d(__webpack_exports__,{_:()=>InlineLoaderColor,gI:()=>LoaderSize,ux:()=>LoaderColor}),function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}))},"./packages/popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>popover_Popover});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./packages/popover/constants.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),utils=__webpack_require__("./packages/utils/index.ts"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts");const PopoverWrapperStyle=styled_components_browser_esm.ZP.div`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${({$backdrop})=>$backdrop?"100%":"0px"};
`,visibleCSS=styled_components_browser_esm.iv`
  opacity: 1;

  &[data-placement] {
    transform: translate(0, 0);
  }
`,hiddenCSS=styled_components_browser_esm.iv`
  opacity: 0;

  &[data-placement^='top'] {
    transform: translateY(6px);
  }
  &[data-placement^='right'] {
    transform: translateX(-6px);
  }
  &[data-placement^='bottom'] {
    transform: translateY(-6px);
  }
  &[data-placement^='left'] {
    transform: translateX(6px);
  }
`,PopoverRootStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
  transition: opacity ${({$duration})=>$duration}ms ease;
  transition-property: opacity, transform;

  ${({$transition})=>["exiting","exited"].includes($transition)?hiddenCSS:visibleCSS}
`;function PopoverRoot(props,externalRef){const{anchorRef,wrapperRef:externalWrapperRef,placement=constants.R,backdrop=!0,transitionStatus,duration,...rest}=props,{onClose}=props;(0,hooks.Y5)(onClose);const{ref:outsidePopoverRef}=(0,hooks.O3)(onClose),{popoverRef:positionPopoverRef,wrapperRef:positionWrapperRef,style}=(props=>{const{placement=constants.R,anchorRef}=props,popoverRef=(0,react.useRef)(null),wrapperRef=(0,react.useRef)(null),[popoverStyle,setPopoverStyle]=(0,react.useState)(constants._),[windowWidth,windowHeight]=(0,hooks.iP)();(0,react.useLayoutEffect)((()=>{if(!anchorRef.current||!popoverRef.current||!wrapperRef.current)return;const position=((anchorRect,popoverRect,wrapperRect,placement)=>{const position={};switch(placement){case"top":case"bottom":position.left=(anchorRect.left+anchorRect.right)/2-popoverRect.width/2;break;case"topLeft":case"bottomLeft":position.left=anchorRect.left;break;case"topRight":case"bottomRight":position.left=anchorRect.right-popoverRect.width;break;case"rightTop":case"right":case"rightBottom":position.left=anchorRect.right;break;case"leftTop":case"left":case"leftBottom":position.left=anchorRect.left-popoverRect.width}switch(placement){case"left":case"right":position.top=(anchorRect.top+anchorRect.bottom)/2-popoverRect.height/2;break;case"leftTop":case"rightTop":position.top=anchorRect.top;break;case"leftBottom":case"rightBottom":position.top=anchorRect.bottom-popoverRect.height;break;case"topLeft":case"top":case"topRight":position.top=anchorRect.top-popoverRect.height;break;case"bottomLeft":case"bottom":case"bottomRight":position.top=anchorRect.bottom}return position.top-=wrapperRect.top,position.left-=wrapperRect.left,position})(anchorRef.current.getBoundingClientRect(),popoverRef.current.getBoundingClientRect(),wrapperRef.current.getBoundingClientRect(),placement);setPopoverStyle(position)}),[anchorRef,placement,windowWidth,windowHeight]);const style={...props.style,...popoverStyle};return{popoverRef,wrapperRef,style}})(props),popoverRef=(0,hooks.qq)([positionPopoverRef,outsidePopoverRef,externalRef]),wrapperRef=(0,hooks.qq)([positionWrapperRef,externalWrapperRef]);return utils.cV?react_dom.createPortal((0,jsx_runtime.jsx)(PopoverWrapperStyle,{$backdrop:backdrop,ref:wrapperRef,children:(0,jsx_runtime.jsx)(PopoverRootStyle,{...rest,$transition:transitionStatus,$duration:duration,"data-placement":placement,style,ref:popoverRef})}),utils.cV):null}const popover_PopoverRoot=(0,transition.Y)((0,react.forwardRef)(PopoverRoot)),PopoverStyle=(0,styled_components_browser_esm.ZP)(popover_PopoverRoot)`
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  font-weight: 400;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  box-shadow: ${({theme})=>theme.boxShadows.xs}
    var(--lido-color-shadowLight);
  padding: ${({theme})=>theme.spaceMap.lg}px;
  overflow: auto;

  ${props=>{const{$offset,placement,theme}=props,offset=theme.spaceMap[$offset];return placement.startsWith("top")?`margin-top: ${-offset}px`:placement.startsWith("right")?`margin-left: ${offset}px`:placement.startsWith("bottom")?`margin-top: ${offset}px`:placement.startsWith("left")?`margin-left: ${-offset}px`:""}}
`;function Popover(props,ref){const{placement=constants.R,open=!1,offset="xs",...rest}=props;return(0,jsx_runtime.jsx)(PopoverStyle,{$offset:offset,placement,in:open,...rest,ref})}const popover_Popover=(0,react.forwardRef)(Popover)},"./packages/popover/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DEFAULT_PLACEMENT,_:()=>INITIAL_STYLE});const INITIAL_STYLE={position:"fixed",opacity:0,pointerEvents:"none"},DEFAULT_PLACEMENT="bottomLeft"},"./packages/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J2:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.Z,V0:()=>_types__WEBPACK_IMPORTED_MODULE_1__.V,m9:()=>_types__WEBPACK_IMPORTED_MODULE_1__.m});var _Popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/popover/Popover.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/popover/types.ts")},"./packages/popover/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>PopoverOffset,m:()=>PopoverPlacement});var PopoverOffset,PopoverPlacement;__webpack_require__("./node_modules/react/index.js");!function(PopoverOffset){PopoverOffset[PopoverOffset.xs=0]="xs",PopoverOffset[PopoverOffset.sm=1]="sm",PopoverOffset[PopoverOffset.md=2]="md",PopoverOffset[PopoverOffset.lg=3]="lg",PopoverOffset[PopoverOffset.xl=4]="xl"}(PopoverOffset||(PopoverOffset={})),function(PopoverPlacement){PopoverPlacement[PopoverPlacement.topLeft=0]="topLeft",PopoverPlacement[PopoverPlacement.top=1]="top",PopoverPlacement[PopoverPlacement.topRight=2]="topRight",PopoverPlacement[PopoverPlacement.rightTop=3]="rightTop",PopoverPlacement[PopoverPlacement.right=4]="right",PopoverPlacement[PopoverPlacement.rightBottom=5]="rightBottom",PopoverPlacement[PopoverPlacement.bottomLeft=6]="bottomLeft",PopoverPlacement[PopoverPlacement.bottom=7]="bottom",PopoverPlacement[PopoverPlacement.bottomRight=8]="bottomRight",PopoverPlacement[PopoverPlacement.leftTop=9]="leftTop",PopoverPlacement[PopoverPlacement.left=10]="left",PopoverPlacement[PopoverPlacement.leftBottom=11]="leftBottom"}(PopoverPlacement||(PopoverPlacement={}))},"./packages/tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip_Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),popover=__webpack_require__("./packages/popover/index.ts");const TooltipPopoverStyle=(0,styled_components_browser_esm.ZP)(popover.J2)`
  && {
    padding: 12px;
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
    font-size: ${({theme})=>theme.fontSizesMap.xxxs}px;
    line-height: 1.8em;
    font-weight: 400;
    max-width: 256px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.md}px;
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  }
`;var hooks=__webpack_require__("./packages/hooks/index.ts"),react_is=__webpack_require__("./node_modules/react-is/index.js");function Tooltip(props,ref){const{title,children,...rest}=props,[state,setState]=(0,react.useState)(!1),keepTimeoutRef=(0,react.useRef)(null),child=react.Children.only(children);if(!(0,react_is.isElement)(child))throw new Error("Child must be a React element");const anchorRef=(0,react.useRef)(null),mergedRef=(0,hooks.qq)([child.ref,anchorRef]),handleMouseEnter=()=>{keepTimeoutRef.current&&(clearTimeout(keepTimeoutRef.current),keepTimeoutRef.current=null),setState(!0)},handleMouseLeave=()=>{keepTimeoutRef.current=setTimeout((()=>{setState(!1),keepTimeoutRef.current=null}),150)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,react.cloneElement)(child,{ref:mergedRef,onMouseEnter(event){var _props,ref;handleMouseEnter(),null===(ref=(_props=child.props).onMouseEnter)||void 0===ref||ref.call(_props,event)},onMouseLeave(event){var _props,ref;handleMouseLeave(),null===(ref=(_props=child.props).onMouseLeave)||void 0===ref||ref.call(_props,event)}}),(0,jsx_runtime.jsx)(TooltipPopoverStyle,{...rest,open:state,backdrop:!1,anchorRef,onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave,ref,children:title})]})}const tooltip_Tooltip=(0,react.forwardRef)(Tooltip)},"./packages/transition/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>withTransition});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js");const DEFAULT_DURATION=150;function withTransition(Component){function Wrapped(props,externalRef){const{in:state=!1,timeout=DEFAULT_DURATION,mountOnEnter=!0,unmountOnExit=!0,appear=!0,enter=!0,exit=!0,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited,...rest}=props,transitionProps={in:state,timeout,mountOnEnter,unmountOnExit,appear,enter,exit,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited},ref=(0,hooks.qq)([externalRef]);return(0,jsx_runtime.jsx)(Transition.ZP,{...transitionProps,nodeRef:ref,children:status=>(0,jsx_runtime.jsx)(Component,{...rest,duration:timeout,transitionStatus:status,ref})})}return(0,react.forwardRef)(Wrapped)}}}]);