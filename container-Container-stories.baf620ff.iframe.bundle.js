"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9205],{"./packages/container/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,PageLayout:()=>PageLayout,default:()=>Container_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),react=__webpack_require__("./node_modules/react/index.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n    max-width: 1424px;\n  "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n    max-width: 960px;\n  "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n    max-width: 560px;\n  "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  box-sizing: border-box;\n  margin: 0 auto;\n  min-width: 320px;\n  width: 100%;\n  padding: 0 ","px;\n\n  "," {\n    padding: 0 ","px;\n  }\n\n  ","\n"]);return _templateObject3=function _templateObject(){return data},data}var sizes={full:(0,styled_components_wrapper.iv)(_templateObject()),content:(0,styled_components_wrapper.iv)(_templateObject1()),tight:(0,styled_components_wrapper.iv)(_templateObject2())},ContainerStyle=styled_components_wrapper.ZP.div(_templateObject3(),(function(param){return param.theme.spaceMap.xxl}),(function(param){return param.theme.mediaQueries.lg}),(function(param){return param.theme.spaceMap.lg}),(function(param){var $size=param.$size;return sizes[$size]}));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ContainerSize,_Base_parameters,_Base_parameters_docs,_Base_parameters1,_PageLayout_parameters,_PageLayout_parameters_docs,_PageLayout_parameters1,Container=(0,react.forwardRef)((function(_param,ref){var _param_size=_param.size,size=void 0===_param_size?"full":_param_size,rest=_object_without_properties(_param,["size"]);return(0,jsx_runtime.jsx)(ContainerStyle,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({$size:size,ref},rest))}));function Container_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Container_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Container_stories_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Container_stories_templateObject(){var data=function Container_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  height: 100px;\n  background: var(--lido-color-foreground);\n  color: var(--lido-color-textSecondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Container_stories_templateObject=function _templateObject(){return data},data}Container.displayName="Container",function(ContainerSize){ContainerSize[ContainerSize.full=0]="full",ContainerSize[ContainerSize.content=1]="content",ContainerSize[ContainerSize.tight=2]="tight"}(ContainerSize||(ContainerSize={}));const Container_stories={component:Container,title:"Layout/Container",parameters:{layout:"fullscreen"}};var enumObject,StyledDiv=styled_components_wrapper.ZP.div(Container_stories_templateObject()),Base=function(props){return(0,jsx_runtime.jsx)(Container,_object_spread_props(Container_stories_object_spread({},props),{children:(0,jsx_runtime.jsx)(StyledDiv,{})}))};Base.args={size:"full"},Base.argTypes={size:{options:(enumObject=ContainerSize,Object.values(enumObject).filter((function(value){return"string"==typeof value}))),control:"inline-radio"}};var PageLayout=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Container,{as:"header",size:"full",children:(0,jsx_runtime.jsx)(StyledDiv,{children:"Header"})}),(0,jsx_runtime.jsx)(Container,{as:"main",size:"content",children:(0,jsx_runtime.jsx)(StyledDiv,{style:{margin:"20px 0",height:"calc(100vh - 240px)"},children:"Content"})}),(0,jsx_runtime.jsx)(Container,{as:"footer",size:"full",children:(0,jsx_runtime.jsx)(StyledDiv,{children:"Footer"})})]})};Base.parameters=_object_spread_props(Container_stories_object_spread({},Base.parameters),{docs:_object_spread_props(Container_stories_object_spread({},null===(_Base_parameters=Base.parameters)||void 0===_Base_parameters?void 0:_Base_parameters.docs),{source:Container_stories_object_spread({originalSource:"props => <Container {...props}>\n    <StyledDiv />\n  </Container>"},null===(_Base_parameters1=Base.parameters)||void 0===_Base_parameters1||null===(_Base_parameters_docs=_Base_parameters1.docs)||void 0===_Base_parameters_docs?void 0:_Base_parameters_docs.source)})}),PageLayout.parameters=_object_spread_props(Container_stories_object_spread({},PageLayout.parameters),{docs:_object_spread_props(Container_stories_object_spread({},null===(_PageLayout_parameters=PageLayout.parameters)||void 0===_PageLayout_parameters?void 0:_PageLayout_parameters.docs),{source:Container_stories_object_spread({originalSource:"() => <>\n    <Container as='header' size='full'>\n      <StyledDiv>Header</StyledDiv>\n    </Container>\n    <Container as='main' size='content'>\n      <StyledDiv style={{\n      margin: '20px 0',\n      height: 'calc(100vh - 240px)'\n    }}>\n        Content\n      </StyledDiv>\n    </Container>\n    <Container as='footer' size='full'>\n      <StyledDiv>Footer</StyledDiv>\n    </Container>\n  </>"},null===(_PageLayout_parameters1=PageLayout.parameters)||void 0===_PageLayout_parameters1||null===(_PageLayout_parameters_docs=_PageLayout_parameters1.docs)||void 0===_PageLayout_parameters_docs?void 0:_PageLayout_parameters_docs.source)})})}}]);