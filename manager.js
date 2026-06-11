import fs from "fs/promises";
import { detect } from "./detector.js";
import { dirReader } from "./dirReader.js";
import { createRec } from "./recordCreator.js";
import { ask } from "./ask.js";
import { change } from "./changer.js";
import path from "path";
import { error } from "./error-handler.js";
import chalk from "chalk"
import { currentTask } from "./currentTaskHandler.js";
import { presentAction } from "./actionPresenter.js";

let config;

const initialize = async (cwd) => {

  config = await ask(cwd)

  process.startTime = Date.now();

  await fs.writeFile(path.resolve(cwd, ".auto-updater.config.json"), JSON.stringify(config, null, 2))

  let records = await dirReader(config, cwd, "init")


  currentTask("CHANGE", "pending", null)

  console.log(chalk.yellowBright("Changing records. Please don't shut down ..."))
  records = await change(records)

  currentTask("CHANGE", "success", records)


  let actionHist = records[1]

  currentTask("CREATE_records", "pending", null)

  console.log(chalk.yellowBright("Creating records. Please don't shut down ..."))
  await createRec(records[0], cwd);

  currentTask("CREATE_records", "success", records)

  currentTask("PRESENT_actions","pending", records)

  presentAction(actionHist, config)

  currentTask("PRESENT_actions","success", records)

}



const run = async (cwd) => {

  try {
    process.startTime = Date.now();


    currentTask("READ_config", "pending", null)

    config = await fs.readFile(path.resolve(cwd, ".auto-updater.config.json"));
    config = JSON.parse(config)

    currentTask("READ_config", "success", config)

    process["auto-updater"].config = config


    currentTask("DETECT", "pending", null)

    let records = await detect(config, cwd)

    currentTask("DETECT", "success", records)

    currentTask("CHANGE", "pending", null)

    records = await change(records)

    currentTask("CHANGE", "success", records)


    currentTask("CREATE_records", "pending", records)


    let actionHist = records[1]

    await createRec(records[0], cwd)

    currentTask("CREATE_records", "success", records)

    currentTask("PRESENT_actions","pending", records)

    presentAction(actionHist, config)

    currentTask("PRESENT_actions","success", records)

  } catch (e) {

    if (e.code === "ENOENT") {
      await error({
        message: "You haven't initialized. Please run 'npx auto-updater init' to initialize",
        code: 1
      })
    } else {

      await error(e)

    }

  }

}

const reset = async (cwd) => {

  try {

    let config = await fs.readFile(path.resolve(cwd, ".auto-updater.config.json"))
    config = JSON.parse(config)

    let option = process.argv[3]?.trim()
    let exeDirName = config.executingDir.split("/").at(-1).replace("/", "")


    if (option === "--d") {

      console.log(chalk.yellowBright("Deleting configs and records"))
      await fs.rm(path.resolve(cwd, ".auto-updater.records.json"))
      await fs.rm(path.resolve(cwd, ".auto-updater.config.json"))
      console.profile(chalk.greenBright("Deleted successfully"))

      console.log(chalk.redBright("Deleting dir:", chalk.bold(exeDirName)))
      await fs.rm(config.executingDir, { recursive: true, force: true })
      console.log(chalk.greenBright("Done"))

    } else if (option === "--s" || !option) {



      console.log(chalk.yellowBright("Deleting configs and records"))
      await fs.rm(path.resolve(cwd, ".auto-updater.records.json"))
      await fs.rm(path.resolve(cwd, ".auto-updater.config.json"))
      console.log(chalk.greenBright("Deleted successfully"))

      console.log(chalk.greenBright("Your dir:", chalk.bold(exeDirName), "remains untouched"))

    } else {
      console.log(chalk.redBright("This command is not valid."))
    }

  } catch (e) {
    if (e.code === "ENOENT") {
      await error({
        message: "You haven't initialized. Please run 'npx auto-updater init' to initialize",
        code: 1
      })
    } else {

      await error(e)

    }
  }

}

export { initialize, run, reset }