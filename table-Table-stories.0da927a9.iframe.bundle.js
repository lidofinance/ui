"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[2834],{"./packages/table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,default:()=>Table_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./packages/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TdThAlign={left:styled_components_browser_esm.iv`
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
`;function Table(props,ref){return(0,jsx_runtime.jsx)(TableStyle,{ref,...props})}const table_Table=(0,react.forwardRef)(Table);function Thead(props,ref){const{sticky=!1,...rest}=props;return(0,jsx_runtime.jsx)(TheadStyle,{ref,$sticky:sticky,...rest})}const table_Thead=(0,react.forwardRef)(Thead);function Tbody(props,ref){return(0,jsx_runtime.jsx)(TbodyStyle,{ref,...props})}const table_Tbody=(0,react.forwardRef)(Tbody);function Tr(props,ref){const{highlight,...rest}=props;return(0,jsx_runtime.jsx)(TrStyle,{$highlight:highlight,$interactive:!!rest.onClick,ref,...rest})}const table_Tr=(0,react.forwardRef)(Tr);function Td(props,ref){const{align="left",textColor="default",variant,children,numeric=!1,...rest}=props;return(0,jsx_runtime.jsx)(TdStyle,{$align:align,$textColor:textColor,$variant:variant,$interactive:!!rest.onClick,$numeric:numeric,ref,...rest,children:(0,jsx_runtime.jsx)(ThTdContentStyle,{children})})}const table_Td=(0,react.forwardRef)(Td);function Th(props,ref){const{align="left",children,sortDir,variant,...rest}=props;return(0,jsx_runtime.jsx)(ThStyle,{$interactive:!!rest.onClick,$align:align,$variant:variant,ref,...rest,children:(0,jsx_runtime.jsxs)(ThTdContentStyle,{children:[children,"ASC"===sortDir&&(0,jsx_runtime.jsx)(ArrowBottomStyle,{}),"DESC"===sortDir&&(0,jsx_runtime.jsx)(ArrowTopStyle,{})]})})}const table_Th=(0,react.forwardRef)(Th);var TableAlign,TableTextColor,TrHighlight,ThSortDir,ThTdVariant,ref,ref1,ref2;!function(TableAlign){TableAlign[TableAlign.left=0]="left",TableAlign[TableAlign.center=1]="center",TableAlign[TableAlign.right=2]="right"}(TableAlign||(TableAlign={})),function(TableTextColor){TableTextColor[TableTextColor.primary=0]="primary",TableTextColor[TableTextColor.secondary=1]="secondary",TableTextColor[TableTextColor.warning=2]="warning",TableTextColor[TableTextColor.error=3]="error",TableTextColor[TableTextColor.success=4]="success",TableTextColor[TableTextColor.default=5]="default"}(TableTextColor||(TableTextColor={})),function(TrHighlight){TrHighlight[TrHighlight.positive=0]="positive",TrHighlight[TrHighlight.negative=1]="negative",TrHighlight[TrHighlight.warning=2]="warning"}(TrHighlight||(TrHighlight={})),function(ThSortDir){ThSortDir[ThSortDir.ASC=0]="ASC",ThSortDir[ThSortDir.DESC=1]="DESC"}(ThSortDir||(ThSortDir={})),function(ThTdVariant){ThTdVariant[ThTdVariant.string=0]="string",ThTdVariant[ThTdVariant.icon=1]="icon"}(ThTdVariant||(ThTdVariant={}));const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),Table_stories={component:table_Table,title:"Table/Table",parameters:{layout:"centered"},args:{textColor:"default",align:"left",stickyHeader:!0,showHighlight:!1},argTypes:{textColor:{options:getOptions(TableTextColor),control:"inline-radio"},align:{options:getOptions(TableAlign),control:"inline-radio"}}},Base=(props,options)=>{const[sortDir,setSortDir]=(0,react.useState)("ASC"),isShowTrHighlights=options.args.showHighlight;return(0,jsx_runtime.jsx)("div",{style:{height:300,overflowY:"scroll"},children:(0,jsx_runtime.jsxs)(table_Table,{style:{width:600},children:[(0,jsx_runtime.jsx)(table_Thead,{sticky:options.args.stickyHeader,children:(0,jsx_runtime.jsxs)(table_Tr,{children:[(0,jsx_runtime.jsx)(table_Th,{onClick:()=>setSortDir("ASC"===sortDir?"DESC":"ASC"),sortDir,children:"Date | Type"}),(0,jsx_runtime.jsx)(table_Th,{...props,children:"Change"}),(0,jsx_runtime.jsx)(table_Th,{...props,children:"Balance"}),(0,jsx_runtime.jsx)(table_Th,{...props,children:"APR"}),(0,jsx_runtime.jsx)(table_Th,{...props,variant:"icon",children:(0,jsx_runtime.jsx)(icons.Eth,{})})]})}),(0,jsx_runtime.jsx)(table_Tbody,{children:Array(5).fill(null).map(((item,index)=>(0,jsx_runtime.jsxs)(table_Tr,{highlight:isShowTrHighlights?TrHighlight[index%3]:void 0,children:[(0,jsx_runtime.jsxs)(table_Td,{...props,onClick:()=>{},children:["01-13-2021",(0,jsx_runtime.jsx)("br",{}),"Stake"]}),(0,jsx_runtime.jsxs)(table_Td,{...props,children:["+ 0.000007452",(0,jsx_runtime.jsx)("br",{}),"+ $0.02"]}),(0,jsx_runtime.jsxs)(table_Td,{...props,children:["10.00038581",(0,jsx_runtime.jsx)("br",{}),"$18,912.80"]}),(0,jsx_runtime.jsx)(table_Td,{...props,children:"2.4%"}),(0,jsx_runtime.jsx)(table_Td,{...props,variant:"icon",children:(0,jsx_runtime.jsx)(icons.Light,{})})]},index)))})]})})};Base.parameters={...Base.parameters,docs:{...null===(ref=Base.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"(props, options) => {\n  const [sortDir, setSortDir] = useState<ThSortDirs>('ASC');\n\n  // @ts-expect-error fix later\n  const isShowTrHighlights = options.args.showHighlight;\n  return <div style={{\n    height: 300,\n    overflowY: 'scroll'\n  }}>\n      <Table style={{\n      width: 600\n    }}>\n        {/* @ts-expect-error fix later */}\n        <Thead sticky={options.args.stickyHeader}>\n          <Tr>\n            <Th onClick={() => setSortDir(sortDir === 'ASC' ? 'DESC' : 'ASC')} sortDir={sortDir}>\n              Date | Type\n            </Th>\n            <Th {...props}>Change</Th>\n            <Th {...props}>Balance</Th>\n            <Th {...props}>APR</Th>\n            <Th {...props} variant='icon'>\n              <Eth />\n            </Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {Array(5).fill(null).map((item, index) => <Tr key={index}\n        // @ts-expect-error this is a story anyway\n        highlight={isShowTrHighlights ? TrHighlight[index % 3] : undefined}>\n                <Td {...props} onClick={() => void 0}>\n                  01-13-2021\n                  <br />\n                  Stake\n                </Td>\n                <Td {...props}>\n                  + 0.000007452\n                  <br />+ $0.02\n                </Td>\n                <Td {...props}>\n                  10.00038581\n                  <br />\n                  $18,912.80\n                </Td>\n                <Td {...props}>2.4%</Td>\n                <Td {...props} variant='icon'>\n                  <Light />\n                </Td>\n              </Tr>)}\n        </Tbody>\n      </Table>\n    </div>;\n}",...null===(ref1=Base.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}}}]);