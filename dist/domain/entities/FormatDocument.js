"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"FormatDocument",{enumerable:true,get:()=>FormatDocument});function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}const START_INDEX=0;const SECOND_INDEX=1;class FormatDocument{formatDocument(){return this.document.replace(/{{ className }}/g,this.titleDocument).replace(/{{ classNameLower }}/g,`${this.titleDocument.charAt(START_INDEX).toLowerCase()}${this.titleDocument.slice(SECOND_INDEX)}`).replace(/{{ properites }}/g,this.properties?JSON.stringify(this.properties):"")}constructor(document,titleDocument,properties){_defineProperty(this,"document",void 0);_defineProperty(this,"titleDocument",void 0);_defineProperty(this,"properties",void 0);this.document=document;this.titleDocument=titleDocument;this.properties=properties}}