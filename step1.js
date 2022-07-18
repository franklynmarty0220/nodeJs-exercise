const fs = require('fs');

function cat(path){
    fs.readFile(path, 'utf8', function(error,content){
        if (error){
            console.error(`Error: ${error} ${path}`);
            process.exit(1);
        }
        console.log(` Here it is: ${content}`)
 })
           
}

cat(process.argv[2]);