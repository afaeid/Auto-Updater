import fs from "fs/promises"

let config;

const maintain = async () => {
 config = await fs.readFile("./maintainer.json")
 config = JSON.parse(config);
 
 if (config.isDir) {
  let dir = await fs.readdir(config.writingDir, { recursive: true, withFileTypes: true })
  const results = dir.map(data => ({
   path: data.parentPath,
   type: data.isDirectory(),
   name: data.name,
   found: config.except.some(val => (data.parentPath.includes(val) || data.name.includes(val)))
  }));
  
  
  for (let data of results) {
   
   if (!data.type && !data.found) {
    const destPath = data.path.replace(config.writingDir, config.executingDir)
    await fs.mkdir(destPath, { recursive: true })
    await fs.copyFile(`${data.path}/${data.name}`, `${destPath}/${data.name}`)
   }
   
  }
 }
}

const loop = async () => {
 while (true) {
  await maintain();
  console.log(`Finished. Starting again within ${config.delay/1000} second(s)`)
  await delay(config.delay); 
 }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export {loop, config};