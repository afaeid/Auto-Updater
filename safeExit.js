import { createRec } from "./recordCreator.js"
import { presentAction } from "./actionPresenter.js"

const safeExit = async ()=> {

  if(process["auto-updater"]?.command === "run" || process["auto-updater"]?.command === "init"){

    let currentTask = process["auto-updater"].currentTask

    if(!currentTask) return;

    if(
      (currentTask.name === "CHANGE" && currentTask.status === "processing") || 
      (currentTask.name === "CHANGE" && currentTask.status === "success") || 
      (currentTask.name === "CREATE_records" && currentTask.status === "pending")
    ){

      await createRec(currentTask.resources[0])
      presentAction(currentTask.resources[1], process["auto-updater"].config)

    }
    else if(
      (currentTask.name === "CREATE_records" && currentTask.status === "success") || 
      (currentTask.name === "PRESENT_actions" && currentTask.status === "pending")
    ){

      presentAction(currentTask.resources[1], process["auto-updater"].config)

    }
    else{

      return;

    }
  }

}


export {safeExit}