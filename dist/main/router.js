"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:()=>_default});const _useCases=require("../factories/domain/use-cases/index");const _default=(name,option,fullpath,test=false,properites={})=>{return({controller:(0,_useCases.makeController)(),useCases:(0,_useCases.makeUseCase)(),repo:(0,_useCases.makeRepository)(),gateWay:(0,_useCases.makeGateway)(),error:(0,_useCases.makeError)(),entity:(0,_useCases.makeEntity)(),contract:(0,_useCases.makeContract)()})[option]};