#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from "fs/promises";
import { ask } from "./ask.js";
import { initialize, run, reset } from './manager.js';
import { error } from './error-handler.js';
import chalk from 'chalk';

try {


const iterate = async ()=>{
  while (true) {   

  await new Promise(resolve => setTimeout(resolve, process["auto-updater"].config.delay))
  await run(process.cwd())

  }
}
 
if (process.argv[2] === "init") {
  
 await initialize(process.cwd())
 
 } else if (process.argv[2]=== "run") {

  console.log(chalk.green("Watching for change ..."))

  await run(process.cwd())

  await iterate()
 //  console.log(process["auto-updater"].config)    
  //await new Promise(resolve => setTimeout(resolve, process["auto-updater"].config.delay))
  //await run(process.cwd())

 }else if(process.argv[2]?.trim() === "reset"){

  await reset(process.cwd())

   
 } else{

  await error({
    message: "Please mention comand for execution. Use 'init' for initialization or 'run' to start executing the program. Run 'npx auto-updater init' if you haven't initialized yet",
    code: 1
   })

 }
 
}
catch (e) {
  e.code = 1
 await error(e)
}

process.on("uncaughtException", async (e)=>{
  error({
    message: e.message,
    code:1
  })
})

process.on("unhandledRejection", async (e)=>{
  error({
    message: e.message,
    code:1
  })
})