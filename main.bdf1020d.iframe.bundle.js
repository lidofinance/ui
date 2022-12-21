(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{argTypes:()=>argTypes,args:()=>args,decorators:()=>decorators,parameters:()=>parameters});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),theme=__webpack_require__("./packages/theme/index.ts");const GlobalStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").vJ`
  body {
    padding: 0 !important;
    display: flex;
  }

  html, body, #root {
    min-height: 100vh;
  }
`;var esm=__webpack_require__("./node_modules/@storybook/theming/dist/esm/index.js");const themes_constructor=(base,theme)=>({base,colorPrimary:theme.colors.primary,appBg:theme.colors.background,appContentBg:theme.colors.background,appBorderRadius:8,fontBase:"Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",textColor:theme.colors.text,inputBorderRadius:8,brandTitle:"Lido UI",brandImage:`/images/lido-${base}.svg`}),light=(0,esm.Ue)(themes_constructor("light",theme.Qp)),themes={darkMode:{dark:(0,esm.Ue)(themes_constructor("dark",theme.Hx)),light}},{breakpointsMap}=theme.rv,parameters={...themes,...{viewport:{viewports:Object.keys(breakpointsMap).reduce(((viewports,breakpoint)=>({...viewports,[breakpoint]:{name:breakpoint,styles:breakpointsMap[breakpoint]}})),{})}},controls:{hideNoControlsWarning:!0}},args={themeOverride:"light"},argTypes={themeOverride:{control:"inline-radio",options:["dark","light","follow cookie and system"]}},decorators=[(Story,{args})=>(0,jsx_runtime.jsxs)(theme.Zm,{overrideThemeName:"follow cookie and system"===args.themeOverride?void 0:args.themeOverride,children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)("div",{style:{minHeight:"100vh",color:"var(--lido-color-text)",padding:"1em",background:"var(--lido-color-background)"},children:(0,jsx_runtime.jsx)(Story,{})})]})];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./packages/accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,List:()=>List,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/accordion/Accordion.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Accordion__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Layout/Accordion"},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Accordion__WEBPACK_IMPORTED_MODULE_1__.Z,{...props,children:"Liquid staking protocols allow users to earn staking rewards without locking assets or maintaining staking infrastructure. Users of these protocols can deposit staking tokens and receive tradable liquid tokens in return. The DAO controlled smart contract then stakes tokens with DAO-picked staking providers. Users' deposited funds are controlled by the DAO, staking providers never have direct access to the users' assets."});Basic.args={defaultExpanded:!1,summary:"What is Liquid Staking?"},Basic.argTypes={defaultExpanded:{description:"Accordion default state"},summary:{description:"Summary title"}};const List=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Accordion__WEBPACK_IMPORTED_MODULE_1__.Z,{summary:"What is Liquid Staking?",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Liquid staking protocols allow users to earn staking rewards without locking assets or maintaining staking infrastructure. Users of these protocols can deposit staking tokens and receive tradable liquid tokens in return. The DAO controlled smart contract then stakes tokens with DAO-picked staking providers. Users' deposited funds are controlled by the DAO, staking providers never have direct access to the users' assets."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Accordion__WEBPACK_IMPORTED_MODULE_1__.Z,{summary:"How does lido work?",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"When staking with Lido, users receive stETH tokens on a 1:1 basis representing their staked ETH. stETH balances can be used like regular ETH to earn yields and lending rewards, and are updated on a daily basis to reflect your ETH staking rewards. Note that there are no lock-ups or minimum deposits when staking with Lido."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"When using Lido, users receive secure staking rewards in real-time, allowing for participation in the securing of Ethereum without the associated risks and downside potential."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Accordion__WEBPACK_IMPORTED_MODULE_1__.Z,{summary:"How is Lido secure?",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Lido is a secure liquid staking solution for a number of reasons:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Open-sourcing & continuous review of all code."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Committee of elected, best-in-class validators to minimise staking risk."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Use of non-custodial staking service to eliminate counterparty risk."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Use of DAO for governance decisions & to manage risk factors."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Usually when staking ETH you choose only one validator. In the case of Lido you stake across many validators, minimising your staking risk."})]})]});Basic.parameters={storySource:{source:"(props) => (\n  <Accordion {...props}>\n    Liquid staking protocols allow users to earn staking rewards without locking\n    assets or maintaining staking infrastructure. Users of these protocols can\n    deposit staking tokens and receive tradable liquid tokens in return. The DAO\n    controlled smart contract then stakes tokens with DAO-picked staking\n    providers. Users&#39; deposited funds are controlled by the DAO, staking\n    providers never have direct access to the users&#39; assets.\n  </Accordion>\n)"},...Basic.parameters},List.parameters={storySource:{source:"() => (\n  <>\n    <Accordion summary='What is Liquid Staking?'>\n      <p>\n        Liquid staking protocols allow users to earn staking rewards without\n        locking assets or maintaining staking infrastructure. Users of these\n        protocols can deposit staking tokens and receive tradable liquid tokens\n        in return. The DAO controlled smart contract then stakes tokens with\n        DAO-picked staking providers. Users&#39; deposited funds are controlled\n        by the DAO, staking providers never have direct access to the users&#39;\n        assets.\n      </p>\n    </Accordion>\n    <Accordion summary='How does lido work?'>\n      <p>\n        When staking with Lido, users receive stETH tokens on a 1:1 basis\n        representing their staked ETH. stETH balances can be used like regular\n        ETH to earn yields and lending rewards, and are updated on a daily basis\n        to reflect your ETH staking rewards. Note that there are no lock-ups or\n        minimum deposits when staking with Lido.\n      </p>\n      <p>\n        When using Lido, users receive secure staking rewards in real-time,\n        allowing for participation in the securing of Ethereum without the\n        associated risks and downside potential.\n      </p>\n    </Accordion>\n    <Accordion summary='How is Lido secure?'>\n      <p>Lido is a secure liquid staking solution for a number of reasons:</p>\n      <ul>\n        <li>Open-sourcing & continuous review of all code.</li>\n        <li>\n          Committee of elected, best-in-class validators to minimise staking\n          risk.\n        </li>\n        <li>\n          Use of non-custodial staking service to eliminate counterparty risk.\n        </li>\n        <li>Use of DAO for governance decisions & to manage risk factors.</li>\n      </ul>\n      <p>\n        Usually when staking ETH you choose only one validator. In the case of\n        Lido you stake across many validators, minimising your staking risk.\n      </p>\n    </Accordion>\n  </>\n)"},...List.parameters}},"./packages/address/Address.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Address__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/address/Address.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Address__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Layout/Address",args:{address:"0x5a98fcbea516cf06857215779fd812ca3bef1b32",symbols:3},argTypes:{symbols:{control:{type:"range",min:3,max:21,step:1}}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Address__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.parameters={storySource:{source:"(props) => <Address {...props} />"},...Basic.parameters}},"./packages/block/Block.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block/types.tsx"),_Block__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/block/Block.tsx");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Block__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Layout/Block",args:{children:"Example content",variant:"flat",color:"foreground",paddingLess:!1},argTypes:{variant:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_1__.p),control:"inline-radio"},color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_1__.S),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Block__WEBPACK_IMPORTED_MODULE_2__.Z,{...props});Basic.parameters={storySource:{source:"(props) => <Block {...props} />"},...Basic.parameters}},"./packages/box/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Breakpoints:()=>Breakpoints,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/box/Box.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Box__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Styled System/Box"},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{...props,width:.5,height:100,margin:"auto",bg:"primary"}),Breakpoints=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__.Z,{...props,width:.5,height:100,margin:"auto",color:"white",bg:["success","error","primary","accent"],fontSize:[2,3,4,5],display:"flex",alignItems:"center",justifyContent:"center",children:"Example"});Basic.parameters={storySource:{source:"(props) => (\n  <Box {...props} width={1 / 2} height={100} margin='auto' bg='primary' />\n)"},...Basic.parameters},Breakpoints.parameters={storySource:{source:"(props) => (\n  <Box\n    {...props}\n    width={1 / 2}\n    height={100}\n    margin='auto'\n    color='white'\n    bg={['success', 'error', 'primary', 'accent']}\n    fontSize={[2, 3, 4, 5]}\n    display='flex'\n    alignItems='center'\n    justifyContent='center'\n  >\n    Example\n  </Box>\n)"},...Breakpoints.parameters}},"./packages/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>Icon,WithIcon:()=>WithIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_icons_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/index.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/button/types.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/button/Button.tsx"),_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/button/ButtonIcon.tsx");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_3__.Z,title:"Controls/Button",args:{size:"md",variant:"filled",color:"primary",disabled:!1,fullwidth:!1,loading:!1,children:"Example"},argTypes:{size:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.qE),control:"inline-radio"},variant:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.Wu),control:"inline-radio"},color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.rp),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{...props}),WithIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_1__.Whitepaper,{}),...props}),Icon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_1__.Whitepaper,{}),...props});Icon.args={children:void 0},Icon.argTypes={children:{table:{disable:!0}}},Basic.parameters={storySource:{source:"(props) => <Button {...props} />"},...Basic.parameters},WithIcon.parameters={storySource:{source:"(props) => (\n  <ButtonIcon icon={<Whitepaper />} {...props} />\n)"},...WithIcon.parameters},Icon.parameters={storySource:{source:"(props) => (\n  <ButtonIcon icon={<Whitepaper />} {...props} />\n)"},...Icon.parameters}},"./packages/checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Uncontrolled:()=>Uncontrolled,WithLabel:()=>WithLabel,default:()=>Checkbox_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./packages/icons/index.tsx");const CheckboxWrapperStyle=styled_components_browser_esm.ZP.label`
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
  transition: box-shadow 0.1s ease, background-color 0.1s ease;
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
`;var packages_text=__webpack_require__("./packages/text/index.ts"),box=__webpack_require__("./packages/box/index.ts");function Checkbox(props,inputRef){const{className,style,wrapperRef,children,label,...inputProps}=props,{disabled}=inputProps,wrapperProps={className,style};return(0,jsx_runtime.jsxs)(CheckboxWrapperStyle,{...wrapperProps,ref:wrapperRef,children:[(0,jsx_runtime.jsx)(CheckboxInputStyle,{type:"checkbox",...inputProps,ref:inputRef}),(0,jsx_runtime.jsx)(CheckboxIconStyle,{}),label&&(0,jsx_runtime.jsx)(box.x,{ml:8,children:(0,jsx_runtime.jsx)(packages_text.xv,{size:"xxs",color:disabled?"secondary":"default",children:label})})]})}const checkbox_Checkbox=(0,react.forwardRef)(Checkbox);const Checkbox_stories={component:checkbox_Checkbox,title:"Controls/Checkbox",args:{disabled:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Uncontrolled=props=>(0,jsx_runtime.jsx)(checkbox_Checkbox,{...props});Uncontrolled.args={defaultChecked:!1};const Controlled=props=>(0,jsx_runtime.jsx)(checkbox_Checkbox,{...props});Controlled.args={checked:!0};const WithLabel=props=>(0,jsx_runtime.jsx)(checkbox_Checkbox,{...props});WithLabel.args={label:"Label"},Uncontrolled.parameters={storySource:{source:"(props) => (\n  <Checkbox {...props} />\n)"},...Uncontrolled.parameters},Controlled.parameters={storySource:{source:"(props) => {\n  return <Checkbox {...props} />\n}"},...Controlled.parameters},WithLabel.parameters={storySource:{source:"(props) => {\n  return <Checkbox {...props} />\n}"},...WithLabel.parameters}},"./packages/chip/Chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>Chip_stories});var ChipVariant,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(ChipVariant){ChipVariant[ChipVariant.positive=0]="positive",ChipVariant[ChipVariant.negative=1]="negative",ChipVariant[ChipVariant.warning=2]="warning",ChipVariant[ChipVariant.gray=3]="gray"}(ChipVariant||(ChipVariant={}));var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ChipVariantsStyle={positive:styled_components_browser_esm.iv`
    background: var(--lido-color-success);
    color: var(--lido-color-foreground);
  `,negative:styled_components_browser_esm.iv`
    background: var(--lido-color-error);
    color: var(--lido-color-foreground);
  `,gray:styled_components_browser_esm.iv`
    background: var(--lido-color-shadowLight);
    color: var(--lido-color-textSecondary);
  `,warning:styled_components_browser_esm.iv`
    background: var(--lido-color-warning);
    color: var(--lido-color-foreground);
  `},ChipWrapperStyle=styled_components_browser_esm.ZP.div`
  font-size: 14px;
  line-height: 20px;
  display: inline-flex;
  max-width: 100%;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  outline: none;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xs}px;
  padding: 0.2em 0.4em;

  cursor: ${({$interactive})=>$interactive?"pointer":"auto"};
  ${({$variant})=>ChipVariantsStyle[$variant]}
`;function Chip(props,ref){const{children,onClick,variant="positive",...rest}=props;return(0,jsx_runtime.jsx)(ChipWrapperStyle,{$interactive:!!onClick,$variant:variant,onClick,...rest,ref,children})}const chip_Chip=(0,react.forwardRef)(Chip);const Chip_stories={component:chip_Chip,title:"Controls/Chip",args:{interactive:!1,children:"Lido",variant:"positive"},argTypes:{variant:{options:(enumObject=ChipVariant,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}}};var enumObject;const Basic=(props,options)=>(0,jsx_runtime.jsx)(chip_Chip,{...props,onClick:options.args.interactive?()=>{}:void 0});Basic.parameters={storySource:{source:"(props, options) => (\n  <Chip\n    {...props}\n    // @ts-expect-error fix later\n    onClick={options.args.interactive ? () => void 0 : undefined}\n  />\n)"},...Basic.parameters}},"./packages/container/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,PageLayout:()=>PageLayout,default:()=>Container_stories});var ContainerSize,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ContainerSize){ContainerSize[ContainerSize.full=0]="full",ContainerSize[ContainerSize.content=1]="content",ContainerSize[ContainerSize.tight=2]="tight"}(ContainerSize||(ContainerSize={}));var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={full:styled_components_browser_esm.iv`
    max-width: 1424px;
  `,content:styled_components_browser_esm.iv`
    max-width: 960px;
  `,tight:styled_components_browser_esm.iv`
    max-width: 560px;
  `},ContainerStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 ${({theme})=>theme.spaceMap.xxl}px;

  ${({theme})=>theme.mediaQueries.lg} {
    padding: 0 ${({theme})=>theme.spaceMap.lg}px;
  }

  ${({$size})=>sizes[$size]}
`;function Container(props,ref){const{size="full",...rest}=props;return(0,jsx_runtime.jsx)(ContainerStyle,{$size:size,ref,...rest})}const container_Container=(0,react.forwardRef)(Container);const Container_stories={component:container_Container,title:"Layout/Container",parameters:{layout:"fullscreen"}},StyledDiv=styled_components_browser_esm.ZP.div`
  height: 100px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-textSecondary);
  display: flex;
  align-items: center;
  justify-content: center;
`,Base=props=>(0,jsx_runtime.jsx)(container_Container,{...props,children:(0,jsx_runtime.jsx)(StyledDiv,{})});var enumObject;Base.args={size:"full"},Base.argTypes={size:{options:(enumObject=ContainerSize,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}};const PageLayout=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(container_Container,{as:"header",size:"full",children:(0,jsx_runtime.jsx)(StyledDiv,{children:"Header"})}),(0,jsx_runtime.jsx)(container_Container,{as:"main",size:"content",children:(0,jsx_runtime.jsx)(StyledDiv,{style:{margin:"20px 0",height:"calc(100vh - 240px)"},children:"Content"})}),(0,jsx_runtime.jsx)(container_Container,{as:"footer",size:"full",children:(0,jsx_runtime.jsx)(StyledDiv,{children:"Footer"})})]});Base.parameters={storySource:{source:"(props) => (\n  <Container {...props}>\n    <StyledDiv />\n  </Container>\n)"},...Base.parameters},PageLayout.parameters={storySource:{source:"() => (\n  <>\n    <Container as='header' size='full'>\n      <StyledDiv>Header</StyledDiv>\n    </Container>\n    <Container as='main' size='content'>\n      <StyledDiv\n        style={{\n          margin: '20px 0',\n          height: 'calc(100vh - 240px)',\n        }}\n      >\n        Content\n      </StyledDiv>\n    </Container>\n    <Container as='footer' size='full'>\n      <StyledDiv>Footer</StyledDiv>\n    </Container>\n  </>\n)"},...PageLayout.parameters}},"./packages/content-theme/content-theme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_block_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block/index.ts"),_content_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/content-theme/content-theme.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Content Theme"},Basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_content_theme__WEBPACK_IMPORTED_MODULE_2__.x,{darkContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_block_index__WEBPACK_IMPORTED_MODULE_1__.gO,{children:"You see only dark content! Light content is hidden!"}),lightContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_block_index__WEBPACK_IMPORTED_MODULE_1__.gO,{children:"You see only light content! Dark content is hidden!"})})});Basic.parameters={storySource:{source:"() => (\n  <>\n    <ContentTheme\n      darkContent={\n        <Block>You see only dark content! Light content is hidden!</Block>\n      }\n      lightContent={\n        <Block>You see only light content! Dark content is hidden!</Block>\n      }\n    />\n  </>\n)"},...Basic.parameters}},"./packages/cookie-theme-toggler/cookie-theme-toggler.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Providers:()=>Providers,default:()=>cookie_theme_toggler_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),block=__webpack_require__("./packages/block/index.ts"),content_theme=__webpack_require__("./packages/content-theme/index.ts"),packages_text=__webpack_require__("./packages/text/index.ts"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),packages_button=__webpack_require__("./packages/button/index.ts"),icons=__webpack_require__("./packages/icons/index.tsx");const CookieThemeTogglerStyle=(0,styled_components_browser_esm.ZP)(packages_button.zx).attrs({variant:"text",size:"xs"})`
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
`;var theme=__webpack_require__("./packages/theme/index.ts");const ThemeToggler=()=>{const{toggleTheme}=(0,theme.M1)();return(0,jsx_runtime.jsxs)(CookieThemeTogglerStyle,{color:"secondary",onClick:toggleTheme,children:[(0,jsx_runtime.jsx)(CookieThemeTogglerLightIcon,{}),(0,jsx_runtime.jsx)(CookieThemeTogglerDarkIcon,{})]})};const cookie_theme_toggler_stories={title:"Theme/Cookie Theme Provider",args:{themeOverride:"follow cookie and system"}},Providers=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Use button to toggle theme"," ",(0,jsx_runtime.jsx)("span",{role:"img","aria-label":"right",children:"👉"})," ",(0,jsx_runtime.jsx)(ThemeToggler,{})," and reload page!",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_text.xv,{children:"The block depended by theme cookie"}),(0,jsx_runtime.jsx)(block.gO,{children:"Lorem ipsum dolor sit amet..."}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_text.xv,{children:"Example of using ContentTheme component"}),(0,jsx_runtime.jsx)(content_theme.x,{darkContent:(0,jsx_runtime.jsx)(block.gO,{children:"You see only dark content!"}),lightContent:(0,jsx_runtime.jsx)(block.gO,{children:"You see only light content!"})})]});Providers.parameters={storySource:{source:"() => (\n  <>\n    Use button to toggle theme{' '}\n    <span role='img' aria-label='right'>\n      👉\n    </span>{' '}\n    <ThemeToggler /> and reload page!\n    <br />\n    <br />\n    <Text>The block depended by theme cookie</Text>\n    <Block>Lorem ipsum dolor sit amet...</Block>\n    <br />\n    <br />\n    <Text>Example of using ContentTheme component</Text>\n    <ContentTheme\n      darkContent={<Block>You see only dark content!</Block>}\n      lightContent={<Block>You see only light content!</Block>}\n    />\n  </>\n)"},...Providers.parameters}},"./packages/cookies-tooltip/cookies-tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>cookies_tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),packages_text=__webpack_require__("./packages/text/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./packages/icons/index.tsx"),content_theme=__webpack_require__("./packages/content-theme/index.ts"),utils=__webpack_require__("./packages/utils/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ExternalLink=styled_components_browser_esm.ZP.a.attrs({target:"_blank",rel:"nofollow noopener"})`
  cursor: pointer;
`,Wrap=styled_components_browser_esm.ZP.div`
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
`,Box=styled_components_browser_esm.ZP.div`
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
`,CookieIconWrap=styled_components_browser_esm.ZP.div`
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
`,Text=styled_components_browser_esm.ZP.div`
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
`,ButtonsWrap=styled_components_browser_esm.ZP.div`
  display: flex;
`,ButtonBasic=styled_components_browser_esm.ZP.button.attrs({type:"button"})`
  font-weight: 800;
  font-size: 12px;
  line-height: 20px;
  border-radius: 6px;
  width: 72px;
  height: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color ease 0.25s, border-color ease 0.25s,
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
`,AllowButton=(0,styled_components_browser_esm.ZP)(ButtonBasic)`
  background-color: var(--lido-color-text);
  color: var(--lido-color-foreground);

  &:hover {
    background-color: var(--lido-color-textSecondary);
  }
`,DeclineButton=(0,styled_components_browser_esm.ZP)(ButtonBasic)`
  background-color: var(--lido-color-foreground);
  color: var(--lido-color-text);
  border: 1px solid var(--lido-color-text);

  &:hover {
    background-color: var(--lido-color-background);
  }
`,Link=(0,styled_components_browser_esm.ZP)(ExternalLink)`
  color: inherit;
  text-decoration: underline !important;
`,allowCookies=()=>{(0,utils.YD)("cookie-allowed","yes")},declineCookies=()=>{(0,utils.YD)("cookie-allowed","no")},CookiesTooltip=()=>{const[isVisible,setVisibility]=(0,react.useState)(!1),checkCookieAllowedEarlier=(0,react.useCallback)((()=>{(0,utils.Vp)("cookie-allowed")&&(setVisibility(!1),window.removeEventListener("focus",checkCookieAllowedEarlier))}),[]);return(0,react.useEffect)((()=>{(0,utils.Vp)("cookie-allowed")||(setVisibility(!0),window.addEventListener("focus",checkCookieAllowedEarlier))}),[checkCookieAllowedEarlier]),isVisible?(0,jsx_runtime.jsx)(Wrap,{children:(0,jsx_runtime.jsxs)(Box,{children:[(0,jsx_runtime.jsx)(CookieIconWrap,{children:(0,jsx_runtime.jsx)(content_theme.x,{darkContent:(0,jsx_runtime.jsx)(icons.CookieInverse,{}),lightContent:(0,jsx_runtime.jsx)(icons.Cookie,{})})}),(0,jsx_runtime.jsxs)(Text,{children:["We use cookies to collect anonymous site visitation data to improve performance of our website. For more info, read our ",(0,jsx_runtime.jsx)(Link,{href:"https://lido.fi/privacy-notice",children:"Privacy Notice"})]}),(0,jsx_runtime.jsxs)(ButtonsWrap,{children:[(0,jsx_runtime.jsx)(AllowButton,{onClick:()=>{allowCookies(),setVisibility(!1)},children:"Allow"}),(0,jsx_runtime.jsx)(DeclineButton,{onClick:()=>{declineCookies(),setVisibility(!1)},children:"Decline"})]})]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};const cookies_tooltip_stories={title:"CookiesTooltip/Basic"},Basic=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_text.xv,{children:"CookiesTooltip component has an ability to detect a user choice in other tabs and third level domain."}),(0,jsx_runtime.jsxs)(packages_text.xv,{children:["You can check above if you:",(0,jsx_runtime.jsx)("br",{}),"1. duplicate this tab;",(0,jsx_runtime.jsx)("br",{}),"2. allow or decline cookie;",(0,jsx_runtime.jsx)("br",{}),"3. and check in another tab;",(0,jsx_runtime.jsx)("br",{}),"4. and click to work area (to handler window.onfocus event)."]}),(0,jsx_runtime.jsx)(CookiesTooltip,{})]});Basic.parameters={storySource:{source:"() => (\n  <>\n    <Text>\n      CookiesTooltip component has an ability to detect a user choice in other\n      tabs and third level domain.\n    </Text>\n    <Text>\n      You can check above if you:\n      <br />\n      1. duplicate this tab;\n      <br />\n      2. allow or decline cookie;\n      <br />\n      3. and check in another tab;\n      <br />\n      4. and click to work area (to handler window.onfocus event).\n    </Text>\n    <CookiesTooltip />\n  </>\n)"},...Basic.parameters}},"./packages/data-table/DataTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,WithHighlighted:()=>WithHighlighted,WithHint:()=>WithHint,default:()=>DataTable_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),loaders=__webpack_require__("./packages/loaders/index.ts"),Tooltip=__webpack_require__("./packages/tooltip/Tooltip.tsx"),icons=__webpack_require__("./packages/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DataTableStyle=styled_components_browser_esm.ZP.div``,DataTableRowStyle=styled_components_browser_esm.ZP.div`
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
  margin: -6px 0 -5px 0;
  vertical-align: middle;
`;function DataTable(props,ref){return(0,jsx_runtime.jsx)(DataTableStyle,{ref,...props})}const data_table_DataTable=(0,react.forwardRef)(DataTable),DataTableRow=(0,react.forwardRef)((function DataTableRow(props,ref){const{title,loading=!1,highlight=!1,help,children,...rest}=props,hasHelper=!!help;return(0,jsx_runtime.jsxs)(DataTableRowStyle,{ref,...rest,children:[(0,jsx_runtime.jsxs)(DataTableTitleStyle,{children:[title,hasHelper&&(0,jsx_runtime.jsx)(Tooltip.Z,{placement:"bottomLeft",title:help,children:(0,jsx_runtime.jsx)(DataTableQuestionStyle,{})})]}),(0,jsx_runtime.jsx)(DataTableValueStyle,{$highlight:highlight,children:loading?(0,jsx_runtime.jsx)(loaders.Gl,{color:"text"}):children})]})}));const DataTable_stories={component:data_table_DataTable,title:"Layout/DataTable",parameters:{layout:"centered"}},Base=props=>{const{loading,...rest}=props;return(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(data_table_DataTable,{...rest,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"You will receive",loading,children:"100 LDO"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",loading,children:"$0.12"})]})})};Base.args={loading:!1};const WithHint=props=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(data_table_DataTable,{...props,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"Staking rewards fee",help:"This fee is split between node operators, the DAO, and an insurance fund",children:"10%"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",children:"$0.12"})]})}),WithHighlighted=props=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(data_table_DataTable,{...props,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"Staking rewards fee",highlight:!0,children:"10%"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",children:"$0.12"})]})});Base.parameters={storySource:{source:"(props) => {\n    const { loading, ...rest } = props\n\n    return (\n      <div style={{ width: 300 }}>\n        <DataTable {...rest}>\n          <DataTableRow title='You will receive' loading={loading}>\n            100&nbsp;LDO\n          </DataTableRow>\n          <DataTableRow title='Transaction gas cost' loading={loading}>\n            $0.12\n          </DataTableRow>\n        </DataTable>\n      </div>\n    )\n  }"},...Base.parameters},WithHint.parameters={storySource:{source:"(props) => {\n  return (\n    <div style={{ width: 300 }}>\n      <DataTable {...props}>\n        <DataTableRow\n          title='Staking rewards fee'\n          help='This fee is split between node operators, the DAO, and an insurance fund'\n        >\n          10%\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>\n      </DataTable>\n    </div>\n  )\n}"},...WithHint.parameters},WithHighlighted.parameters={storySource:{source:"(props) => {\n  return (\n    <div style={{ width: 300 }}>\n      <DataTable {...props}>\n        <DataTableRow title='Staking rewards fee' highlight>\n          10%\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>\n      </DataTable>\n    </div>\n  )\n}"},...WithHighlighted.parameters}},"./packages/divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,default:()=>Divider_stories});var DividerType,DividerIndent,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(DividerType){DividerType[DividerType.vertical=0]="vertical",DividerType[DividerType.horizontal=1]="horizontal"}(DividerType||(DividerType={})),function(DividerIndent){DividerIndent[DividerIndent.xs=0]="xs",DividerIndent[DividerIndent.sm=1]="sm",DividerIndent[DividerIndent.md=2]="md",DividerIndent[DividerIndent.lg=3]="lg",DividerIndent[DividerIndent.xl=4]="xl"}(DividerIndent||(DividerIndent={}));var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getIndents=({$indents,theme})=>$indents?`${theme.spaceMap[$indents]}px`:"0",types={horizontal:styled_components_browser_esm.iv`
    border-top: 1px solid currentColor;
    width: 100%;
    height: 0;
    margin: ${getIndents} 0;
  `,vertical:styled_components_browser_esm.iv`
    border-left: 1px solid currentColor;
    align-self: stretch;
    width: 0;
    margin: 0 ${getIndents};
  `},DividerStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  list-style: none;
  opacity: 0.1;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  flex-grow: 0;

  ${props=>types[props.$type]}
`;function Divider(props,ref){const{type="horizontal",indents,children,...rest}=props;return(0,jsx_runtime.jsx)(DividerStyle,{$type:type,$indents:indents,ref,...rest})}const divider_Divider=(0,react.forwardRef)(Divider);const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),Divider_stories={component:divider_Divider,title:"Layout/Divider",args:{type:"horizontal",indents:"md"},argTypes:{type:{options:getOptions(DividerType),control:"inline-radio"},indents:{options:getOptions(DividerIndent),control:"inline-radio"}}},Wrapper=styled_components_browser_esm.ZP.div`
  flex-direction: ${({$type})=>"vertical"===$type?"row":"column"};
  display: flex;
`,Base=props=>(0,jsx_runtime.jsxs)(Wrapper,{$type:props.type,children:[(0,jsx_runtime.jsx)("span",{children:"First"}),(0,jsx_runtime.jsx)(divider_Divider,{type:"vertical",...props}),(0,jsx_runtime.jsx)("span",{children:"Second"}),(0,jsx_runtime.jsx)(divider_Divider,{type:"vertical",...props}),(0,jsx_runtime.jsx)("span",{children:"Third"})]});Base.parameters={storySource:{source:"(props) => (\n  <Wrapper $type={props.type}>\n    <span>First</span>\n    <Divider type='vertical' {...props} />\n    <span>Second</span>\n    <Divider type='vertical' {...props} />\n    <span>Third</span>\n  </Wrapper>\n)"},...Base.parameters}},"./packages/heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HeadingH1:()=>HeadingH1,HeadingH2:()=>HeadingH2,HeadingH3:()=>HeadingH3,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/heading/Heading.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/heading/types.ts");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Heading__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Typography/Heading",args:{children:"Example Heading",color:"text"},argTypes:{children:{control:"text"},color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.p),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.args={size:"md"},Basic.argTypes={size:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.G),control:"inline-radio"}};const HeadingH1=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H1,{...props}),HeadingH2=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H2,{...props}),HeadingH3=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H3,{...props});Basic.parameters={storySource:{source:"(props) => <Heading {...props} />"},...Basic.parameters},HeadingH1.parameters={storySource:{source:"(props) => <H1 {...props} />"},...HeadingH1.parameters},HeadingH2.parameters={storySource:{source:"(props) => <H2 {...props} />"},...HeadingH2.parameters},HeadingH3.parameters={storySource:{source:"(props) => <H3 {...props} />"},...HeadingH3.parameters}},"./packages/icons/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,CryptoCurrencies:()=>CryptoCurrencies,CryptoExchanges:()=>CryptoExchanges,CryptoWallets:()=>CryptoWallets,List:()=>List,Social:()=>Social,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/index.tsx");const iconKeys=Object.keys(_index__WEBPACK_IMPORTED_MODULE_1__),__WEBPACK_DEFAULT_EXPORT__={title:"Images/Icons"},Base=props=>{const{color,type}=props,Component=_index__WEBPACK_IMPORTED_MODULE_1__[type];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{style:{fill:color||"var(--lido-color-text)"}})};Base.argTypes={color:{control:"color"},type:{options:iconKeys,control:"select"}},Base.args={type:"History"};const IconList=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,IconListItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  text-align: center;
  font-size: 13px;
  line-height: 15px;
  width: 120px;
  margin: 2px;
  padding: 10px;
  border-radius: 4px;
  color: var(--lido-color-text);
