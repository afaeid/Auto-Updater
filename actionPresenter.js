import chalk from "chalk"




const presentAction = (actionHist)=>{

    if(actionHist.created > 0 || actionHist.updated > 0 || actionHist.deleted > 0){

      console.log(chalk.green(`Created ${actionHist.created}`))
      console.log(chalk.yellow(`Updated ${actionHist.updated}`))
      console.log(chalk.red(`Deleted ${actionHist.deleted}`))
      console.log(chalk.bgGreen.white.bold(`Total ${actionHist.created + actionHist.updated + actionHist.deleted} in ${((Date.now() - process.startTime)/1000).toFixed(2)} second(s)`))
      console.log(chalk.gray("In"), chalk.bold.yellow.underline(config.executingDir))
      console.log(chalk.gray("at", new Date().toString()))
      console.log(chalk.green("Watching for change ..."))

    }

}


export {presentAction}