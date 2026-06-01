#!/usr/bin/env node
import { loop, config } from "./maintainer.js";
import inquirer from 'inquirer';
import fs from "fs/promises";

try {
 
console.log(process.argv)
if (process.argv[2] === "init") {
 
 const answers = await inquirer.prompt([
  { type: 'input', name: 'writingDir', message: 'Writing directory:' },
  { type: 'input', name: 'executingDir', message: 'Executing directory:' },
  { type: 'input', name: 'except', message: 'Exclude folders:' },
  { type: 'input', name: 'delay', message: 'Write delay in ms'}
 ]);
 
 let options = {
  isInitialized:  true,
  isDir: true,
  writingDir: answers.writingDir.replaceAll('"', ''),
  executingDir: answers.executingDir.replaceAll('"', ''),
  except: answers.except.replaceAll('"', '').split(',').map(v => v.trim()),
  delay: Number(answers.delay)
 }
 options = JSON.stringify(options)
 
 await fs.writeFile("./maintainer.json", options)
 
 }
 
 if (process.argv[2]=== "run") {
  let config = await fs.readFile("./maintainer.json")
  config = JSON.parse(config);
  if (config.isInitialized) {
   loop()
  } else {
   console.log("Not initialized. Please run: Auto-Update init")
  }
 } 
 
}
catch (e) {
 console.log(e)
}