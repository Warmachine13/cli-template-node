"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"CreateContract",{enumerable:true,get:()=>CreateContract});const _errors=require("../entities/errors/index");const _constants=require("../../constants/index");class CreateContract{handle(pathFull,name="Contract",test=true){const fileInString=this.fileStorage.readFileString({path:this.pathResolver.pathresolve(__dirname,_constants.PATH_CONTRACT)});if(!fileInString){throw new _errors.FileNotFound}const replacedFileString=fileInString.replace(new RegExp("{{ className }}","g"),name);if(!this.fileStorage.folderExists({path:`${pathFull}/domain/contracts/`})){this.fileStorage.makeDir({path:`${pathFull}/domain/contracts/`})}const pathToWrite=this.pathResolver.pathresolve(`${pathFull}/domain/contracts/${name}.ts`);this.fileStorage.writeFileString({path:pathToWrite,content:replacedFileString});this.logger.log({message:`
 diretorio do contract ${pathToWrite}`});if(test){}return replacedFileString}constructor(fileStorage,pathResolver,logger){this.fileStorage=fileStorage;this.pathResolver=pathResolver;this.logger=logger}}