import fs from "fs";

const createDb = async (dataBasePath?: string)=>{
    dataBasePath = dataBasePath || "./db/dataBasePath.json"

    if(fs.existsSync(dataBasePath))
        return console.log('Database exists')
    fs.writeFile(dataBasePath, JSON.stringify([], null , "  "), 'utf-8', (err)=>{
            if(err){
                console.log(err)
                return;
            }
            else{
                console.log('Database was created succesfully');
                
            }
        })
    }

export default createDb;