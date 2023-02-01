"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"CreateController",{enumerable:true,get:()=>CreateController});const _errors=require("../entities/errors/index");const _constants=require("../../constants/index");const _entities=require("../entities/index");const _createFile=require("../entities/CreateFile");const PATH_CONTROLLER_APLICATION="application/controllers";class CreateController{handle(pathFull,name="Controller",test=true,properites={}){const fileInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_CONTROLLER)});if(!fileInString){throw new _errors.FileNotFound}const titleConversion=new _entities.TitleConversion(name);const UpperCase=titleConversion.GetCamelCaseName();const titleFormated=titleConversion.GetFormatedTitleFileName();const replacedFileString=new _entities.FormatDocument(fileInString,UpperCase,properites).formatDocument();const pathFolder=`${pathFull}/src/${PATH_CONTROLLER_APLICATION}`;const createFile=new _createFile.CreateFile(this.fileStorage,this.pathResolver);const pathToWrite=createFile.createFile(pathFolder,replacedFileString,titleFormated);this.logger.log({message:`
 diretorio da controller ${pathToWrite}`});this.fileStorage.appendFile({path:`${pathFolder}/index.ts`,content:`export * from './${titleFormated}'
`});const fileInTestString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_CONTROLLER_TEST)});if(!fileInString){throw new _errors.CouldNotWrite}if(test){const createFile=new _createFile.CreateFile(this.fileStorage,this.pathResolver);const pathTestFolder=`${pathFull}/test/${PATH_CONTROLLER_APLICATION}`;const pathToWriteTest=createFile.createFile(pathTestFolder,fileInTestString,titleFormated.replace(".ts",".spec.ts"));this.logger.log({message:`
 diretorio da controller test ${pathToWriteTest}`})}return fileInTestString}constructor(fileStorage,pathResolver,logger){this.fileStorage=fileStorage;this.pathResolver=pathResolver;this.logger=logger}}