"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[6904],{"./packages/input/SliderInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SliderInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/SliderInput.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_SliderInput__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Controls/SliderInput",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1e5);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SliderInput__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,value,onChange:e=>setValue(Number(e.target.value)),getLabel:value=>`${value} DOT`,minLabel:"0 DOT",maxLabel:"1000000 DOT",max:1e6})};Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState(100000);\n  return <SliderInput {...props} value={value} onChange={e => setValue(Number(e.target.value))} getLabel={value => `${value} DOT`} minLabel={'0 DOT'} maxLabel={'1000000 DOT'} max={1000000} />;\n}",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/input/SliderInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>input_SliderInput});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const RangeInputSlider=styled_components_browser_esm.ZP.input.attrs({type:"range"})`
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
    box-shadow:
      0 0.5px 4px rgba(0, 0, 0, 0.12),
      0 6px 13px rgba(0, 0, 0, 0.12);
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

  ${props=>props.borderNone&&"\n    background: none;\n    "};

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

  ${props=>props.borderNone&&"\n    border-right: none;\n    border-left: none;\n    border-top: none;\n    "};

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
`,LabelButton=styled_components_browser_esm.ZP.button`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
  cursor: pointer;
`;const input_SliderInput=function SliderInput({value,onChange,onLabelClick,min=0,max=100,step=1,minLabel,maxLabel,getLabel=val=>String(val),borderNone,labels}){const fillPercentage=(value-min)/(max-min)*100,LabelComponent=onLabelClick?LabelButton:Label,createClickHandler=value=>()=>null==onLabelClick?void 0:onLabelClick(value);return(0,jsx_runtime.jsxs)(SliderWrapper,{children:[(0,jsx_runtime.jsxs)(Slider,{borderNone,children:[getLabel(value),(0,jsx_runtime.jsx)(Track,{fillPercentage,borderNone})]}),(0,jsx_runtime.jsx)(RangeInputSlider,{value,step,onChange,min,max}),(0,jsx_runtime.jsxs)(LabelContainer,{children:[minLabel&&(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(min),children:minLabel}),null==labels?void 0:labels.map((({value,label})=>(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(value),children:label},value))),maxLabel&&(0,jsx_runtime.jsx)(LabelComponent,{onClick:createClickHandler(max),children:maxLabel})]})]})}}}]);