`,IconListTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  opacity: 0.5;
`,List=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconList,{children:iconKeys.map((componentName=>{const Icon=_index__WEBPACK_IMPORTED_MODULE_1__[componentName];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconListItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{width:24,height:24}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconListTitle,{children:componentName})]},componentName)}))}),SocialList=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
`,SocialListItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  background: ${({$color})=>$color};
  line-height: 0;
  border-radius: 6px;
  margin: 4px;
  padding: 4px;

  svg {
    fill: #fff;
  }
`,Social=()=>{const{Facebook,Twitter,Linkedin,Email,Telegram}=_index__WEBPACK_IMPORTED_MODULE_1__;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SocialList,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialListItem,{$color:"#3B5998",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Facebook,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialListItem,{$color:"linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Telegram,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialListItem,{$color:"#55ACEE",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Twitter,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialListItem,{$color:"#007BB5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Linkedin,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialListItem,{$color:"#52A573;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Email,{})})]})},CryptoCurrencies=()=>{const{Eth,Weth,Steth,Wsteth,Beth,Ldo,Ldopl,Solana,Stsol,Terra}=_index__WEBPACK_IMPORTED_MODULE_1__,iconKeys=Object.keys({Eth,Weth,Steth,Wsteth,Beth,Ldo,Ldopl,Solana,Stsol,Terra});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconList,{children:iconKeys.map((componentName=>{const Icon=_index__WEBPACK_IMPORTED_MODULE_1__[componentName];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconListItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{width:24,height:24}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconListTitle,{children:componentName})]},componentName)}))})},CryptoWallets=()=>{const{MetaMask,MetaMaskCircle,MetaMaskCircleInversion,WalletConnect,WalletConnectCircle,Coinbase,Ledger,LedgerCircle,LedgerCircleInversion,Trust,TrustCircle,Imtoken,ImtokenCircle,MathWalletCircle,MathWalletCircleInversion,Coin98Circle,Ambire,Blochainwallet,BlochainwalletInversion,Exodus,OperaWallet,Unstoppabledomains,Zengo,Gamestop,XdefiWallet}=_index__WEBPACK_IMPORTED_MODULE_1__,iconKeys=Object.keys({MetaMask,MetaMaskCircle,MetaMaskCircleInversion,WalletConnect,WalletConnectCircle,Coinbase,Ledger,LedgerCircle,LedgerCircleInversion,Trust,TrustCircle,Imtoken,ImtokenCircle,MathWalletCircle,MathWalletCircleInversion,Coin98Circle,Ambire,Zengo,Blochainwallet,BlochainwalletInversion,Exodus,OperaWallet,Unstoppabledomains,Gamestop,XdefiWallet});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconList,{children:iconKeys.map((componentName=>{const Icon=_index__WEBPACK_IMPORTED_MODULE_1__[componentName];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconListItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{width:24,height:24}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconListTitle,{children:componentName})]},componentName)}))})},CryptoExchanges=()=>{const{Uniswap,OneInch}=_index__WEBPACK_IMPORTED_MODULE_1__,iconKeys=Object.keys({Uniswap,OneInch});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconList,{children:iconKeys.map((componentName=>{const Icon=_index__WEBPACK_IMPORTED_MODULE_1__[componentName];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconListItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{width:24,height:24}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconListTitle,{children:componentName})]},componentName)}))})};Base.parameters={storySource:{source:"(props) => {\n  const { color, type } = props\n  const Component = components[type]\n\n  return <Component style={{ fill: color || `var(--lido-color-text)` }} />\n}"},...Base.parameters},List.parameters={storySource:{source:"() => (\n  <IconList>\n    {iconKeys.map((componentName) => {\n      const Icon = components[componentName]\n\n      return (\n        <IconListItem key={componentName}>\n          <Icon width={24} height={24} />\n          <IconListTitle>{componentName}</IconListTitle>\n        </IconListItem>\n      )\n    })}\n  </IconList>\n)"},...List.parameters},Social.parameters={storySource:{source:"() => {\n  const { Facebook, Twitter, Linkedin, Email, Telegram } = components\n\n  return (\n    <SocialList>\n      <SocialListItem $color='#3B5998'>\n        <Facebook />\n      </SocialListItem>\n      <SocialListItem $color='linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%)'>\n        <Telegram />\n      </SocialListItem>\n      <SocialListItem $color='#55ACEE'>\n        <Twitter />\n      </SocialListItem>\n      <SocialListItem $color='#007BB5'>\n        <Linkedin />\n      </SocialListItem>\n      <SocialListItem $color='#52A573;'>\n        <Email />\n      </SocialListItem>\n    </SocialList>\n  )\n}"},...Social.parameters},CryptoCurrencies.parameters={storySource:{source:"() => {\n  const { Eth, Weth, Steth, Wsteth, Beth, Ldo, Ldopl, Solana, Stsol, Terra } =\n    components\n  const iconKeys = Object.keys({\n    Eth,\n    Weth,\n    Steth,\n    Wsteth,\n    Beth,\n    Ldo,\n    Ldopl,\n    Solana,\n    Stsol,\n    Terra,\n  }) as IconVariants[]\n\n  return (\n    <IconList>\n      {iconKeys.map((componentName) => {\n        const Icon = components[componentName]\n\n        return (\n          <IconListItem key={componentName}>\n            <Icon width={24} height={24} />\n            <IconListTitle>{componentName}</IconListTitle>\n          </IconListItem>\n        )\n      })}\n    </IconList>\n  )\n}"},...CryptoCurrencies.parameters},CryptoWallets.parameters={storySource:{source:"() => {\n  const {\n    MetaMask,\n    MetaMaskCircle,\n    MetaMaskCircleInversion,\n    WalletConnect,\n    WalletConnectCircle,\n    Coinbase,\n    Ledger,\n    LedgerCircle,\n    LedgerCircleInversion,\n    Trust,\n    TrustCircle,\n    Imtoken,\n    ImtokenCircle,\n    MathWalletCircle,\n    MathWalletCircleInversion,\n    Coin98Circle,\n    Ambire,\n    Blochainwallet,\n    BlochainwalletInversion,\n    Exodus,\n    OperaWallet,\n    Unstoppabledomains,\n    Zengo,\n    Gamestop,\n    XdefiWallet,\n  } = components\n  const iconKeys = Object.keys({\n    MetaMask,\n    MetaMaskCircle,\n    MetaMaskCircleInversion,\n    WalletConnect,\n    WalletConnectCircle,\n    Coinbase,\n    Ledger,\n    LedgerCircle,\n    LedgerCircleInversion,\n    Trust,\n    TrustCircle,\n    Imtoken,\n    ImtokenCircle,\n    MathWalletCircle,\n    MathWalletCircleInversion,\n    Coin98Circle,\n    Ambire,\n    Zengo,\n    Blochainwallet,\n    BlochainwalletInversion,\n    Exodus,\n    OperaWallet,\n    Unstoppabledomains,\n    Gamestop,\n    XdefiWallet,\n  }) as IconVariants[]\n\n  return (\n    <IconList>\n      {iconKeys.map((componentName) => {\n        const Icon = components[componentName]\n\n        return (\n          <IconListItem key={componentName}>\n            <Icon width={24} height={24} />\n            <IconListTitle>{componentName}</IconListTitle>\n          </IconListItem>\n        )\n      })}\n    </IconList>\n  )\n}"},...CryptoWallets.parameters},CryptoExchanges.parameters={storySource:{source:"() => {\n  const { Uniswap, OneInch } = components\n  const iconKeys = Object.keys({\n    Uniswap,\n    OneInch,\n  }) as IconVariants[]\n\n  return (\n    <IconList>\n      {iconKeys.map((componentName) => {\n        const Icon = components[componentName]\n\n        return (\n          <IconListItem key={componentName}>\n            <Icon width={24} height={24} />\n            <IconListTitle>{componentName}</IconListTitle>\n          </IconListItem>\n        )\n      })}\n    </IconList>\n  )\n}"},...CryptoExchanges.parameters}},"./packages/identicon/Identicon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Badge:()=>Badge,Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/identicon/types.ts"),_Identicon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/identicon/Identicon.tsx"),_IdenticonBadge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/identicon/IdenticonBadge.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Identicon__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Images/Identicon",args:{address:"0x5a98fcbea516cf06857215779fd812ca3bef1b32",diameter:24},argTypes:{diameter:{control:{type:"range",min:4,max:64,step:4}}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Identicon__WEBPACK_IMPORTED_MODULE_2__.Z,{...props}),Badge=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IdenticonBadge__WEBPACK_IMPORTED_MODULE_3__.Z,{...props});var enumObject;Badge.args={symbols:3,color:"background"},Badge.argTypes={symbols:{control:{type:"range",min:0,max:21,step:1}},color:{options:(enumObject=_types__WEBPACK_IMPORTED_MODULE_1__.S,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}},Basic.parameters={storySource:{source:"(props) => <Identicon {...props} />"},...Basic.parameters},Badge.parameters={storySource:{source:"(props) => (\n  <IdenticonBadge {...props} />\n)"},...Badge.parameters}},"./packages/input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccentColor:()=>AccentColor,Basic:()=>Basic,Label:()=>Label,Small:()=>Small,WithButton:()=>WithButton,WithDecorators:()=>WithDecorators,WithError:()=>WithError,WithIdenticon:()=>WithIdenticon,WithSuccess:()=>WithSuccess,WithWarning:()=>WithWarning,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons=__webpack_require__("./packages/icons/index.tsx"),block=__webpack_require__("./packages/block/index.ts"),packages_button=__webpack_require__("./packages/button/index.ts"),Identicon=(__webpack_require__("./packages/identicon/IdenticonBadge.tsx"),__webpack_require__("./packages/identicon/Identicon.tsx")),Input=(__webpack_require__("./packages/identicon/types.ts"),__webpack_require__("./packages/input/Input.tsx")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),input_types=__webpack_require__("./packages/input/types.ts"),react=__webpack_require__("./node_modules/react/index.js");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),Input_stories={component:Input.Z,title:"Controls/Input",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>(0,jsx_runtime.jsx)(Input.Z,{...props});Basic.args={placeholder:"Amount",label:"",type:"text"},Basic.argTypes={type:{options:getOptions(input_types.n$),control:"inline-radio"},color:{options:getOptions(input_types.Sl),control:"inline-radio"}};const Small=props=>(0,jsx_runtime.jsx)(Input.Z,{...props});Small.args={variant:"small",placeholder:"Amount"},Small.argTypes={variant:{options:getOptions(input_types.Jf),control:"inline-radio"}};const Label=props=>(0,jsx_runtime.jsx)(Input.Z,{...props});Label.args={label:"Email address"},Label.argTypes={color:{options:getOptions(input_types.Sl),control:"inline-radio"}};const EthIcon=(0,styled_components_browser_esm.ZP)(icons.Eth)`
  fill: var(--lido-color-text);
`,MaxButton=()=>(0,jsx_runtime.jsx)(packages_button.zx,{variant:"translucent",size:"xxs",style:{marginRight:"-4px"},children:"MAX"}),WithDecorators=props=>(0,jsx_runtime.jsx)(Input.Z,{leftDecorator:(0,jsx_runtime.jsx)(EthIcon,{}),rightDecorator:(0,jsx_runtime.jsx)(MaxButton,{}),...props});WithDecorators.args={placeholder:"Amount"},WithDecorators.argTypes={color:{options:getOptions(input_types.Sl),control:"inline-radio"}};const WithIdenticon=props=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)(Input.Z,{...props,value,onChange:event=>{var ref;setValue(event.currentTarget.value),null===(ref=props.onChange)||void 0===ref||ref.call(props,event)},rightDecorator:(0,jsx_runtime.jsx)(Identicon.Z,{address:String(null!=value?value:"")})})};WithIdenticon.args={placeholder:"Ethereum address"};const WithButton=props=>(0,jsx_runtime.jsx)(Input.Z,{rightDecorator:(0,jsx_runtime.jsx)(packages_button.zx,{size:"sm",style:{marginRight:"-10px"},disabled:props.disabled,children:"Subscribe"}),...props});WithButton.args={fullwidth:!0,label:"Email address"},WithButton.argTypes={color:{options:getOptions(input_types.Sl),control:"inline-radio"}};const WithError=props=>(0,jsx_runtime.jsx)(Input.Z,{...props});WithError.args={fullwidth:!0,defaultValue:"info@lido.",label:"Email address",error:"Email is invalid"},WithError.argTypes={color:{options:getOptions(input_types.Sl),control:"inline-radio"}};const WithWarning=props=>(0,jsx_runtime.jsx)(Input.Z,{...props});WithWarning.args={fullwidth:!0,defaultValue:"10",label:"Token amount",warning:"Amount may be insufficient."};const Success=styled_components_browser_esm.ZP.span`
  font-weight: 600;
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  color: var(--lido-color-success);
`,WithSuccess=props=>(0,jsx_runtime.jsx)(Input.Z,{rightDecorator:(0,jsx_runtime.jsx)(Success,{children:"Subscribed"}),...props});WithSuccess.args={fullwidth:!0,disabled:!0,defaultValue:"info@lido.fi",success:"Thank you for subscribing! We will notify you once we kick off our platform."};const AccentColor=props=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsxs)(block.gO,{color:"accent",style:{display:"flex",background:"linear-gradient(60deg, #413e58 20%, #30363f 100%)"},children:[(0,jsx_runtime.jsx)(Input.Z,{...props,value,onChange:event=>{var ref;setValue(event.currentTarget.value),null===(ref=props.onChange)||void 0===ref||ref.call(props,event)},rightDecorator:(0,jsx_runtime.jsx)(Identicon.Z,{address:String(null!=value?value:"")}),color:"accent"}),(0,jsx_runtime.jsx)(packages_button.zx,{style:{marginLeft:12,flexShrink:0},children:"Calculate"})]})};AccentColor.args={fullwidth:!0,label:"",placeholder:"Ethereum address"},Basic.parameters={storySource:{source:"(props) => <Input {...props} />"},...Basic.parameters},Small.parameters={storySource:{source:"(props) => <Input {...props} />"},...Small.parameters},Label.parameters={storySource:{source:"(props) => <Input {...props} />"},...Label.parameters},WithDecorators.parameters={storySource:{source:"(props) => (\n  <Input\n    leftDecorator={<EthIcon />}\n    rightDecorator={<MaxButton />}\n    {...props}\n  />\n)"},...WithDecorators.parameters},WithIdenticon.parameters={storySource:{source:"(props) => {\n  const [value, setValue] = useState('')\n\n  return (\n    <Input\n      {...props}\n      value={value}\n      onChange={(event) => {\n        setValue(event.currentTarget.value)\n        props.onChange?.(event)\n      }}\n      rightDecorator={<Identicon address={String(value ?? '')} />}\n    />\n  )\n}"},...WithIdenticon.parameters},WithButton.parameters={storySource:{source:"(props) => (\n  <Input\n    rightDecorator={\n      <Button\n        size='sm'\n        style={{\n          marginRight: '-10px',\n        }}\n        disabled={props.disabled}\n      >\n        Subscribe\n      </Button>\n    }\n    {...props}\n  />\n)"},...WithButton.parameters},WithError.parameters={storySource:{source:"(props) => <Input {...props} />"},...WithError.parameters},WithWarning.parameters={storySource:{source:"(props) => <Input {...props} />"},...WithWarning.parameters},WithSuccess.parameters={storySource:{source:"(props) => (\n  <Input rightDecorator={<Success>Subscribed</Success>} {...props} />\n)"},...WithSuccess.parameters},AccentColor.parameters={storySource:{source:"(props) => {\n  const [value, setValue] = useState('')\n\n  return (\n    <Block\n      color='accent'\n      style={{\n        display: 'flex',\n        background: 'linear-gradient(60deg, #413e58 20%, #30363f 100%)',\n      }}\n    >\n      <Input\n        {...props}\n        value={value}\n        onChange={(event) => {\n          setValue(event.currentTarget.value)\n          props.onChange?.(event)\n        }}\n        rightDecorator={<Identicon address={String(value ?? '')} />}\n        color='accent'\n      />\n      <Button\n        style={{\n          marginLeft: 12,\n          flexShrink: 0,\n        }}\n      >\n        Calculate\n      </Button>\n    </Block>\n  )\n}"},...AccentColor.parameters}},"./packages/input/InputGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/input/Input.tsx"),_InputGroup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputGroup.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Input__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Controls/InputGroup",args:{fullwidth:!1}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputGroup__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_1__.Z,{placeholder:"First Name",fullwidth:props.fullwidth}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_1__.Z,{placeholder:"Last Name",fullwidth:props.fullwidth})]});Basic.parameters={storySource:{source:"(props) => (\n  <InputGroup {...props}>\n    <Input placeholder='First Name' fullwidth={props.fullwidth} />\n    <Input placeholder='Last Name' fullwidth={props.fullwidth} />\n  </InputGroup>\n)"},...Basic.parameters}},"./packages/input/OptionsSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_OptionsSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/OptionsSlider.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_OptionsSlider__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Controls/OptionsSlider",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("weekly");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionsSlider__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,value,onChange:(e,val)=>setValue(val),options:[{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"},{value:"quarterly",label:"Quarterly"},{value:"yearly",label:"Yearly"}]})};Basic.parameters={storySource:{source:"(props) => {\n  const [value, setValue] = useState('weekly')\n  return (\n    <OptionsSlider\n      {...props}\n      value={value}\n      onChange={(e, val) => setValue(val as string)}\n      options={[\n        { value: 'weekly', label: 'Weekly' },\n        { value: 'monthly', label: 'Monthly' },\n        { value: 'quarterly', label: 'Quarterly' },\n        { value: 'yearly', label: 'Yearly' },\n      ]}\n    />\n  )\n}"},...Basic.parameters}},"./packages/input/SliderInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SliderInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/SliderInput.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_SliderInput__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Controls/SliderInput",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1e5);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SliderInput__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,value,onChange:e=>setValue(Number(e.target.value)),getLabel:value=>`${value} DOT`,minLabel:"0 DOT",maxLabel:"1000000 DOT",max:1e6})};Basic.parameters={storySource:{source:"(props) => {\n  const [value, setValue] = useState(100000)\n  return (\n    <SliderInput\n      {...props}\n      value={value}\n      onChange={(e) => setValue(Number(e.target.value))}\n      getLabel={(value) => `${value} DOT`}\n      minLabel={'0 DOT'}\n      maxLabel={'1000000 DOT'}\n      max={1000000}\n    />\n  )\n}"},...Basic.parameters}},"./packages/input/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Textarea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/input/Textarea.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Controls/Textarea",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.args={placeholder:"Amount",label:"",rows:5},Basic.parameters={storySource:{source:"(props) => <Textarea {...props} />"},...Basic.parameters}},"./packages/lido-logo/LidoLogo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>LidoLogo_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const LidoLogoStyles=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  color: var(--lido-color-text);
  line-height: 0;
`;function LidoLogo(props,ref){return(0,jsx_runtime.jsx)(LidoLogoStyles,{...props,ref,children:(0,jsx_runtime.jsxs)("svg",{width:"89",height:"20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M27.172 4.094h2.25v9.656h5.531v2.156h-7.781V4.094zm17.617 0h2.25v11.812h-2.25V4.094zm13.021 0h3.75c.774 0 1.512.162 2.212.487.7.313 1.319.738 1.856 1.275a6.078 6.078 0 0 1 1.275 1.875c.313.713.469 1.469.469 2.269s-.156 1.556-.469 2.269a6.078 6.078 0 0 1-1.275 1.875 6.435 6.435 0 0 1-1.856 1.293c-.7.313-1.438.47-2.212.47h-3.75V4.093zm3.75 9.656c.462 0 .906-.1 1.33-.3.438-.2.82-.469 1.144-.806.338-.338.6-.732.788-1.181.2-.463.3-.95.3-1.463 0-.512-.1-.994-.3-1.444a3.576 3.576 0 0 0-.788-1.2 3.717 3.717 0 0 0-1.143-.806 3.09 3.09 0 0 0-1.331-.3h-1.5v7.5h1.5zM82.558 16a5.56 5.56 0 0 1-2.213-.45 5.978 5.978 0 0 1-1.818-1.275 6.625 6.625 0 0 1-1.238-1.912A6.118 6.118 0 0 1 76.84 10c0-.838.15-1.619.45-2.344a6.304 6.304 0 0 1 1.238-1.912 5.575 5.575 0 0 1 1.818-1.275A5.367 5.367 0 0 1 82.558 4a5.24 5.24 0 0 1 2.194.469c.7.3 1.306.725 1.818 1.275a5.868 5.868 0 0 1 1.238 1.912c.312.725.469 1.506.469 2.344 0 .85-.157 1.637-.47 2.363a6.144 6.144 0 0 1-1.237 1.912 5.689 5.689 0 0 1-1.818 1.275c-.688.3-1.42.45-2.194.45zm0-2.156c.462 0 .906-.094 1.331-.281a3.31 3.31 0 0 0 1.106-.788 4.13 4.13 0 0 0 .75-1.219c.188-.475.282-.993.282-1.556 0-.563-.094-1.075-.282-1.537a3.855 3.855 0 0 0-.75-1.22 3.263 3.263 0 0 0-2.437-1.088 3.333 3.333 0 0 0-1.35.282 3.25 3.25 0 0 0-1.088.807 3.854 3.854 0 0 0-.75 1.219A4.057 4.057 0 0 0 79.09 10c0 .563.093 1.081.28 1.556.188.463.438.869.75 1.219.313.338.675.6 1.088.787a3.3 3.3 0 0 0 1.35.282z"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7.005 0 4.949 7.748-4.949 2.884-4.948-2.884L7.005 0zM3.572 7.381l3.433-5.376 3.434 5.376-3.434 2.002L3.572 7.38z",fill:"#00A3FF"}),(0,jsx_runtime.jsx)("path",{d:"M6.998 12.335 1.258 8.99l-.157.245a6.999 6.999 0 1 0 11.796 0l-.157-.245-5.742 3.346z",fill:"#00A3FF"})]})})}const lido_logo_LidoLogo=(0,react.forwardRef)(LidoLogo);const LidoLogo_stories={component:lido_logo_LidoLogo,title:"Layout/LidoLogo"},Basic=()=>(0,jsx_runtime.jsx)(lido_logo_LidoLogo,{});Basic.parameters={storySource:{source:"() => <LidoLogo />"},...Basic.parameters}},"./packages/link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/link/Link.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Link__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Typography/Link",args:{children:"Lido",href:"https://lido.fi",fadeVisited:!1},argTypes:{fadeVisited:{description:"Fade visited links"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.parameters={storySource:{source:"(props) => <Link {...props} />"},...Basic.parameters}},"./packages/loaders/InlineLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithText:()=>WithText,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/loaders/types.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_InlineLoader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/loaders/InlineLoader.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_InlineLoader__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Loaders/InlineLoader",args:{color:"text"},argTypes:{color:{options:(enumObject=_types__WEBPACK_IMPORTED_MODULE_1__._,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio",description:"Background color (component has opacity)"}}};var enumObject;const Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InlineLoader__WEBPACK_IMPORTED_MODULE_2__.Z,{...props}),RowStyle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: flex;
  max-width: 300px;
  margin: 10px 0;

  & > div {
    flex-grow: 1;
    flex-basis: 50%;
  }
`,WithText=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowStyle,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"First row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InlineLoader__WEBPACK_IMPORTED_MODULE_2__.Z,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowStyle,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Second row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InlineLoader__WEBPACK_IMPORTED_MODULE_2__.Z,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowStyle,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Third row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InlineLoader__WEBPACK_IMPORTED_MODULE_2__.Z,{})]})]});Basic.parameters={storySource:{source:"(props) => (\n  <InlineLoader {...props} />\n)"},...Basic.parameters},WithText.parameters={storySource:{source:"() => (\n  <>\n    <RowStyle>\n      <div>First row</div>\n      <InlineLoader />\n    </RowStyle>\n    <RowStyle>\n      <div>Second row</div>\n      <InlineLoader />\n    </RowStyle>\n    <RowStyle>\n      <div>Third row</div>\n      <InlineLoader />\n    </RowStyle>\n  </>\n)"},...WithText.parameters}},"./packages/loaders/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/loaders/types.ts"),_Loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/loaders/Loader.tsx");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Loader__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Loaders/Loader",args:{color:"primary",size:"medium"},argTypes:{color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_1__.ux),control:"inline-radio",description:"Loader color"},size:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_1__.gI),control:"inline-radio",description:"Loader size"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_2__.Z,{...props});Basic.parameters={storySource:{source:"(props) => <Loader {...props} />"},...Basic.parameters}},"./packages/main-menu/MainMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>MainMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons=__webpack_require__("./packages/icons/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const desktopCss=styled_components_browser_esm.iv`
  margin: 0 46px;
  display: flex;

  svg {
    margin-right: 10px;
  }
`,mobileCss=styled_components_browser_esm.iv`
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background-color: var(--lido-color-foreground);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--lido-color-border);

  svg {
    margin-right: 0;
    margin-bottom: 7px;
  }
`,Nav=styled_components_browser_esm.ZP.div`
  ${desktopCss}
  ${({theme})=>theme.mediaQueries.md} {
    ${mobileCss}
  }
  z-index: 5;
`;function MainMenu(props,ref){const{children,...restProps}=props;return(0,jsx_runtime.jsx)(Nav,{ref,...restProps,children})}const main_menu_MainMenu=(0,react.forwardRef)(MainMenu),NavLink=styled_components_browser_esm.ZP.a`
  cursor: pointer;
  color: var(--lido-color-secondary);
  font-size: ${({theme})=>theme.fontSizesMap.xxxs}px;
  line-height: 1.7em;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: ${props=>props.active?1:.8};

  :hover {
    opacity: 1;
    color: var(--lido-color-secondary);
  }

  :not(:last-of-type) {
    margin-right: 32px;
  }

  svg {
    fill: var(
      --lido-color-${({active})=>active?"primary":"secondary"}
    );
  }

  ${({theme})=>theme.mediaQueries.md} {
    flex-direction: column;
    text-transform: none;
    font-weight: 500;
    font-size: ${({theme})=>theme.fontSizesMap.xxxs}px;
    line-height: 1.2em;
    letter-spacing: 0;
  }
`;function MainMenuItem(props,ref){const{icon,children,active,...restProps}=props;return(0,jsx_runtime.jsxs)(NavLink,{ref,active:Boolean(active),...restProps,children:[icon,(0,jsx_runtime.jsx)("span",{children})]})}const MainManuItem=(0,react.forwardRef)(MainMenuItem);const MainMenu_stories={component:main_menu_MainMenu,title:"Layout/MainMenu",args:{active:"stake"},argTypes:{active:{name:"Active link",control:"select",options:["stake","wrap","wallet"]}}},Basic=({active})=>(0,jsx_runtime.jsxs)(main_menu_MainMenu,{children:[(0,jsx_runtime.jsx)(MainManuItem,{active:"stake"===active,icon:(0,jsx_runtime.jsx)(icons.Stake,{}),children:"Stake"}),(0,jsx_runtime.jsx)(MainManuItem,{active:"wrap"===active,icon:(0,jsx_runtime.jsx)(icons.Wrap,{}),children:"Wrap"}),(0,jsx_runtime.jsx)(MainManuItem,{active:"wallet"===active,icon:(0,jsx_runtime.jsx)(icons.Wallet,{}),children:"Wallet"})]});Basic.parameters={storySource:{source:"({\n  active,\n}) => (\n  <MainMenu>\n    <MainMenuItem active={active === 'stake'} icon={<Stake />}>\n      Stake\n    </MainMenuItem>\n    <MainMenuItem active={active === 'wrap'} icon={<Wrap />}>\n      Wrap\n    </MainMenuItem>\n    <MainMenuItem active={active === 'wallet'} icon={<Wallet />}>\n      Wallet\n    </MainMenuItem>\n  </MainMenu>\n)"},...Basic.parameters}},"./packages/modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,BasicModalButtonInModal:()=>BasicModalButtonInModal,ChooseNetworkInModal:()=>ChooseNetworkInModal,ErrorStateInModal:()=>ErrorStateInModal,ExtraContent:()=>ExtraContent,LoadingStateInModal:()=>LoadingStateInModal,ManulIconSizeInModalButtonInModal:()=>ManulIconSizeInModalButtonInModal,SuccessStateInModal:()=>SuccessStateInModal,WithBackButton:()=>WithBackButton,WithScroll:()=>WithScroll,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),packages_button=__webpack_require__("./packages/button/index.ts"),loaders=__webpack_require__("./packages/loaders/index.ts"),packages_text=__webpack_require__("./packages/text/index.ts"),Link=__webpack_require__("./packages/link/Link.tsx"),icons=__webpack_require__("./packages/icons/index.tsx"),react=__webpack_require__("./node_modules/react/index.js");const ModalStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{fontSizesMap,borderRadiusesMap,colors,boxShadows},$center})=>styled_components_browser_esm.iv`
    width: 432px;
    max-width: 100%;
    font-weight: 400;
    font-size: ${fontSizesMap.xs}px;
    line-height: 1.5em;
    text-align: ${$center?"center":"left"};
    border-radius: ${borderRadiusesMap.xl}px;
    box-shadow: ${boxShadows.xxl} ${colors.shadowDark};
  `}
`,ModalBaseStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{colors}})=>styled_components_browser_esm.iv`
    color: ${colors.text};
    background: ${colors.foreground};
    border-radius: inherit;
    position: relative;
    z-index: 1;
  `}
`,ModalHeaderStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{spaceMap,fontSizesMap,mediaQueries},$short})=>styled_components_browser_esm.iv`
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
`,ModalTitleStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{fontSizesMap,spaceMap,mediaQueries},$center,$withBackButton,$withCloseButton,$withTitleIcon})=>styled_components_browser_esm.iv`
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
`,ModalTitleIconStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{spaceMap},$center})=>styled_components_browser_esm.iv`
    display: ${$center?"flex":"block"};
    justify-content: ${$center?"center":"flex-start"};
    line-height: 0.7;
    margin-bottom: ${spaceMap.md}px;
  `}
`,ModalTitleTextStyle=styled_components_browser_esm.ZP.div`
  margin: ${({theme})=>theme.spaceMap.xs}px 0;
`,ModalSubtitleStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{colors,fontSizesMap,spaceMap,mediaQueries}})=>styled_components_browser_esm.iv`
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
`,ModalContentStyle=styled_components_browser_esm.ZP.div`
  ${({theme:{spaceMap,mediaQueries}})=>styled_components_browser_esm.iv`
    padding: 0 ${spaceMap.xxl}px ${spaceMap.xxl}px;

    ${mediaQueries.md} {
      padding: 0 ${spaceMap.lg}px ${spaceMap.lg}px;
    }
  `}
`,ModalCloseStyle=(0,styled_components_browser_esm.ZP)(packages_button.Ei).attrs({icon:(0,jsx_runtime.jsx)(icons.Close,{}),color:"secondary",variant:"ghost",size:"xs"})`
  margin: 0 -10px 0 0;
  color: var(--lido-color-textSecondary);
  flex-shrink: 0;
  border-radius: 50%;
`,ModalBackStyle=(0,styled_components_browser_esm.ZP)(packages_button.Ei).attrs({icon:(0,jsx_runtime.jsx)(icons.ArrowBack,{}),color:"secondary",variant:"ghost",size:"xs"})`
  ${({theme:{colors,spaceMap}})=>styled_components_browser_esm.iv`
    color: ${colors.textSecondary};
    flex-shrink: 0;
    margin: 0 ${spaceMap.sm}px 0 -6px;
    border-radius: 50%;
    background: transparent !important;
  `}
`;var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts"),utils=__webpack_require__("./packages/utils/index.ts");const ModalPortalStyle=styled_components_browser_esm.ZP.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 300;
  background: var(--lido-color-overlay);
  cursor: ${({$closable})=>$closable?"pointer":"default"};
  transition: opacity ${({$duration})=>$duration}ms ease;
  opacity: ${({$transition})=>["exiting","exited"].includes($transition)?0:1};
`,ModalOverflowStyle=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
`,ModalOverlayStyles_ModalContentStyle=styled_components_browser_esm.ZP.div`
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
`,FOCUSABLE_ELEMENTS=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];function ModalOverlay(props,externalRef){const{onClose,onBack,duration,transitionStatus,...rest}=props,closable=!!onClose;(0,hooks.Y5)(onClose),(0,hooks.F5)();const controlRef=(()=>{const modalRef=(0,react.useRef)(null),getFocusableNodes=(0,react.useCallback)((()=>{var ref,ref1;const nodes=null!==(ref1=null===(ref=modalRef.current)||void 0===ref?void 0:ref.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")))&&void 0!==ref1?ref1:[];return Array.from(nodes).filter((node=>node&&node instanceof HTMLElement&&null!==node.offsetParent))}),[]),handleRetainFocus=(0,react.useCallback)((event=>{const focusableNodes=getFocusableNodes();if(0===focusableNodes.length)return;const currentElement=document.activeElement,focusedItemIndex=currentElement instanceof HTMLElement&&focusableNodes.indexOf(currentElement);event.shiftKey&&0===focusedItemIndex&&(focusableNodes[focusableNodes.length-1].focus(),event.preventDefault()),!event.shiftKey&&focusableNodes.length>0&&focusedItemIndex===focusableNodes.length-1&&(focusableNodes[0].focus(),event.preventDefault())}),[getFocusableNodes]);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Tab"===event.code&&handleRetainFocus(event)};return document.addEventListener("keydown",handleKeyDown),()=>document.removeEventListener("keydown",handleKeyDown)}),[handleRetainFocus]);const[interceptFocus,restoreFocus]=(0,hooks.ch)();return(0,react.useEffect)((()=>{if(modalRef.current)return interceptFocus(modalRef.current),restoreFocus}),[interceptFocus,restoreFocus]),modalRef})(),{ref:closeRef,handleClick}=(callback=>{const ref=(0,react.useRef)(null),handleClick=(0,react.useCallback)((event=>{const contentElement=ref.current;contentElement&&event.target instanceof Node&&(contentElement.contains(event.target)||null==callback||callback())}),[callback]);return{ref,handleClick}})(onClose),mergedRef=(0,hooks.qq)([controlRef,closeRef,externalRef]);return utils.cV?react_dom.createPortal((0,jsx_runtime.jsx)(ModalPortalStyle,{$closable:closable,$duration:duration,$transition:transitionStatus,onClick:handleClick,children:(0,jsx_runtime.jsx)(ModalOverflowStyle,{children:(0,jsx_runtime.jsx)(ModalOverlayStyles_ModalContentStyle,{tabIndex:-1,role:"dialog","aria-modal":"true",ref:mergedRef,$transition:transitionStatus,$duration:duration,...rest})})}),utils.cV):null}const modal_ModalOverlay=(0,transition.Y)((0,react.forwardRef)(ModalOverlay));function Modal(props,ref){const{children,title,titleIcon,subtitle,center=!1,extra,open,...rest}=props,{onClose,onBack}=props,withTitleIcon=!!titleIcon,withSubtitle=!!subtitle,withCloseButton=!!onClose,withBackButton=!!onBack,modalHeader=(0,jsx_runtime.jsxs)(ModalHeaderStyle,{$short:!title,children:[withBackButton&&(0,jsx_runtime.jsx)(ModalBackStyle,{onClick:onBack}),(0,jsx_runtime.jsxs)(ModalTitleStyle,{$center:center,$withTitleIcon:withTitleIcon,$withCloseButton:withCloseButton,$withBackButton:withBackButton,children:[withTitleIcon&&(0,jsx_runtime.jsx)(ModalTitleIconStyle,{$center:center,children:titleIcon}),(0,jsx_runtime.jsx)(ModalTitleTextStyle,{children:title})]}),withCloseButton&&(0,jsx_runtime.jsx)(ModalCloseStyle,{onClick:onClose})]});return(0,jsx_runtime.jsx)(modal_ModalOverlay,{in:open,...rest,ref,children:(0,jsx_runtime.jsxs)(ModalStyle,{$center:center,children:[(0,jsx_runtime.jsxs)(ModalBaseStyle,{children:[modalHeader,withSubtitle&&(0,jsx_runtime.jsx)(ModalSubtitleStyle,{children:subtitle}),(0,jsx_runtime.jsx)(ModalContentStyle,{children})]}),extra]})})}const modal_Modal=(0,react.forwardRef)(Modal),ModalExtraStyle=styled_components_browser_esm.ZP.div`
  margin-top: ${({theme})=>-theme.borderRadiusesMap.xl}px;
  color: var(--lido-color-accentContrast);
  background: var(--lido-color-accent);
  padding: ${({theme})=>theme.spaceMap.xxl}px;
  padding-top: ${({theme})=>theme.borderRadiusesMap.xl+theme.spaceMap.xxl}px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
    padding-top: ${({theme})=>theme.borderRadiusesMap.xl+theme.spaceMap.lg}px;
  }
`;function ModalExtra(props,ref){return(0,jsx_runtime.jsx)(ModalExtraStyle,{...props,ref})}const modal_ModalExtra=(0,react.forwardRef)(ModalExtra),ModalButtonStyle=(0,styled_components_browser_esm.ZP)(packages_button.zx)`
  border: ${({active})=>active?"1px solid var(--lido-color-primary)":"1px solid var(--lido-color-background)"};

  background-color: ${({active})=>active?"rgba(0, 163, 255, 0.1);":"var(--lido-color-background)"};

  color: var(--lido-color-text);

  :not(:disabled):hover,
  :focus-visible {
    background-color: rgba(0, 163, 255, 0.1);
    color: var(--lido-color-text);
  }
`,ModalButtonContentStyle=styled_components_browser_esm.ZP.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,iconSize={xxs:{width:"16px",height:"16px"},xs:{width:"24px",height:"24px"},sm:{width:"32px",height:"32px"},md:{width:"48px",height:"48px"},lg:{width:"64px",height:"64px"}};function ModalButton(props,ref){const{size="md",loading=!1,children,icon}=props,AdaptiveIconProps=icon.props.width||icon.props.height?icon.props:{...iconSize[size]},AdaptiveIcon=react.cloneElement(icon,AdaptiveIconProps);return(0,jsx_runtime.jsx)(ModalButtonStyle,{type:"button",size,loading,ref,...props,children:(0,jsx_runtime.jsxs)(ModalButtonContentStyle,{children:[children," ",AdaptiveIcon]})})}const modal_ModalButton=(0,react.forwardRef)(ModalButton);const Modal_stories={component:modal_Modal,title:"Dialogs/Modal",args:{title:"Modal Title",subtitle:"",children:"Modal content",center:!1},argTypes:{onClose:{action:"close",table:{disable:!0}}}},useModal=props=>{const{onClose,onBack}=props,[state,setState]=(0,react.useState)(!1);return{state,handleOpen:(0,react.useCallback)((()=>setState(!0)),[]),handleClose:(0,react.useCallback)((()=>{setState(!1),null==onClose||onClose()}),[onClose]),handleBack:(0,react.useCallback)((()=>{null==onBack||onBack()}),[onBack])}},Basic=props=>{const{state,handleOpen,handleClose}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsx)(modal_Modal,{...props,open:state,onClose:handleClose})]})},ExtraContent=props=>{const{state,handleOpen,handleClose}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsx)(modal_Modal,{...props,open:state,onClose:handleClose,extra:(0,jsx_runtime.jsx)(modal_ModalExtra,{children:"Extra content"})})]})},WithBackButton=props=>{const{state,handleOpen,handleClose,handleBack}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsx)(modal_Modal,{...props,open:state,onClose:handleClose,onBack:handleBack})]})},WithScroll=props=>{const{state,handleOpen,handleClose}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsx)(modal_Modal,{...props,open:state,onClose:handleClose,children:(0,jsx_runtime.jsx)("div",{style:{height:"150vh"},children:props.children})})]})},LoadingStateInModal=props=>{const{state,handleOpen,handleClose}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show loading modal"}),(0,jsx_runtime.jsxs)(modal_Modal,{...props,titleIcon:(0,jsx_runtime.jsx)(loaders.aN,{size:"large"}),open:state,onClose:handleClose,children:[(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_text.xv,{color:"secondary",size:"xxs",children:"Confirm this transaction in your wallet"})]})]})};LoadingStateInModal.args={title:"You are now staking 10 ETH",subtitle:"Staking 10 ETH. You will receive 10 stETH",center:!0},LoadingStateInModal.argTypes={children:{table:{disable:!0}}};const SuccessStateInModal=props=>{const{state,handleOpen,handleClose}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show success modal"}),(0,jsx_runtime.jsxs)(modal_Modal,{...props,titleIcon:(0,jsx_runtime.jsx)(icons.Success,{color:"green",width:64,height:64}),open:state,onClose:handleClose,children:[(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Link.Z,{href:"https://etherscan.io/",children:"View on Etherscan"})]})]})};SuccessStateInModal.args={title:"Your new balance is 10 stETH",subtitle:"Staking operation was successful",center:!0},SuccessStateInModal.argTypes={children:{table:{disable:!0}}};const ErrorStateInModal=props=>{const{state,handleOpen,handleClose}=useModal(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show error modal"}),(0,jsx_runtime.jsxs)(modal_Modal,{...props,titleIcon:(0,jsx_runtime.jsx)(icons.Error,{color:"red",width:64,height:64}),open:state,onClose:handleClose,children:[(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Link.Z,{href:"#",children:"Retry"})]})]})};ErrorStateInModal.args={title:"Something went wrong",subtitle:"Staking operation was not successful",center:!0},ErrorStateInModal.argTypes={children:{table:{disable:!0}}};const BasicModalButtonInModal=props=>{const modalProps={title:"Basic modal button in modal",center:!1},{state,handleOpen,handleClose}=useModal(modalProps);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsx)(modal_Modal,{...modalProps,open:state,onClose:handleClose,children:(0,jsx_runtime.jsx)(modal_ModalButton,{icon:(0,jsx_runtime.jsx)(icons.Eth,{}),...props})})]})};var enumObject;BasicModalButtonInModal.args={size:"md",active:!1,disabled:!1,fullwidth:!0,loading:!1,children:"Ethereum"},BasicModalButtonInModal.argTypes={title:{table:{disable:!0}},size:{options:(enumObject=packages_button.qE,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}};const ManulIconSizeInModalButtonInModal=props=>{const modalProps={title:"Basic modal button in modal",center:!1},{state,handleOpen,handleClose}=useModal(modalProps);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsxs)(modal_Modal,{...modalProps,open:state,onClose:handleClose,children:["You can set manual width and/or height of ModalButton (size props of ModalButton does not affect to the icon): use width and height props. For example set width and height to 128px.",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(modal_ModalButton,{icon:(0,jsx_runtime.jsx)(icons.Eth,{width:128,height:128}),...props})]})]})};ManulIconSizeInModalButtonInModal.args={size:"md",active:!1,disabled:!1,fullwidth:!0,loading:!1,children:"Ethereum"},ManulIconSizeInModalButtonInModal.argTypes={title:{table:{disable:!0}},active:{table:{disable:!0}}};const ChooseNetworkInModal=()=>{const modalProps={title:"ChooseNetwork",center:!1},{state,handleOpen,handleClose}=useModal(modalProps),[curButtonIndex,setCurButtonIndex]=(0,react.useState)("Ethereum"),StyledMarginBottom=styled_components_browser_esm.ZP.div`
    margin-bottom: ${({theme})=>`${theme.spaceMap.sm}px`};
  `;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:handleOpen,children:"Show modal"}),(0,jsx_runtime.jsxs)(modal_Modal,{...modalProps,open:state,onClose:handleClose,children:[(0,jsx_runtime.jsx)(StyledMarginBottom,{children:(0,jsx_runtime.jsx)(modal_ModalButton,{icon:(0,jsx_runtime.jsx)(icons.Eth,{}),size:"sm",active:"Ethereum"===curButtonIndex,fullwidth:!0,onClick:()=>setCurButtonIndex("Ethereum"),children:"Ethereum"})}),(0,jsx_runtime.jsx)(StyledMarginBottom,{children:(0,jsx_runtime.jsx)(modal_ModalButton,{icon:(0,jsx_runtime.jsx)(icons.Terra,{}),size:"sm",active:"Terra"===curButtonIndex,fullwidth:!0,onClick:()=>setCurButtonIndex("Terra"),children:"Terra"})})]})]})};Basic.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n      <Modal {...props} open={state} onClose={handleClose} />\n    </>\n  )\n}"},...Basic.parameters},ExtraContent.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n      <Modal\n        {...props}\n        open={state}\n        onClose={handleClose}\n        extra={<ModalExtra>Extra content</ModalExtra>}\n      />\n    </>\n  )\n}"},...ExtraContent.parameters},WithBackButton.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose, handleBack } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n      <Modal\n        {...props}\n        open={state}\n        onClose={handleClose}\n        onBack={handleBack}\n      />\n    </>\n  )\n}"},...WithBackButton.parameters},WithScroll.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n      <Modal {...props} open={state} onClose={handleClose}>\n        <div style={{ height: '150vh' }}>{props.children}</div>\n      </Modal>\n    </>\n  )\n}"},...WithScroll.parameters},LoadingStateInModal.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show loading modal</Button>\n\n      <Modal\n        {...props}\n        titleIcon={<Loader size={'large'} />}\n        open={state}\n        onClose={handleClose}\n      >\n        <br />\n        <Text color='secondary' size='xxs'>\n          Confirm this transaction in your wallet\n        </Text>\n      </Modal>\n    </>\n  )\n}"},...LoadingStateInModal.parameters},SuccessStateInModal.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show success modal</Button>\n\n      <Modal\n        {...props}\n        titleIcon={<Success color={'green'} width={64} height={64} />}\n        open={state}\n        onClose={handleClose}\n      >\n        <br />\n        <Link href={'https://etherscan.io/'}>View on Etherscan</Link>\n      </Modal>\n    </>\n  )\n}"},...SuccessStateInModal.parameters},ErrorStateInModal.parameters={storySource:{source:"(props) => {\n  const { state, handleOpen, handleClose } = useModal(props)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show error modal</Button>\n\n      <Modal\n        {...props}\n        titleIcon={<Error color={'red'} width={64} height={64} />}\n        open={state}\n        onClose={handleClose}\n      >\n        <br />\n        <Link href={'#'}>Retry</Link>\n      </Modal>\n    </>\n  )\n}"},...ErrorStateInModal.parameters},BasicModalButtonInModal.parameters={storySource:{source:"(props) => {\n  const modalProps = {\n    title: 'Basic modal button in modal',\n    center: false,\n  }\n  const { state, handleOpen, handleClose } = useModal(modalProps)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n\n      <Modal {...modalProps} open={state} onClose={handleClose}>\n        <ModalButton icon={<Eth />} {...props} />\n      </Modal>\n    </>\n  )\n}"},...BasicModalButtonInModal.parameters},ManulIconSizeInModalButtonInModal.parameters={storySource:{source:"(\n  props\n) => {\n  const modalProps = {\n    title: 'Basic modal button in modal',\n    center: false,\n  }\n  const { state, handleOpen, handleClose } = useModal(modalProps)\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n\n      <Modal {...modalProps} open={state} onClose={handleClose}>\n        You can set manual width and/or height of ModalButton (size props of\n        ModalButton does not affect to the icon): use width and height props.\n        For example set width and height to 128px.\n        <br />\n        <br />\n        <ModalButton icon={<Eth width={128} height={128} />} {...props} />\n      </Modal>\n    </>\n  )\n}"},...ManulIconSizeInModalButtonInModal.parameters},ChooseNetworkInModal.parameters={storySource:{source:"() => {\n  const modalProps = {\n    title: 'ChooseNetwork',\n    center: false,\n  }\n  const { state, handleOpen, handleClose } = useModal(modalProps)\n\n  const ETHEREUM = 'Ethereum'\n  const TERRA = 'Terra'\n  const [curButtonIndex, setCurButtonIndex] = useState(ETHEREUM)\n\n  const StyledMarginBottom = styled.div`\n    margin-bottom: ${({ theme }) => `${theme.spaceMap.sm}px`};\n  `\n\n  return (\n    <>\n      <Button onClick={handleOpen}>Show modal</Button>\n\n      <Modal {...modalProps} open={state} onClose={handleClose}>\n        <StyledMarginBottom>\n          <ModalButton\n            icon={<Eth />}\n            size='sm'\n            active={curButtonIndex === ETHEREUM}\n            fullwidth={true}\n            onClick={() => setCurButtonIndex(ETHEREUM)}\n          >\n            Ethereum\n          </ModalButton>\n        </StyledMarginBottom>\n\n        <StyledMarginBottom>\n          <ModalButton\n            icon={<Terra />}\n            size='sm'\n            active={curButtonIndex === TERRA}\n            fullwidth={true}\n            onClick={() => setCurButtonIndex(TERRA)}\n          >\n            Terra\n          </ModalButton>\n        </StyledMarginBottom>\n      </Modal>\n    </>\n  )\n}"},...ChooseNetworkInModal.parameters}},"./packages/pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SiblingCount0:()=>SiblingCount0,SiblingCount1:()=>SiblingCount1,default:()=>Pagination_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./packages/icons/index.tsx"),box=__webpack_require__("./packages/box/index.ts"),types=__webpack_require__("./packages/pagination/types.ts");const numberSort=(a,b)=>a-b,pagination_getShowingPages=(pagesCount,currPage=1,siblingCount=1)=>{if(!pagesCount)return[];const showingPagesCount=1===siblingCount?7:5;if(pagesCount<=showingPagesCount)return((start,end)=>{const length=end-start+1;return Array.from({length},((_,i)=>start+i))})(1,pagesCount);const lastPage=pagesCount,firstPages=[],firstEllipsis=[],middlePages=[],lastEllipsis=[],lastPages=[],pusher=(()=>{const innerArray=[];return(arr,element)=>(innerArray.includes(element)&&"..."!==element||(innerArray.push(element),arr.push(element)),innerArray.length)})();let siblings;switch(pusher(firstPages,1),!0){case 1===currPage:siblings=[0,1,1+siblingCount];break;case lastPage===currPage:siblings=[-siblingCount-1,-1,0];break;case 1===siblingCount&&currPage-1==3:siblings=[-2,-1,0,1];break;case 1===siblingCount&&lastPage-currPage==3:siblings=[-1,0,1,2];break;case 1===siblingCount:siblings=[-1,0,1];break;case 0===siblingCount&&currPage-1==2:siblings=[-1,0];break;case 0===siblingCount&&lastPage-currPage==2:siblings=[0,1];break;default:siblings=[0]}siblings.forEach((sibling=>{pusher(middlePages,currPage+sibling)})),currPage-1>=3+siblingCount&&pusher(firstEllipsis,"..."),lastPage-currPage>=3+siblingCount&&pusher(lastEllipsis,"...");for(let i=showingPagesCount-pusher(lastPages,lastPage);i>0;i--)currPage<pagesCount/2?pusher(lastPages,lastPage-i):pusher(firstPages,1+i);return[...firstPages.sort(numberSort),...firstEllipsis,...middlePages,...lastEllipsis,...lastPages.sort(numberSort)]};var PaginationItem=__webpack_require__("./packages/pagination/PaginationItem.tsx");const PaginationBlock=(0,styled_components_browser_esm.ZP)(box.x)`
  display: flex;
  gap: 8px;
`,pagination_Pagination=props=>{const{onItemClick,pagesCount,activePage=1,siblingCount}=props,[currentPage,setCurrPage]=(0,react.useState)((length=pagesCount,!(activeItem=activePage)||activeItem>=length||activeItem<0?1:activeItem));var length,activeItem;const showingPages=(0,react.useMemo)((()=>pagination_getShowingPages(pagesCount,currentPage,siblingCount)),[pagesCount,currentPage,siblingCount]);if((0,react.useEffect)((()=>{setCurrPage((page=>page!==activePage?activePage:page))}),[activePage]),pagesCount<=0)return null;const onPageItemClick=(page,e)=>{onItemClick(page,e),setCurrPage(page)};return(0,jsx_runtime.jsxs)(PaginationBlock,{children:[(0,jsx_runtime.jsx)(PaginationItem.Z,{disabled:1===currentPage,icon:(0,jsx_runtime.jsx)(icons.ArrowLeft,{}),onClick:()=>{1!==currentPage&&(onItemClick(currentPage-1),setCurrPage(currentPage-1))}}),showingPages.map(((page,index)=>{const isDisabled="..."===page,variant=page===currentPage?types.V.active:types.V.default;return(0,jsx_runtime.jsx)(PaginationItem.Z,{icon:page,variant,disabled:isDisabled,onClick:onPageItemClick.bind(null,page)},"..."===page?`${page}${index}`:page)})),(0,jsx_runtime.jsx)(PaginationItem.Z,{disabled:currentPage===pagesCount,icon:(0,jsx_runtime.jsx)(icons.ArrowRight,{}),onClick:()=>{currentPage!==pagesCount&&(onItemClick(currentPage+1),setCurrPage(currentPage+1))}})]})};const Pagination_stories={component:pagination_Pagination,title:"Pagination/Pagination",args:{pagesCount:10},argTypes:{}},noop=()=>null,SiblingCount1=props=>(0,jsx_runtime.jsx)(pagination_Pagination,{...props,onItemClick:noop,siblingCount:1}),SiblingCount0=props=>(0,jsx_runtime.jsx)(pagination_Pagination,{...props,onItemClick:noop,siblingCount:0});SiblingCount1.parameters={storySource:{source:"(props) => (\n  <Pagination {...props} onItemClick={noop} siblingCount={1} />\n)"},...SiblingCount1.parameters},SiblingCount0.parameters={storySource:{source:"(props) => (\n  <Pagination {...props} onItemClick={noop} siblingCount={0} />\n)"},...SiblingCount0.parameters}},"./packages/pagination/PaginationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_types__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/pagination/types.ts")),_PaginationItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/pagination/PaginationItem.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_PaginationItem__WEBPACK_IMPORTED_MODULE_3__.Z,title:"Pagination/PaginationItem",args:{variant:_types__WEBPACK_IMPORTED_MODULE_2__.V.default,disabled:!1,icon:"2"},argTypes:{variant:{options:_types__WEBPACK_IMPORTED_MODULE_2__.V,control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_3__.Z,{...props});Basic.parameters={storySource:{source:"(props) => (\n  <PaginationItem {...props} />\n)"},...Basic.parameters}},"./packages/popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_button_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/button/index.ts"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/popover/types.ts"),_Popover__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/popover/Popover.tsx"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/popover/constants.ts");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Popover__WEBPACK_IMPORTED_MODULE_3__.Z,title:"Dialogs/Popover",parameters:{layout:"centered"},args:{backdrop:!0,offset:"xs",placement:_constants__WEBPACK_IMPORTED_MODULE_5__.R},argTypes:{backdrop:{control:"boolean"},offset:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.V),control:"inline-radio"},placement:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.m),control:"radio"},onClose:{action:"close",table:{disable:!0}}}},Basic=props=>{const{onClose}=props,[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),anchorRef=(0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),handleToggle=(0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((()=>{setState((state=>!state))}),[]),handleClose=(0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((()=>{setState(!1),null==onClose||onClose()}),[onClose]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_1__.zx,{size:"sm",onClick:handleToggle,ref:anchorRef,children:"Open Popover"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_3__.Z,{...props,open:state,onClose:handleClose,anchorRef,children:"Popover"})]})};Basic.parameters={storySource:{source:"(props) => {\n  const { onClose } = props\n\n  const [state, setState] = useState(false)\n  const anchorRef = useRef<HTMLButtonElement>(null)\n\n  const handleToggle = useCallback(() => {\n    setState((state) => !state)\n  }, [])\n\n  const handleClose = useCallback(() => {\n    setState(false)\n    onClose?.()\n  }, [onClose])\n\n  return (\n    <>\n      <Button size='sm' onClick={handleToggle} ref={anchorRef}>\n        Open Popover\n      </Button>\n      <Popover\n        {...props}\n        open={state}\n        onClose={handleClose}\n        anchorRef={anchorRef}\n      >\n        Popover\n      </Popover>\n    </>\n  )\n}"},...Basic.parameters}},"./packages/popup-menu/PopupMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icons:()=>Icons,WithDisabled:()=>WithDisabled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_button_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/button/index.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/popup-menu/types.ts"),_icons_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icons/index.tsx"),_PopupMenu__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/popup-menu/PopupMenu.tsx"),_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/popup-menu/PopupMenuItem.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_PopupMenu__WEBPACK_IMPORTED_MODULE_5__.Z,title:"Dialogs/PopupMenu",args:{variant:"default"},argTypes:{variant:{options:(enumObject=_types__WEBPACK_IMPORTED_MODULE_3__.a,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}}};var enumObject;const usePopup=props=>{const{onClose}=props,[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return{state,anchorRef:(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),handleOpen:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{setState(!0)}),[]),handleClose:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{setState(!1),null==onClose||onClose()}),[onClose])}},Basic=props=>{const{state,anchorRef,handleOpen,handleClose}=usePopup(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_2__.zx,{size:"sm",onClick:handleOpen,ref:anchorRef,children:"Open Menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PopupMenu__WEBPACK_IMPORTED_MODULE_5__.Z,{...props,open:state,style:{width:200},onClose:handleClose,anchorRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,children:"Ethereum (ETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,children:"Lido (STETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,children:"Solana (SOL)"})]})]})},Icons=props=>{const{state,anchorRef,handleOpen,handleClose}=usePopup(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_2__.zx,{size:"sm",onClick:handleOpen,ref:anchorRef,children:"Open Menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PopupMenu__WEBPACK_IMPORTED_MODULE_5__.Z,{...props,open:state,style:{width:200},onClose:handleClose,anchorRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_4__.Eth,{}),children:"Ethereum (ETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_4__.Steth,{}),children:"Lido (STETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_4__.Solana,{}),children:"Solana (SOL)"})]})]})},WithDisabled=props=>{const{state,anchorRef,handleOpen,handleClose}=usePopup(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index__WEBPACK_IMPORTED_MODULE_2__.zx,{size:"sm",onClick:handleOpen,ref:anchorRef,children:"Open Menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PopupMenu__WEBPACK_IMPORTED_MODULE_5__.Z,{...props,open:state,style:{width:200},onClose:handleClose,anchorRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,children:"Ethereum (ETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:handleClose,children:"Lido (STETH)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItem__WEBPACK_IMPORTED_MODULE_6__.Z,{disabled:!0,children:"Solana (SOL)"})]})]})};Basic.parameters={storySource:{source:"(props) => {\n  const { state, anchorRef, handleOpen, handleClose } = usePopup(props)\n\n  return (\n    <>\n      <Button size='sm' onClick={handleOpen} ref={anchorRef}>\n        Open Menu\n      </Button>\n      <PopupMenu\n        {...props}\n        open={state}\n        style={{ width: 200 }}\n        onClose={handleClose}\n        anchorRef={anchorRef}\n      >\n        <PopupMenuItem onClick={handleClose}>Ethereum (ETH)</PopupMenuItem>\n        <PopupMenuItem onClick={handleClose}>Lido (STETH)</PopupMenuItem>\n        <PopupMenuItem onClick={handleClose}>Solana (SOL)</PopupMenuItem>\n      </PopupMenu>\n    </>\n  )\n}"},...Basic.parameters},Icons.parameters={storySource:{source:"(props) => {\n  const { state, anchorRef, handleOpen, handleClose } = usePopup(props)\n\n  return (\n    <>\n      <Button size='sm' onClick={handleOpen} ref={anchorRef}>\n        Open Menu\n      </Button>\n      <PopupMenu\n        {...props}\n        open={state}\n        style={{ width: 200 }}\n        onClose={handleClose}\n        anchorRef={anchorRef}\n      >\n        <PopupMenuItem onClick={handleClose} leftDecorator={<Eth />}>\n          Ethereum (ETH)\n        </PopupMenuItem>\n        <PopupMenuItem onClick={handleClose} leftDecorator={<Steth />}>\n          Lido (STETH)\n        </PopupMenuItem>\n        <PopupMenuItem onClick={handleClose} leftDecorator={<Solana />}>\n          Solana (SOL)\n        </PopupMenuItem>\n      </PopupMenu>\n    </>\n  )\n}"},...Icons.parameters},WithDisabled.parameters={storySource:{source:"(props) => {\n  const { state, anchorRef, handleOpen, handleClose } = usePopup(props)\n\n  return (\n    <>\n      <Button size='sm' onClick={handleOpen} ref={anchorRef}>\n        Open Menu\n      </Button>\n      <PopupMenu\n        {...props}\n        open={state}\n        style={{ width: 200 }}\n        onClose={handleClose}\n        anchorRef={anchorRef}\n      >\n        <PopupMenuItem onClick={handleClose}>Ethereum (ETH)</PopupMenuItem>\n        <PopupMenuItem onClick={handleClose}>Lido (STETH)</PopupMenuItem>\n        <PopupMenuItem disabled>Solana (SOL)</PopupMenuItem>\n      </PopupMenu>\n    </>\n  )\n}"},...WithDisabled.parameters}},"./packages/select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icons:()=>Icons,Labeled:()=>Labeled,OnlyIcon:()=>OnlyIcon,Small:()=>Small,WithInput:()=>WithInput,default:()=>Select_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons=__webpack_require__("./packages/icons/index.tsx"),Input=__webpack_require__("./packages/input/Input.tsx"),InputGroup=__webpack_require__("./packages/input/InputGroup.tsx"),types=(__webpack_require__("./packages/input/SliderInput.tsx"),__webpack_require__("./packages/input/OptionsSlider.tsx"),__webpack_require__("./packages/input/Textarea.tsx"),__webpack_require__("./packages/input/types.ts")),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const smallCSS=styled_components_browser_esm.iv`
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
`,SelectArrow=props=>{const{arrow,disabled=!1,opened}=props,commonProps={$opened:opened,$disabled:disabled};return"default"===arrow?(0,jsx_runtime.jsx)(SelectArrowBigStyle,{...commonProps}):"small"===arrow?(0,jsx_runtime.jsx)(SelectArrowSmallStyle,{...commonProps}):null};var hooks=__webpack_require__("./packages/hooks/index.ts"),PopupMenu=__webpack_require__("./packages/popup-menu/PopupMenu.tsx"),PopupMenuItem=__webpack_require__("./packages/popup-menu/PopupMenuItem.tsx"),react_is=(__webpack_require__("./packages/popup-menu/types.ts"),__webpack_require__("./node_modules/react-is/index.js"));function Select(props,ref){const{wrapperRef:externalWrapperRef,anchorRef:externalAnchorRef,arrow="default",variant,value,defaultValue,children,onChange,...rest}=props,{disabled}=props,localAnchorRef=(0,react.useRef)(null),wrapperRef=(0,hooks.qq)([localAnchorRef,externalWrapperRef]),anchorRef=externalAnchorRef||localAnchorRef,{opened,options,title,handleClick,handleClose,handleKeyDown}=(props=>{const{disabled,onClick,onChange,onKeyDown,children}=props,[opened,setOpened]=(0,react.useState)(!1),handleOpen=(0,react.useCallback)((()=>{disabled||setOpened(!0)}),[disabled]),handleClick=(0,react.useCallback)((event=>{handleOpen(),null==onClick||onClick(event)}),[handleOpen,onClick]),handleClose=(0,react.useCallback)((()=>{setOpened(!1)}),[]),handleChange=(0,react.useCallback)((value=>{handleClose(),setLocalValue(value),null==onChange||onChange(value)}),[handleClose,onChange]),handleKeyDown=(0,react.useCallback)((event=>{["ArrowDown","ArrowUp","Enter"," "].includes(event.key)&&(event.preventDefault(),handleOpen()),null==onKeyDown||onKeyDown(event)}),[handleOpen,onKeyDown]);var _value,ref;const outerValue=null!==(ref=null!==(_value=props.value)&&void 0!==_value?_value:props.defaultValue)&&void 0!==ref?ref:null,[localValue,setLocalValue]=(0,react.useState)(outerValue);(0,react.useEffect)((()=>{setLocalValue(outerValue)}),[outerValue]);const{values,options}=(0,react.useMemo)((()=>{const values=new Map,options=react.Children.map(children,(child=>{if(!(0,react_is.isElement)(child))return child;const value=child.props.value,title=String(child.props.children);return void 0===values.get(value)&&values.set(value,title),(0,react.cloneElement)(child,{active:value===localValue,onChange:handleChange})}));return{values,options}}),[localValue,children,handleChange]),selectedTitle=null!=localValue?values.get(localValue):null,defaultTitle=String(null!=localValue?localValue:"");return{handleClick,handleClose,handleKeyDown,opened,title:null!=selectedTitle?selectedTitle:defaultTitle,options}})(props),width=((opened,anchorRef)=>{const[width,setWidth]=(0,react.useState)(),updateWidth=(0,react.useCallback)((()=>{if(!anchorRef.current)return;const rect=anchorRef.current.getBoundingClientRect();setWidth(rect.width)}),[anchorRef]);return(0,react.useEffect)((()=>{if(!opened||!anchorRef.current)return;const observer=new ResizeObserver(updateWidth);return observer.observe(anchorRef.current),()=>observer.disconnect()}),[opened,anchorRef,updateWidth]),width})(opened,anchorRef);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SelectWrapperStyle,{onClick:handleClick,onKeyDown:handleKeyDown,active:opened,value:title,rightDecorator:(0,jsx_runtime.jsx)(SelectArrow,{arrow,disabled,opened}),wrapperRef,variant,...rest,ref,readOnly:!0}),(0,jsx_runtime.jsx)(PopupMenu.Z,{open:opened,variant,anchorRef,style:{minWidth:width},onClose:handleClose,children:options})]})}const select_Select=(0,react.forwardRef)(Select),SelectIconStyle=(0,styled_components_browser_esm.ZP)(select_Select)`
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
`;function SelectIcon(props,ref){const{icon,...rest}=props;return(0,jsx_runtime.jsx)(SelectIconStyle,{...rest,fullwidth:!1,arrow:"small",leftDecorator:(0,jsx_runtime.jsx)(SelectIconDecoratorStyle,{children:icon}),ref})}const select_SelectIcon=(0,react.forwardRef)(SelectIcon);function Option(props,ref){const{value,onClick,onChange,...rest}=props,handleClick=(0,react.useCallback)((event=>{null==onChange||onChange(value),null==onClick||onClick(event)}),[value,onChange,onClick]);return(0,jsx_runtime.jsx)(PopupMenuItem.Z,{onClick:handleClick,ref,...rest})}const select_Option=(0,react.forwardRef)(Option);const Select_stories={component:select_Select,title:"Controls/Select",args:{disabled:!1,fullwidth:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>(0,jsx_runtime.jsxs)(select_Select,{...props,value:1,children:[(0,jsx_runtime.jsx)(select_Option,{value:1,children:"First"}),(0,jsx_runtime.jsx)(select_Option,{value:2,children:"Second"}),(0,jsx_runtime.jsx)(select_Option,{value:3,children:"Third"})]}),Labeled=props=>(0,jsx_runtime.jsxs)(select_Select,{...props,label:"Labeled select",value:1,children:[(0,jsx_runtime.jsx)(select_Option,{value:1,children:"First"}),(0,jsx_runtime.jsx)(select_Option,{value:2,children:"Second"}),(0,jsx_runtime.jsx)(select_Option,{value:3,children:"Third"})]}),iconsMap={eth:(0,jsx_runtime.jsx)(icons.Eth,{}),steth:(0,jsx_runtime.jsx)(icons.Steth,{}),sol:(0,jsx_runtime.jsx)(icons.Solana,{})},Icons=props=>{const[value,setValue]=(0,react.useState)("eth");return(0,jsx_runtime.jsxs)(select_Select,{...props,leftDecorator:iconsMap[value],value,onChange:value=>setValue(value),children:[(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.eth,value:"eth",children:"Ethereum (ETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.steth,value:"steth",children:"Lido (STETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.sol,value:"sol",children:"Solana (SOL)"})]})},OnlyIcon=props=>{const[value,setValue]=(0,react.useState)("eth");return(0,jsx_runtime.jsxs)(select_SelectIcon,{...props,icon:iconsMap[value],value,onChange:value=>setValue(value),children:[(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.eth,value:"eth",children:"Ethereum (ETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.steth,value:"steth",children:"Lido (STETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.sol,value:"sol",children:"Solana (SOL)"})]})};OnlyIcon.argTypes={fullwidth:{table:{disable:!0}}};const WithInput=props=>{const{fullwidth,disabled,color}=props,[value,setValue]=(0,react.useState)("eth"),ref=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(InputGroup.Z,{fullwidth,ref,children:[(0,jsx_runtime.jsxs)(select_SelectIcon,{...props,anchorRef:ref,icon:iconsMap[value],value,onChange:value=>setValue(value),children:[(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.eth,value:"eth",children:"Ethereum (ETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.steth,value:"steth",children:"Lido (STETH)"}),(0,jsx_runtime.jsx)(select_Option,{leftDecorator:iconsMap.sol,value:"sol",children:"Solana (SOL)"})]}),(0,jsx_runtime.jsx)(Input.Z,{fullwidth,disabled,color,placeholder:"Amount"})]})};var enumObject;WithInput.argTypes={color:{options:(enumObject=types.Sl,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}};const Small=props=>(0,jsx_runtime.jsxs)(select_Select,{...props,variant:"small",arrow:"small",value:1,children:[(0,jsx_runtime.jsx)(select_Option,{value:1,children:"First"}),(0,jsx_runtime.jsx)(select_Option,{value:2,children:"Second"}),(0,jsx_runtime.jsx)(select_Option,{value:3,children:"Third"})]});Basic.parameters={storySource:{source:"(props) => (\n  <Select {...props} value={1}>\n    <Option value={1}>First</Option>\n    <Option value={2}>Second</Option>\n    <Option value={3}>Third</Option>\n  </Select>\n)"},...Basic.parameters},Labeled.parameters={storySource:{source:"(props) => (\n  <Select {...props} label='Labeled select' value={1}>\n    <Option value={1}>First</Option>\n    <Option value={2}>Second</Option>\n    <Option value={3}>Third</Option>\n  </Select>\n)"},...Labeled.parameters},Icons.parameters={storySource:{source:"(props) => {\n  const [value, setValue] = useState<keyof typeof iconsMap>('eth')\n\n  return (\n    <Select\n      {...props}\n      leftDecorator={iconsMap[value]}\n      value={value}\n      onChange={(value) => setValue(value as keyof typeof iconsMap)}\n    >\n      <Option leftDecorator={iconsMap.eth} value='eth'>\n        Ethereum (ETH)\n      </Option>\n      <Option leftDecorator={iconsMap.steth} value='steth'>\n        Lido (STETH)\n      </Option>\n      <Option leftDecorator={iconsMap.sol} value='sol'>\n        Solana (SOL)\n      </Option>\n    </Select>\n  )\n}"},...Icons.parameters},OnlyIcon.parameters={storySource:{source:"(props) => {\n  const [value, setValue] = useState<keyof typeof iconsMap>('eth')\n\n  return (\n    <SelectIcon\n      {...props}\n      icon={iconsMap[value]}\n      value={value}\n      onChange={(value) => setValue(value as keyof typeof iconsMap)}\n    >\n      <Option leftDecorator={iconsMap.eth} value='eth'>\n        Ethereum (ETH)\n      </Option>\n      <Option leftDecorator={iconsMap.steth} value='steth'>\n        Lido (STETH)\n      </Option>\n      <Option leftDecorator={iconsMap.sol} value='sol'>\n        Solana (SOL)\n      </Option>\n    </SelectIcon>\n  )\n}"},...OnlyIcon.parameters},WithInput.parameters={storySource:{source:"(props) => {\n  const { fullwidth, disabled, color } = props\n  const [value, setValue] = useState<keyof typeof iconsMap>('eth')\n  const ref = useRef<HTMLSpanElement>(null)\n\n  return (\n    <InputGroup fullwidth={fullwidth} ref={ref}>\n      <SelectIcon\n        {...props}\n        anchorRef={ref}\n        icon={iconsMap[value]}\n        value={value}\n        onChange={(value) => setValue(value as keyof typeof iconsMap)}\n      >\n        <Option leftDecorator={iconsMap.eth} value='eth'>\n          Ethereum (ETH)\n        </Option>\n        <Option leftDecorator={iconsMap.steth} value='steth'>\n          Lido (STETH)\n        </Option>\n        <Option leftDecorator={iconsMap.sol} value='sol'>\n          Solana (SOL)\n        </Option>\n      </SelectIcon>\n      <Input\n        fullwidth={fullwidth}\n        disabled={disabled}\n        color={color}\n        placeholder='Amount'\n      />\n    </InputGroup>\n  )\n}"},...WithInput.parameters},Small.parameters={storySource:{source:"(props) => (\n  <Select {...props} variant='small' arrow='small' value={1}>\n    <Option value={1}>First</Option>\n    <Option value={2}>Second</Option>\n    <Option value={3}>Third</Option>\n  </Select>\n)"},...Small.parameters}},"./packages/service-page/ServicePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>ServicePage_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ServicePageStyle=styled_components_browser_esm.ZP.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`,ServicePageInsideStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 32px;
  max-width: 560px;
`;var Heading=__webpack_require__("./packages/heading/Heading.tsx"),packages_text=(__webpack_require__("./packages/heading/types.ts"),__webpack_require__("./packages/text/index.ts"));function ServicePage(props,ref){const{title,children,...rest}=props;return(0,jsx_runtime.jsx)(ServicePageStyle,{...rest,ref,children:(0,jsx_runtime.jsxs)(ServicePageInsideStyle,{children:[(0,jsx_runtime.jsx)(Heading.H1,{children:title}),(0,jsx_runtime.jsx)(packages_text.xv,{color:"secondary",children})]})})}const service_page_ServicePage=(0,react.forwardRef)(ServicePage);const ServicePage_stories={component:service_page_ServicePage,title:"Layout/ServicePage",args:{title:"404",children:"Page Not Found"}},Basic=props=>(0,jsx_runtime.jsx)(service_page_ServicePage,{...props});Basic.parameters={storySource:{source:"(props) => (\n  <ServicePage {...props} />\n)"},...Basic.parameters}},"./packages/stack/Stack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Grid:()=>Grid,Horizontal:()=>Horizontal,Vertical:()=>Vertical,default:()=>Stack_stories});var StackAlign,StackJustify,StackDirection,StackWrap,StackSpacing,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),block=__webpack_require__("./packages/block/index.ts");!function(StackAlign){StackAlign[StackAlign.center=0]="center",StackAlign[StackAlign.stretch=1]="stretch",StackAlign[StackAlign["flex-start"]=2]="flex-start",StackAlign[StackAlign["flex-end"]=3]="flex-end",StackAlign[StackAlign.baseline=4]="baseline"}(StackAlign||(StackAlign={})),function(StackJustify){StackJustify[StackJustify.center=0]="center",StackJustify[StackJustify.start=1]="start",StackJustify[StackJustify.end=2]="end",StackJustify[StackJustify.stretch=3]="stretch",StackJustify[StackJustify["flex-start"]=4]="flex-start",StackJustify[StackJustify["flex-end"]=5]="flex-end",StackJustify[StackJustify["space-around"]=6]="space-around",StackJustify[StackJustify["space-between"]=7]="space-between",StackJustify[StackJustify["space-evenly"]=8]="space-evenly"}(StackJustify||(StackJustify={})),function(StackDirection){StackDirection[StackDirection.row=0]="row",StackDirection[StackDirection["row-reverse"]=1]="row-reverse",StackDirection[StackDirection.column=2]="column",StackDirection[StackDirection["column-reverse"]=3]="column-reverse"}(StackDirection||(StackDirection={})),function(StackWrap){StackWrap[StackWrap.nowrap=0]="nowrap",StackWrap[StackWrap.wrap=1]="wrap",StackWrap[StackWrap["wrap-reverse"]=2]="wrap-reverse"}(StackWrap||(StackWrap={})),function(StackSpacing){StackSpacing[StackSpacing.xs=0]="xs",StackSpacing[StackSpacing.sm=1]="sm",StackSpacing[StackSpacing.md=2]="md",StackSpacing[StackSpacing.lg=3]="lg",StackSpacing[StackSpacing.xl=4]="xl",StackSpacing[StackSpacing.xxl=5]="xxl"}(StackSpacing||(StackSpacing={}));var react=__webpack_require__("./node_modules/react/index.js");const Context=(0,react.createContext)({}),StackProvider=props=>{const{spacing,...rest}=props;return(0,jsx_runtime.jsx)(Context.Provider,{value:{spacing},...rest})};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StackStyle=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: ${({$align})=>$align};
  justify-content: ${({$justify})=>$justify};
  flex-direction: ${({$direction})=>$direction};
  flex-wrap: ${({$wrap})=>$wrap};
  margin: ${({$spacing,theme})=>$spacing?-theme.spaceMap[$spacing]/2:0}px;
`;function Stack(props,ref){const{align="flex-start",justify="flex-start",direction="row",wrap="wrap",spacing,children,...rest}=props;return(0,jsx_runtime.jsx)(StackStyle,{$align:align,$justify:justify,$direction:direction,$wrap:wrap,$spacing:spacing,ref,...rest,children:(0,jsx_runtime.jsx)(StackProvider,{spacing,children})})}const stack_Stack=(0,react.forwardRef)(Stack);function HStack(props,ref){const{reverse=!1,...rest}=props,direction=reverse?"row-reverse":"row";return(0,jsx_runtime.jsx)(stack_Stack,{direction,ref,...rest})}const stack_HStack=(0,react.forwardRef)(HStack);function VStack(props,ref){const{reverse=!1,...rest}=props,direction=reverse?"column-reverse":"column";return(0,jsx_runtime.jsx)(stack_Stack,{direction,ref,...rest})}const stack_VStack=(0,react.forwardRef)(VStack),StackItemStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  margin: 0;
  padding: ${({$spacing,theme})=>$spacing?theme.spaceMap[$spacing]/2:0}px;

  flex-grow: ${({$grow})=>$grow};
  flex-shrink: ${({$shrink})=>$shrink};
  flex-basis: ${({$basis})=>$basis};
`;function StackItem(props,ref){const{grow=0,shrink=0,basis="auto",...rest}=props,{spacing}=(0,react.useContext)(Context);return(0,jsx_runtime.jsx)(StackItemStyle,{$grow:grow,$shrink:shrink,$basis:basis,$spacing:spacing,ref,...rest})}const stack_StackItem=(0,react.forwardRef)(StackItem);const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),Stack_stories={component:stack_Stack,title:"Layout/Stack",args:{align:"flex-start",justify:"flex-start",wrap:"wrap",spacing:"sm"},argTypes:{align:{options:getOptions(StackAlign),control:"select"},justify:{options:getOptions(StackJustify),control:"select"},wrap:{options:getOptions(StackWrap),control:"inline-radio"},spacing:{options:[void 0,...getOptions(StackSpacing)],control:"inline-radio"}}},Basic=props=>(0,jsx_runtime.jsxs)(stack_Stack,{...props,children:[(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsx)(block.gO,{children:"First"})}),(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsxs)(block.gO,{children:["First",(0,jsx_runtime.jsx)("br",{}),"Second"]})}),(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsxs)(block.gO,{children:["First",(0,jsx_runtime.jsx)("br",{}),"Second",(0,jsx_runtime.jsx)("br",{}),"Third"]})})]});Basic.args={direction:"row"},Basic.argTypes={direction:{options:getOptions(StackDirection),control:"inline-radio"}};const Horizontal=props=>(0,jsx_runtime.jsxs)(stack_HStack,{...props,children:[(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsx)(block.gO,{children:"First"})}),(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsxs)(block.gO,{children:["First",(0,jsx_runtime.jsx)("br",{}),"Second"]})}),(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsxs)(block.gO,{children:["First",(0,jsx_runtime.jsx)("br",{}),"Second",(0,jsx_runtime.jsx)("br",{}),"Third"]})})]});Horizontal.args={reverse:!1};const Vertical=props=>(0,jsx_runtime.jsxs)(stack_VStack,{...props,children:[(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsx)(block.gO,{children:"First"})}),(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsxs)(block.gO,{children:["First",(0,jsx_runtime.jsx)("br",{}),"Second"]})}),(0,jsx_runtime.jsx)(stack_StackItem,{children:(0,jsx_runtime.jsxs)(block.gO,{children:["First",(0,jsx_runtime.jsx)("br",{}),"Second",(0,jsx_runtime.jsx)("br",{}),"Third"]})})]});Vertical.args={reverse:!1};const Grid=props=>(0,jsx_runtime.jsxs)(stack_HStack,{...props,children:[(0,jsx_runtime.jsx)(stack_StackItem,{basis:"50%",children:(0,jsx_runtime.jsx)(block.gO,{})}),(0,jsx_runtime.jsx)(stack_StackItem,{basis:"50%",children:(0,jsx_runtime.jsx)(block.gO,{})}),(0,jsx_runtime.jsx)(stack_StackItem,{basis:"25%",children:(0,jsx_runtime.jsx)(block.gO,{})}),(0,jsx_runtime.jsx)(stack_StackItem,{basis:"25%",children:(0,jsx_runtime.jsx)(block.gO,{})}),(0,jsx_runtime.jsx)(stack_StackItem,{basis:"25%",children:(0,jsx_runtime.jsx)(block.gO,{})}),(0,jsx_runtime.jsx)(stack_StackItem,{basis:"25%",children:(0,jsx_runtime.jsx)(block.gO,{})})]});Grid.args={reverse:!1},Basic.parameters={storySource:{source:"(props) => (\n  <Stack {...props}>\n    <StackItem>\n      <Block>First</Block>\n    </StackItem>\n    <StackItem>\n      <Block>\n        First\n        <br />\n        Second\n      </Block>\n    </StackItem>\n    <StackItem>\n      <Block>\n        First\n        <br />\n        Second\n        <br />\n        Third\n      </Block>\n    </StackItem>\n  </Stack>\n)"},...Basic.parameters},Horizontal.parameters={storySource:{source:"(props) => (\n  <HStack {...props}>\n    <StackItem>\n      <Block>First</Block>\n    </StackItem>\n    <StackItem>\n      <Block>\n        First\n        <br />\n        Second\n      </Block>\n    </StackItem>\n    <StackItem>\n      <Block>\n        First\n        <br />\n        Second\n        <br />\n        Third\n      </Block>\n    </StackItem>\n  </HStack>\n)"},...Horizontal.parameters},Vertical.parameters={storySource:{source:"(props) => (\n  <VStack {...props}>\n    <StackItem>\n      <Block>First</Block>\n    </StackItem>\n    <StackItem>\n      <Block>\n        First\n        <br />\n        Second\n      </Block>\n    </StackItem>\n    <StackItem>\n      <Block>\n        First\n        <br />\n        Second\n        <br />\n        Third\n      </Block>\n    </StackItem>\n  </VStack>\n)"},...Vertical.parameters},Grid.parameters={storySource:{source:"(props) => (\n  <HStack {...props}>\n    <StackItem basis='50%'>\n      <Block />\n    </StackItem>\n    <StackItem basis='50%'>\n      <Block />\n    </StackItem>\n    <StackItem basis='25%'>\n      <Block />\n    </StackItem>\n    <StackItem basis='25%'>\n      <Block />\n    </StackItem>\n    <StackItem basis='25%'>\n      <Block />\n    </StackItem>\n    <StackItem basis='25%'>\n      <Block />\n    </StackItem>\n  </HStack>\n)"},...Grid.parameters}},"./packages/styled-system/withStyledSystem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Background:()=>Background,Base:()=>Base,Border:()=>Border,Color:()=>Color,Layout:()=>Layout,Position:()=>Position,Shadow:()=>Shadow,Space:()=>Space,Typography:()=>Typography,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_withStyledSystem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/styled-system/withStyledSystem.tsx");const StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid;
`,Example=(0,_withStyledSystem__WEBPACK_IMPORTED_MODULE_1__.Z)(StyledDiv);Example.displayName="Example";const __WEBPACK_DEFAULT_EXPORT__={title:"Styled System/HOC",args:{children:"Example"}},Base=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props}),Space=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,margin:2,padding:2}),Color=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,color:"primary"}),Typography=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,fontSize:2,fontWeight:"bold"}),Layout=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,width:.5}),Background=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,bg:"text",color:"background"}),Border=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,borderWidth:10}),Position=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,position:"relative",left:50}),Shadow=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{...props,boxShadow:"0 0 4px"});Base.parameters={storySource:{source:"(props) => <Example {...props} />"},...Base.parameters},Space.parameters={storySource:{source:"(props) => (\n  <Example {...props} margin={2} padding={2} />\n)"},...Space.parameters},Color.parameters={storySource:{source:"(props) => (\n  <Example {...props} color='primary' />\n)"},...Color.parameters},Typography.parameters={storySource:{source:"(props) => (\n  <Example {...props} fontSize={2} fontWeight='bold' />\n)"},...Typography.parameters},Layout.parameters={storySource:{source:"(props) => (\n  <Example {...props} width={1 / 2} />\n)"},...Layout.parameters},Background.parameters={storySource:{source:"(props) => (\n  <Example {...props} bg='text' color='background' />\n)"},...Background.parameters},Border.parameters={storySource:{source:"(props) => (\n  <Example {...props} borderWidth={10} />\n)"},...Border.parameters},Position.parameters={storySource:{source:"(props) => (\n  <Example {...props} position='relative' left={50} />\n)"},...Position.parameters},Shadow.parameters={storySource:{source:"(props) => (\n  <Example {...props} boxShadow='0 0 4px' />\n)"},...Shadow.parameters}},"./packages/table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,default:()=>Table_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./packages/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TdThAlign={left:styled_components_browser_esm.iv`
    text-align: left;
  `,center:styled_components_browser_esm.iv`
    text-align: center;
  `,right:styled_components_browser_esm.iv`
    text-align: right;
  `},ThTdContentStyle=styled_components_browser_esm.ZP.div`
  position: relative;
  min-height: 16px;
