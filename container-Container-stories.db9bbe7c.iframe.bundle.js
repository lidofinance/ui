"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9205],{"./packages/container/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,PageLayout:()=>PageLayout,default:()=>Container_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),react=__webpack_require__("./node_modules/react/index.js");const sizes={full:styled_components_wrapper.iv`
    max-width: 1424px;
  `,content:styled_components_wrapper.iv`
    max-width: 960px;
  `,tight:styled_components_wrapper.iv`
    max-width: 560px;
  `},ContainerStyle=styled_components_wrapper.ZP.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 ${({theme})=>theme.spaceMap.xxl}px;

  ${({theme})=>theme.mediaQueries.lg} {
    padding: 0 ${({theme})=>theme.spaceMap.lg}px;
  }

  ${({$size})=>sizes[$size]}
`,Container=(0,react.forwardRef)((({size="full",...rest},ref)=>(0,jsx_runtime.jsx)(ContainerStyle,{$size:size,ref,...rest})));var ContainerSize,ref,ref1,ref2,ref3,ref4,ref5;Container.displayName="Container",function(ContainerSize){ContainerSize[ContainerSize.full=0]="full",ContainerSize[ContainerSize.content=1]="content",ContainerSize[ContainerSize.tight=2]="tight"}(ContainerSize||(ContainerSize={}));const Container_stories={component:Container,title:"Layout/Container",parameters:{layout:"fullscreen"}},StyledDiv=styled_components_wrapper.ZP.div`
  height: 100px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-textSecondary);
  display: flex;
  align-items: center;
  justify-content: center;
`,Base=props=>(0,jsx_runtime.jsx)(Container,{...props,children:(0,jsx_runtime.jsx)(StyledDiv,{})});var enumObject;Base.args={size:"full"},Base.argTypes={size:{options:(enumObject=ContainerSize,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio"}};const PageLayout=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Container,{as:"header",size:"full",children:(0,jsx_runtime.jsx)(StyledDiv,{children:"Header"})}),(0,jsx_runtime.jsx)(Container,{as:"main",size:"content",children:(0,jsx_runtime.jsx)(StyledDiv,{style:{margin:"20px 0",height:"calc(100vh - 240px)"},children:"Content"})}),(0,jsx_runtime.jsx)(Container,{as:"footer",size:"full",children:(0,jsx_runtime.jsx)(StyledDiv,{children:"Footer"})})]});Base.parameters={...Base.parameters,docs:{...null===(ref=Base.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Container {...props}>\n    <StyledDiv />\n  </Container>",...null===(ref1=Base.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},PageLayout.parameters={...PageLayout.parameters,docs:{...null===(ref3=PageLayout.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"() => <>\n    <Container as='header' size='full'>\n      <StyledDiv>Header</StyledDiv>\n    </Container>\n    <Container as='main' size='content'>\n      <StyledDiv style={{\n      margin: '20px 0',\n      height: 'calc(100vh - 240px)'\n    }}>\n        Content\n      </StyledDiv>\n    </Container>\n    <Container as='footer' size='full'>\n      <StyledDiv>Footer</StyledDiv>\n    </Container>\n  </>",...null===(ref4=PageLayout.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}}}}]);