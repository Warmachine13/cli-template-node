"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"CreateEvents",{enumerable:true,get:()=>CreateEvents});const _errors=require("../entities/errors");const _constants=require("../../constants");const _entities=require("../entities");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class CreateEvents{handle(pathFull,name="EVENTS",test=true,properites=undefined,onlyTest=false){const titleConversion=new _entities.TitleConversion(name);const UpperCase=titleConversion.GetCamelCaseName();const titleFormated=titleConversion.GetFormatedTitleFileName();const path=titleConversion.getPathFromTitle();const createFile=new _entities.CreateFile(this.fileStorage,this.pathResolver);if(!onlyTest){const fileInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_EVENTS)});if(fileInString==null){throw new _errors.FileNotFound}const replacedFileString=new _entities.FormatDocument(fileInString,UpperCase,properites).formatDocument();const pathFolder=`${pathFull}/src/${_constants.EVENTS_PATH}`;const pathToWrite=createFile.createFile(`${pathFolder}/${path}`,replacedFileString,titleFormated);this.logger.log({message:`
 diretorio do eVENTS ${pathToWrite}`});createFile.createIndex(path,pathFolder,titleFormated)}const fileInTestString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_EVENTS_TEST)});if(fileInTestString==null){throw new _errors.CouldNotWrite}if(test){const pathTestFolder=`${pathFull}/tests/${_constants.EVENTS_PATH}/`;const pathToWriteTest=createFile.createFile(pathTestFolder,fileInTestString,titleFormated.replace(".ts",".spec.ts"));this.logger.log({message:`
 diretorio do test ${pathToWriteTest}`})}return fileInTestString}constructor(fileStorage,pathResolver,logger){_defineProperty(this,"fileStorage",void 0);_defineProperty(this,"pathResolver",void 0);_defineProperty(this,"logger",void 0);this.fileStorage=fileStorage;this.pathResolver=pathResolver;this.logger=logger}}