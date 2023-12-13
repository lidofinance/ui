"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[3072],{"./packages/main-menu/MainMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>MainMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons=__webpack_require__("./packages/icons/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  margin: 0 46px;\n  display: flex;\n\n  svg {\n    margin-right: 10px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  margin: 0;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  background-color: var(--lido-color-foreground);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-top: 1px solid var(--lido-color-border);\n\n  svg {\n    margin-right: 0;\n    margin-bottom: 7px;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  ","\n  "," {\n    ","\n  }\n\n  z-index: 5;\n"]);return _templateObject2=function _templateObject(){return data},data}var desktopCss=(0,styled_components_wrapper.iv)(_templateObject()),mobileCss=(0,styled_components_wrapper.iv)(_templateObject1()),Nav=styled_components_wrapper.ZP.div(_templateObject2(),desktopCss,(function(param){return param.theme.mediaQueries.md}),mobileCss);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var MainMenu=(0,react.forwardRef)((function(_param,ref){var children=_param.children,rest=_object_without_properties(_param,["children"]);return(0,jsx_runtime.jsx)(Nav,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref},rest),{children}))}));function MainMenuItemStyles_templateObject(){var data=function MainMenuItemStyles_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  cursor: pointer;\n  color: var(--lido-color-secondary);\n  font-size: ","px;\n  line-height: 1.7em;\n  font-weight: 800;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  opacity: ",";\n\n  :hover {\n    opacity: 1;\n    color: var(--lido-color-secondary);\n  }\n\n  :not(:last-of-type) {\n    margin-right: 32px;\n  }\n\n  svg {\n    fill: var(\n      --lido-color-","\n    );\n  }\n\n  "," {\n    flex-direction: column;\n    text-transform: none;\n    font-weight: 500;\n    font-size: ","px;\n    line-height: 1.2em;\n    letter-spacing: 0;\n  }\n"]);return MainMenuItemStyles_templateObject=function _templateObject(){return data},data}MainMenu.displayName="MainMenu";var NavLink=styled_components_wrapper.ZP.a(MainMenuItemStyles_templateObject(),(function(param){return param.theme.fontSizesMap.xxxs}),(function(props){return props.active?1:.8}),(function(param){return param.active?"primary":"secondary"}),(function(param){return param.theme.mediaQueries.md}),(function(param){return param.theme.fontSizesMap.xxxs}));function MainMenuItem_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MainMenuItem_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function MainMenuItem_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function MainMenuItem_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function MainMenuItem_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _Basic_parameters,_Basic_parameters_docs,_Basic_parameters1,MainMenuItem=(0,react.forwardRef)((function(_param,ref){var icon=_param.icon,children=_param.children,active=_param.active,restProps=MainMenuItem_object_without_properties(_param,["icon","children","active"]);return(0,jsx_runtime.jsxs)(NavLink,MainMenuItem_object_spread_props(function MainMenuItem_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){MainMenuItem_define_property(target,key,source[key])}))}return target}({ref,active:Boolean(active)},restProps),{children:[icon,(0,jsx_runtime.jsx)("span",{children})]}))}));function MainMenu_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MainMenu_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){MainMenu_stories_define_property(target,key,source[key])}))}return target}function MainMenu_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function MainMenu_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}MainMenuItem.displayName="MainMenuItem";const MainMenu_stories={component:MainMenu,title:"Layout/MainMenu",args:{active:"stake"},argTypes:{active:{name:"Active link",control:"select",options:["stake","wrap","wallet"]}}};var Basic=function(param){var active=param.active;return(0,jsx_runtime.jsxs)(MainMenu,{children:[(0,jsx_runtime.jsx)(MainMenuItem,{active:"stake"===active,icon:(0,jsx_runtime.jsx)(icons.Stake,{}),children:"Stake"}),(0,jsx_runtime.jsx)(MainMenuItem,{active:"wrap"===active,icon:(0,jsx_runtime.jsx)(icons.Wrap,{}),children:"Wrap"}),(0,jsx_runtime.jsx)(MainMenuItem,{active:"wallet"===active,icon:(0,jsx_runtime.jsx)(icons.Wallet,{}),children:"Wallet"})]})};Basic.parameters=MainMenu_stories_object_spread_props(MainMenu_stories_object_spread({},Basic.parameters),{docs:MainMenu_stories_object_spread_props(MainMenu_stories_object_spread({},null===(_Basic_parameters=Basic.parameters)||void 0===_Basic_parameters?void 0:_Basic_parameters.docs),{source:MainMenu_stories_object_spread({originalSource:"({\n  active\n}) => <MainMenu>\n    <MainMenuItem active={active === 'stake'} icon={<Stake />}>\n      Stake\n    </MainMenuItem>\n    <MainMenuItem active={active === 'wrap'} icon={<Wrap />}>\n      Wrap\n    </MainMenuItem>\n    <MainMenuItem active={active === 'wallet'} icon={<Wallet />}>\n      Wallet\n    </MainMenuItem>\n  </MainMenu>"},null===(_Basic_parameters1=Basic.parameters)||void 0===_Basic_parameters1||null===(_Basic_parameters_docs=_Basic_parameters1.docs)||void 0===_Basic_parameters_docs?void 0:_Basic_parameters_docs.source)})})}}]);