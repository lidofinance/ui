"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[1396],{"./packages/input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccentColor:()=>AccentColor,Basic:()=>Basic,ErrorsOverlapCase:()=>ErrorsOverlapCase,Label:()=>Label,Small:()=>Small,WithButton:()=>WithButton,WithDecorators:()=>WithDecorators,WithError:()=>WithError,WithIdenticon:()=>WithIdenticon,WithSuccess:()=>WithSuccess,WithWarning:()=>WithWarning,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Basic_parameters,_Basic_parameters_docs,_Basic_parameters1,_Small_parameters,_Small_parameters_docs,_Small_parameters1,_Label_parameters,_Label_parameters_docs,_Label_parameters1,_WithDecorators_parameters,_WithDecorators_parameters_docs,_WithDecorators_parameters1,_WithIdenticon_parameters,_WithIdenticon_parameters_docs,_WithIdenticon_parameters1,_WithButton_parameters,_WithButton_parameters_docs,_WithButton_parameters1,_WithError_parameters,_WithError_parameters_docs,_WithError_parameters1,_WithWarning_parameters,_WithWarning_parameters_docs,_WithWarning_parameters1,_WithSuccess_parameters,_WithSuccess_parameters_docs,_WithSuccess_parameters1,_AccentColor_parameters,_AccentColor_parameters_docs,_AccentColor_parameters1,_ErrorsOverlapCase_parameters,_ErrorsOverlapCase_parameters_docs,_ErrorsOverlapCase_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),_icons_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icons/index.tsx"),_block_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block/index.ts"),_button_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/button/index.ts"),_identicon_index_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/identicon/index.ts"),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/index.js"),_modal_Modal_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/modal/Modal.tsx"),_index_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/input/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  fill: var(--lido-color-text);\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  font-weight: 600;\n  font-size: ","px;\n  color: var(--lido-color-success);\n"]);return _templateObject1=function _templateObject(){return data},data}var getOptions=function(enumObject){return Object.values(enumObject).filter((function(value){return"string"==typeof value}))};const __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_8__.II,title:"Controls/Input",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}};var Basic=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props))};Basic.args={placeholder:"Amount",label:"",type:"text"},Basic.argTypes={type:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.n$),control:"inline-radio"},color:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Sl),control:"inline-radio"}};var Small=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props))};Small.args={variant:"small",placeholder:"Amount"},Small.argTypes={variant:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Jf),control:"inline-radio"}};var Label=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props))};Label.args={label:"Email address"},Label.argTypes={color:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Sl),control:"inline-radio"}};var EthIcon=(0,_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.ZP)(_icons_index_js__WEBPACK_IMPORTED_MODULE_2__.Eth)(_templateObject()),MaxButton=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_4__.zx,{variant:"translucent",size:"xxs",style:{marginRight:"-4px"},children:"MAX"})},WithDecorators=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({leftDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EthIcon,{}),rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaxButton,{})},props))};WithDecorators.args={label:"Amount"},WithDecorators.argTypes={color:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Sl),control:"inline-radio"}};var WithIdenticon=function(props){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),2),value=_useState[0],setValue=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread_props(_object_spread({},props),{value,onChange:function(event){var _props_onChange,_props;setValue(event.currentTarget.value),null===(_props_onChange=(_props=props).onChange)||void 0===_props_onChange||_props_onChange.call(_props,event)},rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_identicon_index_js__WEBPACK_IMPORTED_MODULE_5__.bK,{address:String(null!=value?value:"")})}))};WithIdenticon.args={placeholder:"Ethereum address"};var WithButton=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_4__.zx,{size:"sm",style:{marginRight:"-10px"},disabled:props.disabled,children:"Subscribe"})},props))};WithButton.args={fullwidth:!0,label:"Email address"},WithButton.argTypes={color:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Sl),control:"inline-radio"}};var WithError=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props))};WithError.args={fullwidth:!0,defaultValue:"info@lido.",label:"Email address",error:"Email is invalid"},WithError.argTypes={color:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Sl),control:"inline-radio"}};var WithWarning=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props))};WithWarning.args={fullwidth:!0,defaultValue:"10",label:"Token amount",warning:"Amount may be insufficient."};var Success=_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.ZP.span(_templateObject1(),(function(param){return param.theme.fontSizesMap.xs})),WithSuccess=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Success,{children:"Subscribed"})},props))};WithSuccess.args={fullwidth:!0,disabled:!0,defaultValue:"info@lido.fi",success:"Thank you for subscribing! We will notify you once we kick off our platform."};var AccentColor=function(props){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),2),value=_useState[0],setValue=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_block_index_js__WEBPACK_IMPORTED_MODULE_3__.gO,{color:"accent",style:{display:"flex",background:"linear-gradient(60deg, #413e58 20%, #30363f 100%)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread_props(_object_spread({},props),{value,onChange:function(event){var _props_onChange,_props;setValue(event.currentTarget.value),null===(_props_onChange=(_props=props).onChange)||void 0===_props_onChange||_props_onChange.call(_props,event)},rightDecorator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_identicon_index_js__WEBPACK_IMPORTED_MODULE_5__.bK,{address:String(null!=value?value:"")}),color:"accent"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_4__.zx,{style:{marginLeft:12,flexShrink:0},children:"Calculate"})]})};AccentColor.args={fullwidth:!0,label:"",placeholder:"Ethereum address"};var ErrorsOverlapCase=function(props){var _useModal=function(param){var onClose=param.onClose,onBack=param.onBack,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(!1),2),state=_useState[0],setState=_useState[1];return{state,handleOpen:(0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((function(){return setState(!0)}),[]),handleClose:(0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((function(){var _onClose;setState(!1),null===(_onClose=onClose)||void 0===_onClose||_onClose()}),[onClose]),handleBack:(0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((function(){var _onBack;null===(_onBack=onBack)||void 0===_onBack||_onBack()}),[onBack])}}(props),state=_useModal.state,handleOpen=_useModal.handleOpen,handleClose=_useModal.handleClose;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_index_js__WEBPACK_IMPORTED_MODULE_4__.zx,{onClick:handleOpen,children:"Show modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modal_Modal_js__WEBPACK_IMPORTED_MODULE_7__.u,{open:state,onClose:handleClose,title:"Modal Title",subtitle:"",center:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_8__.II,_object_spread({},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})]})]})};ErrorsOverlapCase.args={fullwidth:!0,label:"Email address",error:"Email is invalid"},ErrorsOverlapCase.argTypes={color:{options:getOptions(_index_js__WEBPACK_IMPORTED_MODULE_8__.Sl),control:"inline-radio"}},Basic.parameters=_object_spread_props(_object_spread({},Basic.parameters),{docs:_object_spread_props(_object_spread({},null===(_Basic_parameters=Basic.parameters)||void 0===_Basic_parameters?void 0:_Basic_parameters.docs),{source:_object_spread({originalSource:"props => <Input {...props} />"},null===(_Basic_parameters1=Basic.parameters)||void 0===_Basic_parameters1||null===(_Basic_parameters_docs=_Basic_parameters1.docs)||void 0===_Basic_parameters_docs?void 0:_Basic_parameters_docs.source)})}),Small.parameters=_object_spread_props(_object_spread({},Small.parameters),{docs:_object_spread_props(_object_spread({},null===(_Small_parameters=Small.parameters)||void 0===_Small_parameters?void 0:_Small_parameters.docs),{source:_object_spread({originalSource:"props => <Input {...props} />"},null===(_Small_parameters1=Small.parameters)||void 0===_Small_parameters1||null===(_Small_parameters_docs=_Small_parameters1.docs)||void 0===_Small_parameters_docs?void 0:_Small_parameters_docs.source)})}),Label.parameters=_object_spread_props(_object_spread({},Label.parameters),{docs:_object_spread_props(_object_spread({},null===(_Label_parameters=Label.parameters)||void 0===_Label_parameters?void 0:_Label_parameters.docs),{source:_object_spread({originalSource:"props => <Input {...props} />"},null===(_Label_parameters1=Label.parameters)||void 0===_Label_parameters1||null===(_Label_parameters_docs=_Label_parameters1.docs)||void 0===_Label_parameters_docs?void 0:_Label_parameters_docs.source)})}),WithDecorators.parameters=_object_spread_props(_object_spread({},WithDecorators.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithDecorators_parameters=WithDecorators.parameters)||void 0===_WithDecorators_parameters?void 0:_WithDecorators_parameters.docs),{source:_object_spread({originalSource:"props => <Input leftDecorator={<EthIcon />} rightDecorator={<MaxButton />} {...props} />"},null===(_WithDecorators_parameters1=WithDecorators.parameters)||void 0===_WithDecorators_parameters1||null===(_WithDecorators_parameters_docs=_WithDecorators_parameters1.docs)||void 0===_WithDecorators_parameters_docs?void 0:_WithDecorators_parameters_docs.source)})}),WithIdenticon.parameters=_object_spread_props(_object_spread({},WithIdenticon.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithIdenticon_parameters=WithIdenticon.parameters)||void 0===_WithIdenticon_parameters?void 0:_WithIdenticon_parameters.docs),{source:_object_spread({originalSource:"props => {\n  const [value, setValue] = useState('');\n  return <Input {...props} value={value} onChange={event => {\n    setValue(event.currentTarget.value);\n    props.onChange?.(event);\n  }} rightDecorator={<Identicon address={String(value ?? '')} />} />;\n}"},null===(_WithIdenticon_parameters1=WithIdenticon.parameters)||void 0===_WithIdenticon_parameters1||null===(_WithIdenticon_parameters_docs=_WithIdenticon_parameters1.docs)||void 0===_WithIdenticon_parameters_docs?void 0:_WithIdenticon_parameters_docs.source)})}),WithButton.parameters=_object_spread_props(_object_spread({},WithButton.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithButton_parameters=WithButton.parameters)||void 0===_WithButton_parameters?void 0:_WithButton_parameters.docs),{source:_object_spread({originalSource:"props => <Input rightDecorator={<Button size='sm' style={{\n  marginRight: '-10px'\n}} disabled={props.disabled}>\n        Subscribe\n      </Button>} {...props} />"},null===(_WithButton_parameters1=WithButton.parameters)||void 0===_WithButton_parameters1||null===(_WithButton_parameters_docs=_WithButton_parameters1.docs)||void 0===_WithButton_parameters_docs?void 0:_WithButton_parameters_docs.source)})}),WithError.parameters=_object_spread_props(_object_spread({},WithError.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithError_parameters=WithError.parameters)||void 0===_WithError_parameters?void 0:_WithError_parameters.docs),{source:_object_spread({originalSource:"props => <Input {...props} />"},null===(_WithError_parameters1=WithError.parameters)||void 0===_WithError_parameters1||null===(_WithError_parameters_docs=_WithError_parameters1.docs)||void 0===_WithError_parameters_docs?void 0:_WithError_parameters_docs.source)})}),WithWarning.parameters=_object_spread_props(_object_spread({},WithWarning.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithWarning_parameters=WithWarning.parameters)||void 0===_WithWarning_parameters?void 0:_WithWarning_parameters.docs),{source:_object_spread({originalSource:"props => <Input {...props} />"},null===(_WithWarning_parameters1=WithWarning.parameters)||void 0===_WithWarning_parameters1||null===(_WithWarning_parameters_docs=_WithWarning_parameters1.docs)||void 0===_WithWarning_parameters_docs?void 0:_WithWarning_parameters_docs.source)})}),WithSuccess.parameters=_object_spread_props(_object_spread({},WithSuccess.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithSuccess_parameters=WithSuccess.parameters)||void 0===_WithSuccess_parameters?void 0:_WithSuccess_parameters.docs),{source:_object_spread({originalSource:"props => <Input rightDecorator={<Success>Subscribed</Success>} {...props} />"},null===(_WithSuccess_parameters1=WithSuccess.parameters)||void 0===_WithSuccess_parameters1||null===(_WithSuccess_parameters_docs=_WithSuccess_parameters1.docs)||void 0===_WithSuccess_parameters_docs?void 0:_WithSuccess_parameters_docs.source)})}),AccentColor.parameters=_object_spread_props(_object_spread({},AccentColor.parameters),{docs:_object_spread_props(_object_spread({},null===(_AccentColor_parameters=AccentColor.parameters)||void 0===_AccentColor_parameters?void 0:_AccentColor_parameters.docs),{source:_object_spread({originalSource:"props => {\n  const [value, setValue] = useState('');\n  return <Block color='accent' style={{\n    display: 'flex',\n    background: 'linear-gradient(60deg, #413e58 20%, #30363f 100%)'\n  }}>\n      <Input {...props} value={value} onChange={event => {\n      setValue(event.currentTarget.value);\n      props.onChange?.(event);\n    }} rightDecorator={<Identicon address={String(value ?? '')} />} color='accent' />\n      <Button style={{\n      marginLeft: 12,\n      flexShrink: 0\n    }}>\n        Calculate\n      </Button>\n    </Block>;\n}"},null===(_AccentColor_parameters1=AccentColor.parameters)||void 0===_AccentColor_parameters1||null===(_AccentColor_parameters_docs=_AccentColor_parameters1.docs)||void 0===_AccentColor_parameters_docs?void 0:_AccentColor_parameters_docs.source)})}),ErrorsOverlapCase.parameters=_object_spread_props(_object_spread({},ErrorsOverlapCase.parameters),{docs:_object_spread_props(_object_spread({},null===(_ErrorsOverlapCase_parameters=ErrorsOverlapCase.parameters)||void 0===_ErrorsOverlapCase_parameters?void 0:_ErrorsOverlapCase_parameters.docs),{source:_object_spread({originalSource:"props => {\n  const {\n    state,\n    handleOpen,\n    handleClose\n  } = useModal(props);\n  return <>\n      <Input {...props} />\n      <br />\n      <br />\n      <Input {...props} />\n      <br />\n      <br />\n      <Button onClick={handleOpen}>Show modal</Button>\n      <Modal open={state} onClose={handleClose} title='Modal Title' subtitle='' center={false}>\n        <Input {...props} />\n        <br />\n        <br />\n        <Input {...props} />\n        <br />\n        <br />\n        <br />\n      </Modal>\n    </>;\n}"},null===(_ErrorsOverlapCase_parameters1=ErrorsOverlapCase.parameters)||void 0===_ErrorsOverlapCase_parameters1||null===(_ErrorsOverlapCase_parameters_docs=_ErrorsOverlapCase_parameters1.docs)||void 0===_ErrorsOverlapCase_parameters_docs?void 0:_ErrorsOverlapCase_parameters_docs.source)})})},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gO:()=>Block,SB:()=>BlockColor,pD:()=>BlockVariant});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n    background: var(--lido-color-foreground);\n    color: var(--lido-color-textSecondary);\n  "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n    background: var(--lido-color-background);\n    color: var(--lido-color-textSecondary);\n  "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n    background: var(--lido-color-accent);\n    color: var(--lido-color-accentContrast);\n  "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n    box-shadow: none;\n  "]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n    box-shadow: ","\n      var(--lido-colors-shadowLight);\n  "]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  padding: ","px;\n\n  "," {\n    padding: ","px;\n  }\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n  font-weight: 400;\n  font-size: ","px;\n  line-height: 1.6em;\n  border-radius: ","px;\n  margin: 0;\n\n  ","\n\n  ","\n  ","\n"]);return _templateObject6=function _templateObject(){return data},data}var colors={foreground:(0,styled_components_wrapper.iv)(_templateObject()),background:(0,styled_components_wrapper.iv)(_templateObject1()),accent:(0,styled_components_wrapper.iv)(_templateObject2())},variants={flat:(0,styled_components_wrapper.iv)(_templateObject3()),shadow:(0,styled_components_wrapper.iv)(_templateObject4(),(function(param){return param.theme.boxShadows.lg}))},paddings=(0,styled_components_wrapper.iv)(_templateObject5(),(function(param){return param.theme.spaceMap.xxl}),(function(param){return param.theme.mediaQueries.md}),(function(param){return param.theme.spaceMap.lg})),BlockStyle=styled_components_wrapper.ZP.div(_templateObject6(),(function(param){return param.theme.fontSizesMap.xxs}),(function(param){return param.theme.borderRadiusesMap.xl}),(function(param){return!param.$paddingLess&&paddings}),(function(param){var $variant=param.$variant;return variants[$variant]}),(function(param){var $color=param.$color;return colors[$color]}));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var BlockVariant,BlockColor,Block=(0,react.forwardRef)((function(_param,ref){var _param_color=_param.color,color=void 0===_param_color?"foreground":_param_color,_param_variant=_param.variant,variant=void 0===_param_variant?"flat":_param_variant,_param_paddingLess=_param.paddingLess,paddingLess=void 0!==_param_paddingLess&&_param_paddingLess,rest=_object_without_properties(_param,["color","variant","paddingLess"]);return(0,jsx_runtime.jsx)(BlockStyle,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({$color:color,$variant:variant,$paddingLess:paddingLess,ref},rest))}));Block.displayName="Block",function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))}}]);