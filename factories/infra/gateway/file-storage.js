"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"makeFileStorage",{enumerable:true,get:()=>makeFileStorage});const _fileStorage=require("../../../infra/gateways/file-storage");const makeFileStorage=()=>{return new _fileStorage.FileStorage};