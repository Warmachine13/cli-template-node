"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"CreateController",{enumerable:true,get:()=>CreateController});const _errors=require("../entities/errors/index");const _constants=require("../../constants/index");class CreateController{handle(pathFull,name="Controller",test=true){const fileInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_CONTROLLER)});if(!fileInString){throw new _errors.FileNotFound}const replacedFileString=fileInString.replace(new RegExp("{{ className }}","g"),name);if(!this.fileStorage.folderExists({path:`${pathFull}/domain/use-cases/`})){this.fileStorage.makeDir({path:`${pathFull}/domain/use-cases/`})}const pathToWrite=this.pathResolver.pathresolve(`${pathFull}/domain/use-cases/${name}.ts`);this.logger.log({message:`
 diretorio da controller ${pathToWrite}`});this.fileStorage.writeFileString({path:pathToWrite,content:replacedFileString});const fileInTestString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_CONTROLLER_TEST)});if(!fileInString){throw new _errors.CouldNotWrite}if(test){}return fileInTestString}constructor(fileStorage,pathResolver,logger){this.fileStorage=fileStorage;this.pathResolver=pathResolver;this.logger=logger}}