"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[3072],{"./packages/main-menu/MainMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>MainMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons=__webpack_require__("./packages/icons/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const desktopCss=styled_components_wrapper.iv`
  margin: 0 46px;
  display: flex;

  svg {
    margin-right: 10px;
  }
`,mobileCss=styled_components_wrapper.iv`
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
`,Nav=styled_components_wrapper.ZP.div`
  ${desktopCss}
  ${({theme})=>theme.mediaQueries.md} {
    ${mobileCss}
  }

  z-index: 5;
`,MainMenu=(0,react.forwardRef)((({children,...rest},ref)=>(0,jsx_runtime.jsx)(Nav,{ref,...rest,children})));MainMenu.displayName="MainMenu";const NavLink=styled_components_wrapper.ZP.a`
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
`,MainMenuItem=(0,react.forwardRef)((({icon,children,active,...restProps},ref)=>(0,jsx_runtime.jsxs)(NavLink,{ref,active:Boolean(active),...restProps,children:[icon,(0,jsx_runtime.jsx)("span",{children})]})));var ref,ref1,ref2;MainMenuItem.displayName="MainMenuItem";const MainMenu_stories={component:MainMenu,title:"Layout/MainMenu",args:{active:"stake"},argTypes:{active:{name:"Active link",control:"select",options:["stake","wrap","wallet"]}}},Basic=({active})=>(0,jsx_runtime.jsxs)(MainMenu,{children:[(0,jsx_runtime.jsx)(MainMenuItem,{active:"stake"===active,icon:(0,jsx_runtime.jsx)(icons.Stake,{}),children:"Stake"}),(0,jsx_runtime.jsx)(MainMenuItem,{active:"wrap"===active,icon:(0,jsx_runtime.jsx)(icons.Wrap,{}),children:"Wrap"}),(0,jsx_runtime.jsx)(MainMenuItem,{active:"wallet"===active,icon:(0,jsx_runtime.jsx)(icons.Wallet,{}),children:"Wallet"})]});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"({\n  active\n}) => <MainMenu>\n    <MainMenuItem active={active === 'stake'} icon={<Stake />}>\n      Stake\n    </MainMenuItem>\n    <MainMenuItem active={active === 'wrap'} icon={<Wrap />}>\n      Wrap\n    </MainMenuItem>\n    <MainMenuItem active={active === 'wallet'} icon={<Wallet />}>\n      Wallet\n    </MainMenuItem>\n  </MainMenu>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}}}]);