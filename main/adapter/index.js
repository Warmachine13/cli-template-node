"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:()=>_default});const _router=_interopRequireDefault(require("../router"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const _default=(name,options,fullpath)=>{const{test,properties,onlyTest,...rest}=options;const allroutes=(0,_router.default)();const keys=Object.keys(rest);keys.forEach(element=>{try{allroutes[element]?.handle(fullpath,name,test,properties,onlyTest)}catch(error){console.log(error)}})};