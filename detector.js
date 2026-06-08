import fs from "fs/promises";
import path from "path";
import { dirReader } from "./dirReader.js"
// import { writeFile, writeDir } from "./writer.js"

const detect = async (config, cwd) => {

  let prevRecords = await fs.readFile(path.resolve(cwd, "./.auto-updater.records.json"))
  prevRecords = JSON.parse(prevRecords);
  let currentRecords = await dirReader(config, cwd, "run");

  for (const recordType in currentRecords){

    for (const currRecord of currentRecords[recordType]) {
       
       // console.log(prevRecords[recordType])
       let prevRecord = prevRecords[recordType].find(f => f.fullPath == currRecord.fullPath)
       let index = currentRecords[recordType].findIndex(f => f.fullPath == currRecord.fullPath)

       if (prevRecord) {

         if (prevRecord.lastModified != currRecord.lastModified) {

           currentRecords[recordType][index].action = "update"
        
          } else{
            currentRecords[recordType][index].action = null

          }
        } else {
           currentRecords[recordType][index].action = "create"
          }

    }
  }


  for (const recordType in prevRecords){

    for (const prevRecord of prevRecords[recordType]) {

       let currRecord = currentRecords[recordType].find(f => f.fullPath == prevRecord.fullPath)

       if (!currRecord) {

        prevRecord.action = "delete";

        currentRecords[recordType].push(prevRecord)
       }

    }
  }



  
  //console.log("currrent Records", currentRecords)
  return currentRecords

}

export { detect }