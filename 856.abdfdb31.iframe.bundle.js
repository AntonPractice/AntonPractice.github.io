(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[856],{"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=_interopRequireDefault,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@mui/icons-material/DeleteOutlineSharp.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.c=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.c=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M6 21h12V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutlineSharp")},"./node_modules/@mui/icons-material/utils/createSvgIcon.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _utils.createSvgIcon}});var _utils=__webpack_require__("./node_modules/@mui/material/utils/index.js")},"./node_modules/@mui/material/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{capitalize:()=>capitalize.c,createChainedFunction:()=>utils_createChainedFunction,createSvgIcon:()=>createSvgIcon.c,debounce:()=>utils_debounce,deprecatedPropType:()=>utils_deprecatedPropType,isMuiElement:()=>utils_isMuiElement,ownerDocument:()=>utils_ownerDocument,ownerWindow:()=>utils_ownerWindow,requirePropFactory:()=>utils_requirePropFactory,setRef:()=>utils_setRef,unstable_ClassNameGenerator:()=>unstable_ClassNameGenerator,unstable_useEnhancedEffect:()=>utils_useEnhancedEffect,unstable_useId:()=>utils_useId,unsupportedProp:()=>utils_unsupportedProp,useControlled:()=>utils_useControlled,useEventCallback:()=>utils_useEventCallback,useForkRef:()=>utils_useForkRef,useIsFocusVisible:()=>utils_useIsFocusVisible});var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js");let utils_createChainedFunction=function createChainedFunction(...funcs){return funcs.reduce((acc,func)=>null==func?acc:function chainedFunction(...args){acc.apply(this,args),func.apply(this,args)},()=>{})};var createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");let utils_debounce=function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout(()=>{func.apply(this,args)},wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced},utils_deprecatedPropType=function deprecatedPropType(validator,reason){return()=>null};var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);let utils_isMuiElement=function isMuiElement(element,muiNames){var _muiName,_element$type;return react.isValidElement(element)&&-1!==muiNames.indexOf(null!=(_muiName=element.type.muiName)?_muiName:null==(_element$type=element.type)||null==(_element$type=_element$type._payload)||null==(_element$type=_element$type.value)?void 0:_element$type.muiName)};function ownerDocument(node){return node&&node.ownerDocument||document}let utils_ownerDocument=ownerDocument,utils_ownerWindow=function ownerWindow(node){return ownerDocument(node).defaultView||window};__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");let utils_requirePropFactory=function requirePropFactory(componentNameInError,Component){return()=>null};function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}let utils_setRef=setRef,useEnhancedEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,utils_useEnhancedEffect=useEnhancedEffect,globalId=0;function useGlobalId(idOverride){let[defaultId,setDefaultId]=react.useState(idOverride),id=idOverride||defaultId;return react.useEffect(()=>{null==defaultId&&(globalId+=1,setDefaultId(`mui-${globalId}`))},[defaultId]),id}let maybeReactUseId=react_namespaceObject["useId".toString()],utils_useId=function useId(idOverride){if(void 0!==maybeReactUseId){let reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId}return useGlobalId(idOverride)},utils_unsupportedProp=function unsupportedProp(props,propName,componentName,location,propFullName){return null},utils_useControlled=function useControlled({controlled,default:defaultProp,name,state="value"}){let{current:isControlled}=react.useRef(void 0!==controlled),[valueState,setValue]=react.useState(defaultProp),setValueIfUncontrolled=react.useCallback(newValue=>{isControlled||setValue(newValue)},[]);return[isControlled?controlled:valueState,setValueIfUncontrolled]},utils_useEventCallback=function useEventCallback(fn){let ref=react.useRef(fn);return useEnhancedEffect(()=>{ref.current=fn}),react.useRef((...args)=>(0,ref.current)(...args)).current},utils_useForkRef=function useForkRef(...refs){return react.useMemo(()=>refs.every(ref=>null==ref)?null:instance=>{refs.forEach(ref=>{setRef(ref,instance)})},refs)};class Timeout{constructor(){this.currentId=0,this.clear=()=>{0!==this.currentId&&(clearTimeout(this.currentId),this.currentId=0)},this.disposeEffect=()=>this.clear}static create(){return new Timeout}start(delay,fn){this.clear(),this.currentId=setTimeout(()=>{this.currentId=0,fn()},delay)}}let hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout=new Timeout,inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function focusTriggersKeyboardModality(node){let{type,tagName}=node;return"INPUT"===tagName&&!!inputTypesWhitelist[type]&&!node.readOnly||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}function isFocusVisible(event){let{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||focusTriggersKeyboardModality(target)}let utils_useIsFocusVisible=function useIsFocusVisible(){let ref=react.useCallback(node=>{null!=node&&prepare(node.ownerDocument)},[]),isFocusVisibleRef=react.useRef(!1);function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,hadFocusVisibleRecentlyTimeout.start(100,()=>{hadFocusVisibleRecently=!1}),isFocusVisibleRef.current=!1,!0)}function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)}return{isFocusVisibleRef,onFocus:handleFocusVisible,onBlur:handleBlurVisible,ref}},unstable_ClassNameGenerator={configure:generator=>{ClassNameGenerator.c.configure(generator)}}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier:identifier,updater:updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);return api.update(obj),function updater(newObj){newObj?(newObj.css!==obj.css||newObj.media!==obj.media||newObj.sourceMap!==obj.sourceMap||newObj.supports!==obj.supports||newObj.layer!==obj.layer)&&api.update(obj=newObj):api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}function insertBySelector(insert,style){var target=getTarget(insert);if(!target)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}module.exports=insertBySelector},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}module.exports=insertStyleElement},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}module.exports=setAttributesWithoutAttributes},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){apply(styleElement,options,obj)},remove:function remove(){removeStyleElement(styleElement)}}}module.exports=domAPI},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}module.exports=styleTagTransform}}]);