"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[2148],{"./packages/chip/Chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>Chip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ChipVariantsStyle={positive:styled_components_browser_esm.iv`
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
`,Chip=(0,react.forwardRef)((({children,onClick,variant="positive",...rest},ref)=>(0,jsx_runtime.jsx)(ChipWrapperStyle,{$interactive:!!onClick,$variant:variant,onClick,...rest,ref,children})));var ChipVariant,ref,ref1,ref2;Chip.displayName="Chip",function(ChipVariant){ChipVariant[ChipVariant.positive=0]="positive",ChipVariant[ChipVariant.negative=1]="negative",ChipVariant[ChipVariant.warning=2]="warning",ChipVariant[ChipVariant.gray=3]="gray"}(ChipVariant||(ChipVariant={}));const Chip_stories={component:Chip,title:"Controls/Chip",args:{interactive:!1,children:"Lido",variant:"positive"},argTypes:{variant:{options:(enumObject=ChipVariant,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}}};var enumObject;const Basic=(props,options)=>(0,jsx_runtime.jsx)(Chip,{...props,onClick:options.args.interactive?()=>{}:void 0});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"(props, options) => <Chip {...props} onClick={options.args.interactive ? () => void 0 : undefined} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}}}]);