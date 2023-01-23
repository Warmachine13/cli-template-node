"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"makeContract",{enumerable:true,get:()=>makeContract});const _path=require("../../infra/gateway/path");const _createContract=require("../../../domain/use-cases/create-contract");const _fileStorage=require("../../infra/gateway/file-storage");const makeContract=()=>{return new _createContract.CreateContract((0,_fileStorage.makeFileStorage)(),(0,_path.makePath)())};