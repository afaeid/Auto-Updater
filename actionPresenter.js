import chalk from "chalk"




const presentAction = (actionHist, config)=>{

    if(actionHist.created > 0 || actionHist.updated > 0 || actionHist.deleted > 0){

      console.log(chalk.greenBright(`Created ${actionHist.created}`))
      console.log(chalk.yellowBright(`Updated ${actionHist.updated}`))
      console.log(chalk.redBright(`Deleted ${actionHist.deleted}`))
      console.log(chalk.bgGreenBright.white.bold(`Total ${actionHist.created + actionHist.updated + actionHist.deleted} in ${((Date.now() - process.startTime)/1000).toFixed(2)} second(s)`))
      console.log(chalk.gray("In"), chalk.yellowBright.underline(config.executingDir))
      console.log(chalk.gray("at", new Date().toString()))
      
      if(process["auto-updater"].command === "run") {console.log(chalk.greenBright("Watching for change ..."))}

    }

}


export {presentAction}