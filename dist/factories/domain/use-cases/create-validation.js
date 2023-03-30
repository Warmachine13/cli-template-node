"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"makeValidation",{enumerable:true,get:()=>makeValidation});const _createValidation=require("../../../domain/use-cases/create-validation");const _gateway=require("../../infra/gateway");const makeValidation=()=>{return new _createValidation.CreateValidation((0,_gateway.makeFileStorage)(),(0,_gateway.makePath)(),(0,_gateway.makeLogger)())};