`,TdThVariants={string:styled_components_browser_esm.iv`
    ${ThTdContentStyle} {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,icon:styled_components_browser_esm.iv`
    line-height: 0;
    width: 24px;
    text-align: center;

    ${ThTdContentStyle} {
      width: 24px;

      svg {
        margin: -4px 0;
      }
    }
  `},ThTdInteractive=styled_components_browser_esm.iv`
  cursor: pointer;

  &:hover {
    color: var(--lido-color-primary);
  }
`,TableStyle=styled_components_browser_esm.ZP.table`
  border-spacing: 0;
`,TbodyStyle=styled_components_browser_esm.ZP.tbody`
  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;
  }
`,TheadStickyStyle=styled_components_browser_esm.iv`
  background: var(--lido-color-foreground);
  top: 0;
  position: sticky;
  z-index: 5;
`,TheadStyle=styled_components_browser_esm.ZP.thead`
  border-top: 1px solid var(--lido-color-borderLight);
  border-bottom: 1px solid var(--lido-color-borderLight);

  ${({$sticky})=>$sticky&&TheadStickyStyle}

  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;

    border-top: 1px solid var(--lido-color-borderLight);
    border-bottom: 1px solid var(--lido-color-borderLight);
  }
`,TrColors=(styled_components_browser_esm.ZP.tfoot``,{negative:styled_components_browser_esm.iv`
    background: rgba(var(--lido-rgb-error), 0.07);
  `,positive:styled_components_browser_esm.iv`
    background: rgba(var(--lido-rgb-success), 0.07);
  `,warning:styled_components_browser_esm.iv`
    background: rgba(var(--lido-rgb-warning), 0.07);
  `}),TrInteractive=styled_components_browser_esm.iv`
  cursor: pointer;
`,TrStyle=styled_components_browser_esm.ZP.tr`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  ${({$highlight})=>$highlight&&TrColors[$highlight]}
  ${({$interactive})=>$interactive&&TrInteractive}
`,TdNumericStyle=styled_components_browser_esm.iv`
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,TdStyle=styled_components_browser_esm.ZP.td`
  border-bottom: 1px solid var(--lido-color-borderLight);
  padding: 18px;

  color: ${props=>({primary:"var(--lido-color-primary)",secondary:"var(--lido-color-textSecondary)",warning:"var(--lido-color-warning)",error:"var(--lido-color-error)",success:"var(--lido-color-success)",default:"var(--lido-color-text)"}[props.$textColor])};

  ${props=>TdThAlign[props.$align]}
  ${({$variant})=>$variant&&TdThVariants[$variant]}
  ${({$interactive})=>$interactive&&ThTdInteractive}
  ${({$numeric})=>$numeric&&TdNumericStyle}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`,ThStyle=styled_components_browser_esm.ZP.th`
  border-top: 1px solid var(--lido-color-borderLight);
  border-bottom: 1px solid var(--lido-color-borderLight);

  padding: 7px 18px;

  font-weight: 700;
  color: var(--lido-color-text);

  ${props=>TdThAlign[props.$align]}
  ${({$interactive})=>$interactive&&ThTdInteractive}
  ${({$variant})=>$variant&&TdThVariants[$variant]}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`,ArrowTopStyle=(0,styled_components_browser_esm.ZP)(icons.ArrowTop)`
  margin: -7px 0 -7px 2px;
