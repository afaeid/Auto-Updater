import fs from "fs/promises";
import { detect } from "./detector.js";
import { dirReader } from "./dirReader.js";
import { createRec } from "./recordCreator.js";
import { ask } from "./ask.js";
import { change } from "./changer.js";
import path from "path";
import { error } from "./error-handler.js";
import chalk from "chalk"
import { currentTast } from "./currentTaskHandler.js";
import { presentAction } from "./actionPresenter.js";

let config;

const buildReason = (operation, err) => {
  const code = err?.code ? ` (${err.code})` : "";
  const target = err?.path ? ` Path: ${err.path}.` : "";
  const message = err?.message ? ` ${err.message}` : "";
  return `${operation} failed${code}.${target}${message}`.trim();
};

const initialize = async (cwd)=>{
  try {
    process.startTime = Date.now();
    process.stdin.setRawMode(false)

    config = await ask(cwd)

    process.stdin.setRawMode(true)

    await fs.writeFile(path.resolve(cwd,".auto-updater.config.json"), JSON.stringify(config, null, 2))

    let records = await dirReader(config, cwd, "init")
    
      console.log(chalk.yellow("Changing records. Please don't shut down ..."))
      records = await change(records)

      let actionHist = records[1]

      console.log(chalk.yellow("Creating records. Please don't shut down ..."))
      await createRec(records[0], cwd);

      presentAction(actionHist)
  } catch (e) {
    process.stdin.setRawMode(true)
    await error({
      message: "Initialization failed.",
      reason: buildReason("initialize()", e),
      stack: e.stack,
      code: 1
    })
  }

}



const run = async (cwd)=>{
  try {
    currentTast("READ_config", "pending", null)

    process.startTime = Date.now();

    config = await fs.readFile(path.resolve(cwd, ".auto-updater.config.json"));
    config = JSON.parse(config)

    currentTast("READ_config", "success", config)

    process["auto-updater"] = {config}

    if (config.isInitialized) {

      currentTast("DETECT", "pending", null)

      let records = await detect(config, cwd)

      currentTast("DETECT", "success", records)

      currentTast("CHANGE", "pending", null)
    
      records = await change(records)

      currentTast("CHANGE", "success", records)


      currentTast("CREATE_records", "pending", records)


      let actionHist = records[1]
      //console.log(records[1])
      //console.log(records[0])
      await createRec(records[0], cwd)
    
      currentTast("CREATE_records", "success", records)



    //process.testStTime = Date.now()
    //await new Promise(resolve => setTimeout(resolve, config.delay))
    //console.log("Waited", (Date.now() - process.testStTime)/1000, "seconds")
    //await run(cwd)

    }else{
      await error({
        message: "Run failed.",
        reason: "Configuration exists but isInitialized is false. Run 'npx auto-updater init' to initialize again.",
        code: 1
      })
      
    }
  } catch (e) {
    const reason = e?.code === "ENOENT"
      ? "Config file '.auto-updater.config.json' was not found. Run 'npx auto-updater init' first."
      : buildReason("run()", e);

    await error({
      message: "Run failed.",
      reason,
      stack: e.stack,
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
          await fs.rm(path.resolve(cwd, ".auto-updater.records.json"), { force: true })
          await fs.rm(path.resolve(cwd, ".auto-updater.config.json"), { force: true })
          console.log(chalk.green("Deleted successfully"))

          console.log(chalk.yellow("Deleting dir:", chalk.bold(exeDirName)))
          await fs.rm(config.executingDir, {recursive : true, force:true})
          console.log(chalk.green("Done"))

       }else if(option === "--s" || !option){



          console.log(chalk.yellow("Deleting configs and records"))
         await fs.rm(path.resolve(cwd, ".auto-updater.records.json"), { force: true })
         await fs.rm(path.resolve(cwd, ".auto-updater.config.json"), { force: true })
         console.log(chalk.green("Deleted successfully"))

          console.log(chalk.green("Your dir:", chalk.bold(exeDirName), "remains untouched"))

       }else {
         await error({
           message: "Reset failed.",
           reason: `Unsupported reset option '${option}'. Use '--s' or '--d'.`,
           code: 1
         })
         }
     
  } catch (e) {
    const reason = e?.code === "ENOENT"
      ? "Config file '.auto-updater.config.json' was not found. Run 'npx auto-updater init' first."
      : buildReason("reset()", e);

    await error({
      message: "Reset failed.",
      reason,
      stack: e.stack,
      code: 1
    })
  }

}

export {initialize, run, reset}