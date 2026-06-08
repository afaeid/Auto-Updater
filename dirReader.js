import fs from "fs/promises";
import path from "path";


const dirReader =  async (config, cwd, exeType)=> {
  
  let records = {
  files: [],
  dirs: []
};

  const directory = await fs.readdir(config.writingDir , {withFileTypes: true, recursive: true})


    for (const data of directory) {  
      
     const toExclude = config.excepts.some(exclude => data.parentPath.includes(exclude) || data.name.includes(exclude))
                     
     if (!toExclude) {   
                               
                                    
         let ifn = {
            isDir: data.isDirectory(),
            name: data.name,
            path: data.parentPath,
            fullPath: path.resolve(data.parentPath, data.name)
         }
         
         ifn.destPath = ifn.path.replace(cwd, config.executingDir)
         ifn.destFullPath = path.resolve(ifn.destPath, ifn.name)
         
         if (exeType === "init") {
          ifn.action = "create"
         }
    
         let stats = await fs.stat(ifn.fullPath)

         ifn.lastModified = stats.mtime.getTime()

         // console.log(ifn)
                                                                                                                          
         if (ifn.isDir) {
          records.dirs.push(ifn)
         }
         else if(!ifn.isDir){
          records.files.push(ifn)
         }
         else{
          console.log("Disaster arose. Don't know what type of file")
         }
                                                                                                                                        
                                                                                                                                        
     }
                                                                                                                                              
  }
  
   

  return records;

}
                                                                                                                                  

export{dirReader}