`,ArrowBottomStyle=(0,styled_components_browser_esm.ZP)(icons.ArrowBottom)`
  margin: -7px 0 -7px 2px;
`;function Table(props,ref){return(0,jsx_runtime.jsx)(TableStyle,{ref,...props})}const table_Table=(0,react.forwardRef)(Table);function Thead(props,ref){const{sticky=!1,...rest}=props;return(0,jsx_runtime.jsx)(TheadStyle,{ref,$sticky:sticky,...rest})}const table_Thead=(0,react.forwardRef)(Thead);function Tbody(props,ref){return(0,jsx_runtime.jsx)(TbodyStyle,{ref,...props})}const table_Tbody=(0,react.forwardRef)(Tbody);function Tr(props,ref){const{highlight,...rest}=props;return(0,jsx_runtime.jsx)(TrStyle,{$highlight:highlight,$interactive:!!rest.onClick,ref,...rest})}const table_Tr=(0,react.forwardRef)(Tr);function Td(props,ref){const{align="left",textColor="default",variant,children,numeric=!1,...rest}=props;return(0,jsx_runtime.jsx)(TdStyle,{$align:align,$textColor:textColor,$variant:variant,$interactive:!!rest.onClick,$numeric:numeric,ref,...rest,children:(0,jsx_runtime.jsx)(ThTdContentStyle,{children})})}const table_Td=(0,react.forwardRef)(Td);function Th(props,ref){const{align="left",children,sortDir,variant,...rest}=props;return(0,jsx_runtime.jsx)(ThStyle,{$interactive:!!rest.onClick,$align:align,$variant:variant,ref,...rest,children:(0,jsx_runtime.jsxs)(ThTdContentStyle,{children:[children,"ASC"===sortDir&&(0,jsx_runtime.jsx)(ArrowBottomStyle,{}),"DESC"===sortDir&&(0,jsx_runtime.jsx)(ArrowTopStyle,{})]})})}const table_Th=(0,react.forwardRef)(Th);var TableAlign,TableTextColor,TrHighlight,ThSortDir,ThTdVariant;!function(TableAlign){TableAlign[TableAlign.left=0]="left",TableAlign[TableAlign.center=1]="center",TableAlign[TableAlign.right=2]="right"}(TableAlign||(TableAlign={})),function(TableTextColor){TableTextColor[TableTextColor.primary=0]="primary",TableTextColor[TableTextColor.secondary=1]="secondary",TableTextColor[TableTextColor.warning=2]="warning",TableTextColor[TableTextColor.error=3]="error",TableTextColor[TableTextColor.success=4]="success",TableTextColor[TableTextColor.default=5]="default"}(TableTextColor||(TableTextColor={})),function(TrHighlight){TrHighlight[TrHighlight.positive=0]="positive",TrHighlight[TrHighlight.negative=1]="negative",TrHighlight[TrHighlight.warning=2]="warning"}(TrHighlight||(TrHighlight={})),function(ThSortDir){ThSortDir[ThSortDir.ASC=0]="ASC",ThSortDir[ThSortDir.DESC=1]="DESC"}(ThSortDir||(ThSortDir={})),function(ThTdVariant){ThTdVariant[ThTdVariant.string=0]="string",ThTdVariant[ThTdVariant.icon=1]="icon"}(ThTdVariant||(ThTdVariant={}));const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),Table_stories={component:table_Table,title:"Table/Table",parameters:{layout:"centered"},args:{textColor:"default",align:"left",stickyHeader:!0,showHighlight:!1},argTypes:{textColor:{options:getOptions(TableTextColor),control:"inline-radio"},align:{options:getOptions(TableAlign),control:"inline-radio"}}},Base=(props,options)=>{const[sortDir,setSortDir]=(0,react.useState)("ASC"),isShowTrHighlights=options.args.showHighlight;return(0,jsx_runtime.jsx)("div",{style:{height:300,overflowY:"scroll"},children:(0,jsx_runtime.jsxs)(table_Table,{style:{width:600},children:[(0,jsx_runtime.jsx)(table_Thead,{sticky:options.args.stickyHeader,children:(0,jsx_runtime.jsxs)(table_Tr,{children:[(0,jsx_runtime.jsx)(table_Th,{onClick:()=>setSortDir("ASC"===sortDir?"DESC":"ASC"),sortDir,children:"Date | Type"}),(0,jsx_runtime.jsx)(table_Th,{...props,children:"Change"}),(0,jsx_runtime.jsx)(table_Th,{...props,children:"Balance"}),(0,jsx_runtime.jsx)(table_Th,{...props,children:"APR"}),(0,jsx_runtime.jsx)(table_Th,{...props,variant:"icon",children:(0,jsx_runtime.jsx)(icons.Eth,{})})]})}),(0,jsx_runtime.jsx)(table_Tbody,{children:Array(5).fill(null).map(((item,index)=>(0,jsx_runtime.jsxs)(table_Tr,{highlight:isShowTrHighlights?TrHighlight[index%3]:void 0,children:[(0,jsx_runtime.jsxs)(table_Td,{...props,onClick:()=>{},children:["01-13-2021",(0,jsx_runtime.jsx)("br",{}),"Stake"]}),(0,jsx_runtime.jsxs)(table_Td,{...props,children:["+ 0.000007452",(0,jsx_runtime.jsx)("br",{}),"+ $0.02"]}),(0,jsx_runtime.jsxs)(table_Td,{...props,children:["10.00038581",(0,jsx_runtime.jsx)("br",{}),"$18,912.80"]}),(0,jsx_runtime.jsx)(table_Td,{...props,children:"2.4%"}),(0,jsx_runtime.jsx)(table_Td,{...props,variant:"icon",children:(0,jsx_runtime.jsx)(icons.Light,{})})]},index)))})]})})};Base.parameters={storySource:{source:"(props, options) => {\n  const [sortDir, setSortDir] = useState<ThSortDirs>('ASC')\n\n  // @ts-expect-error fix later\n  const isShowTrHighlights = options.args.showHighlight\n\n  return (\n    <div style={{ height: 300, overflowY: 'scroll' }}>\n      <Table style={{ width: 600 }}>\n        {/* @ts-expect-error fix later */}\n        <Thead sticky={options.args.stickyHeader}>\n          <Tr>\n            <Th\n              onClick={() => setSortDir(sortDir === 'ASC' ? 'DESC' : 'ASC')}\n              sortDir={sortDir}\n            >\n              Date | Type\n            </Th>\n            <Th {...props}>Change</Th>\n            <Th {...props}>Balance</Th>\n            <Th {...props}>APR</Th>\n            <Th {...props} variant='icon'>\n              <Eth />\n            </Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {Array(5)\n            .fill(null)\n            .map((item, index) => (\n              <Tr\n                key={index}\n                // @ts-expect-error this is a story anyway\n                highlight={\n                  isShowTrHighlights ? TrHighlight[index % 3] : undefined\n                }\n              >\n                <Td {...props} onClick={() => void 0}>\n                  01-13-2021\n                  <br />\n                  Stake\n                </Td>\n                <Td {...props}>\n                  + 0.000007452\n                  <br />+ $0.02\n                </Td>\n                <Td {...props}>\n                  10.00038581\n                  <br />\n                  $18,912.80\n                </Td>\n                <Td {...props}>2.4%</Td>\n                <Td {...props} variant='icon'>\n                  <Light />\n                </Td>\n              </Tr>\n            ))}\n        </Tbody>\n      </Table>\n    </div>\n  )\n}"},...Base.parameters}},"./packages/text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/text/Text.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/text/types.ts");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Text__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Typography/Text",args:{children:"Example Text",color:"default",size:"md",underline:!1,strikeThrough:!1,strong:!1,italic:!1},argTypes:{children:{control:"text"},color:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.d),control:"inline-radio"},size:{options:getOptions(_types__WEBPACK_IMPORTED_MODULE_2__.y),control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.parameters={storySource:{source:"(props) => <Text {...props} />"},...Basic.parameters}},"./packages/theme/theme-provider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Providers:()=>Providers,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_theme_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theme/theme-provider.tsx"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theme/themes.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Providers"},themeCustom={..._themes__WEBPACK_IMPORTED_MODULE_2__.Qp,colors:{..._themes__WEBPACK_IMPORTED_MODULE_2__.Qp.colors,text:"#FFA29A",foreground:"#323161"}},Block=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  padding: ${({theme})=>theme.spaceMap.xxl}px;
  margin: ${({theme})=>theme.spaceMap.md}px 0;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);

  &:not(:only-child):first-child {
    margin-top: 0;
  }

  &:not(:only-child):last-child {
    margin-bottom: 0;
  }
`,Providers=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Component inherits global theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_provider__WEBPACK_IMPORTED_MODULE_1__.Mq,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in LightThemeProvider"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_provider__WEBPACK_IMPORTED_MODULE_1__.DD,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in DarkThemeProvider"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_provider__WEBPACK_IMPORTED_MODULE_1__.f6,{theme:themeCustom,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block,{children:"Wrapped in ThemeProvider, which provides custom theme"})})]});Providers.parameters={storySource:{source:"(props) => (\n  <>\n    <Block>Component inherits global theme</Block>\n    <LightThemeProvider>\n      <Block>Wrapped in LightThemeProvider</Block>\n    </LightThemeProvider>\n    <DarkThemeProvider>\n      <Block>Wrapped in DarkThemeProvider</Block>\n    </DarkThemeProvider>\n    <ThemeProvider theme={themeCustom} {...props}>\n      <Block>Wrapped in ThemeProvider, which provides custom theme</Block>\n    </ThemeProvider>\n  </>\n)"},...Providers.parameters}},"./packages/toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Error:()=>Error,Info:()=>Info,Pending:()=>Pending,Success:()=>Success,default:()=>Toast_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ToastContainer=(0,styled_components_browser_esm.ZP)(react_toastify_esm.Ix).attrs({draggable:!1})`
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
`,TOASTS_DEFAULT_OPTIONS={position:react_toastify_esm.Am.POSITION.BOTTOM_LEFT,closeButton:!1,hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!1,autoClose:6e3,delay:0},TOASTS_ERROR_OPTIONS={...TOASTS_DEFAULT_OPTIONS,closeOnClick:!0},TOASTS_SUCCESS_OPTIONS={...TOASTS_DEFAULT_OPTIONS},TOASTS_INFO_OPTIONS={...TOASTS_DEFAULT_OPTIONS,closeOnClick:!0},TOASTS_PENDING_OPTIONS={...TOASTS_DEFAULT_OPTIONS,autoClose:!1};__webpack_require__("./node_modules/react/index.js");var loaders=__webpack_require__("./packages/loaders/index.ts");const ToastPendingStyle=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
`,ToastPendingTextStyle=styled_components_browser_esm.ZP.div``,ToastPendingLoaderStyle=(0,styled_components_browser_esm.ZP)(loaders.aN)`
  margin: ${({theme})=>-theme.spaceMap.xs}px;
  margin-right: ${({theme})=>theme.spaceMap.md}px;
  svg {
    color: var(--lido-color-accentContrast);
  }
`;const ToastPosition=react_toastify_esm.Am.POSITION;var packages_button=__webpack_require__("./packages/button/index.ts"),Accordion=__webpack_require__("./packages/accordion/Accordion.tsx");const Toast_stories={component:ToastContainer,title:"Notify/Toast",args:{text:"🚀🚀🚀 Wow so easy!",position:ToastPosition.BOTTOM_LEFT},argTypes:{position:{options:(enumObject=ToastPosition,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}}};var enumObject;const Basic=props=>{const{text,...options}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Accordion.Z,{summary:"IMPORTANT",children:"Remember to render the ToastContainer once in your application tree. If you can not figure out where to put it, rendering it in the application root would be the best bet."}),(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastDefault(content,options){return(0,react_toastify_esm.Am)(content,{...TOASTS_DEFAULT_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show default notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]})},Error=props=>{const{text,...options}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastError(content,options){return react_toastify_esm.Am.error(content,{...TOASTS_ERROR_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show error notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]})},Success=props=>{const{text,...options}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastSuccess(content,options){return react_toastify_esm.Am.success(content,{...TOASTS_SUCCESS_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show success notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]})},Info=props=>{const{text,...options}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastInfo(content,options){return react_toastify_esm.Am.info(content,{...TOASTS_INFO_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show info notify!"}),(0,jsx_runtime.jsx)(ToastContainer,{})]})},Pending=props=>{const{text,...options}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>function ToastPending(content,options){return(0,react_toastify_esm.Am)((0,jsx_runtime.jsxs)(ToastPendingStyle,{children:[(0,jsx_runtime.jsx)(ToastPendingLoaderStyle,{}),(0,jsx_runtime.jsx)(ToastPendingTextStyle,{children:content})]}),{...TOASTS_PENDING_OPTIONS,...options||{}})}(text,options),size:"xs",children:"Show pending notify!"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(packages_button.zx,{onClick:()=>react_toastify_esm.Am.dismiss(),size:"xs",variant:"translucent",children:"Dismiss all"}),(0,jsx_runtime.jsx)(ToastContainer,{})]})};Basic.parameters={storySource:{source:"(props) => {\n  const { text, ...options } = props\n  const notifyDefault = () => ToastDefault(text, options)\n\n  return (\n    <>\n      <Accordion summary='IMPORTANT'>\n        Remember to render the ToastContainer once in your application tree. If\n        you can not figure out where to put it, rendering it in the application\n        root would be the best bet.\n      </Accordion>\n\n      <Button onClick={notifyDefault} size='xs'>\n        Show default notify!\n      </Button>\n      <ToastContainer />\n    </>\n  )\n}"},...Basic.parameters},Error.parameters={storySource:{source:"(props) => {\n  const { text, ...options } = props\n  const notifyError = () => ToastError(text, options)\n\n  return (\n    <>\n      <Button onClick={notifyError} size='xs'>\n        Show error notify!\n      </Button>\n      <ToastContainer />\n    </>\n  )\n}"},...Error.parameters},Success.parameters={storySource:{source:"(props) => {\n  const { text, ...options } = props\n  const notifySuccess = () => ToastSuccess(text, options)\n\n  return (\n    <>\n      <Button onClick={notifySuccess} size='xs'>\n        Show success notify!\n      </Button>\n      <ToastContainer />\n    </>\n  )\n}"},...Success.parameters},Info.parameters={storySource:{source:"(props) => {\n  const { text, ...options } = props\n  const notifyInfo = () => ToastInfo(text, options)\n\n  return (\n    <>\n      <Button onClick={notifyInfo} size='xs'>\n        Show info notify!\n      </Button>\n      <ToastContainer />\n    </>\n  )\n}"},...Info.parameters},Pending.parameters={storySource:{source:"(props) => {\n  const { text, ...options } = props\n  const notifyPending = () => ToastPending(text, options)\n  const dismissAll = () => toast.dismiss()\n\n  return (\n    <>\n      <Button onClick={notifyPending} size='xs'>\n        Show pending notify!\n      </Button>\n      <br />\n      <br />\n      <Button onClick={dismissAll} size='xs' variant='translucent'>\n        Dismiss all\n      </Button>\n      <ToastContainer />\n    </>\n  )\n}"},...Pending.parameters}},"./packages/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>Icon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_icons_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/index.tsx"),_popover_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/popover/index.ts"),_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/tooltip/Tooltip.tsx");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,title:"Dialogs/Tooltip",parameters:{layout:"centered"},args:{title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates pariatur culpa consectetur velit iste rem, aspernatur voluptatem aperiam itaque obcaecati vero non quis id iure vitae, quae quibusdam quidem.",offset:"xs",placement:"bottom"},argTypes:{title:{control:"text"},offset:{options:getOptions(_popover_index__WEBPACK_IMPORTED_MODULE_2__.V0),control:"inline-radio"},placement:{options:getOptions(_popover_index__WEBPACK_IMPORTED_MODULE_2__.m9),control:"radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Hover me"})}),Icon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_1__.Question,{})});Basic.parameters={storySource:{source:"(props) => (\n  <Tooltip {...props}>\n    <span>Hover me</span>\n  </Tooltip>\n)"},...Basic.parameters},Icon.parameters={storySource:{source:"(props) => (\n  <Tooltip {...props}>\n    <Question />\n  </Tooltip>\n)"},...Icon.parameters}},"./packages/accordion/Accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>accordion_Accordion});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./packages/icons/index.tsx");const AccordionStyle=styled_components_browser_esm.ZP.div`
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
    margin: 0 0 1.6em 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    padding: 0 0 0 1.5em;
  }
`;var react_collapsed_esm=__webpack_require__("./node_modules/react-collapsed/dist/react-collapsed.esm.js");function Accordion(props,ref){const{defaultExpanded,summary,children,...rest}=props,{toggleProps,collapseProps,isExpanded}=(({defaultExpanded=!1})=>{const[isExpanded,setExpanded]=(0,react.useState)(defaultExpanded);(0,react.useEffect)((()=>{setExpanded(defaultExpanded)}),[defaultExpanded]);const handleToggle=(0,react.useCallback)((()=>setExpanded((previous=>!previous))),[]),{getToggleProps,getCollapseProps}=(0,react_collapsed_esm.Z)({isExpanded});return{toggleProps:getToggleProps({onClick:handleToggle}),collapseProps:getCollapseProps(),isExpanded}})(props);return(0,jsx_runtime.jsxs)(AccordionStyle,{...rest,ref,children:[(0,jsx_runtime.jsxs)(AccordionSummaryStyle,{...toggleProps,children:[(0,jsx_runtime.jsx)(AccordionTitleStyle,{children:summary}),(0,jsx_runtime.jsx)(AccordionArrowStyle,{$expanded:isExpanded})]}),(0,jsx_runtime.jsx)("div",{...collapseProps,children:(0,jsx_runtime.jsx)(AccordionContentStyle,{children})})]})}const accordion_Accordion=(0,react.forwardRef)(Accordion)},"./packages/address/Address.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>address_Address});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const AddressStyle=styled_components_browser_esm.ZP.div`
  position: relative;
  display: inline-block;
  font-weight: 400;
`,AddressFullStyle=styled_components_browser_esm.ZP.span`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: transparent;
`,AddressTrimmedStyle=styled_components_browser_esm.ZP.span`
  user-select: none;
  pointer-events: none;
`,trimAddress=(address,symbols)=>{if(symbols<=0)return"";if(2*symbols>=address.length)return address;return`${address.slice(0,symbols)}...${address.slice(-symbols)}`};function Address(props,ref){const{symbols=3,address,...rest}=props;return(0,jsx_runtime.jsxs)(AddressStyle,{...rest,ref,children:[(0,jsx_runtime.jsx)(AddressFullStyle,{children:address}),(0,jsx_runtime.jsx)(AddressTrimmedStyle,{children:trimAddress(address,symbols)})]})}const address_Address=(0,react.forwardRef)(Address)},"./packages/block/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>block_Block});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={foreground:styled_components_browser_esm.iv`
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
`;function Block(props,ref){const{color="foreground",variant="flat",paddingLess=!1,...rest}=props;return(0,jsx_runtime.jsx)(BlockStyle,{$color:color,$variant:variant,$paddingLess:paddingLess,ref,...rest})}const block_Block=(0,react.forwardRef)(Block)},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{gO:()=>_Block__WEBPACK_IMPORTED_MODULE_0__.Z});var _Block__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/block/Block.tsx");__webpack_require__("./packages/block/types.tsx")},"./packages/block/types.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var BlockVariant,BlockColor;__webpack_require__.d(__webpack_exports__,{S:()=>BlockColor,p:()=>BlockVariant}),function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))},"./packages/box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>box_Box});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),withStyledSystem=__webpack_require__("./packages/styled-system/withStyledSystem.tsx");const Box=styled_components_browser_esm.ZP.div``,box_Box=(0,withStyledSystem.Z)(Box)},"./packages/box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.Z});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/box/Box.tsx")},"./packages/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),loaders=__webpack_require__("./packages/loaders/index.ts");const sizes={xxs:styled_components_browser_esm.iv`
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
    transition: background-color ${({theme})=>theme.duration.fast} ease,
      color ${({theme})=>theme.duration.fast} ease;

    :before {
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

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({theme})=>theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.1;
      }
    }
  `,ghost:styled_components_browser_esm.iv`
    color: ${getMainColor};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({theme})=>theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.1;
      }
    }
  `,translucent:styled_components_browser_esm.iv`
    color: ${getMainColor};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({theme})=>theme.duration.fast} ease;
      opacity: 0.1;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
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

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
  background-color: currentColor;
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
  color: currentColor;
  pointer-events: none;
`,loaderSizes={xxs:"small",xs:"small",sm:"small",md:"medium",lg:"medium"};function Button(props,ref){const{size="md",variant="filled",color="primary",square=!1,fullwidth=!1,loading=!1,active=!1,onClick,disabled,children,...rest}=props,{handleClick,ripple}=(({onClick})=>{const[ripple,setRipple]=(0,react.useState)(null);return{ripple,handleClick:(0,react.useCallback)((event=>{const button=event.currentTarget,rect=button.getBoundingClientRect(),diameter=Math.max(button.clientWidth,button.clientHeight),radius=diameter/2,isMouseClick=event.clientX>0&&event.clientY>0,style={width:diameter,height:diameter,left:(isMouseClick?event.clientX-rect.left:button.clientWidth/2)-radius,top:(isMouseClick?event.clientY-rect.top:button.clientHeight/2)-radius};setRipple((0,jsx_runtime.jsx)(ButtonRippleStyle,{style},event.timeStamp)),null==onClick||onClick(event)}),[onClick])}})(props),loaderSize=loaderSizes[size];return(0,jsx_runtime.jsxs)(ButtonStyle,{$size:size,$variant:variant,$fullwidth:fullwidth,$color:color,$square:square,$loading:loading,$active:active,onClick:handleClick,disabled:disabled||loading,type:"button",ref,...rest,children:[(0,jsx_runtime.jsx)(ButtonContentStyle,{$hidden:loading,children}),loading&&(0,jsx_runtime.jsx)(ButtonLoaderStyle,{size:loaderSize}),!active&&ripple]})}const button_Button=(0,react.forwardRef)(Button)},"./packages/button/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>button_ButtonIcon});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ButtonWrapperStyle=styled_components_browser_esm.ZP.span`
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
    fill: currentColor;
  }
`,ButtonContentStyle=styled_components_browser_esm.ZP.span`
  margin-left: 10px;

  :empty {
    display: none;
  }
`;var Button=__webpack_require__("./packages/button/Button.tsx");function ButtonIcon(props,ref){const{icon,children,...rest}=props,hasNoChildren=!children;return(0,jsx_runtime.jsx)(Button.Z,{square:hasNoChildren,...rest,ref,children:(0,jsx_runtime.jsxs)(ButtonWrapperStyle,{children:[(0,jsx_runtime.jsx)(ButtonIconStyle,{$square:hasNoChildren,children:icon}),(0,jsx_runtime.jsx)(ButtonContentStyle,{children})]})})}const button_ButtonIcon=(0,react.forwardRef)(ButtonIcon)},"./packages/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ei:()=>_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__.Z,qE:()=>_types__WEBPACK_IMPORTED_MODULE_2__.qE,zx:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.Z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/button/Button.tsx"),_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/button/ButtonIcon.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/button/types.tsx")},"./packages/button/types.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var ButtonSize,ButtonVariant,ButtonColor;__webpack_require__.d(__webpack_exports__,{Wu:()=>ButtonVariant,qE:()=>ButtonSize,rp:()=>ButtonColor}),function(ButtonSize){ButtonSize[ButtonSize.xxs=0]="xxs",ButtonSize[ButtonSize.xs=1]="xs",ButtonSize[ButtonSize.sm=2]="sm",ButtonSize[ButtonSize.md=3]="md",ButtonSize[ButtonSize.lg=4]="lg"}(ButtonSize||(ButtonSize={})),function(ButtonVariant){ButtonVariant[ButtonVariant.filled=0]="filled",ButtonVariant[ButtonVariant.outlined=1]="outlined",ButtonVariant[ButtonVariant.text=2]="text",ButtonVariant[ButtonVariant.ghost=3]="ghost",ButtonVariant[ButtonVariant.translucent=4]="translucent"}(ButtonVariant||(ButtonVariant={})),function(ButtonColor){ButtonColor[ButtonColor.primary=0]="primary",ButtonColor[ButtonColor.secondary=1]="secondary",ButtonColor[ButtonColor.warning=2]="warning",ButtonColor[ButtonColor.error=3]="error",ButtonColor[ButtonColor.success=4]="success"}(ButtonColor||(ButtonColor={}))},"./packages/content-theme/content-theme.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>ContentTheme});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const ContentThemeOnlyDark=styled_components_browser_esm.ZP.div`
  display: var(--lido-color-darkDisplay, contents);
`,ContentThemeOnlyLight=styled_components_browser_esm.ZP.div`
  display: var(--lido-color-lightDisplay, contents);
`,ContentTheme=props=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContentThemeOnlyDark,{children:props.darkContent}),(0,jsx_runtime.jsx)(ContentThemeOnlyLight,{children:props.lightContent})]})},"./packages/content-theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>content_theme.x});var content_theme=__webpack_require__("./packages/content-theme/content-theme.tsx");__webpack_require__("./node_modules/react/index.js")},"./packages/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,Z:()=>heading_Heading});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={sm:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xl}px;
    line-height: 1.3em;
  `,md:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxl}px;
    line-height: 1.3em;
  `,lg:styled_components_browser_esm.iv`
    font-size: ${({theme})=>theme.fontSizesMap.xxxl}px;
    line-height: 1.3em;
  `},commonCSS=styled_components_browser_esm.iv`
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: ${props=>({text:"var(--lido-color-text)",secondary:"var(--lido-color-textSecondary)"}[props.$color])};
`,HeadingStyle=styled_components_browser_esm.ZP.div`
  ${commonCSS}
  ${props=>sizes[props.$size]}
`,H1Style=styled_components_browser_esm.ZP.h1`
  ${commonCSS}
  ${sizes.lg}
`,H2Style=styled_components_browser_esm.ZP.h2`
  ${commonCSS}
  ${sizes.md}
`,H3Style=styled_components_browser_esm.ZP.h3`
  ${commonCSS}
  ${sizes.sm}
