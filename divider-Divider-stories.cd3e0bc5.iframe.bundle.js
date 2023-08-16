"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[5413],{"./packages/divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,default:()=>Divider_stories});var DividerType,DividerIndent,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(DividerType){DividerType[DividerType.vertical=0]="vertical",DividerType[DividerType.horizontal=1]="horizontal"}(DividerType||(DividerType={})),function(DividerIndent){DividerIndent[DividerIndent.xs=0]="xs",DividerIndent[DividerIndent.sm=1]="sm",DividerIndent[DividerIndent.md=2]="md",DividerIndent[DividerIndent.lg=3]="lg",DividerIndent[DividerIndent.xl=4]="xl"}(DividerIndent||(DividerIndent={}));var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getIndents=({$indents,theme})=>$indents?`${theme.spaceMap[$indents]}px`:"0",types={horizontal:styled_components_browser_esm.iv`
    border-top: 1px solid currentcolor;
    width: 100%;
    height: 0;
    margin: ${getIndents} 0;
  `,vertical:styled_components_browser_esm.iv`
    border-left: 1px solid currentcolor;
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
`;function Divider({type="horizontal",indents,children,...rest},ref){return(0,jsx_runtime.jsx)(DividerStyle,{$type:type,$indents:indents,ref,...rest})}const divider_Divider=(0,react.forwardRef)(Divider);var ref,ref1,ref2;const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),Divider_stories={component:divider_Divider,title:"Layout/Divider",args:{type:"horizontal",indents:"md"},argTypes:{type:{options:getOptions(DividerType),control:"inline-radio"},indents:{options:getOptions(DividerIndent),control:"inline-radio"}}},Wrapper=styled_components_browser_esm.ZP.div`
  flex-direction: ${({$type})=>"vertical"===$type?"row":"column"};
  display: flex;
`,Base=props=>(0,jsx_runtime.jsxs)(Wrapper,{$type:props.type,children:[(0,jsx_runtime.jsx)("span",{children:"First"}),(0,jsx_runtime.jsx)(divider_Divider,{type:"vertical",...props}),(0,jsx_runtime.jsx)("span",{children:"Second"}),(0,jsx_runtime.jsx)(divider_Divider,{type:"vertical",...props}),(0,jsx_runtime.jsx)("span",{children:"Third"})]});Base.parameters={...Base.parameters,docs:{...null===(ref=Base.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Wrapper $type={props.type}>\n    <span>First</span>\n    <Divider type='vertical' {...props} />\n    <span>Second</span>\n    <Divider type='vertical' {...props} />\n    <span>Third</span>\n  </Wrapper>",...null===(ref1=Base.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}}}]);