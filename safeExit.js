import { createRec } from "./recordCreator"
import { presentAction } from "./actionPresenter"

const safeExit = async (key)=> {

  if(process["auto-updater"].command === "run"){

    let currentTask = process["auto-updater"].currentTask

    if(!currentTask) return;

    if(
      (currentTask.name === "CHANGE" && currentTask.status === "processing") || 
      (currentTask.name === "CHANGE" && currentTask.status === "success") || 
      (currentTask.name === "CREATE_records" && currentTask.status === "pending")
    ){

      await createRec(currentTask.resources[0])
      presentAction(currentTask.resources[1])

    }
  }

}


export {safeExit}