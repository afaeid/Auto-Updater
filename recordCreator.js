import fs from "fs/promises"
import path from "path"



const createRec = async (records,cwd) => {

  records = JSON.stringify(records, null, 2)

  await fs.writeFile(path.resolve(cwd,".auto-updater.records.json"), records)

}

export { createRec }