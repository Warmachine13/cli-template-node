"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"CreateRepository",{enumerable:true,get:()=>CreateRepository});const _errors=require("../entities/errors");const _constants=require("../../constants");const _entities=require("../entities");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class CreateRepository{handle(pathFull,name="Repository",test=true,properites=undefined,onlyTest=false){const titleConversion=new _entities.TitleConversion(name);const UpperCase=titleConversion.GetCamelCaseName();const titleFormated=titleConversion.GetFormatedTitleFileName();const path=titleConversion.getPathFromTitle();if(!onlyTest){const fileInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_REPOSITORY)});if(fileInString==null){throw new _errors.FileNotFound}const replacedFileString=new _entities.FormatDocument(fileInString,UpperCase,properites).formatDocument();const pathFolder=`${pathFull}/src/${_constants.REPOSITORY_PATH}`;const createFile=new _entities.CreateFile(this.fileStorage,this.pathResolver);const pathToWrite=createFile.createFile(`${pathFolder}/${path}`,replacedFileString,titleFormated);this.logger.log({message:`
 diretorio do repository ${pathToWrite}`});createFile.createIndex(path,pathFolder,titleFormated);const fileFactoryInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_FACTORY_REPOSITORY)});const replacedFactoryFileString=new _entities.FormatDocument(fileFactoryInString,UpperCase,properites).formatDocument();const pathFactoryFolder=`${pathFull}/src/${_constants.REPOSITORY_FACTORY_PATH}`;const createFactoryFile=new _entities.CreateFile(this.fileStorage,this.pathResolver);const pathToFactoryWrite=createFactoryFile.createFile(`${pathFactoryFolder}/${path}`,replacedFactoryFileString,titleFormated);this.logger.log({message:`
 diretorio do factory repository ${pathToFactoryWrite}`});createFile.createIndex(path,pathFactoryFolder,titleFormated)}const fileInTestString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_REPOSITORY_TEST)});if(fileInTestString===""){throw new _errors.CouldNotWrite}if(onlyTest||test){const createFile=new _entities.CreateFile(this.fileStorage,this.pathResolver);const pathTestFolder=`${pathFull}/tests/${_constants.REPOSITORY_PATH}`;const testnameFile=titleFormated.replace(".ts",".spec.ts");const replacedFactoryTestFileString=new _entities.FormatDocument(fileInTestString,UpperCase,properites).formatDocument();const pathToWriteTest=createFile.createFile(pathTestFolder,replacedFactoryTestFileString,testnameFile);this.logger.log({message:`
 diretorio da entidade test ${pathToWriteTest}`})}return"replacedFileString"}constructor(fileStorage,pathResolver,logger){_defineProperty(this,"fileStorage",void 0);_defineProperty(this,"pathResolver",void 0);_defineProperty(this,"logger",void 0);this.fileStorage=fileStorage;this.pathResolver=pathResolver;this.logger=logger}}