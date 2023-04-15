"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"makeDecorator",{enumerable:true,get:()=>makeDecorator});const _createDecorator=require("../../../domain/use-cases/create-decorator");const _gateway=require("../../infra/gateway");const makeDecorator=()=>{return new _createDecorator.CreateDecorator((0,_gateway.makeFileStorage)(),(0,_gateway.makePath)(),(0,_gateway.makeLogger)())};