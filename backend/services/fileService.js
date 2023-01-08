const fs = require("fs");
const path = require("path");

class FileService{
    createDir(file){
        const filePath = `${path.resolve(__dirname,`../files`)}\\${file.user}\\${file.path}`;

        return new Promise(((resolve,reject)=>{
            try{
                if (!fs.existsSync(filePath)){
                    fs.mkdirSync(filePath);
                    return resolve({message: "File was created"});
                }
                else{
                    return reject({message: "File already exists"});
                }
            }
            catch (e) {
               return reject({message: "File error"})
            }
        }))
    }
}

module.exports = new FileService();