"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"TitleConversion",{enumerable:true,get:()=>TitleConversion});const REGEX_SPLITED_CAMEL_CASE=/([a-z])([A-Z])/g;class TitleConversion{getSplitedArray(){return this.name.replace(REGEX_SPLITED_CAMEL_CASE,"$1 $2").split(" ")}GetCamelCaseName(){return this.getSplitedArray().map(item=>`${item.charAt(0).toUpperCase()}${item.slice(1)}`).join("")}GetFormatedTitleFileName(){return`${this.getSplitedArray().map(item=>`${item.charAt(0).toLowerCase()}${item.slice(1)}`).join("-")}.ts`}constructor(name){this.name=name}}