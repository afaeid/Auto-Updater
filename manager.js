import fs from "fs/promises";
import { detect } from "./detector.js";
import { dirReader } from "./dirReader.js";
import { createRec } from "./recordCreator.js";
import { ask } from "./ask.js";
import { change } from "./changer.js";
import path from "path";
import { error } from "./error-handler.js";
import chalk from "chalk"

let config;

const initialize = async (cwd)=>{

  process.startTime = Date.now();


  config = await ask(cwd)


  await fs.writeFile(path.resolve(cwd,".auto-updater.config.json"), JSON.stringify(config, null, 2))

  let records = await dirReader(config, cwd, "init")
  
    console.log(chalk.yellow("Changing records. Please don't shut down ..."))
    records = await change(records)

    let actionHist = records[1]

    console.log(chalk.yellow("Creating records. Please don't shut down ..."))
    await createRec(records[0], cwd);

    console.log(chalk.green(`Created ${actionHist.created}`))
    console.log(chalk.yellow(`Updated ${actionHist.updated}`))
    console.log(chalk.red(`Deleted ${actionHist.deleted}`))
    console.log(chalk.bgGreen.white.bold(`Total ${actionHist.created + actionHist.updated + actionHist.deleted} in ${((Date.now() - process.startTime)/1000).toFixed(2)} second(s)`))

}


const run = async (cwd)=>{

  process.startTime = Date.now();


  config = await fs.readFile(path.resolve(cwd, ".auto-updater.config.json"));
  config = JSON.parse(config)

  process["auto-updater"] = {config}

  if (config.isInitialized) {

    let records = await detect(config, cwd)
  
    records = await change(records)

    let actionHist = records[1]
    //console.log(records[1])
    //console.log(records[0])
    await createRec(records[0], cwd)
  
    
    

    if(actionHist.created > 0 || actionHist.updated > 0 || actionHist.deleted > 0){

      console.log(chalk.green(`Created ${actionHist.created}`))
      console.log(chalk.yellow(`Updated ${actionHist.updated}`))
      console.log(chalk.red(`Deleted ${actionHist.deleted}`))
      console.log(chalk.bgGreen.white.bold(`Total ${actionHist.created + actionHist.updated + actionHist.deleted} in ${((Date.now() - process.startTime)/1000).toFixed(2)} second(s)`))
      console.log(chalk.gray("In"), chalk.bold.underline(config.executingDir))
      console.log(chalk.gray("at", new Date().toString()))
      console.log(chalk.green("Watching for change ..."))

    }

   //process.testStTime = Date.now()
   //await new Promise(resolve => setTimeout(resolve, config.delay))
   //console.log("Waited", (Date.now() - process.testStTime)/1000, "seconds")
   //await run(cwd)

  }else{
    await error({
      message: "You haven't initialized. Please run 'npx auto-updater init' to initialize",
      code: 1
    })
    
  }
}

const reset = async (cwd)=>{

  try {

     let config = await fs.readFile(path.resolve(cwd, ".auto-updater.config.json"))
     config = JSON.parse(config)
      
      let option = process.argv[3]?.trim()
      let exeDirName = config.executingDir.split("/").at(-1).replace("/","")


       if(option === "--d"){

          console.log(chalk.yellow("Deleting configs and records"))
          await fs.rm(path.resolve(cwd, ".auto-updater.records.json"))
          await fs.rm(path.resolve(cwd, ".auto-updater.config.json"))
          console.profile(chalk.green("Deleted successfully"))

          console.log(chalk.yellow("Deleting dir:", chalk.bold(exeDirName)))
          await fs.rm(config.executingDir, {recursive : true, force:true})
          console.log(chalk.green("Done"))

       }else if(option === "--s" || !option){



          console.log(chalk.yellow("Deleting configs and records"))
          await fs.rm(path.resolve(cwd, ".auto-updater.records.json"))
          await fs.rm(path.resolve(cwd, ".auto-updater.config.json"))
          console.profile(chalk.green("Deleted successfully"))

          console.log(chalk.green("Your dir:", chalk.bold(exeDirName), "remains untouched"))

       }else {
          console.log(chalk.red("This command is not valid."))
         }
    
  } catch (e) {
    await error({
      message: "You haven't initialized. Please run 'npx auto-updater init' to initialize",
      code: 1
    })
  }

}

export {initialize, run, reset}