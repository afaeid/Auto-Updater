import fs from "fs/promises"

let config = {
  writingDir: "./WritingDir", 
  executingDir: "./ExecutingDir",
  excepts: ["node_modules", ".git"]
}

const writeFile = async (path,name)=> {
 
const destPath = path.replace(config.writingDir, config.executingDir)
    await fs.mkdir(destPath, { recursive: true })
    await fs.copyFile(`${path}/${name}`, `${destPath}/${name}`)

}

export {writeFile}