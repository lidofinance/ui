"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9867],{"./packages/section/Section.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HeaderDecorator:()=>HeaderDecorator,HeaderStyleOverride:()=>HeaderStyleOverride,default:()=>Section_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),block=__webpack_require__("./packages/block/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const SectionStyle=styled_components_wrapper.ZP.section`
  margin: ${({theme})=>theme.spaceMap.xxl}px 0;
`,SectionHeaderStyle=styled_components_wrapper.ZP.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({theme})=>theme.fontSizesMap.xxs}px;
`,SectionTitleStyle=styled_components_wrapper.ZP.h2`
  margin-right: auto;
  font-weight: 800;
  font-size: ${({theme})=>theme.fontSizesMap.md}px;
  line-height: 1.3em;
`,SectionHeaderDecoratorStyle=styled_components_wrapper.ZP.div`
  margin-left: ${({theme})=>theme.spaceMap.lg}px;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.5em;
`,Section=(0,react.forwardRef)((({title,headerDecorator,children,...rest},ref)=>(0,jsx_runtime.jsxs)(SectionStyle,{...rest,ref,children:[title&&(0,jsx_runtime.jsxs)(SectionHeaderStyle,{children:[(0,jsx_runtime.jsx)(SectionTitleStyle,{children:title}),headerDecorator&&(0,jsx_runtime.jsx)(SectionHeaderDecoratorStyle,{children:headerDecorator})]}),children]})));var ref,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8;Section.displayName="Section";const Section_stories={component:Section,title:"Layout/Section",args:{title:"Section"}},Basic=props=>(0,jsx_runtime.jsx)(Section,{...props,children:(0,jsx_runtime.jsx)(block.gO,{children:"Example content"})}),HeaderDecorator=props=>(0,jsx_runtime.jsx)(Section,{...props,headerDecorator:(0,jsx_runtime.jsx)("a",{href:"https://lido.fi/",target:"_blank",rel:"noreferrer",children:"Lido link"}),children:(0,jsx_runtime.jsx)(block.gO,{children:"Example content"})}),H2OverrideStyled=styled_components_wrapper.ZP.div`
  h2 {
    margin: 0 auto 0 0;
    padding: 0;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.3em;
  }
`,HeaderStyleOverride=props=>(0,jsx_runtime.jsx)(H2OverrideStyled,{children:(0,jsx_runtime.jsx)(Section,{...props,headerDecorator:(0,jsx_runtime.jsx)("a",{href:"https://lido.fi/",target:"_blank",rel:"noreferrer",children:"Lido link"}),children:(0,jsx_runtime.jsx)(block.gO,{children:"H2 style overridden"})})});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Section {...props}>\n    <Block>Example content</Block>\n  </Section>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},HeaderDecorator.parameters={...HeaderDecorator.parameters,docs:{...null===(ref3=HeaderDecorator.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <Section {...props} headerDecorator={<a href={'https://lido.fi/'} target={'_blank'} rel={'noreferrer'}>\n        Lido link\n      </a>}>\n    <Block>Example content</Block>\n  </Section>",...null===(ref4=HeaderDecorator.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}},HeaderStyleOverride.parameters={...HeaderStyleOverride.parameters,docs:{...null===(ref6=HeaderStyleOverride.parameters)||void 0===ref6?void 0:ref6.docs,source:{originalSource:"props => <H2OverrideStyled>\n    <Section {...props} headerDecorator={<a href={'https://lido.fi/'} target={'_blank'} rel={'noreferrer'}>\n          Lido link\n        </a>}>\n      <Block>H2 style overridden</Block>\n    </Section>\n  </H2OverrideStyled>",...null===(ref7=HeaderStyleOverride.parameters)||void 0===ref7||null===(ref8=ref7.docs)||void 0===ref8?void 0:ref8.source}}}},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gO:()=>Block,SB:()=>BlockColor,pD:()=>BlockVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const colors={foreground:styled_components_wrapper.iv`
    background: var(--lido-color-foreground);
    color: var(--lido-color-textSecondary);
  `,background:styled_components_wrapper.iv`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,accent:styled_components_wrapper.iv`
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
  `},variants={flat:styled_components_wrapper.iv`
    box-shadow: none;
  `,shadow:styled_components_wrapper.iv`
    box-shadow: ${({theme})=>theme.boxShadows.lg}
      var(--lido-colors-shadowLight);
  `},paddings=styled_components_wrapper.iv`
  padding: ${({theme})=>theme.spaceMap.xxl}px;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
  }
`,BlockStyle=styled_components_wrapper.ZP.div`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
  margin: 0;

  ${({$paddingLess})=>!$paddingLess&&paddings}

  ${({$variant})=>variants[$variant]}
  ${({$color})=>colors[$color]}
`,Block=(0,react.forwardRef)((({color="foreground",variant="flat",paddingLess=!1,...rest},ref)=>(0,jsx_runtime.jsx)(BlockStyle,{$color:color,$variant:variant,$paddingLess:paddingLess,ref,...rest})));var BlockVariant,BlockColor;Block.displayName="Block",function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))}}]);