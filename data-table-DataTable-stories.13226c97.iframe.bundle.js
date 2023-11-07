"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9768],{"./packages/data-table/DataTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,WithHighlighted:()=>WithHighlighted,WithHint:()=>WithHint,default:()=>DataTable_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),loaders=__webpack_require__("./packages/loaders/index.ts"),tooltip=__webpack_require__("./packages/tooltip/index.ts"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),icons=__webpack_require__("./packages/icons/index.tsx");const DataTableStyle=styled_components_wrapper.ZP.div``,DataTableRowStyle=styled_components_wrapper.ZP.div`
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
`,DataTableTitleStyle=styled_components_wrapper.ZP.div`
  color: var(--lido-color-textSecondary);
  flex-grow: 1;
`,DataTableValueStyle=styled_components_wrapper.ZP.div`
  color: var(
    --lido-color-${({$highlight})=>$highlight?"success":"text"}
  );
  text-align: right;
  margin-left: ${({theme})=>theme.spaceMap.xxl}px;
  flex-grow: 1;
`,DataTableQuestionStyle=(0,styled_components_wrapper.ZP)(icons.Question)`
  margin: -6px 0 -5px;
  vertical-align: middle;
`,DataTableRow=(0,react.forwardRef)((({title,loading=!1,highlight=!1,help,children,...rest},ref)=>{const hasHelper=!!help;return(0,jsx_runtime.jsxs)(DataTableRowStyle,{ref,...rest,children:[(0,jsx_runtime.jsxs)(DataTableTitleStyle,{children:[title,hasHelper&&(0,jsx_runtime.jsx)(tooltip.u,{placement:"bottomLeft",title:help,children:(0,jsx_runtime.jsx)(DataTableQuestionStyle,{})})]}),(0,jsx_runtime.jsx)(DataTableValueStyle,{$highlight:highlight,children:loading?(0,jsx_runtime.jsx)(loaders.Gl,{color:"text"}):children})]})}));DataTableRow.displayName="DataTableRow";const DataTable=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(DataTableStyle,{ref,...props})));var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8;DataTable.displayName="DataTable";const DataTable_stories={component:DataTable,title:"Layout/DataTable",parameters:{layout:"centered"}},Base=({loading,...rest})=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(DataTable,{...rest,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"You will receive",loading,children:"100 LDO"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",loading,children:"$0.12"})]})});Base.args={loading:!1};const WithHint=props=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(DataTable,{...props,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"Staking rewards fee",help:"This fee is split between node operators, the DAO, and an insurance fund",children:"10%"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",children:"$0.12"})]})}),WithHighlighted=props=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsxs)(DataTable,{...props,children:[(0,jsx_runtime.jsx)(DataTableRow,{title:"Staking rewards fee",highlight:!0,children:"10%"}),(0,jsx_runtime.jsx)(DataTableRow,{title:"Transaction gas cost",children:"$0.12"})]})});Base.parameters={...Base.parameters,docs:{...null===(ref=Base.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"({\n  loading,\n  ...rest\n}) => {\n  return <div style={{\n    width: 300\n  }}>\n      <DataTable {...rest}>\n        <DataTableRow title='You will receive' loading={loading}>\n          100&nbsp;LDO\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost' loading={loading}>\n          $0.12\n        </DataTableRow>\n      </DataTable>\n    </div>;\n}",...null===(ref1=Base.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},WithHint.parameters={...WithHint.parameters,docs:{...null===(ref3=WithHint.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => {\n  return <div style={{\n    width: 300\n  }}>\n      <DataTable {...props}>\n        <DataTableRow title='Staking rewards fee' help='This fee is split between node operators, the DAO, and an insurance fund'>\n          10%\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>\n      </DataTable>\n    </div>;\n}",...null===(ref4=WithHint.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},WithHighlighted.parameters={...WithHighlighted.parameters,docs:{...null===(ref6=WithHighlighted.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => {\n  return <div style={{\n    width: 300\n  }}>\n      <DataTable {...props}>\n        <DataTableRow title='Staking rewards fee' highlight>\n          10%\n        </DataTableRow>\n        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>\n      </DataTable>\n    </div>;\n}",...null===(ref7=WithHighlighted.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}}},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>InlineLoader,_:()=>InlineLoaderColor,aN:()=>Loader,ux:()=>LoaderColor,gI:()=>LoaderSize});var LoaderSize,LoaderColor,InlineLoaderColor,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}));var styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const rotation=styled_components_wrapper.F4`
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