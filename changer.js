import fs from "fs/promises";
import { dirReader } from "./dirReader.js";
import path from "path";
import { currentTast } from "./currentTaskHandler.js";


let config;
 

const updateFile = async (data)=> {

  await fs.copyFile(data.fullPath, data.destFullPath)
}

const createFile = async (data)=> {
  
   await fs.mkdir(data.destPath, { recursive: true })
   await fs.copyFile(data.fullPath, data.destFullPath)
}

const deleteFile = async (destFullPath)=> {

   await fs.rm(destFullPath, {force: true})
}

const createDir = async (destFullPath)=> {

   await fs.mkdir(destFullPath, { recursive: true })
}

const deleteDir = async (destFullPath)=> {
  
   await fs.rm(destFullPath, {recursive: true, force: true })

}

const change = async (records) => {

  let actionHistory = {
    updated: 0,
    created: 0,
    deleted: 0
  }

  let processRsrc = {files:[],dirs:[]} 

  for (const fileType in records) {
    
    const remaining = [];

    for (const record of records[fileType]) {
      
      if(record){

        if (record.isDir && record.action === "create") {

        await createDir(record.destFullPath);
        record.action = null;
        remaining.push(record);
        actionHistory.created++

        processRsrc[0][fileType].push(record)

        currentTast("CHANGE", "processing", [processRsrc, actionHistory])

      } else if (record.isDir && record.action === "delete") {

        await deleteDir(record.destFullPath);
        actionHistory.deleted++

      } else if (!record.isDir && record.action === "create") {

        await createFile(record);
        record.action = null;
        remaining.push(record)
        actionHistory.created++

        processRsrc[0][fileType].push(record)

        currentTast("CHANGE", "processing", [processRsrc, actionHistory])

      } else if (!record.isDir && record.action === "update"){

        await updateFile(record);
        record.action = null;
        remaining.push(record)
        actionHistory.updated++

        processRsrc[0][fileType].push(record)

        currentTast("CHANGE", "processing", [processRsrc, actionHistory])

      } else if (!record.isDir && record.action === "delete"){

        await deleteFile(record.destFullPath);
        actionHistory.deleted++

      }else {

        record.action = null;
        remaining.push(record); 

        processRsrc[0][fileType].push(record)

        currentTast("CHANGE", "processing", [processRsrc, actionHistory])

      }

      }
    }

    records[fileType] = remaining;
  }

  return [records, actionHistory];
};

export {change}