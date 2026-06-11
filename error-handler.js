import chalk from "chalk"
import { safeExit } from "./safeExit.js"

const error = async (e) => {
  console.log(chalk.bold.redBright("Error:") ,chalk.redBright(e.message))
  console.log(chalk.bold.redBright("Details:") ,chalk.redBright(e.stack))
  await safeExit()
  console.log(chalk.redBright("Shutting down ..."))
  process.exit(Number.isFinite(e.code) ? e.code : 1) 
}


export {error}