`;function Heading(props,ref){const{size="md",color="text",...rest}=props;return(0,jsx_runtime.jsx)(HeadingStyle,{$size:size,$color:color,ref,...rest})}const heading_Heading=(0,react.forwardRef)(Heading),H1=(0,react.forwardRef)((function H1(props,ref){const{color="text",...rest}=props;return(0,jsx_runtime.jsx)(H1Style,{$color:color,ref,...rest})})),H2=(0,react.forwardRef)((function H2(props,ref){const{color="text",...rest}=props;return(0,jsx_runtime.jsx)(H2Style,{$color:color,ref,...rest})})),H3=(0,react.forwardRef)((function H3(props,ref){const{color="text",...rest}=props;return(0,jsx_runtime.jsx)(H3Style,{$color:color,ref,...rest})}))},"./packages/heading/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var HeadingColor,HeadingSize;__webpack_require__.d(__webpack_exports__,{G:()=>HeadingSize,p:()=>HeadingColor}),function(HeadingColor){HeadingColor[HeadingColor.text=0]="text",HeadingColor[HeadingColor.secondary=1]="secondary"}(HeadingColor||(HeadingColor={})),function(HeadingSize){HeadingSize[HeadingSize.sm=0]="sm",HeadingSize[HeadingSize.md=1]="md",HeadingSize[HeadingSize.lg=2]="lg"}(HeadingSize||(HeadingSize={}))},"./packages/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y5:()=>useEscape,ch:()=>useInterceptFocus,F5:()=>useLockScroll,qq:()=>useMergeRefs,O3:()=>useOutsideClick,iP:()=>useWindowSize});var react=__webpack_require__("./node_modules/react/index.js");const useEscape=callback=>{const handleKeyDown=(0,react.useCallback)((event=>{"Escape"===event.key&&(null==callback||callback())}),[callback]);(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown))),[handleKeyDown])},useInterceptFocus=()=>{const savedElement=(0,react.useRef)(null),restoreFocus=(0,react.useCallback)((()=>{savedElement.current instanceof HTMLElement&&savedElement.current.focus()}),[]);return[(0,react.useCallback)((node=>{savedElement.current=document.activeElement;node.contains(document.activeElement)||node.focus()}),[]),restoreFocus]},setStyleProperty=(element,property,value)=>{value?element.style.setProperty(property,value):element.style.removeProperty(property)},useLockScroll=(element=document.body)=>{const lockScroll=(0,react.useCallback)((()=>{if(!(element=>document.body===element?window.innerWidth>document.documentElement.clientWidth:element.scrollHeight>element.clientHeight)(element))return;const previousValues={paddingRight:element.style.paddingRight,overflow:element.style.overflow},paddingRight=(element=>parseInt(window.getComputedStyle(element).paddingRight,10)||0)(element)+(()=>{const tempDiv=document.createElement("div");Object.assign(tempDiv.style,{position:"absolute",left:"-9000px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(tempDiv);const scrollbarSize=tempDiv.offsetWidth-tempDiv.clientWidth;return document.body.removeChild(tempDiv),scrollbarSize})();setStyleProperty(element,"padding-right",`${paddingRight}px`),setStyleProperty(element,"overflow","hidden");return()=>{const{paddingRight,overflow}=previousValues;setStyleProperty(element,"padding-right",paddingRight),setStyleProperty(element,"overflow",overflow)}}),[element]);(0,react.useLayoutEffect)((()=>lockScroll()),[lockScroll])};var useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");const useMergeRefs=refs=>(0,useMergeRef.q)(refs.filter((ref=>!!ref))),useOutsideClick=callback=>{const ref=(0,react.useRef)(null),handleOutsideClick=(0,react.useCallback)((event=>{const popover=ref.current,{target}=event;if(!(target instanceof Element))return;!1===(null==popover?void 0:popover.contains(target))&&(null==callback||callback())}),[callback]);return(0,react.useEffect)((()=>(document.addEventListener("mousedown",handleOutsideClick),()=>document.removeEventListener("mousedown",handleOutsideClick))),[handleOutsideClick]),{ref}},getWindowSize=()=>[window.innerWidth,window.innerHeight],useWindowSize=()=>{const[size,setSize]=(0,react.useState)(getWindowSize),handleResize=(0,react.useCallback)((()=>{setSize(getWindowSize())}),[]);return(0,react.useEffect)((()=>(window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize))),[handleResize]),size};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;__webpack_require__("./packages/theme/index.ts")},"./packages/icons/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Ambire:()=>Ambire,ArrowBack:()=>ArrowBack,ArrowBottom:()=>ArrowBottom,ArrowLeft:()=>ArrowLeft,ArrowRight:()=>ArrowRight,ArrowTop:()=>ArrowTop,Beth:()=>Beth,Blochainwallet:()=>Blochainwallet,BlochainwalletInversion:()=>BlochainwalletInversion,Brave:()=>Brave,Check:()=>Check,CheckLarge:()=>CheckLarge,Close:()=>Close,Coin98Circle:()=>Coin98Circle,Coinbase:()=>Coinbase,Cookie:()=>Cookie,CookieInverse:()=>CookieInverse,Copy:()=>Copy,Dark:()=>Dark,Deposit:()=>Deposit,Edit:()=>Edit,Email:()=>Email,Error:()=>Error,Eth:()=>Eth,Exodus:()=>Exodus,External:()=>External,Facebook:()=>Facebook,Gamestop:()=>Gamestop,History:()=>History,Imtoken:()=>Imtoken,ImtokenCircle:()=>ImtokenCircle,Ldo:()=>Ldo,Ldopl:()=>Ldopl,Ledger:()=>Ledger,LedgerCircle:()=>LedgerCircle,LedgerCircleInversion:()=>LedgerCircleInversion,LedgerConfirm:()=>LedgerConfirm,LedgerFail:()=>LedgerFail,LedgerLoading:()=>LedgerLoading,LedgerSuccess:()=>LedgerSuccess,Light:()=>Light,Linkedin:()=>Linkedin,Lock:()=>Lock,LockSmall:()=>LockSmall,MathWalletCircle:()=>MathWalletCircle,MathWalletCircleInversion:()=>MathWalletCircleInversion,MetaMask:()=>MetaMask,MetaMaskCircle:()=>MetaMaskCircle,MetaMaskCircleInversion:()=>MetaMaskCircleInversion,OneInch:()=>OneInch,OperaWallet:()=>OperaWallet,Plus:()=>Plus,Question:()=>Question,Referral:()=>Referral,Solana:()=>Solana,Stake:()=>Stake,Steth:()=>Steth,Stsol:()=>Stsol,Success:()=>Success,TallyCircle:()=>TallyCircle,Telegram:()=>Telegram,Terra:()=>Terra,Trust:()=>Trust,TrustCircle:()=>TrustCircle,Twitter:()=>Twitter,Uniswap:()=>Uniswap,Unstoppabledomains:()=>Unstoppabledomains,Validators:()=>Validators,Wallet:()=>Wallet,WalletConnect:()=>WalletConnect,WalletConnectCircle:()=>WalletConnectCircle,Warning:()=>Warning,Weth:()=>Weth,Whitepaper:()=>Whitepaper,Wrap:()=>Wrap,Wsteth:()=>Wsteth,XdefiWallet:()=>XdefiWallet,Zengo:()=>Zengo});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Ambire=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Ambire(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#F2F5FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.831 19.83l4.462 9.497a.269.269 0 01-.055.296L23.5 40.963c-.088.077-.22.022-.22-.098v-10.42l7.396-7.139c.055-.044.077-.12.077-.186l.022-3.29c0-.022.044-.022.055 0z",fill:"#6000FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35.315 29.492a.287.287 0 00-.022-.165L30.83 19.83c-.011-.022-.055-.022-.055.01l-.022 3.29a.21.21 0 01-.044.132l4.605 6.23z",fill:"url(#prefix__prefix__paint0_linear_11640_1543)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,fillRule:"evenodd",clipRule:"evenodd",d:"M35.315 29.492c.01-.055 0-.11-.022-.165l-.231-.493-4.066-5.21 4.319 5.868z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{opacity:.5,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask",{id:"prefix__a",maskUnits:"userSpaceOnUse",x:23,y:19,width:13,height:22,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.5,d:"M30.831 19.83l4.462 9.497a.269.269 0 01-.055.296L23.5 40.963c-.088.077-.22.022-.22-.098v-10.42l7.396-7.139c.055-.044.077-.12.077-.186l.022-3.29c0-.022.044-.022.055 0z",fill:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{mask:"url(#prefix__a)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"url(#prefix__prefix__pattern0)",d:"M16.742 19.72h15.935v25.225H16.742z"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.281 11.856L18.182 17.8a.274.274 0 00.011.209l1.956 3.85-5.385 3.048c-.066.033-.154.011-.187-.055l-1.165-2.423a.233.233 0 01.022-.253l6.792-10.353c.022-.022.066 0 .055.033z",fill:"#6000FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.16 17.877c0-.022 0-.044.011-.066l2.1-5.955c.01-.033-.034-.044-.045-.022L13.71 21.76l3.121-2.665-3.428 3.147 4.758-4.365z",fill:"url(#prefix__prefix__paint1_linear_11640_1543)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.71 21.749l-.275.417-.033.065 3.428-3.147-3.12 2.665z",fill:"url(#prefix__prefix__paint2_linear_11640_1543)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,fillRule:"evenodd",clipRule:"evenodd",d:"M13.71 21.749l-.275.417-.033.065 3.428-3.147-3.12 2.665z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{opacity:.4,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.4,fillRule:"evenodd",clipRule:"evenodd",d:"M20.281 11.856L18.182 17.8a.274.274 0 00.011.209l1.956 3.85-5.385 3.048c-.066.033-.154.011-.187-.055l-1.165-2.423a.233.233 0 01.022-.253l6.792-10.353c.022-.022.066 0 .055.033z",fill:"#6000FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{opacity:.4,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask",{id:"prefix__b",maskUnits:"userSpaceOnUse",x:13,y:11,width:8,height:14,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.4,d:"M20.281 11.856L18.182 17.8a.274.274 0 00.011.209l1.956 3.85-5.385 3.048c-.066.033-.154.011-.187-.055l-1.165-2.423a.233.233 0 01.022-.253l6.792-10.353c.022-.022.066 0 .055.033z",fill:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{mask:"url(#prefix__b)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"url(#prefix__prefix__pattern1)",d:"M8.061 17.197h19.561v14.696H8.061z"})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.38 7.03l4.956 12.13a.304.304 0 010 .198l-8 18.721a.126.126 0 01-.209.044l-7.363-7.107a.254.254 0 01-.033-.34l10.495-14.224a.262.262 0 00.055-.154V7.053c0-.055.077-.077.1-.022z",fill:"url(#prefix__prefix__paint3_linear_11640_1543)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.226 16.923l-.78-.438 4.824 2.522-4.89-11.976c-.022-.055-.099-.033-.099.022v9.245c0 .022 0 .055-.011.077l.956.548z",fill:"url(#prefix__prefix__paint4_linear_11640_1543)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,fillRule:"evenodd",clipRule:"evenodd",d:"M28.347 19.26c0-.012 0-.012 0 0l-4.132-2.337 4.132 2.336z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.226 16.923l4.121 2.336c0-.033-.01-.055-.022-.088l-.066-.164-4.824-2.523.791.44z",fill:"url(#prefix__prefix__paint5_linear_11640_1543)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,fillRule:"evenodd",clipRule:"evenodd",d:"M24.226 16.923l4.121 2.336c0-.033-.01-.055-.022-.088l-.066-.164-4.824-2.523.791.44z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_11640_1543",x1:30.994,y1:18.969,x2:35.678,y2:22.833,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#AF50FF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#AF50FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_11640_1543",x1:20.131,y1:13.45,x2:11.658,y2:18.984,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#AF50FF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#AF50FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint2_linear_11640_1543",x1:19.98,y1:13.35,x2:14.609,y2:22.925,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#AF50FF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#AF50FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint3_linear_11640_1543",x1:1.331,y1:52.52,x2:29.391,y2:42.134,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#AF50FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#6000FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint4_linear_11640_1543",x1:23.142,y1:11.487,x2:30.458,y2:12.997,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#AF50FF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#AF50FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint5_linear_11640_1543",x1:21.652,y1:12.733,x2:23.885,y2:21.065,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#AF50FF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#AF50FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pattern",{id:"prefix__prefix__pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use",{xlinkHref:"#prefix__prefix__image0_11640_1543",transform:"scale(.0069 .00435)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pattern",{id:"prefix__prefix__pattern1",patternContentUnits:"objectBoundingBox",width:1,height:1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use",{xlinkHref:"#prefix__prefix__image1_11640_1543",transform:"scale(.00562 .00746)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("image",{id:"prefix__prefix__image0_11640_1543",width:145,height:230,xlinkHref:"data:image/png;base64,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"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("image",{id:"prefix__prefix__image1_11640_1543",width:178,height:134,xlinkHref:"data:image/png;base64,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"})]})]})})),ArrowBack=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function ArrowBack(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20 12H4m6 6l-6-6 6-6",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})),ArrowBottom=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function ArrowBottom(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.707 9.293a1 1 0 00-1.414 0L12 12.586 8.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"})})})),ArrowLeft=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function ArrowLeft(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.707 16.707a1 1 0 000-1.414L11.414 12l3.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z"})})})),ArrowRight=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function ArrowRight(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.293 7.293a1 1 0 000 1.414L12.586 12l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 0z"})})})),ArrowTop=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function ArrowTop(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.293 14.707a1 1 0 001.414 0L12 11.414l3.293 3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z"})})})),Beth=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Beth(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",fill:"#010101"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.898 11.29l-.112.17a4.824 4.824 0 00.678 6.1 5.036 5.036 0 003.534 1.434l-4.1-7.705z",fill:"#4BDB4B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.997 13.63l-4.1-2.34 4.1 7.704v-5.363zm4.105-2.34l.112.17a4.823 4.823 0 01-.678 6.1 5.036 5.036 0 01-3.534 1.434l4.1-7.705z",fill:"#4BDB4B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,d:"M12.002 13.63l4.1-2.34-4.1 7.704v-5.363zm.001-5.23v4.038l3.531-2.018-3.531-2.02z",fill:"#4BDB4B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 8.4l-3.534 2.02 3.534 2.018V8.4z",fill:"#4BDB4B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.003 5.002L8.469 10.42l3.534-2.027V5.002z",fill:"#4BDB4B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 8.394l3.534 2.027-3.534-5.422v3.395z",fill:"#4BDB4B"})]})})),BlochainwalletInversion=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function BlochainwalletInversion(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.44 20.02l-1.383 1.382a3.911 3.911 0 00-1.215 2.844 3.909 3.909 0 001.215 2.834l11.139 11.257c.266.267.572.494.908.662V25.362L11.44 20.019z",fill:"#3D89F5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M36.56 20.02l1.383 1.382a3.912 3.912 0 010 5.668L26.805 38.328a3.515 3.515 0 01-.909.661V25.362l10.665-5.343z",fill:"#1656B9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M33.885 17.195l-6.972-6.991a3.828 3.828 0 00-1.303-.89 3.909 3.909 0 00-3.081 0 4.189 4.189 0 00-1.304.89l-6.981 6.991 9.796 4.888 9.845-4.888z",fill:"#85B5F8"})]})})),Blochainwallet=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Blochainwallet(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#141D31"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.44 20.02l-1.383 1.382a3.911 3.911 0 00-1.215 2.844 3.909 3.909 0 001.215 2.834l11.139 11.257c.266.267.572.494.908.662V25.362L11.44 20.019z",fill:"#3D89F5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M36.56 20.02l1.383 1.382a3.912 3.912 0 010 5.668L26.805 38.328a3.515 3.515 0 01-.909.661V25.362l10.665-5.343z",fill:"#1656B9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M33.885 17.195l-6.972-6.991a3.828 3.828 0 00-1.303-.89 3.909 3.909 0 00-3.081 0 4.189 4.189 0 00-1.304.89l-6.981 6.991 9.796 4.888 9.845-4.888z",fill:"#85B5F8"})]})})),Brave=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Brave(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"#2C2C34"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.456 15.676l.736-1.842s-.937-1.023-2.076-2.183c-1.138-1.16-3.549-.477-3.549-.477L28.822 8h-9.644l-2.745 3.174s-2.41-.683-3.55.477c-1.138 1.16-2.075 2.183-2.075 2.183l.736 1.842-.937 2.73s2.757 10.64 3.08 11.939c.636 2.558 1.072 3.548 2.88 4.844 1.808 1.296 5.09 3.548 5.625 3.889.536.34 1.205.922 1.808.922s1.272-.581 1.808-.922c.536-.341 3.817-2.593 5.625-3.89 1.808-1.295 2.244-2.285 2.88-4.843.323-1.3 3.08-11.94 3.08-11.94l-.937-2.729z",fill:"url(#prefix__prefix__paint0_linear_11995_1639)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 27.914c.184 0 1.36.423 2.303.92.944.498 1.628.85 1.847.99.218.139.085.402-.114.545-.2.144-2.875 2.255-3.135 2.488-.26.233-.642.619-.901.619-.26 0-.641-.386-.9-.619-.26-.233-2.937-2.344-3.136-2.488-.199-.143-.332-.406-.113-.546.218-.139.902-.49 1.846-.988.943-.498 2.12-.92 2.303-.92zm.014-15.037c.09.003.598.028 1.325.275.804.273 1.675.614 2.076.614.402 0 3.382-.58 3.382-.58s3.532 4.35 3.532 5.28c0 .929-.445 1.174-.891 1.657l-2.648 2.865c-.25.271-.772.682-.466 1.422.307.74.76 1.68.256 2.635-.503.955-1.365 1.592-1.917 1.486-.553-.105-1.85-.796-2.328-1.111-.477-.316-1.989-1.587-1.989-2.073s1.563-1.359 1.852-1.557c.289-.198 1.606-.966 1.633-1.267.027-.302.017-.39-.372-1.134-.389-.745-1.089-1.738-.972-2.4.116-.66 1.245-1.004 2.051-1.314.806-.31 2.357-.896 2.55-.986.195-.092.145-.178-.443-.235-.587-.057-2.252-.282-3.003-.069-.751.214-2.034.538-2.138.71-.104.172-.196.178-.09.772.107.593.657 3.441.71 3.947.054.506.158.84-.377.965-.536.125-1.437.341-1.747.341-.31 0-1.211-.216-1.746-.34-.536-.126-.431-.46-.378-.966.053-.506.603-3.354.71-3.947.106-.594.014-.6-.09-.772-.103-.172-1.386-.496-2.137-.71-.752-.213-2.417.012-3.004.069-.587.057-.637.143-.444.235.194.09 1.745.676 2.551.986.806.31 1.935.654 2.051 1.315.117.66-.583 1.654-.972 2.399-.389.744-.399.832-.372 1.134.027.301 1.344 1.069 1.633 1.267.289.198 1.852 1.071 1.852 1.557s-1.512 1.757-1.99 2.073c-.477.315-1.774 1.006-2.326 1.111-.553.106-1.415-.531-1.918-1.486-.504-.955-.051-1.896.256-2.635.306-.74-.215-1.151-.466-1.422l-2.648-2.865c-.446-.483-.89-.728-.89-1.658 0-.93 3.531-5.279 3.531-5.279s2.98.58 3.382.58c.402 0 1.272-.341 2.076-.614.727-.247 1.235-.272 1.325-.275h.028z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask",{id:"prefix__a",maskUnits:"userSpaceOnUse",x:12,y:8,width:24,height:6,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M31.567 11.174L28.822 8h-9.644l-2.745 3.174s-2.41-.683-3.55.477c0 0 3.215-.296 4.32 1.535 0 0 2.98.58 3.382.58.402 0 1.272-.341 2.076-.614.803-.273 1.34-.275 1.34-.275s.535.002 1.338.275c.804.273 1.675.614 2.076.614.402 0 3.382-.58 3.382-.58 1.105-1.83 4.32-1.535 4.32-1.535-1.14-1.16-3.55-.477-3.55-.477z",fill:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{mask:"url(#prefix__a)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M31.567 11.174L28.822 8h-9.644l-2.745 3.174s-2.41-.683-3.55.477c0 0 3.215-.296 4.32 1.535 0 0 2.98.58 3.382.58.402 0 1.272-.341 2.076-.614.803-.273 1.34-.275 1.34-.275s.535.002 1.338.275c.804.273 1.675.614 2.076.614.402 0 3.382-.58 3.382-.58 1.105-1.83 4.32-1.535 4.32-1.535-1.14-1.16-3.55-.477-3.55-.477z",fill:"url(#prefix__prefix__paint1_linear_11995_1639)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_11995_1639",x1:10.607,y1:24.226,x2:37.393,y2:24.226,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#F50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.41,stopColor:"#F50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.582,stopColor:"#FF2000"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#FF2000"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_11995_1639",x1:13.361,y1:10.924,x2:35.116,y2:10.924,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#FF452A"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#FF2000"})]})]})]})})),CheckLarge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function CheckLarge(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.707 6.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 16.586 19.293 6.293a1 1 0 011.414 0z"})})})),Check=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Check(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.434 8.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0L7.293 12.98a1 1 0 111.414-1.414l2.02 2.02 5.293-5.293a1 1 0 011.414 0z"})})})),Close=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Close(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.707 7.707a1 1 0 00-1.414-1.414L12 10.586 7.707 6.293a1 1 0 00-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 101.414 1.414L12 13.414l4.293 4.293a1 1 0 001.414-1.414L13.414 12l4.293-4.293z"})})})),Coin98Circle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Coin98Circle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"url(#prefix__prefix__paint0_linear_10169:6081)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.16 11.984a7.496 7.496 0 107.503 7.503 7.507 7.507 0 00-7.503-7.503zm0 11.922a4.423 4.423 0 114.424-4.422 4.438 4.438 0 01-4.424 4.422zm22.1-5.508a6.31 6.31 0 01-.788 3.067 8.612 8.612 0 00-2.692-1.483 3.338 3.338 0 10-5.875 0 8.613 8.613 0 00-2.691 1.483 6.406 6.406 0 015.631-9.48 6.421 6.421 0 016.415 6.413zm-6.415 2.595a7.496 7.496 0 107.49 7.504 7.512 7.512 0 00-7.49-7.504zm0 11.914a4.417 4.417 0 11.01-8.835 4.417 4.417 0 01-.01 8.835zm-9.27-3.336a6.416 6.416 0 11-12.833 0h3.079a3.337 3.337 0 106.675 0h3.079z",fill:"#252525"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10169:6081",x1:45.553,y1:2.447,x2:3.111,y2:44.889,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#F1D961"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#CDA146"})]})})]})})),Coinbase=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Coinbase(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:20,cy:20,r:15,fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm0-8c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12z",fill:"url(#prefix__prefix__a)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:16,y:16,width:8,height:8,rx:1,fill:"#2952EA"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__a",x1:20,y1:0,x2:20,y2:40,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#345FF8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#1D44DC"})]})})]})})),CookieInverse=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function CookieInverse(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{opacity:.4,width:32,height:32,rx:8,fill:"#1C1C21"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M25.601 15.23c-1.286-.462-2.078-1.771-1.978-2.805 0-.17-.102-.328-.23-.44a.639.639 0 00-.496-.132c-1.96.288-3.756-1.146-3.934-3.162a.585.585 0 00-.785-.499c-1.59.582-3.09-.47-3.69-1.841a.586.586 0 00-.664-.337C9.314 7.02 6 11.377 6 16c0 5.493 4.507 10 10 10s10-4.507 10-10c-.016-.349-.019-.634-.399-.77zm-15.49 1.4a.586.586 0 110-1.172.586.586 0 010 1.172zm2.373 4.643a1.76 1.76 0 01-1.757-1.757c0-.97.788-1.758 1.757-1.758.97 0 1.758.788 1.758 1.758a1.76 1.76 0 01-1.758 1.758zm.586-7.03a1.173 1.173 0 01-1.172-1.173 1.173 1.173 0 012.344 0c0 .646-.526 1.172-1.172 1.172zm4.688 8.202a1.173 1.173 0 01-1.172-1.172c0-.645.526-1.171 1.172-1.171.646 0 1.172.526 1.172 1.171 0 .646-.526 1.172-1.172 1.172zm.586-4.687A1.76 1.76 0 0116.586 16c0-.97.789-1.758 1.758-1.758s1.758.789 1.758 1.758a1.76 1.76 0 01-1.758 1.758zm3.486 1.216a.586.586 0 110-1.172.586.586 0 010 1.172z",fill:"#fff"})]})})),Cookie=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Cookie(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:32,height:32,rx:8,fill:"#F4F6F8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M25.601 15.23c-1.286-.462-2.078-1.771-1.978-2.805 0-.17-.102-.328-.23-.44a.64.64 0 00-.496-.132c-1.96.288-3.756-1.146-3.934-3.162a.585.585 0 00-.785-.499c-1.59.582-3.09-.47-3.69-1.841a.586.586 0 00-.664-.337C9.314 7.02 6 11.377 6 16c0 5.493 4.507 10 10 10 5.492 0 10-4.507 10-10-.016-.349-.019-.634-.399-.77zm-15.49 1.4a.586.586 0 110-1.172.586.586 0 010 1.172zm2.373 4.643a1.76 1.76 0 01-1.757-1.757c0-.97.788-1.758 1.757-1.758.97 0 1.758.788 1.758 1.758a1.76 1.76 0 01-1.758 1.758zm.586-7.03a1.173 1.173 0 01-1.172-1.173 1.173 1.173 0 012.344 0c0 .646-.526 1.172-1.172 1.172zm4.688 8.202a1.173 1.173 0 01-1.172-1.172 1.173 1.173 0 012.344 0c0 .646-.526 1.172-1.172 1.172zm.586-4.687A1.76 1.76 0 0116.586 16a1.76 1.76 0 013.516 0 1.76 1.76 0 01-1.758 1.758zm3.486 1.216a.586.586 0 110-1.172.586.586 0 010 1.172z",fill:"#7A8AA0"})]})})),Copy=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Copy(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6 9.858V14.1a2.1 2.1 0 01-2.1 2.1h-.7v.7a2.1 2.1 0 01-2.1 2.1H8.1A2.1 2.1 0 016 16.9v-7c0-1.16.94-2.1 2.1-2.1h.7v-.7c0-1.16.94-2.1 2.1-2.1h2.835a.77.77 0 01.49.21l4.2 4.2a.62.62 0 01.175.448zM13.7 17.6a.7.7 0 00.7-.7v-.7h-3.5a2.1 2.1 0 01-2.1-2.1V9.2h-.7a.7.7 0 00-.7.7v7a.7.7 0 00.7.7h5.6zm.7-10.213L16.213 9.2H15.1a.7.7 0 01-.7-.7V7.387zm2.1 7.413a.7.7 0 00.7-.7v-3.5h-2.1A2.1 2.1 0 0113 8.5V6.4h-2.1a.7.7 0 00-.7.7v7a.7.7 0 00.7.7h5.6z"})})})),Dark=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Dark(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 12.63A7.015 7.015 0 1111.37 5 5.456 5.456 0 0019 12.63z"})})})),Deposit=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Deposit(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3h14a3 3 0 011 5.82V18a3 3 0 01-3 3H7a3 3 0 01-3-3V8.82A3 3 0 015 3zm9 10h-4a1 1 0 010-2h4a1 1 0 110 2zm4 5a1 1 0 01-1 1H7a1 1 0 01-1-1V9h12v9zM5 7h14a1 1 0 100-2H5a1 1 0 100 2z"})})})),Edit=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Edit(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.414 14.586l5.657-5.657 2.121 2.121-5.656 5.657-2.475.354.353-2.475zm6.364-6.364l1.06-1.06a1 1 0 011.415 0l.707.706a1 1 0 010 1.414l-1.06 1.061-2.122-2.121z"})})})),Email=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Email(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.41 11.018C11.044 11.018 4 7.024 4 7.024V6.4A1.4 1.4 0 015.401 5H19.42c.774 0 1.402.627 1.402 1.4l-.011.7s-6.968 3.918-8.4 3.918z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.41 12.943c1.5 0 8.4-3.743 8.4-3.743l.012 8.4A1.4 1.4 0 0119.42 19H5.4A1.401 1.401 0 014 17.6l.011-8.4s7.032 3.743 8.4 3.743z"})]})})),Error=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Error(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:60,height:60,viewBox:"0 0 60 60",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30 58c15.464 0 28-12.536 28-28S45.464 2 30 2 2 14.536 2 30s12.536 28 28 28zm0 2c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z",fill:"#E14D4D"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M23.071 37.071a1 1 0 001.414 0l5.657-5.657 5.657 5.657a1 1 0 001.414-1.414L31.556 30l5.657-5.657A1 1 0 0035.8 22.93l-5.657 5.657-5.657-5.657a1 1 0 00-1.414 1.414L28.728 30l-5.657 5.657a1 1 0 000 1.414z",fill:"#E14D4D"})]})})),Eth=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Eth(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.999 16.103v4.143l5.251-7.135L12 16.103z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,d:"M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"})]})})),Exodus=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Exodus(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#1E1C32"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#prefix__prefix__clip0_12052_1670)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M38.755 17.375L25.98 9v4.683l8.195 5.326-.964 3.05H25.98v3.881h7.231l.964 3.051-8.195 5.326V39l12.775-8.35-2.089-6.637 2.09-6.637z",fill:"url(#prefix__prefix__paint0_linear_12052_1670)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14.865 25.94h7.205v-3.881h-7.232l-.937-3.051 8.169-5.326V9L9.294 17.375l2.09 6.637-2.09 6.637L22.096 39v-4.683l-8.195-5.326.964-3.05z",fill:"url(#prefix__prefix__paint1_linear_12052_1670)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mask",{id:"prefix__a",maskUnits:"userSpaceOnUse",x:9,y:8,width:30,height:31,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M38.755 17.375L25.98 9v4.683l8.195 5.326-.964 3.05H25.98v3.881h7.231l.964 3.051-8.195 5.326V39l12.775-8.35-2.089-6.637 2.09-6.637z",fill:"url(#prefix__prefix__paint2_linear_12052_1670)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14.865 25.94h7.205v-3.881h-7.232l-.937-3.051 8.169-5.326V9L9.294 17.375l2.09 6.637-2.09 6.637L22.096 39v-4.683l-8.195-5.326.964-3.05z",fill:"url(#prefix__prefix__paint3_linear_12052_1670)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{mask:"url(#prefix__a)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M38.56 8.999H9.31v30h29.25v-30z",fill:"url(#prefix__prefix__paint4_linear_12052_1670)"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_12052_1670",x1:34.622,y1:41.062,x2:26.065,y2:5.704,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#0B46F9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#BBFBE0"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_12052_1670",x1:34.622,y1:41.062,x2:26.065,y2:5.704,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#0B46F9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#BBFBE0"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint2_linear_12052_1670",x1:34.622,y1:41.062,x2:26.065,y2:5.704,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#0B46F9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#BBFBE0"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint3_linear_12052_1670",x1:34.622,y1:41.062,x2:26.065,y2:5.704,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#0B46F9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#BBFBE0"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint4_linear_12052_1670",x1:11.185,y1:15.749,x2:25.997,y2:26.811,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.12,stopColor:"#8952FF",stopOpacity:.87}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#DABDFF",stopOpacity:0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"prefix__prefix__clip0_12052_1670",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"#fff",transform:"translate(9.196 8.999)",d:"M0 0h29.609v30H0z"})})]})]})})),External=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function External(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.333 7.75a.583.583 0 00-.583.583v7.334c0 .322.261.583.583.583h7.334a.583.583 0 00.583-.583v-2a.75.75 0 011.5 0v2c0 1.15-.933 2.083-2.083 2.083H8.333a2.083 2.083 0 01-2.083-2.083V8.333c0-1.15.933-2.083 2.083-2.083h2a.75.75 0 010 1.5h-2zm5.667 0a.75.75 0 010-1.5h3a.748.748 0 01.75.75v3a.75.75 0 01-1.5 0V8.81l-4.053 4.054a.75.75 0 01-1.06-1.061l4.052-4.053H14z"})})})),Facebook=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Facebook(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.964 20v-8h2.209l.293-2.758h-2.502l.004-1.38c0-.72.068-1.105 1.101-1.105h1.38V4h-2.208c-2.653 0-3.587 1.338-3.587 3.587v1.655H8V12h1.654v8h3.31z"})})})),Gamestop=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Gamestop(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#000"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M32.48 22.374h-2.615v-4.891c0-.661-.075-1.137-.436-1.137-.36 0-.436.476-.436 1.137v4.891H26.38v-4.891c0-.661-.075-1.137-.436-1.137-.36 0-.436.476-.436 1.137v4.891h-2.615v-7.47h2.617v.776a1.86 1.86 0 01.705-.686c.293-.161.624-.242.96-.233.713 0 1.332.256 1.722.99a1.8 1.8 0 01.701-.743c.301-.175.647-.261.996-.247 1.014 0 1.888.642 1.888 2.26l-.002 5.353zm-13.103-3.73c-.349.286-.873.586-.873 1.495 0 .612.158.862.438.862s.435-.25.435-.862v-1.495zm-.37-3.883c1.736 0 2.985.596 2.985 2.471v5.142h-2.615v-.647c-.28.44-.785.783-1.6.783-.562 0-1.873-.191-1.873-2.132 0-2.657 3.471-1.746 3.471-3.361 0-.661-.158-.93-.437-.93-.28 0-.436.269-.436.93v.41H16.02v-.19c0-1.876 1.251-2.472 2.987-2.472v-.004zm17.877 4.614h2.485c-.035 2.174-1.302 3.142-3.051 3.142-1.75 0-3.051-.987-3.051-3.228v-1.3c0-2.24 1.278-3.228 3.05-3.228 1.773 0 3.052.987 3.052 3.228v.783h-3.485v1.278c0 .659.085 1.134.5 1.134.414 0 .5-.476.5-1.134v-.675zm-.123-2.154c0-.66-.075-1.135-.436-1.135-.36 0-.436.476-.436 1.135v.395h.872v-.395zm-21.6-.715v-.381c0-2.585-1.558-3.284-3.278-3.284s-3.251.919-3.251 3.505v2.657c0 1.74.744 3.514 2.736 3.514.914 0 1.5-.437 1.753-.852l.207.717h1.82v-4.955h-3.163v1.597h.712v.334c0 .812-.114 1.555-.63 1.555-.518 0-.63-.743-.63-1.555v-3.404c0-.79.053-1.516.454-1.516s.453.726.453 1.516v.552h2.818zm7.432 16.632a3.9 3.9 0 01-1.5.3c-1.24 0-1.971-.7-1.971-2.029v-4.595h-.527v-.99h.527v-1.012h2.613v1.012h.858v.99h-.858v4.479c0 .483.087.907.51.907a.666.666 0 00.348-.1v1.04-.002zm-7.084-6.324h2.594v-.401c0-1.836-1.237-2.651-3.074-2.651-1.754 0-3.074.972-3.074 2.674 0 3.19 3.645 2.483 3.645 4.647 0 .573-.225.764-.5.764-.273 0-.497-.191-.497-.764v-.791h-2.617v.382c0 1.916 1.26 2.764 3.153 2.764 1.81 0 3.16-.997 3.16-2.781 0-3.555-3.75-2.57-3.75-4.537 0-.573.234-.764.48-.764.247 0 .48.191.48.764v.694zm10.927 1.337c0-.66-.075-1.135-.435-1.135s-.436.476-.436 1.135v2.819c0 .659.075 1.134.436 1.134.36 0 .435-.475.435-1.134v-2.82zm-.435-2.46c1.772 0 3.05.987 3.05 3.228v1.293c0 2.24-1.278 3.228-3.05 3.228-1.772 0-3.05-.988-3.05-3.228v-1.303c0-2.24 1.276-3.228 3.05-3.228v.01zm7.328 2.712c0-.661-.075-1.137-.436-1.137-.36 0-.435.476-.435 1.137v2.307c0 .66.075 1.135.435 1.135.361 0 .436-.476.436-1.135v-2.307zm.664-2.722c1.236 0 1.951.988 1.951 3.228v1.293c0 2.24-.715 3.228-1.951 3.228a1.879 1.879 0 01-1.543-.797v2.524h-2.6v-9.333h2.615v.653a1.879 1.879 0 011.543-.796h-.015zm1.612.415c.024.042.06.077.102.1a.26.26 0 00.143.039.268.268 0 00.139-.036.272.272 0 00.102-.102.263.263 0 00.038-.139.268.268 0 00-.142-.24.269.269 0 00-.137-.037.296.296 0 00-.14.036.264.264 0 00-.103.104.265.265 0 00-.039.137.28.28 0 00.037.138zm.036-.256a.244.244 0 01.146-.113.24.24 0 01.271.113.234.234 0 01-.089.324.222.222 0 01-.12.033.232.232 0 01-.12-.033.238.238 0 01-.09-.086.241.241 0 01.002-.238zm.292-.02a.134.134 0 00-.09-.024h-.086v.324h.049v-.131h.04l.079.13h.054l-.085-.142a.11.11 0 00.05-.036.093.093 0 00-.011-.122v.002zm-.127.02h.033a.106.106 0 01.055.011.04.04 0 01.014.017.046.046 0 01.004.021c0 .038-.026.056-.073.056h-.033v-.105z",fill:"#fff"})]})})),History=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function History(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 8.94a.887.887 0 00-.25-.64l-6-6c-.198-.186-.406-.3-.69-.3H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8.94zm-6-3.53L16.59 8H14V5.41zM17 20a1 1 0 001-1v-9h-5a1 1 0 01-1-1V4H7a1 1 0 00-1 1v14a1 1 0 001 1h10z"})})})),ImtokenCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function ImtokenCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:49,viewBox:"0 0 48 49",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{y:.002,width:48,height:48,rx:24,fill:"url(#prefix__prefix__paint0_linear_10169:6069)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M36.932 15.606c.858 11.153-6.607 16.427-13.3 16.99-6.221.522-12.077-3.15-12.592-8.792-.423-4.661 2.576-6.645 4.932-6.843 2.424-.204 4.46 1.401 4.638 3.345.17 1.869-1.043 2.72-1.888 2.79a1.46 1.46 0 01-1.043-.27 1.35 1.35 0 01-.54-.9c-.066-.718.218-.816.149-1.579-.123-1.358-1.357-1.516-2.033-1.46-.817.068-2.3.985-2.092 3.267.21 2.302 2.508 4.12 5.52 3.867 3.25-.272 5.513-2.702 5.684-6.113-.002-.18.038-.359.115-.523v-.004c.035-.072.076-.14.123-.206.082-.116.173-.227.273-.33 0-.004 0-.004.003-.004.084-.09.184-.188.298-.294 1.422-1.286 6.536-4.321 11.372-3.36a.489.489 0 01.264.149c.068.075.11.17.118.27",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10169:6069",x1:46.656,y1:1.49,x2:.001,y2:47.858,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#11C4D1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#0062AD"})]})})]})})),Imtoken=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Imtoken(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M39.896 27.443s0 4.146-.443 5.926a8.333 8.333 0 01-2.186 3.96c-.928.92-2.152 1.76-4 2.198-1.876.437-5.918.416-5.918.416H12.651s-4.147 0-5.938-.438c-1.786-.458-3.052-1.276-3.973-2.198-.928-.92-1.77-2.135-2.193-4C.104 31.443.125 27.42.125 27.42V12.76s0-4.147.443-5.927A8.32 8.32 0 012.76 2.875c.923-.922 2.147-1.755 4-2.198C8.63.24 12.672.26 12.672.26h14.697s4.147 0 5.938.437c1.786.464 3.053 1.276 3.98 2.199.921.921 1.765 2.14 2.186 4 .423 1.864.423 5.885.423 5.885v14.662z",fill:"url(#prefix__prefix__paint0_linear)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M33.661 12.387c.823 11.285-6.713 16.649-13.473 17.233-6.272.547-12.167-3.141-12.672-8.86-.423-4.707 2.61-6.739 4.99-6.932 2.442-.208 4.483 1.407 4.671 3.375.172 1.885-1.053 2.76-1.912 2.828-.677.062-1.514-.338-1.604-1.176-.062-.73.235-.814.151-1.59-.13-1.385-1.37-1.53-2.04-1.468-.824.063-2.32 1.006-2.132 3.312.213 2.323 2.527 4.167 5.557 3.891 3.287-.292 5.584-2.74 5.751-6.197 0-.188.041-.355.125-.522.04-.062.063-.125.124-.186a2.49 2.49 0 01.276-.34l.298-.291c1.426-1.297 6.609-4.396 11.469-3.433.047 0 .088.021.11.042.186 0 .29.147.311.312",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear",x1:38.783,y1:1.49,x2:.211,y2:39.909,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#11C4D1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#0062AD"})]})})]})})),Ldo=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Ldo(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",fill:"#F69988"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.005 4.223l3.859 6.025-3.859 2.244-3.858-2.244 3.858-6.025zm-2.677 5.74l2.677-4.18 2.677 4.18-2.677 1.557-2.677-1.557z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12 13.816l-4.477-2.603-.122.191a5.433 5.433 0 00.74 6.78 5.467 5.467 0 007.718 0 5.432 5.432 0 00.74-6.78l-.122-.19L12 13.816z",fill:"#fff"})]})})),Ldopl=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Ldopl(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.078 11.148l-.135.206a5.788 5.788 0 00.814 7.32 6.043 6.043 0 004.24 1.72l-4.92-9.246z",fill:"#D219B8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.997 13.958l-4.92-2.81 4.92 9.246v-6.436zm4.925-2.81l.134.206a5.788 5.788 0 01-.813 7.32 6.043 6.043 0 01-4.24 1.72l4.92-9.246z",fill:"#D219B8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,d:"M12.002 13.958l4.92-2.81-4.92 9.246v-6.436zm.001-6.278v4.847l4.238-2.422-4.238-2.425z",fill:"#D219B8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 7.68l-4.24 2.425 4.24 2.422V7.68z",fill:"#D219B8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.003 3.604l-4.24 6.502 4.24-2.431V3.604z",fill:"#D219B8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 7.674l4.241 2.432-4.24-6.506v4.074z",fill:"#D219B8"})]})})),LedgerCircleInversion=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LedgerCircleInversion(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 29.34v6.876h10.464v-1.525h-8.94v-5.35H10zm26.294 0v5.351h-8.94v1.525h10.464V29.34h-1.524zM20.479 18.876V29.34h6.876v-1.375h-5.352v-9.089H20.48zM10 12v6.876h1.525v-5.351h8.939V12H10zm17.355 0v1.525h8.939v5.351h1.524V12H27.355z",fill:"#000"})]})})),LedgerCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LedgerCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"#000"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 29.34v6.876h10.464v-1.525h-8.94v-5.35H10zm26.294 0v5.351h-8.94v1.525h10.464V29.34h-1.524zM20.479 18.876V29.34h6.876v-1.375h-5.352v-9.089H20.48zM10 12v6.876h1.525v-5.351h8.939V12H10zm17.355 0v1.525h8.939v5.351h1.524V12H27.355z",fill:"#fff"})]})})),LedgerConfirm=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LedgerConfirm(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:354,height:43,viewBox:"0 0 354 43",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:58,y:6,width:238,height:36,rx:5,fill:"#F6F7FB",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M83 24a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M81 24a5 5 0 10-10 0 5 5 0 0010 0z",fill:"#136BFF",fillOpacity:.15}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M76 19.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z",stroke:"#136BFF",strokeOpacity:.35}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M77 24a1 1 0 10-2 0 1 1 0 002 0z",fill:"#136BFF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M76 0c.276 0 .5.138.5.308v23.384c0 .17-.224.308-.5.308s-.5-.138-.5-.308V.308c0-.17.224-.308.5-.308z",fill:"url(#prefix__prefix__paint0_linear_10116:2145)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:96.597,y:10.597,width:60.807,height:26.807,rx:3.403,fill:"#fff",stroke:"#172340",strokeWidth:1.193}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M168 24c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 10.954v26.092A4.954 4.954 0 01291.046 42H186c-9.941 0-18-8.059-18-18z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M193 24a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M191 24a5 5 0 10-10 0 5 5 0 0010 0z",fill:"#136BFF",fillOpacity:.15}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M186 19.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z",stroke:"#136BFF",strokeOpacity:.35}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M187 24a1 1 0 10-2 0 1 1 0 002 0z",fill:"#136BFF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M186 0c.276 0 .5.138.5.308v23.384c0 .17-.224.308-.5.308s-.5-.138-.5-.308V.308c0-.17.224-.308.5-.308z",fill:"url(#prefix__prefix__paint1_linear_10116:2145)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M44 21a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 29.38 57.38 30 56.613 30H47a3 3 0 01-3-3v-6z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M34.5 22.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",fill:"#fff",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M.5 22.5h34v3H.5v-3z",fill:"url(#prefix__prefix__paint2_linear_10116:2145)",stroke:"url(#prefix__prefix__paint3_linear_10116:2145)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10116:2145",x1:76.5,y1:.308,x2:76.5,y2:23.692,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#136BFF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#136BFF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_10116:2145",x1:186.5,y1:.308,x2:186.5,y2:23.692,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#136BFF",stopOpacity:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#136BFF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint2_linear_10116:2145",x1:35.473,y1:24,x2:0,y2:24,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint3_linear_10116:2145",x1:35,y1:26,x2:2.838,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#172340",stopOpacity:0})]})]})]})})),LedgerFail=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LedgerFail(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:354,height:38,viewBox:"0 0 354 38",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:58,y:1,width:238,height:36,rx:5,fill:"#F6F7FB",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M83 19a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:96.597,y:5.597,width:60.807,height:26.807,rx:3.403,fill:"#fff",stroke:"#172340",strokeWidth:1.193}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M122.199 23.801a.679.679 0 00.96 0l3.841-3.84 3.841 3.84a.679.679 0 10.96-.96L127.96 19l3.841-3.84a.68.68 0 00-.96-.961L127 18.039l-3.841-3.84a.679.679 0 10-.96.96L126.04 19l-3.841 3.84a.68.68 0 000 .961z",fill:"#E14D4D"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M168 19c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 5.954v26.092A4.954 4.954 0 01291.046 37H186c-9.941 0-18-8.059-18-18z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M193 19a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M44 16a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 24.38 57.38 25 56.613 25H47a3 3 0 01-3-3v-6z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M34.5 17.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",fill:"#fff",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M.5 17.5h34v3H.5v-3z",fill:"url(#prefix__prefix__paint0_linear_10549_10810)",stroke:"url(#prefix__prefix__paint1_linear_10549_10810)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10549_10810",x1:35.473,y1:19,x2:0,y2:19,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_10549_10810",x1:35,y1:21,x2:2.838,y2:21,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#172340",stopOpacity:0})]})]})]})})),LedgerLoading=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LedgerLoading(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:354,height:38,viewBox:"0 0 354 38",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:58,y:1,width:238,height:36,rx:5,fill:"#F6F7FB",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M83 19a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:96.597,y:5.597,width:60.807,height:26.807,rx:3.403,fill:"#fff",stroke:"#172340",strokeWidth:1.193}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{opacity:.1,cx:127,cy:19,r:6,stroke:"#00A3FF",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M131.555 22.905A6 6 0 00127 13",stroke:"#00A3FF",strokeWidth:2,strokeLinecap:"round",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 127 19",to:"360 127 19",dur:"1s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M168 19c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 5.954v26.092A4.954 4.954 0 01291.046 37H186c-9.941 0-18-8.059-18-18z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M193 19a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M44 16a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 24.38 57.38 25 56.613 25H47a3 3 0 01-3-3v-6z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M34.5 17.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",fill:"#fff",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M.5 17.5h34v3H.5v-3z",fill:"url(#prefix__prefix__paint0_linear_10116:2259)",stroke:"url(#prefix__prefix__paint1_linear_10116:2259)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10116:2259",x1:35.473,y1:19,x2:0,y2:19,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_10116:2259",x1:35,y1:21,x2:2.838,y2:21,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#172340",stopOpacity:0})]})]})]})})),LedgerSuccess=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LedgerSuccess(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:354,height:38,viewBox:"0 0 354 38",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:58,y:1,width:238,height:36,rx:5,fill:"#F6F7FB",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M83 19a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:96.597,y:5.597,width:60.807,height:26.807,rx:3.403,fill:"#fff",stroke:"#172340",strokeWidth:1.193}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M132 15l-6.875 6.875L122 18.75",stroke:"#61B75F",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M168 19c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 5.954v26.092A4.954 4.954 0 01291.046 37H186c-9.941 0-18-8.059-18-18z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M193 19a7 7 0 10-14 0 7 7 0 0014 0z",fill:"#F6F7FB",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M44 16a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 24.38 57.38 25 56.613 25H47a3 3 0 01-3-3v-6z",fill:"#fff",stroke:"#172340",strokeWidth:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M34.5 17.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",fill:"#fff",stroke:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M.5 17.5h34v3H.5v-3z",fill:"url(#prefix__prefix__paint0_linear_10116:2189)",stroke:"url(#prefix__prefix__paint1_linear_10116:2189)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10116:2189",x1:35.473,y1:19,x2:0,y2:19,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_10116:2189",x1:35,y1:21,x2:2.838,y2:21,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#172340"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#172340",stopOpacity:0})]})]})]})})),Ledger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Ledger(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:40,height:40,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"#000"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 29.34v6.876h10.464v-1.525h-8.94v-5.35H10zm26.294 0v5.351h-8.94v1.525h10.464V29.34h-1.524zM20.479 18.876V29.34h6.876v-1.375h-5.352v-9.089H20.48zM10 12v6.876h1.525v-5.351h8.939V12H10zm17.355 0v1.525h8.939v5.351h1.524V12H27.355z",fill:"#fff"})]})})),Light=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Light(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12 3a1 1 0 011 1v1.455a1 1 0 11-2 0V4a1 1 0 011-1zm0 12.636a3.636 3.636 0 100-7.272 3.636 3.636 0 000 7.272zm1 2.91a1 1 0 10-2 0V20a1 1 0 102 0v-1.454zM5.635 5.634a1 1 0 011.414 0l1.033 1.033A1 1 0 116.668 8.08L5.635 7.048a1 1 0 010-1.414zm11.697 10.284a1 1 0 00-1.414 1.414l1.033 1.033a1 1 0 101.414-1.414l-1.033-1.033zM3 12a1 1 0 011-1h1.455a1 1 0 110 2H4a1 1 0 01-1-1zm15.546-1a1 1 0 100 2H20a1 1 0 100-2h-1.454zM8.082 15.918a1 1 0 010 1.414L7.05 18.365a1 1 0 11-1.414-1.414l1.033-1.033a1 1 0 011.414 0zm10.283-8.87a1 1 0 10-1.414-1.414l-1.033 1.033a1 1 0 001.414 1.414l1.033-1.033z"})})})),Linkedin=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Linkedin(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M8.537 6.632C8.517 5.705 7.854 5 6.779 5 5.703 5 5 5.705 5 6.632c0 .907.682 1.632 1.738 1.632h.02c1.096 0 1.779-.725 1.779-1.632zm-.206 2.922H5.188V19H8.33V9.554zm7.719-.222c2.07 0 3.62 1.35 3.62 4.252V19h-3.144v-5.054c0-1.27-.455-2.135-1.593-2.135-.868 0-1.386.584-1.613 1.148-.083.202-.104.483-.104.766V19h-3.144s.042-8.56 0-9.446h3.145v1.338c.417-.643 1.164-1.56 2.833-1.56z"})})})),LockSmall=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function LockSmall(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12 6a3.129 3.129 0 00-3.125 3.125V11H8.25C7.56 11 7 11.56 7 12.25V17c0 .69.56 1 1.25 1h7.5c.69 0 1.25-.31 1.25-1v-4.75c0-.69-.56-1.25-1.25-1.25h-.625V9.125A3.129 3.129 0 0012 6zm-1.875 3.125c0-1.034.841-1.875 1.875-1.875s1.875.841 1.875 1.875V11h-3.75V9.125zm2.5 5.702v.798a.625.625 0 11-1.25 0v-.798a1.245 1.245 0 01.354-2.298 1.25 1.25 0 011.521 1.221c0 .462-.252.86-.625 1.077z"})})})),Lock=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Lock(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 7v2a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a3 3 0 013-3V7a5 5 0 0110 0zm-6 7a1 1 0 112 0v3a1 1 0 11-2 0v-3zM9 7a3 3 0 116 0v2H9V7zm8 13a1 1 0 001-1v-7a1 1 0 00-1-1H7a1 1 0 00-1 1v7a1 1 0 001 1h10z"})})})),MathWalletCircleInversion=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function MathWalletCircleInversion(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M31.954 22.596a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.802 5.803a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm9.162-3.054a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm-3.054 3.054a1.296 1.296 0 111.832-1.833A1.296 1.296 0 0132.26 28.4zm6.413-.306a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zm-3.054 3.054a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zM28.9 25.65a1.728 1.728 0 112.444-2.443A1.728 1.728 0 0128.9 25.65zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-6.136 0a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.803 5.803a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm9.162-3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-3.054 3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-11.91-.306a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm3.054 3.054a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm12.216 0a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm-12.522-5.802a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm5.803.305a1.728 1.728 0 112.444-2.443 1.728 1.728 0 01-2.444 2.443zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443z",fill:"#293037"})]})})),MathWalletCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function MathWalletCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"url(#prefix__prefix__paint0_linear_10169:6073)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M31.954 22.596a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.802 5.803a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm9.162-3.054a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm-3.054 3.054a1.296 1.296 0 111.832-1.833A1.296 1.296 0 0132.26 28.4zm6.413-.306a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zm-3.054 3.054a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zM28.9 25.65a1.728 1.728 0 112.444-2.443A1.728 1.728 0 0128.9 25.65zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-6.136 0a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.803 5.803a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm9.162-3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-3.054 3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-11.91-.306a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm3.054 3.054a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm12.216 0a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm-12.522-5.802a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm5.803.305a1.728 1.728 0 112.444-2.443 1.728 1.728 0 01-2.444 2.443zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_10169:6073",x1:48,y1:0,x2:0,y2:48,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#293037"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#16181D"})]})})]})})),MetaMaskCircleInversion=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function MetaMaskCircleInversion(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:49,viewBox:"0 0 48 49",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{y:.004,width:48,height:48,rx:24,fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M35.708 11.005L25.563 18.54l1.876-4.446 8.269-3.09z",fill:"#E2761B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.285 11.004L22.35 18.61l-1.785-4.517-8.279-3.09zM32.057 28.47l-2.702 4.14 5.782 1.59 1.662-5.639-4.742-.091zm-20.842.091l1.652 5.639 5.78-1.59-2.701-4.14-4.731.091z",fill:"#E4761B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M18.322 21.476l-1.611 2.437 5.74.255-.204-6.169-3.925 3.477zm11.35 0l-3.977-3.548-.133 6.24 5.73-.255-1.62-2.437zM18.648 32.61l3.447-1.683-2.977-2.325-.47 4.008zm7.25-1.683l3.457 1.683-.48-4.008-2.977 2.325z",fill:"#E4761B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M29.355 32.61l-3.457-1.682.276 2.253-.03.948 3.211-1.519zm-10.707 0l3.212 1.52-.02-.949.255-2.253-3.447 1.682z",fill:"#D7C1B3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M21.91 27.115l-2.875-.846 2.03-.928.845 1.774zm4.172 0l.846-1.774 2.04.928-2.886.846z",fill:"#233447"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M18.647 32.61l.49-4.14-3.192.093 2.702 4.047zm10.216-4.14l.49 4.14 2.702-4.047-3.192-.092zm2.426-4.557l-5.73.255.53 2.947.846-1.774 2.04.927 2.314-2.355zm-12.253 2.355l2.039-.927.836 1.774.54-2.947-5.74-.255 2.325 2.355z",fill:"#CD6116"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.71 23.914l2.407 4.69-.081-2.335-2.325-2.355zm12.267 2.354l-.102 2.335 2.416-4.69-2.314 2.355zm-6.527-2.1l-.54 2.947.673 3.477.153-4.578-.285-1.846zm3.11 0l-.275 1.835.122 4.589.684-3.477-.53-2.947z",fill:"#E4751F"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M26.093 27.114l-.683 3.477.49.336 2.977-2.325.102-2.334-2.886.846zm-7.058-.846l.082 2.334 2.977 2.325.49-.336-.674-3.477-2.875-.846z",fill:"#F6851B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M26.143 34.13l.03-.949-.255-.224h-3.844l-.234.224.02.949-3.212-1.52 1.122.918 2.274 1.58h3.905l2.284-1.58 1.122-.918-3.212 1.52z",fill:"#C0AD9E"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M25.898 30.928l-.49-.336h-2.824l-.49.336-.254 2.254.234-.225h3.844l.255.225-.275-2.254z",fill:"#161616"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M36.132 19.028l.866-4.16-1.295-3.864-9.809 7.28 3.773 3.191L35 23.035l1.182-1.376-.51-.367.816-.744-.632-.49.816-.622-.54-.408zM11 14.868l.867 4.16-.55.408.815.622-.622.49.816.744-.51.367 1.172 1.377 5.333-1.56 3.772-3.192-9.808-7.28L11 14.868z",fill:"#763D16"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M35.003 23.036l-5.333-1.56 1.621 2.437-2.416 4.69 3.181-.041h4.742l-1.795-5.526zm-16.681-1.56l-5.333 1.56-1.774 5.526h4.73l3.172.04-2.406-4.69 1.61-2.436zm7.237 2.693l.336-5.884 1.55-4.19h-6.883l1.53 4.19.357 5.884.122 1.855.01 4.568h2.825l.02-4.568.133-1.855z",fill:"#F6851B"})]})})),MetaMaskCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function MetaMaskCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:49,viewBox:"0 0 48 49",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{y:.004,width:48,height:48,rx:24,fill:"#233447"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M35.706 11.005L25.56 18.54l1.877-4.446 8.269-3.09z",fill:"#E2761B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.285 11.004L22.35 18.61l-1.785-4.517-8.279-3.09zM32.056 28.47l-2.702 4.14 5.78 1.59 1.663-5.639-4.741-.091zm-20.841.091l1.652 5.639 5.78-1.59-2.701-4.14-4.731.091z",fill:"#E4761B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M18.322 21.476l-1.611 2.437 5.74.255-.204-6.169-3.925 3.477zm11.348 0l-3.977-3.548-.133 6.24 5.73-.255-1.62-2.437zM18.648 32.61l3.447-1.683-2.977-2.325-.47 4.008zm7.248-1.683l3.457 1.683-.48-4.008-2.977 2.325z",fill:"#E4761B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M29.355 32.61l-3.457-1.682.276 2.253-.03.948 3.211-1.519zm-10.707 0l3.212 1.52-.02-.949.255-2.253-3.447 1.682z",fill:"#D7C1B3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M21.91 27.115l-2.875-.846 2.03-.928.845 1.774zm4.17 0l.846-1.774 2.04.928-2.886.846z",fill:"#233447"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M18.647 32.61l.49-4.14-3.192.093 2.702 4.047zm10.216-4.14l.49 4.14 2.702-4.047-3.192-.092zm2.427-4.557l-5.73.255.53 2.947.847-1.774 2.04.927 2.314-2.355zm-12.256 2.355l2.039-.927.836 1.774.54-2.947-5.74-.255 2.325 2.355z",fill:"#CD6116"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.71 23.914l2.407 4.69-.081-2.335-2.325-2.355zm12.269 2.354l-.102 2.335 2.417-4.69-2.315 2.355zm-6.526-2.1l-.54 2.947.672 3.477.153-4.578-.285-1.846zm3.109 0l-.275 1.835.123 4.589.683-3.477-.53-2.947z",fill:"#E4751F"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M26.091 27.114l-.683 3.477.49.336 2.977-2.325.102-2.334-2.886.846zm-7.056-.846l.082 2.334 2.977 2.325.49-.336-.674-3.477-2.875-.846z",fill:"#F6851B"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M26.143 34.13l.03-.949-.255-.224h-3.844l-.234.224.02.949-3.212-1.52 1.122.918 2.274 1.58h3.905l2.284-1.58 1.122-.918-3.212 1.52z",fill:"#C0AD9E"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M25.898 30.928l-.49-.336h-2.824l-.49.336-.254 2.254.234-.225h3.844l.255.225-.275-2.254z",fill:"#161616"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M36.133 19.028l.867-4.16-1.295-3.864-9.808 7.28 3.772 3.191 5.333 1.56 1.182-1.376-.51-.367.816-.744-.632-.49.816-.622-.54-.408zM11 14.868l.867 4.16-.55.408.815.622-.622.49.816.744-.51.367 1.172 1.377 5.333-1.56 3.772-3.192-9.808-7.28L11 14.868z",fill:"#763D16"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M35.003 23.036l-5.333-1.56 1.621 2.437-2.416 4.69 3.181-.041h4.742l-1.795-5.526zm-16.681-1.56l-5.333 1.56-1.774 5.526h4.73l3.172.04-2.406-4.69 1.61-2.436zm7.238 2.693l.337-5.884 1.55-4.19h-6.883l1.53 4.19.357 5.884.122 1.855.01 4.568h2.825l.02-4.568.133-1.855z",fill:"#F6851B"})]})})),MetaMask=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function MetaMask(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M34.413 4.457l-12.492 9.278 2.31-5.474 10.182-3.804z",fill:"#E2761B",stroke:"#E2761B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M5.575 4.457l12.391 9.366-2.197-5.562L5.575 4.457zm24.344 21.507l-3.327 5.097 7.118 1.959 2.047-6.943-5.838-.113zm-25.663.113L6.29 33.02l7.119-1.959-3.327-5.097-5.826.113z",fill:"#E4761B",stroke:"#E4761B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M13.007 17.351l-1.984 3 7.069.315-.251-7.596-4.834 4.281zm13.973-.001l-4.896-4.369-.163 7.684 7.056-.314-1.997-3zM13.41 31.061l4.243-2.072-3.666-2.862-.578 4.934zm8.925-2.071l4.257 2.071-.59-4.934-3.667 2.863z",fill:"#E4761B",stroke:"#E4761B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M26.591 31.06l-4.256-2.07.339 2.774-.038 1.168 3.955-1.871zm-13.182 0l3.954 1.872-.025-1.168.314-2.775-4.243 2.072z",fill:"#D7C1B3",stroke:"#D7C1B3",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.426 24.294l-3.54-1.042 2.498-1.143 1.042 2.185zm5.135 0l1.042-2.185 2.511 1.143-3.553 1.042z",fill:"#233447",stroke:"#233447",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M13.409 31.061l.602-5.097-3.93.113 3.328 4.984zm12.579-5.097l.603 5.097 3.327-4.984-3.93-.113zm2.989-5.612l-7.056.314.653 3.628 1.042-2.184 2.51 1.142 2.85-2.9zm-15.091 2.9l2.51-1.142 1.03 2.184.665-3.628-7.068-.314 2.863 2.9z",fill:"#CD6116",stroke:"#CD6116",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.023 20.352l2.963 5.775-.1-2.875-2.863-2.9zm15.104 2.9l-.125 2.875 2.975-5.775-2.85 2.9zm-8.035-2.586l-.666 3.628.829 4.282.188-5.637-.351-2.273zm3.829 0l-.339 2.26.15 5.65.842-4.282-.653-3.628z",fill:"#E4751F",stroke:"#E4751F",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.574 24.294l-.842 4.28.603.415 3.666-2.862.126-2.875-3.553 1.042zm-8.688-1.042l.1 2.875 3.666 2.862.603-.414-.829-4.281-3.54-1.043z",fill:"#F6851B",stroke:"#F6851B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.637 32.931l.037-1.167-.314-.277h-4.733l-.289.277.025 1.167-3.954-1.87 1.38 1.13 2.8 1.945h4.809l2.812-1.946 1.381-1.13-3.954 1.871z",fill:"#C0AD9E",stroke:"#C0AD9E",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.335 28.99l-.602-.415h-3.478l-.603.415-.314 2.774.29-.276h4.732l.314.276-.339-2.774z",fill:"#161616",stroke:"#161616",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M34.94 14.338l1.068-5.123-1.595-4.758-12.078 8.964 4.646 3.93 6.566 1.92 1.456-1.694-.627-.452 1.004-.917-.778-.602 1.004-.766-.665-.502zM3.993 9.215l1.067 5.123-.678.502 1.004.766-.766.602 1.005.917-.628.452 1.444 1.695 6.566-1.921 4.645-3.93L5.575 4.457 3.993 9.215z",fill:"#763D16",stroke:"#763D16",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M33.547 19.271l-6.567-1.92 1.997 3L26 26.127l3.917-.05h5.838l-2.21-6.806zm-20.54-1.921l-6.566 1.921-2.185 6.805h5.826l3.904.05-2.963-5.775 1.984-3zm8.914 3.316l.414-7.245 1.909-5.16h-8.475l1.883 5.16.44 7.245.15 2.285.013 5.624h3.478l.025-5.624.163-2.285z",fill:"#F6851B",stroke:"#F6851B",strokeLinecap:"round",strokeLinejoin:"round"})]})})),OneInch=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function OneInch(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10.391 22.35l.969-7.293-8.413-5.841 7.686 2.603 1.816-2.785 6.628-4.115 14.616 8.05.757 12.286-6.506 9.049-5.145.786 2.663-4.872v-4.69l-1.937-3.662-1.967-1.302-3.026 3.117v3.3l-2.36 2.208-2.997.363-1.331.757-2.179-.696-.908-3.268 1.634-2.3V22.35z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M23.828 9.156c-1.604-.333-3.36-.242-3.36-.242s-.574 2.663-4.145 3.359c.03 0 4.72 1.604 7.505-3.117zm1.452 24.149c1.936-1.513 3.389-3.601 4.054-5.962.03-.09.303-.242.485-.363.302-.181.605-.333.665-.575.121-.696.182-1.422.182-2.148 0-.273-.272-.545-.545-.817-.212-.182-.423-.394-.423-.545-.303-2.754-1.574-5.326-3.602-7.203l-.212.212c1.968 1.846 3.239 4.358 3.511 7.021.03.242.272.484.514.726.212.182.454.454.454.575 0 .697-.06 1.393-.181 2.088-.03.122-.303.243-.515.364-.302.151-.575.302-.635.544a11.185 11.185 0 01-4.6 6.265c.393-.848 1.634-3.601 2.3-4.994l-.121-4.478-3.844-3.723-2.178.303-2.391 3.873s1.12 1.423-.454 3.087c-1.543 1.634-2.754 1.998-2.754 1.998l-1.12-.606c.333-.423.999-1.059 1.514-1.482.877-.727 1.755-.787 1.755-1.574.03-1.634-1.725-1.18-1.725-1.18l-.636.605-.272 2.24-1.332 1.664-.151-.03-2.179-.485s1.332-.696 1.543-1.482c.212-.757-.423-3.269-.454-3.42.03.03.636.544.908 1.392.485-1.332 1.12-2.603 1.302-2.724.181-.12 2.633-1.422 2.633-1.422l-.818 2.149.606-.333 1.452-3.571s1.423-.696 2.482-.696c1.906-.03 4.72-2.36 3.45-6.537.363.151 6.657 3.299 7.747 9.472.817 4.751-1.876 9.2-6.416 11.772z",fill:"#94A6C3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M18.078 9.82c.696-.816.423-2.027.423-2.027l-2.027 2.996c-.03 0 .726.03 1.604-.968zm-6.81 16.374l.242-1.21s-.999 1.755-1.09 1.997c-.09.272.06.756.454.726.394-.03.878-.605.878-1.029 0-.545-.484-.484-.484-.484z",fill:"#1B314F"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M29.245 6.945s1.514.06 3.087.242c-3.54-2.784-6.9-3.6-9.623-3.6-3.753 0-6.295 1.543-6.446 1.633l1.18-1.876s-4.72-.454-6.385 4.54c-.424-1.06-.817-2.603-.817-2.603S7.789 7.43 8.939 11C6.125 9.97 2.1 8.549 1.95 8.518c-.212-.03-.273.06-.273.06s-.06.091.121.243c.333.272 6.688 4.963 8.08 5.87-.302 1.09-.302 1.605 0 2.119.424.696.454 1.06.394 1.573-.06.515-.605 4.963-.726 5.508-.121.545-1.392 2.482-1.332 3.057.06.575.847 3.026 1.543 3.298.515.182 1.786.576 2.633.576.303 0 .575-.061.696-.182.515-.454.666-.545 1.03-.545h.09c.151 0 .333.03.545.03.484 0 1.12-.09 1.573-.514.666-.666 1.816-1.574 2.18-1.997a2.816 2.816 0 00.574-2.149c-.09-.726.303-1.362.757-1.997.575-.757 1.634-2.119 1.634-2.119 2.088 1.574 3.39 3.965 3.39 6.628 0 4.72-4.116 8.534-9.2 8.534a9.733 9.733 0 01-2.3-.273c2.33.818 4.297 1.09 5.9 1.09 3.42 0 5.236-1.24 5.236-1.24s-.635.816-1.664 1.754h.03c5.66-.787 8.413-5.447 8.413-5.447s-.212 1.513-.484 2.542c7.535-5.659 6.264-12.74 6.234-12.982.06.09.817.998 1.21 1.482 1.211-12.468-8.987-16.493-8.987-16.493zm-11.59 19.913c-.121.151-.636.605-.999.938-.363.333-.756.666-1.059.969-.12.12-.363.181-.726.181h-.908c.454-.605 1.785-1.997 2.24-2.3.544-.363.816-.726.483-1.362-.332-.635-1.21-.484-1.21-.484s.514-.212.968-.212c-.574-.151-1.3 0-1.634.333-.363.333-.302 1.513-.454 2.27-.151.787-.665 1.18-1.452 1.906-.424.394-.727.515-.969.515-.514-.09-1.12-.242-1.543-.393-.303-.394-.757-1.695-.878-2.24.091-.303.454-.938.636-1.301.363-.696.575-1.09.635-1.453.121-.514.515-3.692.666-5.023.394.514.938 1.361.817 1.906.878-1.24.242-2.451-.06-2.935-.273-.484-.636-1.453-.333-2.482.302-1.029 1.392-3.873 1.392-3.873s.363.635.878.514c.514-.12 4.66-6.355 4.66-6.355s1.12 2.451-.06 4.237c-1.211 1.785-2.391 2.118-2.391 2.118s1.664.303 3.207-.817c.636 1.483 1.241 3.026 1.271 3.238-.09.212-1.3 3.117-1.422 3.299-.06.06-.484.181-.787.242-.514.151-.817.242-.938.333-.212.181-1.18 2.844-1.634 4.146-.545.151-1.09.454-1.483 1.059.212-.152.878-.242 1.362-.303.424-.03 1.725.666 2.058 1.967v.06c.06.485-.09.939-.333 1.302zm-2.845.363c.273-.393.242-1.059.273-1.27.03-.213.09-.606.333-.667.242-.06.817.03.817.454 0 .394-.424.485-.727.757-.212.212-.635.666-.696.726zm12.075-5.78c.303-1.543.333-2.875.242-3.964 1.18 1.573 1.907 3.48 2.119 5.447.03.242.272.484.514.726.212.182.454.424.454.575 0 .696-.06 1.392-.182 2.088-.03.091-.302.242-.514.363-.303.152-.575.303-.636.545a11.268 11.268 0 01-3.994 5.84c2.814-2.935 4.176-7.776 1.997-11.62zm-1.907 11.893c1.968-1.513 3.48-3.631 4.146-6.022.03-.09.303-.242.485-.363.302-.152.605-.333.665-.575a12.61 12.61 0 00.182-2.149c0-.272-.272-.545-.545-.817-.151-.181-.393-.393-.393-.545a11.823 11.823 0 00-2.482-6.022c-.605-3.631-3.026-4.751-3.087-4.781.061.09 1.635 2.36.545 5.023-1.12 2.694-3.994 2.27-4.236 2.3-.243 0-1.18 1.21-2.36 3.45-.152-.06-.788-.212-1.514-.09.545-1.514 1.362-3.662 1.513-3.844.06-.06.515-.181.817-.272.575-.152.848-.242.938-.363.06-.091.363-.787.666-1.514.272 0 .968-.06 1.029-.09.06-.06.636-1.544.636-1.725 0-.152-1.18-3.087-1.635-4.207.212-.242.424-.545.636-.877 6.204.665 11.046 5.931 11.046 12.316 0 4.903-2.875 9.17-7.052 11.167z",fill:"#1B314F"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.928 16.992c.575-.666.273-1.906-.786-2.118.272-.636.665-1.907.665-1.907s-3.086 4.842-3.359 4.933c-.272.09-.545-.968-.545-.968-.575 2.209.969 2.512 1.15 1.815.848-.211 2.3-1.12 2.875-1.755z",fill:"#1B314F"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14.296 18.174l1.574-2.694s.908.454.454 1.18c-.576.848-2.028 1.514-2.028 1.514z",fill:"#FFD923"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M33.755 30.642a17.06 17.06 0 01-1.573 1.846c3.904-7.505.181-14.375.03-14.647.272.272.545.575.787.848 2.996 3.328 3.359 8.322.756 11.953zm3.632-9.655c-1.362-3.662-3.299-6.779-7.566-9.593-4.115-2.724-8.534-2.512-8.776-2.482h-.06c.151-.06.302-.09.454-.12.938-.303 2.148-.545 3.359-.697 3.208-.454 6.446.636 8.655 2.966l.06.06c2.512 2.664 3.813 5.992 3.874 9.866zM28.85 6.006c-4.509-.847-7.414-.423-9.502.364-.06-.243-.272-.727-.454-1.12-.636.756-1.301 1.664-1.725 2.24-1.15.786-1.634 1.543-1.634 1.543.666-2.27 2.602-3.965 4.963-4.388a12.202 12.202 0 012.179-.182c2.088.03 4.176.545 6.173 1.543zm-16.672 5.812c-3.541-.121-2.361-4.237-2.3-4.479 0 .03.242 3.238 2.3 4.48zm3.479-7.414c-2.723 1.635-2.179 5.538-2.179 5.538-2.602-3.964 1.967-5.447 2.18-5.538z",fill:"#D82122"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.181 12.908c.182.151.363.423.151.817-.12.212-.302.181-.575.06-.363-.181-2.542-1.452-4.509-2.754 2.24.787 4.51 1.635 4.872 1.816l.061.06z",fill:"#fff"})]})})),OperaWallet=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function OperaWallet(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#F2F5FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19.326 32.001c-1.57-1.853-2.587-4.593-2.657-7.668v-.669c.07-3.074 1.086-5.814 2.657-7.668 2.036-2.645 5.065-4.322 8.446-4.322 2.08 0 4.026.635 5.69 1.74a14.143 14.143 0 00-9.41-3.614L24 9.799c-7.843 0-14.2 6.358-14.2 14.2 0 7.615 5.995 13.83 13.523 14.183a14.149 14.149 0 0010.14-3.597c-1.664 1.104-3.61 1.74-5.69 1.74-3.382 0-6.41-1.678-8.447-4.323z",fill:"url(#prefix__prefix__paint0_linear_12052_1639)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19.325 15.997c1.303-1.538 2.987-2.466 4.826-2.466 4.133 0 7.484 4.687 7.484 10.468s-3.35 10.468-7.485 10.468c-1.838 0-3.522-.928-4.824-2.465 2.037 2.645 5.065 4.322 8.447 4.322 2.08 0 4.027-.634 5.69-1.738A14.165 14.165 0 0038.2 24c0-4.206-1.83-7.985-4.735-10.585-1.666-1.105-3.612-1.74-5.693-1.74-3.381 0-6.41 1.678-8.447 4.323z",fill:"url(#prefix__prefix__paint1_linear_12052_1639)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_12052_1639",x1:21.632,y1:10.262,x2:21.632,y2:37.785,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.3,stopColor:"#FF1B2D"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.438,stopColor:"#FA1A2C"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.594,stopColor:"#ED1528"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.758,stopColor:"#D60E21"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.927,stopColor:"#B70519"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#A70014"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_12052_1639",x1:28.762,y1:11.884,x2:28.762,y2:36.227,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#9C0000"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.7,stopColor:"#FF4B4B"})]})]})]})})),Plus=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Plus(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z"})})})),Question=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Question(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.188 9.109a1.455 1.455 0 00-1.618.95.727.727 0 01-1.372-.482 2.91 2.91 0 015.653.97c0 1.112-.826 1.847-1.415 2.24a5.64 5.64 0 01-1.262.63.735.735 0 01-.922-.46.727.727 0 01.46-.92c.322-.113.633-.271.917-.46.502-.335.767-.69.767-1.032a1.454 1.454 0 00-1.208-1.436zM12 15.636a.727.727 0 100-1.454.727.727 0 000 1.454z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-6.545a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09z"})]})})),Referral=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Referral(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.92 15.48A4 4 0 0118 14a4 4 0 11-4 4c.004-.239.027-.476.07-.71l-5.28-2.43a4 4 0 110-5.72l5.28-2.43a4 4 0 11.85 1.81l-5.1 2.35a3.64 3.64 0 010 2.26l5.1 2.35zM20 6a2 2 0 10-4 0 2 2 0 004 0zM6 14a2 2 0 110-4 2 2 0 010 4zm10 4a2 2 0 104 0 2 2 0 00-4 0z"})})})),Solana=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Solana(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.129 9.033a.442.442 0 01-.314.132H5.695c-.393 0-.592-.48-.318-.764l1.824-1.89a.441.441 0 01.318-.136H18.68c.396 0 .594.485.314.768l-1.865 1.89zm0 8.44a.447.447 0 01-.314.129H5.695a.438.438 0 01-.318-.745l1.824-1.843a.447.447 0 01.318-.132H18.68c.396 0 .594.472.314.748l-1.865 1.843zm0-6.716a.447.447 0 00-.314-.128H5.695a.438.438 0 00-.318.745l1.824 1.842a.446.446 0 00.318.132H18.68a.438.438 0 00.314-.748l-1.865-1.843z",fill:"url(#prefix__prefix__solana-icon-gradient)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__solana-icon-gradient",x1:6.263,y1:17.906,x2:18.092,y2:6.077,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#CF41E8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#10F2B0"})]})})]})})),Stake=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Stake(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.988 9.05a1 1 0 01.89.55 1 1 0 01-.08 1.04l-8 11a1 1 0 01-1.81-.59v-6h-5a1 1 0 01-.89-.64 1 1 0 01.08-1l8-11a1 1 0 011.12-.36 1 1 0 01.69 1v6h5zm-7 5v3.92l5-6.92h-4a1 1 0 01-1-1V6.13l-5 6.92h4a1 1 0 011 1z"})})})),Steth=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Steth(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.078 11.148l-.135.206a5.788 5.788 0 00.814 7.32 6.043 6.043 0 004.24 1.72l-4.92-9.246z",fill:"#00A3FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.997 13.958l-4.92-2.81 4.92 9.246v-6.436zm4.925-2.81l.134.206a5.788 5.788 0 01-.813 7.32 6.043 6.043 0 01-4.24 1.72l4.92-9.246z",fill:"#00A3FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,d:"M12.002 13.958l4.92-2.81-4.92 9.246v-6.436zm.001-6.278v4.847l4.238-2.422-4.238-2.425z",fill:"#00A3FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 7.68l-4.24 2.425 4.24 2.422V7.68z",fill:"#00A3FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.003 3.604l-4.24 6.502 4.24-2.431V3.604z",fill:"#00A3FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 7.674l4.241 2.432-4.24-6.506v4.074z",fill:"#00A3FF"})]})})),Stsol=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Stsol(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:24,height:24,rx:12}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.129 9.032a.442.442 0 01-.314.132H5.695c-.393 0-.592-.48-.318-.764l1.824-1.89a.441.441 0 01.318-.135H18.68c.396 0 .594.484.314.768l-1.865 1.89zm0 8.44a.447.447 0 01-.314.129H5.695a.438.438 0 01-.318-.745l1.824-1.843a.449.449 0 01.318-.131H18.68c.396 0 .594.472.314.748l-1.865 1.843zm0-6.715a.447.447 0 00-.314-.129H5.695a.438.438 0 00-.318.745l1.824 1.843a.446.446 0 00.318.132H18.68a.438.438 0 00.314-.749l-1.865-1.842z",fill:"url(#prefix__prefix__paint0_linear)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear",x1:6.263,y1:17.905,x2:18.092,y2:6.077,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#CF41E8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#10F2B0"})]})})]})})),Success=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Success(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:60,height:60,viewBox:"0 0 60 60",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30 58c15.464 0 28-12.536 28-28S45.464 2 30 2 2 14.536 2 30s12.536 28 28 28zm0 2c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.707 24.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L27 34.586l10.293-10.293a1 1 0 011.414 0z"})]})})),TallyCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function TallyCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 300 300",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:150,cy:150,r:150,fill:"#D08E39"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M241.377 139.857a11.625 11.625 0 014.096 6.987 8.049 8.049 0 01-.03 2.469 14.972 14.972 0 01-.211 1.716 24.985 24.985 0 01-.723 3.313 22.76 22.76 0 01-3.011 6.264c-.25.362-.567.776-.786 1.061l-.178.234v.15l.012.091c.034.243.097.695.229 1.355.363 2.188.474 4.411.331 6.625a38.065 38.065 0 01-3.011 12.498 27.827 27.827 0 01-7.71 10.69l-.391.362-.542.18a89.167 89.167 0 01-12.919 3.765 53.88 53.88 0 01-13.733 1.325h-.783a137.188 137.188 0 00-29.482-6.023 58.416 58.416 0 01-8.101-1.175 66.15 66.15 0 01-7.709-2.469 94.077 94.077 0 00-12.317-3.554 13.976 13.976 0 00-2.56 9.456 38.841 38.841 0 004.487 13.673 73.842 73.842 0 017.198 14.665 36.837 36.837 0 011.325 17.075l-.813 5.21-4.397-3.011c-.529-.453-1.521-1.054-2.466-1.626l-.546-.332-3.011-1.656a66.766 66.766 0 012.108 12.046 68.703 68.703 0 01-.211 10.57A36.665 36.665 0 01143.233 272c-12.484-18.97-22.673-24.404-31.598-29.164-5.994-3.197-11.419-6.09-16.585-12.575-7.65-10.871-9.576-23.369 1.084-47.009 2.952-7.305 4.773-15.317 6.262-21.869 1.262-5.548 2.285-10.05 3.555-12.191v.181a44.007 44.007 0 000 15.057 16.833 16.833 0 002.56 6.565 12.345 12.345 0 005.331 4.006 45.936 45.936 0 0014.214 3.011c2.469.392 4.969.392 7.528.392a36.907 36.907 0 013.976.15c1.355.121 2.68.301 4.005.482a97.653 97.653 0 0115.479 3.825 43.497 43.497 0 0014.244 2.86 134.854 134.854 0 0130.476 6.023 53.58 53.58 0 0011.654-.903c1.386-.241 2.771-.572 4.156-.903 6.806-1.988 14.455-13.552 5.601-12.588a48.534 48.534 0 00-7.317.903c-1.382.327-2.75.845-4.2 1.394-1.489.563-3.065 1.16-4.835 1.618a20.458 20.458 0 01-10.118-.271 29.813 29.813 0 00-9.035-2.109 11.431 11.431 0 014.728-1.445c1.218-.122 2.298-.08 3.334-.039.502.02.993.039 1.485.039 2.809.386 5.665.264 8.432-.361 1.421-.402 2.86-1.174 4.406-2.004 1.239-.664 2.546-1.365 3.966-1.941a27.32 27.32 0 019.907-2.108h-.06a21.41 21.41 0 013.704 0 12.047 12.047 0 003.012-9.426 6.51 6.51 0 00-3.674-2.681 96.928 96.928 0 00-2.256-.453c-4.47-.867-11.786-2.285-14.729-5.027-2.018-1.958-3.102-7.83 4.005-9.456a40.882 40.882 0 0111.414-.362l.145.014c1.705.162 5.937.563 6.932-.285a28.034 28.034 0 01-1.339-.964c-.214-.16-.428-.321-.649-.481l-9.335-7.107c-.644-.453-1.269-.911-1.882-1.36-.937-.686-1.846-1.353-2.756-1.953a8.878 8.878 0 00-.964-.602 6.721 6.721 0 00-1.024-.452 28.817 28.817 0 01-3.011-1.355 38.102 38.102 0 01-9.818-7.258 122.687 122.687 0 01-21.531-29.904 20.72 20.72 0 00-10.812-9.787 17.796 17.796 0 0113.281 4.818c.603.5 1.372 1.876 2.357 3.637 2.751 4.92 7.188 12.857 14.417 13.167 1.246-.1 2.473-.374 3.644-.813-3.589-3.397-6.019-7.489-8.293-11.319-3.45-5.81-6.544-11.02-12.788-12.29a41.735 41.735 0 01-4.577-1.958l-4.216-2.078-8.432-4.126a151.67 151.67 0 00-17.166-6.956 87.085 87.085 0 00-17.858-3.855c-1.438-.19-2.886-.3-4.336-.331a7.56 7.56 0 00-3.373.783c-.61.261-1.297.628-2.004 1.005-.759.405-1.54.821-2.272 1.133a74.472 74.472 0 00-4.186 1.927 83.56 83.56 0 00-15.449 9.697 40.415 40.415 0 00-9.336 9.185 34.239 34.239 0 0113.341 1.747 50.683 50.683 0 00-16.02 2.289 55.079 55.079 0 00-7.439 2.74 50.797 50.797 0 00-6.957 3.644 30.356 30.356 0 00-6.022 4.547 7.712 7.712 0 00-1.687 2.59c-.511 1.143-.962 2.376-1.414 3.61l-.001.004a116.078 116.078 0 00-4.186 15.479 125.278 125.278 0 00-2.41 31.891 61.923 61.923 0 006.596 24.755 466.502 466.502 0 0010.81-14.847 231.943 231.943 0 0012.499-20.087c1.984-3.559 3.746-7.283 5.527-11.047 1.624-3.433 3.264-6.899 5.103-10.304a65.456 65.456 0 016.535-10.42 24.806 24.806 0 014.397-4.487 10.115 10.115 0 015.782-2.318c-6.746 6.053-11.986 22.315-17.226 40.534-4.216 14.786-18.55 48.485-27.585 49.328-3.493.18-4.788-1.476-7.167-4.909l-1.988-2.71a53.969 53.969 0 01-7.83-15.901 79.662 79.662 0 01-3.011-17.105c-.277-5.694-.146-11.4.391-17.075a141.56 141.56 0 013.012-16.714 121.47 121.47 0 014.909-16.262c.542-1.355 1.084-2.68 1.746-4.035a19.01 19.01 0 011.235-2.168 19.424 19.424 0 011.717-2.018 31.528 31.528 0 017.348-5.21 50.018 50.018 0 0112.527-4.547 29.876 29.876 0 015.541-8.342 60.713 60.713 0 017.469-6.595 90.572 90.572 0 0116.502-10.36c.929-.464 2.06-.968 3.059-1.414.491-.22.951-.424 1.338-.603.52-.24 1.075-.527 1.676-.837a52.885 52.885 0 012.51-1.24A13.946 13.946 0 01127.122 54c1.574 0 2.733.12 3.923.245.381.04.765.08 1.167.116a93.357 93.357 0 0119.032 4.126 154.816 154.816 0 0117.858 7.258l8.583 4.155 4.246 2.109c1.037.56 2.36 1.068 3.801 1.621l.325.125a46.255 46.255 0 014.577 2.018 20.21 20.21 0 012.439 1.476 23.61 23.61 0 012.108 1.927 43.917 43.917 0 016.023 8.221l.647 1.127c2.938 5.124 5.687 9.92 9.954 12.726l3.011 1.987a2.943 2.943 0 01-.181.482l-.632 1.145-3.012 1.535a2.44 2.44 0 00-1.295 1.386 2.683 2.683 0 00-.18.903v1.928a10.567 10.567 0 01-.392 3.011c-.125.388-.276.734-.41 1.041-.188.432-.343.785-.343 1.067-.095.314-.095.65 0 .964a32.093 32.093 0 008.192 6.023l2.409 1.114c.567.204 1.121.445 1.656.723l1.536.933c1.347.855 2.451 1.695 3.549 2.531.449.341.897.682 1.36 1.023l9.365 7.137 2.229 1.656c.944.616 1.849 1.29 2.71 2.018zm-73.993-27.796c.301 3.734-4.156 6.655-9.606 7.258-6.867.692-10.541-3.283-9.577-7.89 1.807-7.71-2.168-5.09-4.818-2.078a.364.364 0 01-.449.152.36.36 0 01-.214-.423c1.114-7.951 5.782-8.282 7.86-8.282a94.985 94.985 0 0118.611 3.162.908.908 0 01.688.683.9.9 0 01-.327.913 6.782 6.782 0 00-2.168 6.505z",fill:"#002522"})]})})),Telegram=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Telegram(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.066 18.333c-.518 0-.43-.195-.609-.69l-1.524-5.016 11.733-6.96",fill:"#C8DAEA"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.067 18.334c.4 0 .577-.183.8-.4L12 15.858l-2.66-1.605",fill:"#A9C9DD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.339 14.255l6.448 4.763c.735.406 1.266.196 1.45-.683L19.86 5.967c.27-1.077-.41-1.566-1.114-1.246L3.335 10.663c-1.052.422-1.046 1.01-.192 1.27l3.955 1.235 9.157-5.776c.432-.263.829-.122.503.167",fill:"url(#prefix__prefix__telegram-icon-gradient)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__telegram-icon-gradient",x1:9.997,y1:11.983,x2:11.707,y2:17.513,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#EFF7FC"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#fff"})]})})]})})),Terra=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Terra(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#prefix__prefix__clip0)",fillRule:"evenodd",clipRule:"evenodd",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M8.067 7.792c-1.636-.38-3.215-1.717-3.449-4.285a15.67 15.67 0 00-.101-.87A11.897 11.897 0 0112 0c3.434 0 6.531 1.453 8.719 3.782-1.14.45-11.11 4.37-12.652 4.01zm9.879 13.6c3.427-2.025 4.01-3.757 4.67-6.541.659-2.784-7.708-1.24-9.96-.28-2.253.96-3.505 3.75-1.211 6.391 2.294 2.642 3.075 2.454 6.501.43z",fill:"#2642B4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.497 17.943c-2.27.476-4.992 2-6.202 3.044-1.171 1.01-.752 2.016.805 2.039a12.084 12.084 0 005.397-5.083zM20.061 3.132c-2.5-1.315-3.79-.942-9.322 1.122-6.943 2.59-4.035 8.105 1.26 9.943.512.178 1.01.353 1.494.524 4.244 1.494 7.469 2.629 9.695 1.74.524-1.357.812-2.833.812-4.377 0-3.55-1.52-6.741-3.939-8.952zM1.269 6.669c1.965-.063 5.788-1.184 7.275-3.33 1.43-2.067.122-2.367-1.803-2.12a12.092 12.092 0 00-5.472 5.45zm-.562 1.32A12.139 12.139 0 000 12.085a12.09 12.09 0 007.296 11.12c.096-1.356.162-2.967.096-4.419C7.274 16.22 3.622 11.151.707 7.99z",fill:"#4393FF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"prefix__prefix__clip0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]})})),TrustCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function TrustCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#3375BB"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.18 12.35a1.446 1.446 0 011.871 0c2.918 2.475 6.243 2.457 7.566 2.45h.18a1.446 1.446 0 011.447 1.467c-.063 4.243-.23 7.286-.562 9.525-.332 2.236-.844 3.811-1.697 5.014-.861 1.216-1.967 1.9-3.092 2.532l-.6.332c-.98.54-2.05 1.13-3.326 2.06-.507.37-1.195.37-1.703 0-1.274-.93-2.343-1.519-3.322-2.058a84.964 84.964 0 01-.602-.334c-1.124-.632-2.229-1.317-3.088-2.533-.85-1.203-1.362-2.778-1.692-5.014-.33-2.238-.497-5.281-.56-9.524a1.446 1.446 0 011.446-1.468l.179.001c1.312.007 4.637.025 7.555-2.45zm-6.261 5.32c.077 3.446.237 5.9.502 7.7.302 2.043.72 3.1 1.192 3.766.462.654 1.07 1.077 2.144 1.68.173.098.356.199.55.305.784.432 1.731.954 2.809 1.676 1.08-.723 2.028-1.245 2.813-1.677.193-.106.376-.207.549-.304 1.074-.603 1.684-1.027 2.147-1.681.473-.667.893-1.724 1.196-3.767.266-1.798.427-4.252.504-7.697-1.738-.092-4.533-.517-7.21-2.393-2.671 1.873-5.462 2.3-7.196 2.392z",fill:"#fff"})]})})),Trust=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Trust(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M.89 8.827C0 11.173 0 14.115 0 20s0 8.827.89 11.173a13.682 13.682 0 007.937 7.937C11.173 40 14.115 40 20 40s8.827 0 11.173-.89a13.682 13.682 0 007.937-7.937C40 28.827 40 25.885 40 20s0-8.827-.89-11.173A13.682 13.682 0 0031.173.89C28.827 0 25.885 0 20 0S11.173 0 8.827.89A13.682 13.682 0 00.89 8.827zm18.242 23.745c.29.142.579.285.868.285.29 0 .579 0 .723-.143 1.302-.856 2.315-1.426 3.328-1.997 5.497-2.996 7.088-4.565 7.378-19.259 0-.428-.145-.713-.434-.998-.29-.286-.58-.428-1.013-.428h-.29c-1.446 0-5.352 0-8.824-2.568-.434-.428-1.157-.428-1.736 0-3.472 2.568-7.378 2.568-8.825 2.568h-.289c-.29 0-.723.142-1.013.285-.289.285-.434.57-.434.999.145 14.693 1.736 16.263 7.234 19.259.22.123.446.247.678.374.837.457 1.743.953 2.649 1.623zm-1.921-4.304c-4.163-2.406-5.458-3.154-5.746-15.383 2.025-.143 5.642-.57 8.535-2.568 3.183 2.14 6.22 2.425 8.246 2.568-.29 12.268-1.447 12.982-5.787 15.407a52.1 52.1 0 00-.868.53c-.521.323-1.1.681-1.736 1.04a46.074 46.074 0 00-2.049-1.245l-.555-.325-.04-.024z",fill:"#4276B6"})})})),Twitter=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Twitter(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.05 9.192l.032.52-.524-.064c-1.91-.244-3.578-1.07-4.995-2.458l-.692-.688-.179.508c-.377 1.134-.136 2.33.651 3.136.42.444.325.508-.399.243-.252-.085-.472-.148-.493-.116-.073.074.179 1.038.378 1.419.273.53.829 1.049 1.437 1.356l.514.243-.608.011c-.588 0-.609.01-.546.233.21.689 1.039 1.42 1.962 1.737l.65.223-.566.339a5.906 5.906 0 01-2.812.784c-.472.01-.86.053-.86.084 0 .106 1.28.7 2.025.932 2.235.689 4.89.392 6.883-.783 1.416-.837 2.833-2.5 3.494-4.11.357-.858.713-2.426.713-3.178 0-.487.032-.55.62-1.133.346-.34.67-.71.734-.816.105-.201.094-.201-.44-.021-.893.317-1.019.275-.578-.202.325-.338.713-.953.713-1.133 0-.032-.157.021-.335.117-.19.106-.609.264-.924.36l-.566.18-.514-.35c-.284-.19-.682-.402-.892-.466-.535-.148-1.354-.127-1.836.043-1.312.476-2.14 1.705-2.046 3.05z"})})})),Uniswap=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Uniswap(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#prefix__prefix__prefix__clip0)",fill:"#FF007A",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M18.77 19.01c.84 1.485-1.037 1.945-1.918 2.03-1.336.13-1.612-.642-1.351-1.613a1.746 1.746 0 011.501-1.317 1.857 1.857 0 011.769.9zm5.24-2.742c-.975 7.498 12.18 5.938 11.93 11.905 1.297-1.694 1.855-6.299-1.965-8.668-3.404-2.113-7.839-.957-9.964-3.237zm7.58-2.831c-.086-.08-.174-.158-.26-.236.087.08.174.163.26.236zm3.058 5.468l-.008-.012a4.992 4.992 0 00-.405-.635 3.263 3.263 0 00-1.803-1.225 7.676 7.676 0 00-1.468-.232c-.503-.036-1.015-.057-1.533-.085-1.038-.057-2.1-.164-3.139-.461a8.726 8.726 0 01-1.537-.59 6.57 6.57 0 01-1.346-.98c-.8-.748-1.427-1.595-2.057-2.416a28.52 28.52 0 00-1.907-2.373 8.7 8.7 0 00-2.336-1.832 8.045 8.045 0 00-2.908-.835 6.848 6.848 0 013.107.381 8.213 8.213 0 012.695 1.72c.508.478.984.989 1.427 1.528 3.296-.651 5.97-.073 8.023 1.051l.047.023a10.118 10.118 0 012.087 1.511c.437.404.844.84 1.218 1.304l.029.037c1.213 1.544 1.812 3.149 1.813 4.121zm-.002 0l-.007-.016.007.016zM14.368 8.192c.84.123 1.698.46 2.251 1.1.553.642.757 1.476.916 2.27.13.615.233 1.242.474 1.825.117.284.288.533.43.802.119.223.334.423.417.662a.213.213 0 01-.024.21c-.294.327-1.085-.036-1.384-.182a4.503 4.503 0 01-1.36-1.042c-1.198-1.336-1.817-3.26-1.78-5.01.009-.212.028-.424.06-.635z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M28.43 23.262c-1.816 5.093 6.424 8.51 3.337 13.687 3.167-1.314 4.671-5.283 3.357-8.432-1.15-2.765-4.55-3.773-6.693-5.255zM17.533 29.92a7.176 7.176 0 011.61-.919 9.364 9.364 0 011.8-.521c1.22-.233 2.428-.29 3.443-.701a4.41 4.41 0 001.361-.848c.386-.36.681-.806.862-1.303.185-.524.26-1.081.22-1.636a6.017 6.017 0 00-.398-1.738 3.99 3.99 0 011.016 3.618 3.773 3.773 0 01-.99 1.792 4.592 4.592 0 01-1.708 1.069 7.168 7.168 0 01-1.896.39c-.622.053-1.225.067-1.816.103a11.66 11.66 0 00-3.504.694zm11.623 8.954c-.183.146-.366.3-.567.436a4.842 4.842 0 01-.635.355 3.288 3.288 0 01-1.471.335c-1.38-.026-2.357-1.059-2.928-2.225-.389-.795-.657-1.654-1.12-2.412-.66-1.083-1.79-1.955-3.114-1.794-.54.068-1.045.312-1.345.783-.79 1.229.344 2.95 1.788 2.707.123-.019.243-.052.358-.099.115-.049.222-.114.318-.194a1.45 1.45 0 00.44-.639 1.5 1.5 0 00.06-.812 1.116 1.116 0 00-.464-.695c.278.13.494.364.604.652.113.296.143.618.084.93a1.85 1.85 0 01-.413.878c-.113.129-.244.24-.389.332a2.269 2.269 0 01-1.473.323 2.694 2.694 0 01-1.31-.57c-.447-.355-.779-.819-1.182-1.218a5.617 5.617 0 00-1.612-1.182 5.985 5.985 0 00-1.297-.404 8.488 8.488 0 00-.68-.11c-.103-.01-.612-.123-.683-.057a14.232 14.232 0 012.284-1.72c.838-.5 1.739-.888 2.678-1.152a7.61 7.61 0 012.996-.23 5.818 5.818 0 011.505.39c.506.203.972.493 1.378.856a4.3 4.3 0 01.958 1.341c.208.473.363.967.462 1.474.296 1.516.187 3.867 2.163 4.213.103.02.207.035.312.045l.323.008c.222-.016.442-.048.66-.096a7.01 7.01 0 001.312-.45zm-11.485-1.656l-.052-.04.052.04zm-1.772-21.392a2.194 2.194 0 01-.37.768 3 3 0 01-1.23.945 4.744 4.744 0 01-1.371.362c-.103.013-.21.02-.312.029a1.398 1.398 0 00-1.301 1.043 3.557 3.557 0 00-.08.439c-.046.383-.054.782-.096 1.264a7.512 7.512 0 01-.7 2.362c-.469.993-.996 1.794-.874 2.938.08.743.46 1.241.963 1.755.909.933 2.942 1.35 2.488 3.65-.274 1.372-2.54 2.813-5.724 3.316.317-.049-.406-1.273-.452-1.35-.34-.538-.715-1.044-.986-1.626-.532-1.13-.778-2.438-.56-3.676.23-1.304 1.19-2.302 1.988-3.298.95-1.185 1.946-2.737 2.167-4.276.051-.372.088-.839.17-1.303.08-.514.24-1.012.476-1.476a3 3 0 01.625-.809.81.81 0 00.156-.985L5.8 6.726l7.29 9.038a.91.91 0 001.08.266.908.908 0 00.317-.236.62.62 0 00.02-.782c-.477-.61-.98-1.234-1.468-1.847l-1.835-2.28L7.522 6.33 2.5 0l5.494 5.922 3.92 4.353 1.956 2.182c.648.734 1.297 1.445 1.946 2.216l.106.13.024.203a2.4 2.4 0 01-.047.82z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.578 37.157a4.89 4.89 0 01-.931-.953c.285.342.596.66.931.953z"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"prefix__prefix__prefix__clip0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"#fff",d:"M0 0h40v40H0z"})})})]})})),Unstoppabledomains=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Unstoppabledomains(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"#4C47F7"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.897 10.964v10.242L9.104 33.309l29.793-22.344z",fill:"#2FE9FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.31 10.499v17.69a9.31 9.31 0 01-18.62 0V20.74l5.586-3.072v10.52a3.259 3.259 0 006.517 0V14.084L33.31 10.5z",fill:"#fff"})]})})),Validators=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Validators(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 18h-6.18A3 3 0 0013 16.18V13h7a1 1 0 100-2h-1V5a3 3 0 00-3-3H8a3 3 0 00-3 3v6H4a1 1 0 100 2h7v3.18A3 3 0 009.18 18H3a1 1 0 100 2h6.18a3 3 0 005.64 0H21a1 1 0 100-2zM7 11V5a1 1 0 011-1h8a1 1 0 011 1v6H7zm4 8a1 1 0 102 0 1 1 0 00-2 0z"})})})),WalletConnectCircle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function WalletConnectCircle(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:48,height:48,rx:24,fill:"#3B99FC"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.323 19.113c4.24-4.15 11.114-4.15 15.355 0l.51.5a.523.523 0 010 .752l-1.746 1.71a.276.276 0 01-.384 0l-.702-.688c-2.958-2.896-7.754-2.896-10.712 0l-.752.736a.276.276 0 01-.383 0l-1.747-1.71a.523.523 0 010-.75l.56-.55zm18.965 3.535l1.553 1.522a.524.524 0 010 .75l-7.005 6.86a.551.551 0 01-.767 0l-4.973-4.868a.138.138 0 00-.192 0l-4.971 4.868a.551.551 0 01-.768 0l-7.006-6.86a.523.523 0 010-.75l1.554-1.522a.551.551 0 01.767 0l4.973 4.868a.137.137 0 00.191 0l4.972-4.868a.552.552 0 01.767 0l4.973 4.868a.138.138 0 00.192 0l4.972-4.868a.551.551 0 01.767 0h.001z",fill:"#fff"})]})})),WalletConnect=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function WalletConnect(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M8.192 12.789c6.522-6.385 17.095-6.385 23.617 0l.784.769a.804.804 0 010 1.156l-2.685 2.629a.424.424 0 01-.59 0l-1.08-1.058c-4.55-4.454-11.926-4.454-16.475 0l-1.157 1.133a.424.424 0 01-.59 0l-2.686-2.63a.807.807 0 010-1.155l.861-.844h.001zm29.17 5.437l2.389 2.34a.804.804 0 010 1.155L28.976 32.27a.848.848 0 01-1.18 0l-7.648-7.487a.211.211 0 00-.295 0l-7.647 7.487a.848.848 0 01-1.181 0L.25 21.72a.804.804 0 010-1.156l2.39-2.34a.848.848 0 011.18 0l7.648 7.488c.081.08.213.08.295 0l7.647-7.487a.848.848 0 011.18 0l7.648 7.487c.082.08.214.08.295 0l7.647-7.487a.848.848 0 011.181 0h.001z",fill:"#3B99FC"})})})),Wallet=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Wallet(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.4 7.6h.9a2.7 2.7 0 012.7 2.7v7.2a2.7 2.7 0 01-2.7 2.7H5.7A2.7 2.7 0 013 17.5V6.7A2.7 2.7 0 015.7 4h9a2.7 2.7 0 012.7 2.7v.9zm-2.7-1.8h-9a.9.9 0 100 1.8h9.9v-.9a.9.9 0 00-.9-.9zm4.5 9h-.9a.9.9 0 110-1.8h.9v1.8zm-.9-3.6h.9v-.9a.9.9 0 00-.9-.9H5.7a2.7 2.7 0 01-.9-.153V17.5a.9.9 0 00.9.9h12.6a.9.9 0 00.9-.9v-.9h-.9a2.7 2.7 0 010-5.4z"})})})),Warning=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Warning(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:64,height:64,viewBox:"0 0 64 64",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 61.867c16.495 0 29.867-13.372 29.867-29.867S48.495 2.133 32 2.133 2.133 15.505 2.133 32 15.505 61.867 32 61.867zM32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z",fill:"#EC8600"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:32,cy:43,r:1,fill:"#EC8600"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M32 20v15",stroke:"#EC8600",strokeWidth:2,strokeLinecap:"round"})]})})),Weth=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Weth(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.999 16.103v4.143l5.251-7.135L12 16.103z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,d:"M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1.5c-.39 0-.774.021-1.152.062a.5.5 0 01-.108-.994 11.624 11.624 0 012.52 0 .5.5 0 11-.108.994A10.622 10.622 0 0012 1.5zm-3.967.225a.5.5 0 01-.256.659c-.708.311-1.376.699-1.992 1.152a.5.5 0 11-.592-.806c.674-.496 1.405-.92 2.181-1.262a.5.5 0 01.66.257zm7.934 0a.5.5 0 01.659-.257c.776.342 1.507.766 2.181 1.262a.5.5 0 11-.592.806 10.486 10.486 0 00-1.992-1.152.5.5 0 01-.256-.66zM3.429 5.086a.5.5 0 01.107.7c-.453.615-.84 1.283-1.152 1.991a.5.5 0 01-.916-.403c.342-.776.766-1.507 1.262-2.181a.5.5 0 01.7-.107zm17.142 0a.5.5 0 01.699.107c.496.674.92 1.405 1.262 2.181a.5.5 0 11-.916.403 10.494 10.494 0 00-1.152-1.992.5.5 0 01.107-.699zM1.12 10.297a.5.5 0 01.442.551 10.622 10.622 0 000 2.304.5.5 0 01-.994.108 11.624 11.624 0 010-2.52.5.5 0 01.552-.443zm21.76 0a.5.5 0 01.552.443 11.606 11.606 0 010 2.52.5.5 0 11-.994-.108 10.627 10.627 0 000-2.304.5.5 0 01.443-.55zm-21.155 5.67a.5.5 0 01.659.256c.311.708.699 1.376 1.152 1.992a.5.5 0 01-.806.592 11.486 11.486 0 01-1.262-2.181.5.5 0 01.257-.66zm20.55 0a.5.5 0 01.257.659 11.488 11.488 0 01-1.262 2.181.5.5 0 11-.806-.592 10.53 10.53 0 001.152-1.992.5.5 0 01.66-.256zM5.086 20.57a.5.5 0 01.7-.107c.615.453 1.283.84 1.991 1.152a.5.5 0 11-.403.916 11.49 11.49 0 01-2.181-1.262.5.5 0 01-.107-.7zm13.828 0a.5.5 0 01-.107.699c-.674.496-1.405.92-2.181 1.262a.5.5 0 11-.403-.916 10.491 10.491 0 001.992-1.152.5.5 0 01.699.107zm-8.617 2.31a.5.5 0 01.551-.443 10.627 10.627 0 002.304 0 .5.5 0 01.108.994 11.606 11.606 0 01-2.52 0 .5.5 0 01-.443-.551z"})]})})),Whitepaper=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Whitepaper(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 8.94a.865.865 0 00-.25-.64l-6-6c-.176-.166-.472-.3-.7-.3H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8.94zM10 10H9a1 1 0 010-2h1a1 1 0 110 2zm-2 3a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm8.59-5L14 5.41V7a1 1 0 001 1h1.59zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9zM8 17a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"})})})),Wrap=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Wrap(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 16.757a3.026 3.026 0 001.653 2.698l8 4a3 3 0 002.684 0l8-4A3 3 0 0023 16.77V7.23a3.026 3.026 0 00-1.665-2.686L13.337.546a3 3 0 00-2.684 0l-8 4A3.026 3.026 0 001 7.243v9.514zm20 .013a1 1 0 01-.555.895h-.002L13 21.388v-9.769l8-4v9.152zM19.77 5.998l-7.327-3.664a1 1 0 00-.896 0L9.226 3.495 17 7.382l2.77-1.384zM6.99 4.613L4.226 5.995 12 9.882 14.764 8.5 6.99 4.613zM3 7.618l8 4v9.774l-7.45-3.725h-.001a1 1 0 01-.549-.9V7.618z"})})})),Wsteth=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Wsteth(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2z",fill:"#00A3FF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.898 11.29l-.112.17a4.824 4.824 0 00.678 6.1 5.036 5.036 0 003.534 1.434l-4.1-7.705z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M11.997 13.63l-4.1-2.34 4.1 7.704v-5.363zm4.105-2.34l.112.17a4.823 4.823 0 01-.678 6.1 5.036 5.036 0 01-3.534 1.434l4.1-7.705z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.2,d:"M12.002 13.63l4.1-2.34-4.1 7.704v-5.363zm.001-5.23v4.038l3.531-2.018-3.531-2.02z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 8.4l-3.534 2.02 3.534 2.018V8.4z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.003 5.002L8.469 10.42l3.534-2.027V5.002z",fill:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:.6,d:"M12.003 8.394l3.534 2.027-3.534-5.422v3.395z",fill:"#fff"})]})})),XdefiWallet=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function XdefiWallet(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:24,cy:24,r:24,fill:"#2043D0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.022 27.432a13.605 13.605 0 007.644-1.784l1.404.835a14.963 14.963 0 01-9.134 2.42 8.841 8.841 0 01-6.52-2.858 7.307 7.307 0 01-1.477-5.871 7.509 7.509 0 01.687-2.222l.052-.105a13.508 13.508 0 014.685-5.103 13.746 13.746 0 0113.462-.76 13.562 13.562 0 015.24 4.549 13.315 13.315 0 01.982 13.286 13.494 13.494 0 01-4.518 5.252 13.711 13.711 0 01-6.557 2.35l-.128-1.457a12.22 12.22 0 005.84-2.092 12.025 12.025 0 004.023-4.679 11.866 11.866 0 00-.87-11.838 12.086 12.086 0 00-4.667-4.054 12.254 12.254 0 00-11.992.661 12.039 12.039 0 00-4.18 4.544l-.038.077a6.083 6.083 0 00-.556 1.79 5.842 5.842 0 001.156 4.729 7.483 7.483 0 005.462 2.33zm.806 3.411a16.008 16.008 0 009.668-3.537l1.34.797c-1.2 1.155-4.649 3.86-10.923 4.207-.489.038-.958.038-1.405.038-5.456 0-7.778-1.856-7.881-1.94l.534-.633.41-.5c.022.019 2.445 1.885 8.257 1.568zm12.187-2.027a10.785 10.785 0 01-2.892 2.604c-3.933 2.508-8.935 2.832-12.437 2.657l-.071 1.465c.59.029 1.154.042 1.703.042 9.876 0 13.867-4.446 14.982-6.033l-1.286-.746.001.011zm.271-5.743c-.19.13-.416.201-.647.204a1.18 1.18 0 01-1.186-1.172 1.172 1.172 0 111.833.968z",fill:"#fff"})]})})),Zengo=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Zengo(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",ref:svgRef,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",fill:"url(#prefix__prefix__paint0_linear_11640_1714)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{filter:"url(#prefix__prefix__filter0_i_11640_1714)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20.95 22.472c.901-.369 1.277.24.72.954-1.428 1.834-3.639 5.708-.85 7.436 1.248.772 3.112.206 4.678-.315l.25-.084c.414-.138.803-.267 1.147-.36 2.214-.598 4.55-1.168 6.841-.683 2.633.556 4.418 3.196 4.07 5.88-.345 2.661-2.72 4.58-5.371 4.58H16.256c-3.14.062-5.32-2.218-5.55-4.916-.04-.465-.027-.94.045-1.416.47-3.093 2.226-5.607 4.39-7.725 1.397-1.366 3.914-2.772 5.772-3.34l.038-.01zM31.745 8.028c3.14-.062 5.32 2.217 5.55 4.916.04.464.027.94-.045 1.415-.47 3.094-2.226 5.607-4.39 7.725-1.398 1.367-3.914 2.773-5.772 3.34-.012.003-.025.006-.038.011-.9.37-1.276-.24-.72-.953 1.428-1.835 3.64-5.709.85-7.436-1.652-1.023-4.385.302-6.074.759-2.214.598-4.55 1.167-6.841.683-2.633-.557-4.418-3.196-4.07-5.88.345-2.662 2.72-4.58 5.371-4.58h16.179z",fill:"url(#prefix__prefix__paint1_linear_11640_1714)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint0_linear_11640_1714",x1:24,y1:0,x2:24,y2:47.054,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#fff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:.999,stopColor:"#E6F7F7"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"prefix__prefix__paint1_linear_11640_1714",x1:11.982,y1:9.177,x2:37.421,y2:39.223,gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"#4FF4BA"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:1,stopColor:"#43CFC7",stopOpacity:.677})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id:"prefix__prefix__filter0_i_11640_1714",x:10.15,y:8.027,width:27.699,height:32.854,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset",{dy:1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur",{stdDeviation:1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.262745 0 0 0 0 0.811765 0 0 0 0 0.780392 0 0 0 0.677133 0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_11640_1714"})]})]})]})}))},"./packages/identicon/Identicon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_IdenticonStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/identicon/IdenticonStyles.tsx"),react_jazzicon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-jazzicon/dist/index.js"),react_jazzicon__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jazzicon__WEBPACK_IMPORTED_MODULE_3__);function Identicon(props,ref){const{diameter=24,address,paperStyles,svgStyles,...rest}=props,iconProps={diameter,paperStyles,svgStyles};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IdenticonStyles__WEBPACK_IMPORTED_MODULE_2__.RC,{...rest,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jazzicon__WEBPACK_IMPORTED_MODULE_3___default(),{seed:(0,react_jazzicon__WEBPACK_IMPORTED_MODULE_3__.jsNumberForAddress)(address),...iconProps})})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Identicon)},"./packages/identicon/IdenticonBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>identicon_IdenticonBadge});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Address=__webpack_require__("./packages/address/Address.tsx"),IdenticonStyles=__webpack_require__("./packages/identicon/IdenticonStyles.tsx"),Identicon=__webpack_require__("./packages/identicon/Identicon.tsx");function IdenticonBadge(props,ref){const{symbols=3,color="background",diameter,address,paperStyles,svgStyles,...rest}=props,identiconProps={address,diameter,paperStyles,svgStyles};return(0,jsx_runtime.jsxs)(IdenticonStyles._B,{$color:color,...rest,ref,children:[symbols>0?(0,jsx_runtime.jsx)(IdenticonStyles.B9,{children:(0,jsx_runtime.jsx)(Address.Z,{address,symbols})}):"",(0,jsx_runtime.jsx)(Identicon.Z,{...identiconProps})]})}const identicon_IdenticonBadge=(0,react.forwardRef)(IdenticonBadge)},"./packages/identicon/IdenticonStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B9:()=>AddressWrapperStyle,RC:()=>IdenticonStyle,_B:()=>IdenticonBadgeStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={background:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    background: var(--lido-color-accentDarken);
    color: var(--lido-color-accentContrast);
  `},IdenticonBadgeStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  border-radius: 1000px;
  padding: 4px;
  margin: 0 6px;
  display: inline-flex;
  align-items: center;

  ${({$color})=>colors[$color]}
