#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:true});const _commander=require("commander");const _packageJson=_interopRequireDefault(require("../package.json"));const _adapter=_interopRequireDefault(require("./main/adapter/index"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const program=new _commander.Command;program.name(_packageJson.default.name).description(_packageJson.default.description).version(_packageJson.default.version);program.command("create <name>").description("Create a new file based on a template").option("-test, --tests","Create test").option("-onlyTest","--onlyTest","Run only test").option("-pro","--properties","Properties").option("-cta, --contract","Create Contract").option("-mid, --midleware","Create Midleware").option("-err, --error","Create error").option("-ctl, --controller","Create Controller").option("-use, --useCase","Create UseCases").option("-gat, --gateWay","Create Gateway").option("-rep, --repo","Create repository").option("-ent, --entity","Create entity").option("-val, --validation","Create Validation").option("-rot, --route","Create Route").option("-dec, --decorator","Create Decorator").option("-evt, --events","Create Events").option("-adp, --adapter","Create Adapter").action((name,options)=>{(0,_adapter.default)(name,options,process.cwd())});program.parse(process.argv);const options=program.opts();if(options.debug)console.log("options",options);