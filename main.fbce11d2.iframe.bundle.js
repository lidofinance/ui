(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{argTypes:()=>argTypes,args:()=>args,decorators:()=>decorators,parameters:()=>parameters});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./packages/theme/index.ts");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  body {\n    padding: 0 !important;\n    display: flex;\n  }\n\n  html, body, #root {\n    min-height: 100vh;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyle=(0,styled_components_browser_esm.vJ)(_templateObject()),chunk_6P7RB4HF=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),themes_constructor=function(base,theme){return{base,colorPrimary:theme.colors.primary,appBg:theme.colors.background,appContentBg:theme.colors.background,appBorderRadius:8,fontBase:"Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",textColor:theme.colors.text,inputBorderRadius:8,brandTitle:"Lido UI",brandImage:"/images/lido-".concat(base,".svg")}},light=(0,chunk_6P7RB4HF.Ue)(themes_constructor("light",theme.Qp));const themes={darkMode:{dark:(0,chunk_6P7RB4HF.Ue)(themes_constructor("dark",theme.Hx)),light}};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var breakpointsMap=theme.rv.breakpointsMap,themeViewports=Object.keys(breakpointsMap).reduce((function(viewports,breakpoint){return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},viewports),_define_property({},breakpoint,{name:breakpoint,styles:breakpointsMap[breakpoint]}))}),{});function preview_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var parameters=function preview_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function preview_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function preview_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){preview_define_property(target,key,source[key])}))}return target}({},themes,{viewport:{viewports:themeViewports}}),{controls:{hideNoControlsWarning:!0}}),args={themeOverride:"light"},argTypes={themeOverride:{control:"inline-radio",options:["dark","light","follow cookie and system"]}},decorators=[function(Story,param){var args=param.args;return(0,jsx_runtime.jsxs)(theme.Zm,{overrideThemeName:"follow cookie and system"===args.themeOverride?void 0:args.themeOverride,children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)("div",{style:{minHeight:"100vh",color:"var(--lido-color-text)",padding:"1em",background:"var(--lido-color-background)"},children:(0,jsx_runtime.jsx)(Story,{})})]})}]},"./packages/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zm:()=>CookieThemeProvider,DD:()=>DarkThemeProvider,Mq:()=>LightThemeProvider,f6:()=>ThemeProvider,Hx:()=>themeDark,rv:()=>themeDefault,Qp:()=>themeLight,M1:()=>useThemeToggle});var _window_matchMedia,_window,constants_ThemeName,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");!function(ThemeName){ThemeName.light="light",ThemeName.dark="dark"}(constants_ThemeName||(constants_ThemeName={}));var DEFAULT_THEME_NAME=constants_ThemeName.light,prefersDarkThemeMediaQuery="undefined"!=typeof window?null===(_window_matchMedia=(_window=window).matchMedia)||void 0===_window_matchMedia?void 0:_window_matchMedia.call(_window,"(prefers-color-scheme: dark)"):void 0;const base_colors={colors:{darkThemeOpacity:"0",lightThemeOpacity:"1",lightModeVisibility:"visible",darkModeVisibility:"hidden",lightDisplay:"initial",darkDisplay:"none",primary:"#00a3ff",primaryHover:"#009bf2",primaryContrast:"#fff",primaryVisited:"#4bbeff",accent:"#27272e",accentContrast:"#fff",accentContrastSecondary:"rgba(255, 255, 255, 0.6)",accentDarken:"rgba(0, 0, 0, .2)",accentControlBg:"rgba(0, 0, 0, .1)",accentBorder:"rgba(255, 255, 255, 0.2)",accentBorderHover:"rgba(255, 255, 255, 0.3)",error:"#e14d4d",errorHover:"#d44c4d",errorContrast:"#fff",warning:"#EC8600",warningHover:"#f0a431",warningContrast:"#fff",warningBackground:"#FFFAE0",textDark:"#273852",success:"#53BA95",successHover:"#4ba886",successContrast:"#fff"}};var sm={width:"359px",height:"639px"},md={width:"479px",height:"799px"},lg={width:"767px",height:"1023px"},xl={width:"1023px",height:"1365px"},mediaQueries={sm:"@media screen and (max-width: ".concat(sm.width,")"),md:"@media screen and (max-width: ".concat(md.width,")"),lg:"@media screen and (max-width: ".concat(lg.width,")"),xl:"@media screen and (max-width: ".concat(xl.width,")")};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const base=function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},{space:[4,8,16,24,32],spaceMap:{xs:4,sm:8,md:16,lg:20,xl:24,xxl:32}},{breakpoints:[sm.width,md.width,lg.width,xl.width],breakpointsMap:{sm,md,lg,xl},mediaQueries},base_colors,{duration:{fast:"100ms",med:"150ms",norm:"200ms"},ease:{inSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",outSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",inOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",inQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",outQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",inOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",inCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",outCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",inOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",inQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",outQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",inOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",inQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",outQuint:"cubic-bezier(0.23, 1, 0.32, 1)",inOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",inExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",outExpo:"cubic-bezier(0.19, 1, 0.22, 1)",inOutExpo:"cubic-bezier(1, 0, 0, 1)",inCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",outCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",inOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",inBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",outBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",inOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{fontSizes:[10,12,14,16,18,20,26,32,40,50],fontSizesMap:{xxxs:10,xxs:12,xs:14,sm:16,md:18,lg:20,xl:26,xxl:32,xxxl:40,xxxxl:50}},{borderRadiuses:[4,6,8,10,12],borderRadiusesMap:{xs:4,sm:6,md:8,lg:10,xl:20}},{boxShadows:{xs:"0px 4px 8px 0px",sm:"0px 4px 12px 0px",md:"0px 4px 16px 0px",lg:"0px 8px 24px 0px",xl:"0px 8px 32px 0px",xxl:"0px 8px 44px 0px"}});function themes_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function themes_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){themes_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var _obj,themeLight=_object_spread_props(themes_object_spread({},base),{name:constants_ThemeName.light,colors:_object_spread_props(themes_object_spread({},base.colors),{darkThemeOpacity:"0",lightThemeOpacity:"1",lightModeVisibility:"visible",darkModeVisibility:"hidden",lightDisplay:"initial",darkDisplay:"none",secondary:"#273852",secondaryHover:"#212f45",secondaryContrast:"#fff",background:"#f2f4f6",backgroundDarken:"#dae0e5",backgroundSecondary:"#EFF2F6",foreground:"#fff",overlay:"rgba(0, 0, 0, 0.5)",shadowLight:"rgba(39, 56, 82, 0.08)",shadowDark:"rgba(0, 0, 0, .25)",text:"#273852",textSecondary:"#7a8aa0",accentText:"#273852",border:"rgba(0, 10, 61, 0.12)",borderActive:"rgba(0, 10, 61, 0.48)",borderHover:"rgba(0, 10, 61, 0.24)",borderLight:"#dfe5eb",accentBorder:"rgba(0, 10, 61, 0.12)",accentBorderHover:"rgba(0, 10, 61, 0.24)",controlBg:"#fff",accentControlBg:"rgba(239, 242, 246, 0.56)",popupMenuItemBgActiveHover:"#000a3d"})}),themeDark=_object_spread_props(themes_object_spread({},base),{name:constants_ThemeName.dark,colors:_object_spread_props(themes_object_spread({},base.colors),{darkThemeOpacity:"1",lightThemeOpacity:"0",lightModeVisibility:"hidden",darkModeVisibility:"visible",lightDisplay:"none",darkDisplay:"initial",secondary:"rgba(255, 255, 255, .8)",secondaryHover:"#fff",secondaryContrast:"#273852",background:"#1c1c21",backgroundDarken:"#131317",backgroundSecondary:"#27272E",foreground:"#34343d",overlay:"rgba(0, 0, 0, 0.5)",shadowLight:"rgba(0, 0, 0, .25)",shadowDark:"rgba(0, 0, 0, .5)",text:"#fff",textSecondary:"rgba(255, 255, 255, .8)",accentText:"#fff",border:"rgba(255, 255, 255, 0.12)",borderActive:"rgba(255, 255, 255, 0.48)",borderHover:"rgba(255, 255, 255, 0.24)",borderLight:"#484855",accentBorder:"rgba(255, 255, 255, 0.12)",accentBorderHover:"rgba(255, 255, 255, 0.24)",controlBg:"#2f2f37",accentControlBg:"rgba(39, 39, 46, 0.56)",popupMenuItemBgActiveHover:"#fff"})}),themeMap=(themes_define_property(_obj={},constants_ThemeName.light,themeLight),themes_define_property(_obj,constants_ThemeName.dark,themeDark),_obj),reverseThemeMap=new WeakMap([[themeLight,constants_ThemeName.light],[themeDark,constants_ThemeName.dark]]),themeDefault=themeLight,cookieThemeMatcher=new RegExp("(^| )".concat("lido-theme-manual","=([^;]+)")),getThemeNameFromCookies=function(){var _document_cookie_match,_ref;return"undefined"==typeof window?null:null!==(_ref=null===(_document_cookie_match=document.cookie.match(cookieThemeMatcher))||void 0===_document_cookie_match?void 0:_document_cookie_match[2])&&void 0!==_ref?_ref:null};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var generateCssColorVariables=function(colors){return _to_consumable_array(Object.keys(colors)).map((function(key){var color=colors[key],rgb=function(color){switch(!0){case/^#[\da-fA-F]{3}$/.test(color):return[color.slice(1,2)+color.slice(1,2),color.slice(2,3)+color.slice(2,3),color.slice(3,4)+color.slice(3,4)].map((function(val){return parseInt(val,16)}));case/^#[\da-fA-F]{6}$/.test(color):return[color.slice(1,3),color.slice(3,5),color.slice(5,7)].map((function(val){return parseInt(val,16)}));case/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(color):return color.replace(/^.*\((.*)\).*$/,"$1").split(",").map((function(n){return parseInt(n)})).slice(0,3);default:return null}}(color);return rgb?"--lido-color-".concat(key,": ").concat(color,";\n--lido-rgb-").concat(key,": ").concat(rgb[0],",").concat(rgb[1],",").concat(rgb[2],";\n"):"--lido-color-".concat(key,": ").concat(color,";\n")})).join("")},utils=__webpack_require__("./packages/utils/index.ts");var darkThemeColors=generateCssColorVariables(themeDark.colors),lightThemeColors=generateCssColorVariables(themeLight.colors),initGlobalColors=utils.FX,themeCSSValueString="\nhtml, [data-lido-theme='".concat(constants_ThemeName.light,"'] {\ncolor-theme: light;\n").concat(lightThemeColors,"\n}\n@media (prefers-color-scheme: dark) {\nhtml:not([data-lido-theme='").concat(constants_ThemeName.light,"']) { \ncolor-theme: dark;\n").concat(darkThemeColors," \n}\n}\n[data-lido-theme='").concat(constants_ThemeName.dark,"'] {\ncolor-theme: dark;\n").concat(darkThemeColors,"\n}");"undefined"!=typeof window&&(document.querySelector("style[".concat("data-lido-ui-global-style","]"))||(initGlobalColors=function(){var style=document.createElement("style");style.setAttribute("data-lido-ui-global-style",""),style.innerHTML=themeCSSValueString,document.head.appendChild(style),initGlobalColors=utils.FX}));var parser=new(__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js").UAParser),setSecureCookie=function(cookie){var _parser_getBrowser_name,_parser_getBrowser;"safari"===(null===(_parser_getBrowser=parser.getBrowser())||void 0===_parser_getBrowser||null===(_parser_getBrowser_name=_parser_getBrowser.name)||void 0===_parser_getBrowser_name?void 0:_parser_getBrowser_name.toLowerCase())&&"https:"!==window.location.protocol?document.cookie=cookie:document.cookie="".concat(cookie,"Secure;")},themeScriptValueString=function themeScriptValueString(key){if(!window.matchMedia)return function(){};var match=window.matchMedia("(prefers-color-scheme: dark)"),setTheme=function(){var _document_cookie_match,_ref,cookieMatcher=new RegExp("(^| )".concat(key,"=([^;]+)")),themeCookie=null!==(_ref=null===(_document_cookie_match=document.cookie.match(cookieMatcher))||void 0===_document_cookie_match?void 0:_document_cookie_match[2])&&void 0!==_ref?_ref:null;themeCookie?document.documentElement.dataset.lidoTheme=themeCookie:delete document.documentElement.dataset.lidoTheme};return setTheme(),match.addEventListener("change",setTheme),setTheme},updateGlobalTheme=utils.FX,initGlobalCookieTheme="undefined"==typeof window?utils.FX:function(){var setTheme=themeScriptValueString("lido-theme-manual");initGlobalCookieTheme=utils.FX,updateGlobalTheme=function(theme){!function(theme){var cookie="".concat("lido-theme-manual","=").concat(theme,";max-age=").concat(31536e3,";path=/;samesite=None;");setSecureCookie("".concat(cookie,"domain=").concat((0,utils.f6)(),";")),document.cookie.includes("".concat("lido-theme-manual","=").concat(theme))||setSecureCookie(cookie)}(theme),setTheme()}},initColors=function(){initGlobalColors(),initGlobalCookieTheme()};function cookie_theme_provider_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function cookie_theme_provider_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return cookie_theme_provider_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cookie_theme_provider_array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var defaultThemeContext={},ThemeToggleContext=(0,react.createContext)(defaultThemeContext);initColors();var CookieThemeProvider=(0,react.memo)((function(param){var children=param.children,initialThemeName=param.initialThemeName,overrideThemeName=param.overrideThemeName,parentTheme=(0,react.useContext)(ThemeToggleContext),isTopLevelProvider=0===Object.keys(parentTheme).length,_useState=_sliced_to_array((0,react.useState)(initialThemeName||DEFAULT_THEME_NAME),2),internalThemeName=_useState[0],setThemeName=_useState[1],themeName=parentTheme.themeName||internalThemeName,theme=themeMap[themeName];(0,react.useEffect)((function(){var _prefersDarkThemeMediaQuery;if(isTopLevelProvider){var setTheme=function(){var _prefersDarkThemeMediaQuery,systemThemeName=(null===(_prefersDarkThemeMediaQuery=prefersDarkThemeMediaQuery)||void 0===_prefersDarkThemeMediaQuery?void 0:_prefersDarkThemeMediaQuery.matches)?constants_ThemeName.dark:constants_ThemeName.light,themeNameCookie=getThemeNameFromCookies(),newThemeName=overrideThemeName||themeNameCookie||initialThemeName||systemThemeName||DEFAULT_THEME_NAME;setThemeName(newThemeName),document.documentElement.dataset.lidoTheme=newThemeName};null===(_prefersDarkThemeMediaQuery=prefersDarkThemeMediaQuery)||void 0===_prefersDarkThemeMediaQuery||_prefersDarkThemeMediaQuery.addEventListener("change",setTheme),setTheme();var checkCookieThemeWasChanged=function(){var themeNameCookie=getThemeNameFromCookies();!themeNameCookie||themeNameCookie!==constants_ThemeName.dark&&themeNameCookie!==constants_ThemeName.light||setThemeName(themeNameCookie)};return window.addEventListener("focus",checkCookieThemeWasChanged),function(){window.removeEventListener("focus",checkCookieThemeWasChanged)}}}),[initialThemeName,isTopLevelProvider,overrideThemeName,parentTheme,theme]);var value=(0,react.useMemo)((function(){return{themeName,toggleTheme:function toggleTheme(){setThemeName((function(themeName){var newThemeName=themeName===constants_ThemeName.light?constants_ThemeName.dark:constants_ThemeName.light;return updateGlobalTheme(newThemeName),newThemeName}))}}}),[themeName]);return isTopLevelProvider?(0,jsx_runtime.jsx)(ThemeToggleContext.Provider,{value,children:(0,jsx_runtime.jsx)(styled_components_wrapper.f6,{theme,children})}):overrideThemeName?(0,jsx_runtime.jsx)("div",{style:{display:"contents"},"data-lido-theme":themeName,children:(0,jsx_runtime.jsx)(styled_components_wrapper.f6,{theme,children})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})}));function theme_provider_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function theme_provider_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){theme_provider_define_property(target,key,source[key])}))}return target}function theme_provider_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function theme_provider_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: contents;\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}CookieThemeProvider.displayName="CookieThemeProvider",initColors();var StyledWrapper=styled_components_wrapper.ZP.div(_templateObject(),(function(param){var colors=param.colors;return colors?generateCssColorVariables(colors):null})),ThemeProvider=function(_param){var _param_theme=_param.theme,theme=void 0===_param_theme?themeDefault:_param_theme,children=_param.children,rest=_object_without_properties(_param,["theme","children"]),internalThemeName=reverseThemeMap.get(theme),props=internalThemeName?{"data-lido-theme":internalThemeName}:{colors:theme.colors};return(0,jsx_runtime.jsx)(StyledWrapper,theme_provider_object_spread_props(theme_provider_object_spread({},props),{children:(0,jsx_runtime.jsx)(styled_components_wrapper.f6,theme_provider_object_spread_props(theme_provider_object_spread({theme},rest),{children}))}))},LightThemeProvider=function(props){return(0,jsx_runtime.jsx)(ThemeProvider,theme_provider_object_spread_props(theme_provider_object_spread({},props),{theme:themeLight}))},DarkThemeProvider=function(props){return(0,jsx_runtime.jsx)(ThemeProvider,theme_provider_object_spread_props(theme_provider_object_spread({},props),{theme:themeDark}))},useThemeToggle=function(){return(0,react.useContext)(ThemeToggleContext)}},"./packages/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{FX:()=>VOID_FN,Vp:()=>getCrossDomainCookieClientSide,f6:()=>getTopLevelDomain,cV:()=>modalRoot,YD:()=>setCrossDomainCookieClientSide,bS:()=>setDomainCookieClientSide});var ModalRoot=function(){try{var modalRoot=document.getElementById("lido-ui-modal-root");return modalRoot||((modalRoot=document.createElement("div")).id="lido-ui-modal-root",document.body.append(modalRoot)),modalRoot}catch(error){return null}}();const modalRoot=ModalRoot;var getTopLevelDomain="undefined"==typeof window?function(){return"localhost"}:function(){return 0===document.location.host.indexOf("localhost")?"localhost":".".concat(location.hostname.split(".").slice(-2).join("."))},parser=new(__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js").UAParser),setSecureCookie=function(cookie){var _parser_getBrowser_name,_parser_getBrowser;"safari"===(null===(_parser_getBrowser=parser.getBrowser())||void 0===_parser_getBrowser||null===(_parser_getBrowser_name=_parser_getBrowser.name)||void 0===_parser_getBrowser_name?void 0:_parser_getBrowser_name.toLowerCase())&&"https:"!==window.location.protocol?document.cookie=cookie:document.cookie="".concat(cookie,"Secure;")},prepareForCookingCookie=function(key,value){var expire=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365;return"".concat(key,"=").concat(value,";expires=").concat(expire,";path=/;samesite=None;")},setCrossDomainCookieClientSide=function(key,value){"undefined"!=typeof window&&setSecureCookie("".concat(prepareForCookingCookie(key,value,arguments.length>2&&void 0!==arguments[2]?arguments[2]:365),"domain=").concat(getTopLevelDomain(),";"))},setDomainCookieClientSide=function(key,value){"undefined"!=typeof window&&setSecureCookie(prepareForCookingCookie(key,value,arguments.length>2&&void 0!==arguments[2]?arguments[2]:365))},getCrossDomainCookieClientSide=function(key){var _document_cookie_match;if("undefined"==typeof window)return null;var _ref,cookieMatcher=new RegExp("(^| )".concat(key,"=([^;]+)"));return null!==(_ref=null===(_document_cookie_match=document.cookie.match(cookieMatcher))||void 0===_document_cookie_match?void 0:_document_cookie_match[2])&&void 0!==_ref?_ref:null},VOID_FN=function(){}},"./packages/utils/styled-components-wrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F4:()=>styled_components__WEBPACK_IMPORTED_MODULE_0__.F4,Fg:()=>styled_components__WEBPACK_IMPORTED_MODULE_0__.Fg,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,f6:()=>styled_components__WEBPACK_IMPORTED_MODULE_0__.f6,iv:()=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.default||styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP},"./packages lazy recursive ^\\.\\/.*$ include: (?:\\/packages(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./accordion/Accordion.stories":["./packages/accordion/Accordion.stories.tsx",1639,8192],"./accordion/Accordion.stories.tsx":["./packages/accordion/Accordion.stories.tsx",1639,8192],"./address/Address.stories":["./packages/address/Address.stories.tsx",7851],"./address/Address.stories.tsx":["./packages/address/Address.stories.tsx",7851],"./addressBadge/AddressBadge.stories":["./packages/addressBadge/AddressBadge.stories.tsx",5217,9668],"./addressBadge/AddressBadge.stories.tsx":["./packages/addressBadge/AddressBadge.stories.tsx",5217,9668],"./block/Block.stories":["./packages/block/Block.stories.tsx",3641],"./block/Block.stories.tsx":["./packages/block/Block.stories.tsx",3641],"./box/Box.stories":["./packages/box/Box.stories.tsx",5396,3611],"./box/Box.stories.tsx":["./packages/box/Box.stories.tsx",5396,3611],"./button/Button.stories":["./packages/button/Button.stories.tsx",1639,3475,6057],"./button/Button.stories.tsx":["./packages/button/Button.stories.tsx",1639,3475,6057],"./checkbox/Checkbox.stories":["./packages/checkbox/Checkbox.stories.tsx",5396,1639,1553],"./checkbox/Checkbox.stories.tsx":["./packages/checkbox/Checkbox.stories.tsx",5396,1639,1553],"./chip/Chip.stories":["./packages/chip/Chip.stories.tsx",2148],"./chip/Chip.stories.tsx":["./packages/chip/Chip.stories.tsx",2148],"./container/Container.stories":["./packages/container/Container.stories.tsx",9205],"./container/Container.stories.tsx":["./packages/container/Container.stories.tsx",9205],"./content-theme/content-theme.stories":["./packages/content-theme/content-theme.stories.tsx",5248],"./content-theme/content-theme.stories.tsx":["./packages/content-theme/content-theme.stories.tsx",5248],"./cookie-theme-toggler/cookie-theme-toggler.stories":["./packages/cookie-theme-toggler/cookie-theme-toggler.stories.tsx",1639,3475,7885],"./cookie-theme-toggler/cookie-theme-toggler.stories.tsx":["./packages/cookie-theme-toggler/cookie-theme-toggler.stories.tsx",1639,3475,7885],"./cookies-tooltip/cookies-tooltip.stories":["./packages/cookies-tooltip/cookies-tooltip.stories.tsx",1639,9621],"./cookies-tooltip/cookies-tooltip.stories.tsx":["./packages/cookies-tooltip/cookies-tooltip.stories.tsx",1639,9621],"./data-table/DataTable.stories":["./packages/data-table/DataTable.stories.tsx",3696,1639,3674,9768],"./data-table/DataTable.stories.tsx":["./packages/data-table/DataTable.stories.tsx",3696,1639,3674,9768],"./divider/Divider.stories":["./packages/divider/Divider.stories.tsx",5413],"./divider/Divider.stories.tsx":["./packages/divider/Divider.stories.tsx",5413],"./heading/Heading.stories":["./packages/heading/Heading.stories.tsx",305],"./heading/Heading.stories.tsx":["./packages/heading/Heading.stories.tsx",305],"./icons/Icon.stories":["./packages/icons/Icon.stories.tsx",1639,8028],"./icons/Icon.stories.tsx":["./packages/icons/Icon.stories.tsx",1639,8028],"./identicon/Identicon.stories":["./packages/identicon/Identicon.stories.tsx",5217,1710],"./identicon/Identicon.stories.tsx":["./packages/identicon/Identicon.stories.tsx",5217,1710],"./input/Input.stories":["./packages/input/Input.stories.tsx",3696,1639,3475,7126,5217,8167,1396],"./input/Input.stories.tsx":["./packages/input/Input.stories.tsx",3696,1639,3475,7126,5217,8167,1396],"./input/InputGroup.stories":["./packages/input/InputGroup.stories.tsx",7126,7600],"./input/InputGroup.stories.tsx":["./packages/input/InputGroup.stories.tsx",7126,7600],"./input/OptionsSlider.stories":["./packages/input/OptionsSlider.stories.tsx",7126,1095],"./input/OptionsSlider.stories.tsx":["./packages/input/OptionsSlider.stories.tsx",7126,1095],"./input/SliderInput.stories":["./packages/input/SliderInput.stories.tsx",7126,6904],"./input/SliderInput.stories.tsx":["./packages/input/SliderInput.stories.tsx",7126,6904],"./input/Textarea.stories":["./packages/input/Textarea.stories.tsx",7126,4284],"./input/Textarea.stories.tsx":["./packages/input/Textarea.stories.tsx",7126,4284],"./lido-logo/LidoLogo.stories":["./packages/lido-logo/LidoLogo.stories.tsx",3928],"./lido-logo/LidoLogo.stories.tsx":["./packages/lido-logo/LidoLogo.stories.tsx",3928],"./link/Link.stories":["./packages/link/Link.stories.tsx",2686],"./link/Link.stories.tsx":["./packages/link/Link.stories.tsx",2686],"./loaders/InlineLoader.stories":["./packages/loaders/InlineLoader.stories.tsx",50],"./loaders/InlineLoader.stories.tsx":["./packages/loaders/InlineLoader.stories.tsx",50],"./loaders/Loader.stories":["./packages/loaders/Loader.stories.tsx",2736],"./loaders/Loader.stories.tsx":["./packages/loaders/Loader.stories.tsx",2736],"./main-menu/MainMenu.stories":["./packages/main-menu/MainMenu.stories.tsx",1639,3072],"./main-menu/MainMenu.stories.tsx":["./packages/main-menu/MainMenu.stories.tsx",1639,3072],"./modal/Modal.stories":["./packages/modal/Modal.stories.tsx",3696,1639,3475,8167,7744],"./modal/Modal.stories.tsx":["./packages/modal/Modal.stories.tsx",3696,1639,3475,8167,7744],"./pagination/Pagination.stories":["./packages/pagination/Pagination.stories.tsx",5396,1639,5070,5131],"./pagination/Pagination.stories.tsx":["./packages/pagination/Pagination.stories.tsx",5396,1639,5070,5131],"./pagination/PaginationItem.stories":["./packages/pagination/PaginationItem.stories.tsx",5396,1639,5070,2195],"./pagination/PaginationItem.stories.tsx":["./packages/pagination/PaginationItem.stories.tsx",5396,1639,5070,2195],"./popover/Popover.stories":["./packages/popover/Popover.stories.tsx",3696,3475,3674,437],"./popover/Popover.stories.tsx":["./packages/popover/Popover.stories.tsx",3696,3475,3674,437],"./popup-menu/PopupMenu.stories":["./packages/popup-menu/PopupMenu.stories.tsx",3696,1639,3475,3674,5489,6622],"./popup-menu/PopupMenu.stories.tsx":["./packages/popup-menu/PopupMenu.stories.tsx",3696,1639,3475,3674,5489,6622],"./section/Section.stories":["./packages/section/Section.stories.tsx",9867],"./section/Section.stories.tsx":["./packages/section/Section.stories.tsx",9867],"./select/Select.stories":["./packages/select/Select.stories.tsx",3696,1639,7126,3674,5489,7828],"./select/Select.stories.tsx":["./packages/select/Select.stories.tsx",3696,1639,7126,3674,5489,7828],"./service-page/ServicePage.stories":["./packages/service-page/ServicePage.stories.tsx",4461],"./service-page/ServicePage.stories.tsx":["./packages/service-page/ServicePage.stories.tsx",4461],"./stack/Stack.stories":["./packages/stack/Stack.stories.tsx",5549],"./stack/Stack.stories.tsx":["./packages/stack/Stack.stories.tsx",5549],"./styled-system/withStyledSystem.stories":["./packages/styled-system/withStyledSystem.stories.tsx",5396,6646],"./styled-system/withStyledSystem.stories.tsx":["./packages/styled-system/withStyledSystem.stories.tsx",5396,6646],"./table/Table.stories":["./packages/table/Table.stories.tsx",1639,2834],"./table/Table.stories.tsx":["./packages/table/Table.stories.tsx",1639,2834],"./text/Text.stories":["./packages/text/Text.stories.tsx",9699],"./text/Text.stories.tsx":["./packages/text/Text.stories.tsx",9699],"./theme/theme-provider.stories":["./packages/theme/theme-provider.stories.tsx",6098],"./theme/theme-provider.stories.tsx":["./packages/theme/theme-provider.stories.tsx",6098],"./toast/Toast.stories":["./packages/toast/Toast.stories.tsx",7408,1639,3475,2945],"./toast/Toast.stories.tsx":["./packages/toast/Toast.stories.tsx",7408,1639,3475,2945],"./tooltip/Tooltip.stories":["./packages/tooltip/Tooltip.stories.tsx",3696,1639,3674,3597],"./tooltip/Tooltip.stories.tsx":["./packages/tooltip/Tooltip.stories.tsx",3696,1639,3674,3597]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./packages lazy recursive ^\\.\\/.*$ include: (?:\\/packages(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:packages(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(11);return __webpack_require__("./packages lazy recursive ^\\.\\/.*$ include: (?:\\/packages(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===dist.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[4848],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);