`,IdenticonStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  border-radius: 1000px;
  overflow: hidden;
  line-height: 0;
  display: inline-block;
`,AddressWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  padding: 0 6px;
`},"./packages/identicon/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>IdenticonBadgeColor});var IdenticonBadgeColor;__webpack_require__("./node_modules/react/index.js");!function(IdenticonBadgeColor){IdenticonBadgeColor[IdenticonBadgeColor.background=0]="background",IdenticonBadgeColor[IdenticonBadgeColor.accent=1]="accent"}(IdenticonBadgeColor||(IdenticonBadgeColor={}))},"./packages/input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_InputStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputStyles.ts"),_LabelStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/input/LabelStyles.ts");function Input(props,ref){const{label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",leftDecorator,rightDecorator,className,style,variant="default",color="default",wrapperRef,children,...rest}=props,{id,disabled=!1}=props,wrapperProps={className,style},hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success,hasLeftDecorator=!!leftDecorator,hasRightDecorator=!!rightDecorator;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.GR,{$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,$fullwidth:fullwidth,$color:color,htmlFor:id,ref:wrapperRef,...wrapperProps,children:[hasLeftDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.fR,{children:leftDecorator}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.oT,{$variant:variant,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.x2,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,type:"text",ref,...rest}),hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyles__WEBPACK_IMPORTED_MODULE_3__.ou,{$color:color,children:label})]}),hasErrorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"success",$bordered:!0,children:success}),hasRightDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Ty,{children:rightDecorator})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Input)},"./packages/input/InputGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>input_InputGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),InputStyles=__webpack_require__("./packages/input/InputStyles.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputGroupStyle=styled_components_browser_esm.ZP.span`
  display: inline-flex;
  position: relative;
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};
`,InputGroupContentStyle=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 100%;

  & > * {
    border-radius: 0px;
    margin: 0 -1px 0 0;

    &:first-child {
      border-top-left-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
      border-bottom-left-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
    }

    &:last-child {
      margin-right: 0;
      border-top-right-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
      border-bottom-right-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
    }
  }
`;function InputGroup(props,ref){const{fullwidth=!1,error,success,children,...rest}=props,hasError=!!error,hasSuccess=!!success&&!error;return(0,jsx_runtime.jsxs)(InputGroupStyle,{$fullwidth:fullwidth,...rest,ref,children:[(0,jsx_runtime.jsx)(InputGroupContentStyle,{children}),hasError&&(0,jsx_runtime.jsx)(InputStyles.Qz,{$variant:"error",children:error}),hasSuccess&&(0,jsx_runtime.jsx)(InputStyles.Qz,{$variant:"success",children:success})]})}const input_InputGroup=(0,react.forwardRef)(InputGroup)},"./packages/input/InputStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{GR:()=>InputWrapperStyle,Qz:()=>InputMessageStyle,Ty:()=>InputRightDecoratorStyle,fR:()=>InputLeftDecoratorStyle,mE:()=>TextareaStyle,oT:()=>InputContentStyle,x2:()=>InputStyle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_LabelStyles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/input/LabelStyles.ts");const statesCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
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
  `},InputWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.label`
  position: relative;
  display: inline-flex;
  border: 1px solid;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0 15px;
  cursor: ${({$disabled})=>$disabled?"default":"text"};
  transition: border-color ${({theme})=>theme.duration.fast} ease;
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};

  ${({$color})=>wrapperColors[$color]};
  ${({$disabled})=>$disabled?"":statesCSS}

  ${({$active})=>$active?activeCSS:""}
  ${({$warning})=>$warning?warningCSS:""}
  ${({$error})=>$error?errorCSS:""}
