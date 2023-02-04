"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"CreateEntity",{enumerable:true,get:()=>CreateEntity});const _errors=require("../entities/errors/index");const _constants=require("../../constants/index");const _entities=require("../entities/index");const _createFile=require("../entities/CreateFile");const PATH_ENTITY_PATH="domain/entities";class CreateEntity{handle(pathFull,name="Entity",test=true,properites={}){const fileInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_ENTITY)});if(fileInString===""){throw new _errors.FileNotFound}const titleConversion=new _entities.TitleConversion(name);const UpperCase=titleConversion.GetCamelCaseName();const titleFormated=titleConversion.GetFormatedTitleFileName();const path=titleConversion.getPathFromTitle();const replacedFileString=new _entities.FormatDocument(fileInString,UpperCase,properites).formatDocument();const pathFolder=`${pathFull}/src/${PATH_ENTITY_PATH}/${path}`;const createFile=new _createFile.CreateFile(this.fileStorage,this.pathResolver);const pathToWrite=createFile.createFile(pathFolder,replacedFileString,titleFormated);this.logger.log({message:`
 diretorio da entidade ${pathToWrite}`});this.fileStorage.appendFile({path:`${pathFolder}/index.ts`,content:`export * from './${titleFormated.replace(".ts","")}'
`});const fileInTestString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_ENTITY_TEST)});if(fileInString===""){throw new _errors.CouldNotWrite}if(test){const createFile=new _createFile.CreateFile(this.fileStorage,this.pathResolver);const pathTestFolder=`${pathFull}/tests/${PATH_ENTITY_PATH}/${titleFormated}`;const pathToWriteTest=createFile.createFile(pathTestFolder,fileInTestString,titleFormated.replace(".ts",".spec.ts"));this.logger.log({message:`
 diretorio da entidade test ${pathToWriteTest}`})}return replacedFileString}constructor(fileStorage,pathResolver,logger){this.fileStorage=fileStorage;this.pathResolver=pathResolver;this.logger=logger}}