import inquirer from 'inquirer';
import fs from "fs/promises"
import { error } from './error-handler.js';
import path from 'path';
const ask = async (cwd)=> {

  const answers = await inquirer.prompt([
  { type: 'input', name: 'executingDir', message: 'Executing directory:' },
  { type: 'input', name: 'excepts', message: 'Exclude folders [Type extensions or unique part of the name, separate them with comma (,) ] (Hit enter if you have none to exclude) :' },
  { type: 'input', name: 'delay', message: 'Write delay in ms (Default 2000) '}
 ]);
 
 let options = {
  isInitialized:  true,
  writingDir: cwd, 
  executingDir: answers.executingDir.replaceAll('"', '').replaceAll("'",""),
  excepts: answers.excepts?.trim() ? answers.excepts.replaceAll('"', '').replaceAll("'", "").split(',').map(v => v.trim()).filter(Boolean).concat(".auto-updater") : [".auto-updater"],
  delay: answers.delay?.trim() ?  Number(answers.delay) : 2000
 }
 if(!options.executingDir?.trim()){

  await error({
    message: "ExecutingDir field must be filled up",
    code: 1
  })
  
 }else{

  if(!options.executingDir.startsWith("../") && !options.executingDir.startsWith("/")) options.executingDir = `../${options.executingDir}`

  options.executingDir = path.resolve(cwd, options.executingDir)
 }

 // console.log(options)
 return options;
 
}

export {ask}