`,contentVariants={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    padding: 17px 0;
  `,small:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    padding: 9px 0;
  `},InputContentStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  display: flex;
  flex-grow: 1;
  position: relative;

  ${({$variant})=>contentVariants[$variant]};
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
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-text) !important;
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
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-accentContrast) !important;
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
    color: var(--lido-color-success);
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

  ${({$variant})=>messageVariants[$variant]}
`,decoratorCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
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
`},"./packages/input/LabelStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NL:()=>labelErrorCSS,PN:()=>labelWarningCSS,fl:()=>labelFocusCSS,gS:()=>labelEmptyValueCSS,ie:()=>TextareaLabelStyle,ou:()=>InputLabelStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={default:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
  top: 27px;
`},"./packages/input/OptionsSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_SliderInput__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/input/SliderInput.tsx"));const __WEBPACK_DEFAULT_EXPORT__=({options,value,onChange})=>{let sliderIndex=options.findIndex((option=>option.value===value));-1===sliderIndex&&(sliderIndex=0);const max=options.length-1,firstOption=options[0],lastOption=options[max];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SliderInput__WEBPACK_IMPORTED_MODULE_2__.Z,{min:0,max,value:sliderIndex,onChange:e=>{const optionIndex=Number(e.target.value);onChange(e,options[optionIndex].value,optionIndex)},minLabel:firstOption.label,maxLabel:lastOption.label,getLabel:optionIndex=>options[optionIndex].label})}},"./packages/input/SliderInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>input_SliderInput});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const RangeInputSlider=styled_components_browser_esm.ZP.input.attrs({type:"range"})`
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
    box-shadow: 0 0.5px 4px rgba(0, 0, 0, 0.12), 0 6px 13px rgba(0, 0, 0, 0.12);
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
`;const input_SliderInput=function SliderInput({value,onChange,min=0,max=100,step=1,minLabel,maxLabel,getLabel=val=>String(val)}){const fillPercentage=(value-min)/(max-min)*100;return(0,jsx_runtime.jsxs)(SliderWrapper,{children:[(0,jsx_runtime.jsxs)(Slider,{children:[getLabel(value),(0,jsx_runtime.jsx)(Track,{fillPercentage})]}),(0,jsx_runtime.jsx)(RangeInputSlider,{value,step,onChange,min,max}),(0,jsx_runtime.jsxs)(LabelContainer,{children:[(0,jsx_runtime.jsx)(Label,{children:minLabel}),(0,jsx_runtime.jsx)(Label,{children:maxLabel})]})]})}},"./packages/input/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_InputStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputStyles.ts"),_LabelStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/input/LabelStyles.ts");function Textarea(props,ref){const{label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",className,style,variant="default",color="default",wrapperRef,children,...rest}=props,{id,disabled=!1}=props,wrapperProps={className,style},hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.GR,{$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,$fullwidth:fullwidth,$color:color,htmlFor:id,ref:wrapperRef,...wrapperProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.oT,{$variant:variant,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.mE,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,ref,...rest}),hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyles__WEBPACK_IMPORTED_MODULE_3__.ie,{$color:color,children:label})]}),hasErrorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"success",$bordered:!0,children:success})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Textarea)},"./packages/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Jf:()=>InputVariant,Sl:()=>InputColor,n$:()=>InputType});var InputMessageVariant,InputType,InputVariant,InputColor;__webpack_require__("./node_modules/react/index.js");!function(InputMessageVariant){InputMessageVariant[InputMessageVariant.error=0]="error",InputMessageVariant[InputMessageVariant.warning=1]="warning",InputMessageVariant[InputMessageVariant.success=2]="success"}(InputMessageVariant||(InputMessageVariant={})),function(InputType){InputType[InputType.text=0]="text",InputType[InputType.password=1]="password",InputType[InputType.number=2]="number",InputType[InputType.email=3]="email",InputType[InputType.search=4]="search",InputType[InputType.tel=5]="tel",InputType[InputType.url=6]="url"}(InputType||(InputType={})),function(InputVariant){InputVariant[InputVariant.small=0]="small",InputVariant[InputVariant.default=1]="default"}(InputVariant||(InputVariant={})),function(InputColor){InputColor[InputColor.default=0]="default",InputColor[InputColor.accent=1]="accent"}(InputColor||(InputColor={}))},"./packages/link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>link_Link});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const LinkStyle=styled_components_browser_esm.ZP.a`
  text-decoration: none;
  color: var(--lido-color-primary);

  :hover {
    color: var(--lido-color-primaryHover);
  }

  ${props=>props.fadeVisited&&styled_components_browser_esm.iv`
      :visited {
        color: var(--lido-color-primaryVisited);
      }
    `}
`;function Link(props,ref){return(0,jsx_runtime.jsx)(LinkStyle,{target:"_blank",rel:"nofollow noopener",ref,...props})}const link_Link=(0,react.forwardRef)(Link)},"./packages/loaders/InlineLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>loaders_InlineLoader});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const translation=styled_components_browser_esm.F4`
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

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--loader-color);
    opacity: 0.2;
  }
`;function InlineLoader(props,ref){const{color,...rest}=props,heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}const loaders_InlineLoader=(0,react.forwardRef)(InlineLoader)},"./packages/loaders/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>loaders_Loader});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),types=__webpack_require__("./packages/loaders/types.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const rotation=styled_components_browser_esm.F4`
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
  stroke: currentColor;
  stroke-width: ${props=>props.$thickness};
  opacity: 0.2;
`,LoaderCircleFgStyle=styled_components_browser_esm.ZP.circle`
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: ${props=>props.$thickness};
  stroke-dasharray: ${props=>{const circumference=2*props.r*Math.PI;return`${.25*circumference} ${.75*circumference}`}};
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 1.4s linear infinite;
`;function Loader(props,ref){const{size="medium",thickness=3,color="primary",...rest}=props,pxSize=types.gI[size],center=pxSize/2,radius=pxSize/2-thickness/2;return(0,jsx_runtime.jsx)(LoaderStyle,{$size:pxSize,$color:color,...rest,ref,children:(0,jsx_runtime.jsxs)("svg",{width:pxSize,height:pxSize,viewBox:`0 0 ${pxSize} ${pxSize}`,children:[(0,jsx_runtime.jsx)(LoaderCircleBgStyle,{$thickness:thickness,cx:center,cy:center,r:radius}),(0,jsx_runtime.jsx)(LoaderCircleFgStyle,{$thickness:thickness,cx:center,cy:center,r:radius})]})})}const loaders_Loader=(0,react.forwardRef)(Loader)},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Gl:()=>_InlineLoader__WEBPACK_IMPORTED_MODULE_1__.Z,aN:()=>_Loader__WEBPACK_IMPORTED_MODULE_0__.Z});var _Loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/loaders/Loader.tsx"),_InlineLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/loaders/InlineLoader.tsx");__webpack_require__("./packages/loaders/types.ts")},"./packages/loaders/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var LoaderSize,LoaderColor,InlineLoaderColor;__webpack_require__.d(__webpack_exports__,{_:()=>InlineLoaderColor,gI:()=>LoaderSize,ux:()=>LoaderColor}),function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}))},"./packages/pagination/PaginationItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>pagination_PaginationItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),types=__webpack_require__("./packages/pagination/types.ts");const variantColors={[types.V.active]:styled_components_browser_esm.iv`
    border-color: var(--lido-color-primary);
    color: var(--lido-color-primary);

    :not(:disabled):hover {
      border-color: var(--lido-color-primaryVisited);
      color: var(--lido-color-primaryVisited);
    }
  `,[types.V.default]:styled_components_browser_esm.iv`
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    :not(:disabled):hover {
      border-color: var(--lido-color-primary);
      color: var(--lido-color-primary);
    }
  `},PaginationItemStyle=styled_components_browser_esm.ZP.button`
  width: 32px;
  height: 32px;
  background-color: var(--lido-color-foreground);
  border: 1px solid;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  padding: 0;

  ${({$variant})=>variantColors[$variant]}

  :disabled {
    border-color: var(--lido-color-border);
    color: var(--lido-color-textSecondary);
    cursor: unset;
  }
`,pagination_PaginationItem=props=>{const{icon,variant=types.V.default,...rest}=props;return(0,jsx_runtime.jsx)(PaginationItemStyle,{$variant:variant,...rest,children:icon})}},"./packages/pagination/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>PaginationItemVariant});var PaginationItemVariant;__webpack_require__("./node_modules/react/index.js");!function(PaginationItemVariant){PaginationItemVariant.default="default",PaginationItemVariant.active="active"}(PaginationItemVariant||(PaginationItemVariant={}))},"./packages/popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>popover_Popover});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./packages/popover/constants.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),utils=__webpack_require__("./packages/utils/index.ts"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts");const PopoverWrapperStyle=styled_components_browser_esm.ZP.div`
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
`;function Popover(props,ref){const{placement=constants.R,open=!1,offset="xs",...rest}=props;return(0,jsx_runtime.jsx)(PopoverStyle,{$offset:offset,placement,in:open,...rest,ref})}const popover_Popover=(0,react.forwardRef)(Popover)},"./packages/popover/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>DEFAULT_PLACEMENT,_:()=>INITIAL_STYLE});const INITIAL_STYLE={position:"fixed",opacity:0,pointerEvents:"none"},DEFAULT_PLACEMENT="bottomLeft"},"./packages/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J2:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.Z,V0:()=>_types__WEBPACK_IMPORTED_MODULE_1__.V,m9:()=>_types__WEBPACK_IMPORTED_MODULE_1__.m});var _Popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/popover/Popover.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/popover/types.ts")},"./packages/popover/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>PopoverOffset,m:()=>PopoverPlacement});var PopoverOffset,PopoverPlacement;__webpack_require__("./node_modules/react/index.js");!function(PopoverOffset){PopoverOffset[PopoverOffset.xs=0]="xs",PopoverOffset[PopoverOffset.sm=1]="sm",PopoverOffset[PopoverOffset.md=2]="md",PopoverOffset[PopoverOffset.lg=3]="lg",PopoverOffset[PopoverOffset.xl=4]="xl"}(PopoverOffset||(PopoverOffset={})),function(PopoverPlacement){PopoverPlacement[PopoverPlacement.topLeft=0]="topLeft",PopoverPlacement[PopoverPlacement.top=1]="top",PopoverPlacement[PopoverPlacement.topRight=2]="topRight",PopoverPlacement[PopoverPlacement.rightTop=3]="rightTop",PopoverPlacement[PopoverPlacement.right=4]="right",PopoverPlacement[PopoverPlacement.rightBottom=5]="rightBottom",PopoverPlacement[PopoverPlacement.bottomLeft=6]="bottomLeft",PopoverPlacement[PopoverPlacement.bottom=7]="bottom",PopoverPlacement[PopoverPlacement.bottomRight=8]="bottomRight",PopoverPlacement[PopoverPlacement.leftTop=9]="leftTop",PopoverPlacement[PopoverPlacement.left=10]="left",PopoverPlacement[PopoverPlacement.leftBottom=11]="leftBottom"}(PopoverPlacement||(PopoverPlacement={}))},"./packages/popup-menu/PopupMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>popup_menu_PopupMenu});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),PopupMenuProvider=__webpack_require__("./packages/popup-menu/PopupMenuProvider.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),popover=__webpack_require__("./packages/popover/index.ts"),PopupMenuItemStyles=__webpack_require__("./packages/popup-menu/PopupMenuItemStyles.ts");const PopupMenuStyle=(0,styled_components_browser_esm.ZP)(popover.J2)`
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: ${({theme})=>theme.boxShadows.xs}
    var(--lido-color-shadowLight);
  padding: 0;

  ${PopupMenuItemStyles.LP}:first-child {
    border-top-left-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
    border-top-right-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
  }

  ${PopupMenuItemStyles.LP}:last-child {
    border-bottom-left-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
    border-bottom-right-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
  }
`,FOCUSABLE_ELEMENTS=["a[href]","button:not([disabled]):not([aria-hidden])",'[tabindex]:not([tabindex^="-"])'];function PopupMenu(props,externalRef){const{variant,children,onKeyDown,onMouseMove,...rest}=props,{ref:controlRef,handleMouseMove,handleKeyDown,handleEnter,handleExit}=(props=>{const{onMouseMove,onKeyDown}=props,ref=(0,react.useRef)(null),getFocusableNodes=(0,react.useCallback)((()=>{var ref1,ref2;const nodes=null!==(ref2=null===(ref1=ref.current)||void 0===ref1?void 0:ref1.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")))&&void 0!==ref2?ref2:[];return Array.from(nodes).filter((node=>node&&node instanceof HTMLElement&&null!==node.offsetParent))}),[]),handleFocusTo=(0,react.useCallback)(((event,offset=1)=>{const focusableNodes=getFocusableNodes();if(0===focusableNodes.length)return;const currentElement=document.activeElement,focusedItemIndex=currentElement instanceof HTMLElement?focusableNodes.indexOf(currentElement):-1,activeItemIndex=focusableNodes.findIndex((node=>"true"===node.getAttribute("aria-selected")));let nextIndex=(-1===focusedItemIndex?activeItemIndex:focusedItemIndex)+offset;nextIndex<0&&(nextIndex=focusableNodes.length-1),nextIndex>=focusableNodes.length&&(nextIndex=0),focusableNodes[nextIndex].focus(),event.preventDefault()}),[getFocusableNodes]),handleMouseMove=(0,react.useCallback)((event=>{null==onMouseMove||onMouseMove(event);const{target}=event;if(!(target instanceof HTMLElement))return;const focusableNodes=getFocusableNodes(),overed=target.closest(FOCUSABLE_ELEMENTS.join(","));if(!(overed instanceof HTMLElement))return;const isNotFocusable=!focusableNodes.includes(overed);overed===document.activeElement||isNotFocusable||overed.focus()}),[getFocusableNodes,onMouseMove]),handleKeyDown=(0,react.useCallback)((event=>{var _code;null==onKeyDown||onKeyDown(event);const code=null!==(_code=event.code)&&void 0!==_code?_code:event.key;"Tab"===code&&event.preventDefault(),"ArrowDown"===code&&handleFocusTo(event,1),"ArrowUp"===code&&handleFocusTo(event,-1)}),[handleFocusTo,onKeyDown]),[interceptFocus,restoreFocus]=(0,hooks.ch)(),handleEnter=(0,react.useCallback)((()=>{ref.current&&interceptFocus(ref.current)}),[interceptFocus]),handleExit=(0,react.useCallback)((()=>{restoreFocus()}),[restoreFocus]);return{ref,handleMouseMove,handleKeyDown,handleEnter,handleExit}})(props),popupRef=(0,hooks.qq)([controlRef,externalRef]);return(0,jsx_runtime.jsx)(PopupMenuStyle,{onMouseMove:handleMouseMove,onKeyDown:handleKeyDown,onEnter:handleEnter,onExit:handleExit,tabIndex:-1,role:"listbox",...rest,ref:popupRef,children:(0,jsx_runtime.jsx)(PopupMenuProvider.N,{variant,children})})}const popup_menu_PopupMenu=(0,react.forwardRef)(PopupMenu)},"./packages/popup-menu/PopupMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/popup-menu/PopupMenuItemStyles.ts"),_PopupMenuProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/popup-menu/PopupMenuProvider.tsx");function PopupMenuItem(props,ref){const{active=!1,leftDecorator,rightDecorator,children,...rest}=props,{variant="default"}=(0,_PopupMenuProvider__WEBPACK_IMPORTED_MODULE_3__.C)(),hasLeftDecorator=!!leftDecorator,hasRightDecorator=!!rightDecorator;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.LP,{$active:active,role:"option","aria-selected":active,...rest,ref,children:[hasLeftDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.cF,{children:leftDecorator}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.OU,{$variant:variant,children}),hasRightDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.KL,{children:rightDecorator})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(PopupMenuItem)},"./packages/popup-menu/PopupMenuItemStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{KL:()=>PopupMenuItemRightDecoratorStyle,LP:()=>PopupMenuItemStyle,OU:()=>PopupMenuItemContentStyle,cF:()=>PopupMenuItemLeftDecoratorStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const PopupMenuItemStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button`
  text-align: left;
  display: flex;
  width: 100%;
  align-items: stretch;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  background: transparent;
  border-radius: 0;
  color: var(--lido-color-text);
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  padding: 0 15px;
  margin: 0;
  position: relative;

  &:disabled {
    cursor: default;
    color: var(--lido-color-textSecondary);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-radius: inherit;
    opacity: ${({$active})=>$active?.04:0};
    background: var(--lido-color-popupMenuItemBgActiveHover);
    transition: opacity ${({theme})=>theme.duration.fast} ease;
  }

  &:focus:not(:disabled):before {
    opacity: 0.04;
  }
`,variants={small:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    padding: 12px 0;
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    line-height: 1.35em;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 800;
  `,default:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    padding: 18px 0;
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    line-height: 1.4em;
    font-weight: 400;
  `},PopupMenuItemContentStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  position: relative;
  padding: 18px 0;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({$variant})=>variants[$variant]}
`,decoratorCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: default;
  display: flex;
  align-items: center;
`,PopupMenuItemLeftDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  ${decoratorCSS};
  padding-right: 16px;
`,PopupMenuItemRightDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  ${decoratorCSS};
  padding-left: 16px;
`},"./packages/popup-menu/PopupMenuProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>usePopupMenuContext,N:()=>PopupMenuProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Context=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({}),usePopupMenuContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context),PopupMenuProvider=props=>{const{variant,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:{variant},...rest})}},"./packages/popup-menu/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>PopupMenuVariant});var PopupMenuVariant;__webpack_require__("./node_modules/react/index.js");!function(PopupMenuVariant){PopupMenuVariant[PopupMenuVariant.small=0]="small",PopupMenuVariant[PopupMenuVariant.default=1]="default"}(PopupMenuVariant||(PopupMenuVariant={}))},"./packages/styled-system/withStyledSystem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function withStyledSystem(Component){return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(Component).withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_0__.ZP})((0,styled_system__WEBPACK_IMPORTED_MODULE_1__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_1__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_1__.$_,styled_system__WEBPACK_IMPORTED_MODULE_1__.cp,styled_system__WEBPACK_IMPORTED_MODULE_1__.bK,styled_system__WEBPACK_IMPORTED_MODULE_1__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.eC,styled_system__WEBPACK_IMPORTED_MODULE_1__.Oq,styled_system__WEBPACK_IMPORTED_MODULE_1__.Cg,styled_system__WEBPACK_IMPORTED_MODULE_1__.FK,styled_system__WEBPACK_IMPORTED_MODULE_1__.AF))}},"./packages/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>text_Text});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sizes={xxs:styled_components_browser_esm.iv`
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
  `},getTextColor=props=>{const{theme:{colors},color}=props;return{default:colors.text,secondary:colors.textSecondary,primary:colors.primary,warning:colors.warning,error:colors.error,success:colors.success}[color]},getTextDecoration=props=>{const{underline,strikeThrough}=props;switch(!0){case underline:return"underline";case strikeThrough:return"line-through";default:return"none"}},TextStyle=styled_components_browser_esm.ZP.p`
  ${({strong,italic,size})=>styled_components_browser_esm.iv`
    font-style: ${italic?"italic":"normal"};
    font-weight: ${strong?700:400};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`;function Text(props,ref){const{size="md",color="default",...rest}=props;return(0,jsx_runtime.jsx)(TextStyle,{size,color,ref,...rest})}const text_Text=(0,react.forwardRef)(Text)},"./packages/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{xv:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.Z});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/text/Text.tsx");__webpack_require__("./packages/text/types.ts")},"./packages/text/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var TextColor,TextSize;__webpack_require__.d(__webpack_exports__,{d:()=>TextColor,y:()=>TextSize}),function(TextColor){TextColor[TextColor.default=0]="default",TextColor[TextColor.secondary=1]="secondary",TextColor[TextColor.primary=2]="primary",TextColor[TextColor.warning=3]="warning",TextColor[TextColor.error=4]="error",TextColor[TextColor.success=5]="success"}(TextColor||(TextColor={})),function(TextSize){TextSize[TextSize.xxs=0]="xxs",TextSize[TextSize.xs=1]="xs",TextSize[TextSize.sm=2]="sm",TextSize[TextSize.md=3]="md",TextSize[TextSize.lg=4]="lg",TextSize[TextSize.xl=5]="xl"}(TextSize||(TextSize={}))},"./packages/theme/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var ref,ThemeName;__webpack_require__.d(__webpack_exports__,{Ix:()=>ThemeName,Ls:()=>themeCookieKey,PQ:()=>prefersDarkThemeMediaQuery,QJ:()=>globalStyleDataAttribute,f2:()=>themeCookieExpire,fY:()=>DEFAULT_THEME_NAME}),function(ThemeName){ThemeName.light="light",ThemeName.dark="dark"}(ThemeName||(ThemeName={}));const DEFAULT_THEME_NAME=ThemeName.light,themeCookieKey="lido-theme-manual",globalStyleDataAttribute="data-lido-ui-global-style",themeCookieExpire=365,prefersDarkThemeMediaQuery="undefined"!=typeof window?null===(ref=window.matchMedia)||void 0===ref?void 0:ref.call(window,"(prefers-color-scheme: dark)"):void 0},"./packages/theme/document-head-contents/element-theme-script.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>updateGlobalTheme,RB:()=>initGlobalCookieTheme});__webpack_require__("./node_modules/react/jsx-runtime.js"),__webpack_require__("./node_modules/react/index.js");var _utils_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/utils/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theme/constants.ts"),_utils_set_theme_cookie__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theme/utils/set-theme-cookie.ts");const themeScriptValueString=function(key){if(!window.matchMedia)return()=>{};const match=window.matchMedia("(prefers-color-scheme: dark)"),setTheme=()=>{var ref;const cookieMatcher=new RegExp(`(^| )${key}=([^;]+)`);var ref1;const themeCookie=null!==(ref1=null===(ref=document.cookie.match(cookieMatcher))||void 0===ref?void 0:ref[2])&&void 0!==ref1?ref1:null;themeCookie?document.documentElement.dataset.lidoTheme=themeCookie:delete document.documentElement.dataset.lidoTheme};return setTheme(),match.addEventListener("change",setTheme),setTheme};let updateGlobalTheme=_utils_index__WEBPACK_IMPORTED_MODULE_2__.FX,initGlobalCookieTheme="undefined"==typeof window?_utils_index__WEBPACK_IMPORTED_MODULE_2__.FX:()=>{const setTheme=themeScriptValueString(_constants__WEBPACK_IMPORTED_MODULE_3__.Ls);initGlobalCookieTheme=_utils_index__WEBPACK_IMPORTED_MODULE_2__.FX,updateGlobalTheme=theme=>{(0,_utils_set_theme_cookie__WEBPACK_IMPORTED_MODULE_4__.c)(theme),setTheme()}}},"./packages/theme/document-head-contents/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zR:()=>initColors});__webpack_require__("./node_modules/react/jsx-runtime.js"),__webpack_require__("./node_modules/react/index.js");var themes=__webpack_require__("./packages/theme/themes.ts"),generate_css_color_variables=__webpack_require__("./packages/theme/utils/generate-css-color-variables.ts"),constants=__webpack_require__("./packages/theme/constants.ts"),utils=__webpack_require__("./packages/utils/index.ts");const darkThemeColors=(0,generate_css_color_variables.N)(themes.Hx.colors),lightThemeColors=(0,generate_css_color_variables.N)(themes.Qp.colors);let initGlobalColors=utils.FX;const themeCSSValueString=`\nhtml, [data-lido-theme='${constants.Ix.light}'] {\ncolor-theme: light;\n${lightThemeColors}\n}\n@media (prefers-color-scheme: dark) {\nhtml:not([data-lido-theme='${constants.Ix.light}']) { \ncolor-theme: dark;\n${darkThemeColors} \n}\n}\n[data-lido-theme='${constants.Ix.dark}'] {\ncolor-theme: dark;\n${darkThemeColors}\n}`;"undefined"!=typeof window&&(document.querySelector(`style[${constants.QJ}]`)||(initGlobalColors=()=>{const style=document.createElement("style");style.setAttribute(constants.QJ,""),style.innerHTML=themeCSSValueString,document.head.appendChild(style),initGlobalColors=utils.FX}));var element_theme_script=__webpack_require__("./packages/theme/document-head-contents/element-theme-script.tsx");const initColors=()=>{initGlobalColors(),(0,element_theme_script.RB)()}},"./packages/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zm:()=>CookieThemeProvider,Hx:()=>themes.Hx,rv:()=>themes.rv,Qp:()=>themes.Qp,M1:()=>useThemeToggle});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./packages/theme/constants.ts"),themes=__webpack_require__("./packages/theme/themes.ts");const cookieThemeMatcher=new RegExp(`(^| )${constants.Ls}=([^;]+)`),getThemeNameFromCookies=()=>{var ref,ref1;return"undefined"==typeof window?null:null!==(ref1=null===(ref=document.cookie.match(cookieThemeMatcher))||void 0===ref?void 0:ref[2])&&void 0!==ref1?ref1:null};var document_head_contents=__webpack_require__("./packages/theme/document-head-contents/index.tsx"),element_theme_script=__webpack_require__("./packages/theme/document-head-contents/element-theme-script.tsx");const defaultThemeContext={},ThemeToggleContext=(0,react.createContext)(defaultThemeContext);(0,document_head_contents.zR)();const CookieThemeProvider=react.memo((({children,initialThemeName,overrideThemeName})=>{const parentTheme=(0,react.useContext)(ThemeToggleContext),isTopLevelProvider=parentTheme===defaultThemeContext,[internalThemeName,setThemeName]=(0,react.useState)(initialThemeName||constants.fY),themeName=parentTheme.themeName||internalThemeName,theme=themes.xM[themeName];(0,react.useEffect)((()=>{if(!isTopLevelProvider)return;const setTheme=()=>{const systemThemeName=(null===constants.PQ||void 0===constants.PQ?void 0:constants.PQ.matches)?constants.Ix.dark:constants.Ix.light,themeNameCookie=getThemeNameFromCookies(),newThemeName=overrideThemeName||themeNameCookie||initialThemeName||systemThemeName||constants.fY;setThemeName(newThemeName),document.documentElement.dataset.lidoTheme=newThemeName};null===constants.PQ||void 0===constants.PQ||constants.PQ.addEventListener("change",setTheme),setTheme();const checkCookieThemeWasChanged=()=>{const themeNameCookie=getThemeNameFromCookies();!themeNameCookie||themeNameCookie!==constants.Ix.dark&&themeNameCookie!==constants.Ix.light||setThemeName(themeNameCookie)};return window.addEventListener("focus",checkCookieThemeWasChanged),()=>{window.removeEventListener("focus",checkCookieThemeWasChanged)}}),[initialThemeName,isTopLevelProvider,overrideThemeName,parentTheme,theme]);const value=(0,react.useMemo)((()=>({themeName,toggleTheme(){setThemeName((themeName=>{const newThemeName=themeName===constants.Ix.light?constants.Ix.dark:constants.Ix.light;return(0,element_theme_script.C)(newThemeName),newThemeName}))}})),[themeName]);return isTopLevelProvider?(0,jsx_runtime.jsx)(ThemeToggleContext.Provider,{value,children:(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme,children})}):(0,jsx_runtime.jsx)("div",{style:{display:"contents"},"data-lido-theme":themeName,children:(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme,children})})}));CookieThemeProvider.displayName="CookieThemeProvider";__webpack_require__("./packages/theme/theme-provider.tsx");const useThemeToggle=()=>(0,react.useContext)(ThemeToggleContext);__webpack_require__("./packages/utils/index.ts"),__webpack_require__("./packages/theme/utils/set-theme-cookie.ts")},"./packages/theme/theme-provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DD:()=>DarkThemeProvider,Mq:()=>LightThemeProvider,f6:()=>ThemeProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theme/themes.ts"),_document_head_contents_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theme/document-head-contents/index.tsx"),_utils_generate_css_color_variables__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/theme/utils/generate-css-color-variables.ts");(0,_document_head_contents_index__WEBPACK_IMPORTED_MODULE_3__.zR)();const StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  display: contents;
  ${({colors})=>colors?(0,_utils_generate_css_color_variables__WEBPACK_IMPORTED_MODULE_5__.N)(colors):null}
`,ThemeProvider=({theme=_themes__WEBPACK_IMPORTED_MODULE_2__.rv,children,...rest})=>{const internalThemeName=_themes__WEBPACK_IMPORTED_MODULE_2__.kS.get(theme),props=internalThemeName?{"data-lido-theme":internalThemeName}:{colors:theme.colors};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledWrapper,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.f6,{theme,...rest,children})})},LightThemeProvider=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeProvider,{...props,theme:_themes__WEBPACK_IMPORTED_MODULE_2__.Qp}),DarkThemeProvider=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeProvider,{...props,theme:_themes__WEBPACK_IMPORTED_MODULE_2__.Hx})},"./packages/theme/themes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kS:()=>reverseThemeMap,Hx:()=>themeDark,rv:()=>themeDefault,Qp:()=>themeLight,xM:()=>themeMap});const sm={width:"359px",height:"639px"},md={width:"479px",height:"799px"},lg={width:"767px",height:"1023px"},xl={width:"1023px",height:"1365px"},base={...{space:[4,8,16,24,32],spaceMap:{xs:4,sm:8,md:16,lg:20,xl:24,xxl:32}},...{breakpoints:[sm.width,md.width,lg.width,xl.width],breakpointsMap:{sm,md,lg,xl},mediaQueries:{sm:`@media screen and (max-width: ${sm.width})`,md:`@media screen and (max-width: ${md.width})`,lg:`@media screen and (max-width: ${lg.width})`,xl:`@media screen and (max-width: ${xl.width})`}},...{colors:{darkThemeOpacity:"0",lightThemeOpacity:"1",lightModeVisibility:"visible",darkModeVisibility:"hidden",lightDisplay:"initial",darkDisplay:"none",primary:"#00a3ff",primaryHover:"#009bf2",primaryContrast:"#fff",primaryVisited:"#4bbeff",accent:"#27272e",accentContrast:"#fff",accentContrastSecondary:"rgba(255, 255, 255, 0.6)",accentDarken:"rgba(0, 0, 0, .2)",accentControlBg:"rgba(0, 0, 0, .1)",accentBorder:"rgba(255, 255, 255, 0.2)",accentBorderHover:"rgba(255, 255, 255, 0.3)",error:"#e14d4d",errorHover:"#d44c4d",errorContrast:"#fff",warning:"#EC8600",warningHover:"#f0a431",warningContrast:"#fff",success:"#53BA95",successHover:"#5dae5e",successContrast:"#fff"}},...{duration:{fast:"100ms",med:"150ms",norm:"200ms"},ease:{inSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",outSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",inOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",inQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",outQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",inOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",inCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",outCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",inOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",inQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",outQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",inOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",inQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",outQuint:"cubic-bezier(0.23, 1, 0.32, 1)",inOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",inExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",outExpo:"cubic-bezier(0.19, 1, 0.22, 1)",inOutExpo:"cubic-bezier(1, 0, 0, 1)",inCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",outCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",inOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",inBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",outBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",inOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},...{fontSizes:[10,12,14,16,18,20,26,32,40,50],fontSizesMap:{xxxs:10,xxs:12,xs:14,sm:16,md:18,lg:20,xl:26,xxl:32,xxxl:40,xxxxl:50}},...{borderRadiuses:[4,6,8,10,12],borderRadiusesMap:{xs:4,sm:6,md:8,lg:10,xl:20}},...{boxShadows:{xs:"0px 4px 8px 0px",sm:"0px 4px 12px 0px",md:"0px 4px 16px 0px",lg:"0px 8px 24px 0px",xl:"0px 8px 32px 0px",xxl:"0px 8px 44px 0px"}}};var constants=__webpack_require__("./packages/theme/constants.ts");const themeLight={...base,name:constants.Ix.light,colors:{...base.colors,darkThemeOpacity:"0",lightThemeOpacity:"1",lightModeVisibility:"visible",darkModeVisibility:"hidden",lightDisplay:"initial",darkDisplay:"none",secondary:"#273852",secondaryHover:"#212f45",secondaryContrast:"#fff",background:"#f2f4f6",backgroundDarken:"#dae0e5",foreground:"#fff",overlay:"rgba(0, 0, 0, 0.5)",shadowLight:"rgba(39, 56, 82, 0.08)",shadowDark:"rgba(0, 0, 0, .25)",text:"#273852",textSecondary:"#7a8aa0",accentText:"#273852",border:"rgba(0, 10, 61, 0.12)",borderActive:"rgba(0, 10, 61, 0.48)",borderHover:"rgba(0, 10, 61, 0.24)",borderLight:"#dfe5eb",accentBorder:"rgba(0, 10, 61, 0.12)",accentBorderHover:"rgba(0, 10, 61, 0.24)",controlBg:"#fff",accentControlBg:"rgba(239, 242, 246, 0.56)",popupMenuItemBgActiveHover:"#000a3d"}},themeDark={...base,name:constants.Ix.dark,colors:{...base.colors,darkThemeOpacity:"1",lightThemeOpacity:"0",lightModeVisibility:"hidden",darkModeVisibility:"visible",lightDisplay:"none",darkDisplay:"initial",secondary:"rgba(255, 255, 255, .8)",secondaryHover:"#fff",secondaryContrast:"#273852",background:"#1c1c21",backgroundDarken:"#131317",foreground:"#34343d",overlay:"rgba(0, 0, 0, 0.5)",shadowLight:"rgba(0, 0, 0, .25)",shadowDark:"rgba(0, 0, 0, .5)",text:"#fff",textSecondary:"rgba(255, 255, 255, .8)",accentText:"#fff",border:"rgba(255, 255, 255, 0.12)",borderActive:"rgba(255, 255, 255, 0.48)",borderHover:"rgba(255, 255, 255, 0.24)",borderLight:"#484855",accentBorder:"rgba(255, 255, 255, 0.12)",accentBorderHover:"rgba(255, 255, 255, 0.24)",controlBg:"#2f2f37",accentControlBg:"rgba(39, 39, 46, 0.56)",popupMenuItemBgActiveHover:"#fff"}},themeMap={[constants.Ix.light]:themeLight,[constants.Ix.dark]:themeDark},reverseThemeMap=new WeakMap([[themeLight,constants.Ix.light],[themeDark,constants.Ix.dark]]),themeDefault=themeLight},"./packages/theme/utils/generate-css-color-variables.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>generateCssColorVariables});const generateCssColorVariables=colors=>[...Object.keys(colors)].map((key=>{const color=colors[key],rgb=(color=>{switch(!0){case/^#[\da-fA-F]{3}$/.test(color):return[color.slice(1,2)+color.slice(1,2),color.slice(2,3)+color.slice(2,3),color.slice(3,4)+color.slice(3,4)].map((val=>parseInt(val,16)));case/^#[\da-fA-F]{6}$/.test(color):return[color.slice(1,3),color.slice(3,5),color.slice(5,7)].map((val=>parseInt(val,16)));case/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(color):return color.replace(/^.*\((.*)\).*$/,"$1").split(",").map((n=>parseInt(n))).slice(0,3);default:return null}})(color);return rgb?`--lido-color-${key}: ${color};\n--lido-rgb-${key}: ${rgb[0]},${rgb[1]},${rgb[2]};\n`:`--lido-color-${key}: ${color};\n`})).join("")},"./packages/theme/utils/set-theme-cookie.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>setThemeCookie});var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js"),_utils_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theme/constants.ts");const setThemeCookie=theme=>{var ref,ref1;const cookie=`${_constants__WEBPACK_IMPORTED_MODULE_2__.Ls}=${theme};expires=${_constants__WEBPACK_IMPORTED_MODULE_2__.f2};path=/;domain=${(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.f6)()};samesite=None;`;"safari"===(null===(ref=(new ua_parser_js__WEBPACK_IMPORTED_MODULE_0__.UAParser).getBrowser())||void 0===ref||null===(ref1=ref.name)||void 0===ref1?void 0:ref1.toLowerCase())?"https:"===window.location.protocol?document.cookie=`${cookie}Secure;`:document.cookie=cookie:document.cookie=`${cookie}Secure;`}},"./packages/tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip_Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),popover=__webpack_require__("./packages/popover/index.ts");const TooltipPopoverStyle=(0,styled_components_browser_esm.ZP)(popover.J2)`
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
`;var hooks=__webpack_require__("./packages/hooks/index.ts"),react_is=__webpack_require__("./node_modules/react-is/index.js");function Tooltip(props,ref){const{title,children,...rest}=props,[state,setState]=(0,react.useState)(!1),keepTimeoutRef=(0,react.useRef)(null),child=react.Children.only(children);if(!(0,react_is.isElement)(child))throw new Error("Child must be a React element");const anchorRef=(0,react.useRef)(null),mergedRef=(0,hooks.qq)([child.ref,anchorRef]),handleMouseEnter=()=>{keepTimeoutRef.current&&(clearTimeout(keepTimeoutRef.current),keepTimeoutRef.current=null),setState(!0)},handleMouseLeave=()=>{keepTimeoutRef.current=setTimeout((()=>{setState(!1),keepTimeoutRef.current=null}),150)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,react.cloneElement)(child,{ref:mergedRef,onMouseEnter(event){var _props,ref;handleMouseEnter(),null===(ref=(_props=child.props).onMouseEnter)||void 0===ref||ref.call(_props,event)},onMouseLeave(event){var _props,ref;handleMouseLeave(),null===(ref=(_props=child.props).onMouseLeave)||void 0===ref||ref.call(_props,event)}}),(0,jsx_runtime.jsx)(TooltipPopoverStyle,{...rest,open:state,backdrop:!1,anchorRef,onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave,ref,children:title})]})}const tooltip_Tooltip=(0,react.forwardRef)(Tooltip)},"./packages/transition/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>withTransition});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js");const DEFAULT_DURATION=150;function withTransition(Component){function Wrapped(props,externalRef){const{in:state=!1,timeout=DEFAULT_DURATION,mountOnEnter=!0,unmountOnExit=!0,appear=!0,enter=!0,exit=!0,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited,...rest}=props,transitionProps={in:state,timeout,mountOnEnter,unmountOnExit,appear,enter,exit,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited},ref=(0,hooks.qq)([externalRef]);return(0,jsx_runtime.jsx)(Transition.ZP,{...transitionProps,nodeRef:ref,children:status=>(0,jsx_runtime.jsx)(Component,{...rest,duration:timeout,transitionStatus:status,ref})})}return(0,react.forwardRef)(Wrapped)}},"./packages/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{FX:()=>VOID_FN,Vp:()=>getCrossDomainCookieClientSide,f6:()=>getTopLevelDomain,cV:()=>modalRoot,YD:()=>setCrossDomainCookieClientSide});const ModalRoot=(()=>{try{let modalRoot=document.getElementById("lido-ui-modal-root");return modalRoot||(modalRoot=document.createElement("div"),modalRoot.id="lido-ui-modal-root",document.body.append(modalRoot)),modalRoot}catch(error){return null}})(),modalRoot=ModalRoot,getTopLevelDomain="undefined"==typeof window?()=>"localhost":()=>0===document.location.host.indexOf("localhost")?"localhost":`.${location.hostname.split(".").slice(-2).join(".")}`;var ua_parser=__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js");const setCrossDomainCookieClientSide=(key,value,expire=365)=>{var ref,ref1;if("undefined"==typeof window)return;const cookie=`${key}=${value};expires=${expire};path=/;domain=${getTopLevelDomain()};samesite=None;`;"safari"===(null===(ref=(new ua_parser.UAParser).getBrowser())||void 0===ref||null===(ref1=ref.name)||void 0===ref1?void 0:ref1.toLowerCase())?"https:"===window.location.protocol?document.cookie=`${cookie}Secure;`:document.cookie=cookie:document.cookie=`${cookie}Secure;`},getCrossDomainCookieClientSide=key=>{var ref;if("undefined"==typeof window)return null;const cookieMatcher=new RegExp(`(^| )${key}=([^;]+)`);var ref1;return null!==(ref1=null===(ref=document.cookie.match(cookieMatcher))||void 0===ref?void 0:ref[2])&&void 0!==ref1?ref1:null},VOID_FN=()=>{}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./packages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./accordion/Accordion.stories.tsx":"./packages/accordion/Accordion.stories.tsx","./address/Address.stories.tsx":"./packages/address/Address.stories.tsx","./block/Block.stories.tsx":"./packages/block/Block.stories.tsx","./box/Box.stories.tsx":"./packages/box/Box.stories.tsx","./button/Button.stories.tsx":"./packages/button/Button.stories.tsx","./checkbox/Checkbox.stories.tsx":"./packages/checkbox/Checkbox.stories.tsx","./chip/Chip.stories.tsx":"./packages/chip/Chip.stories.tsx","./container/Container.stories.tsx":"./packages/container/Container.stories.tsx","./content-theme/content-theme.stories.tsx":"./packages/content-theme/content-theme.stories.tsx","./cookie-theme-toggler/cookie-theme-toggler.stories.tsx":"./packages/cookie-theme-toggler/cookie-theme-toggler.stories.tsx","./cookies-tooltip/cookies-tooltip.stories.tsx":"./packages/cookies-tooltip/cookies-tooltip.stories.tsx","./data-table/DataTable.stories.tsx":"./packages/data-table/DataTable.stories.tsx","./divider/Divider.stories.tsx":"./packages/divider/Divider.stories.tsx","./heading/Heading.stories.tsx":"./packages/heading/Heading.stories.tsx","./icons/Icon.stories.tsx":"./packages/icons/Icon.stories.tsx","./identicon/Identicon.stories.tsx":"./packages/identicon/Identicon.stories.tsx","./input/Input.stories.tsx":"./packages/input/Input.stories.tsx","./input/InputGroup.stories.tsx":"./packages/input/InputGroup.stories.tsx","./input/OptionsSlider.stories.tsx":"./packages/input/OptionsSlider.stories.tsx","./input/SliderInput.stories.tsx":"./packages/input/SliderInput.stories.tsx","./input/Textarea.stories.tsx":"./packages/input/Textarea.stories.tsx","./lido-logo/LidoLogo.stories.tsx":"./packages/lido-logo/LidoLogo.stories.tsx","./link/Link.stories.tsx":"./packages/link/Link.stories.tsx","./loaders/InlineLoader.stories.tsx":"./packages/loaders/InlineLoader.stories.tsx","./loaders/Loader.stories.tsx":"./packages/loaders/Loader.stories.tsx","./main-menu/MainMenu.stories.tsx":"./packages/main-menu/MainMenu.stories.tsx","./modal/Modal.stories.tsx":"./packages/modal/Modal.stories.tsx","./pagination/Pagination.stories.tsx":"./packages/pagination/Pagination.stories.tsx","./pagination/PaginationItem.stories.tsx":"./packages/pagination/PaginationItem.stories.tsx","./popover/Popover.stories.tsx":"./packages/popover/Popover.stories.tsx","./popup-menu/PopupMenu.stories.tsx":"./packages/popup-menu/PopupMenu.stories.tsx","./select/Select.stories.tsx":"./packages/select/Select.stories.tsx","./service-page/ServicePage.stories.tsx":"./packages/service-page/ServicePage.stories.tsx","./stack/Stack.stories.tsx":"./packages/stack/Stack.stories.tsx","./styled-system/withStyledSystem.stories.tsx":"./packages/styled-system/withStyledSystem.stories.tsx","./table/Table.stories.tsx":"./packages/table/Table.stories.tsx","./text/Text.stories.tsx":"./packages/text/Text.stories.tsx","./theme/theme-provider.stories.tsx":"./packages/theme/theme-provider.stories.tsx","./toast/Toast.stories.tsx":"./packages/toast/Toast.stories.tsx","./tooltip/Tooltip.stories.tsx":"./packages/tooltip/Tooltip.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./packages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./packages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[357],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);