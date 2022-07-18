const fs = require('fs');
const process = require('process');
const axios = require('axios');

function handleOutput(text, output) {
    if(output) {
        fs.writeFile(output, text, 'utf8', err => {
            if (err){
                console.error(`${err.upperCased()}: Couldn't write ${output}`);
                process.exit(1)
            }
            });
        
        } else {
            console.log(text)
        }
    }



function cat(path,output){
    fs.readFile(path, 'utf8', function(error,content){
        if (error){
            console.error(`Error: ${error} ${path}`);
            process.exit(1);
        }
        handleOutput(content, output)
 })
           
}

async function webCat(url){
    try {
        let res = await axios.get(url);
        console.log(res.data);
    }
    catch (err){
        console.log(`Error: ${err} ${url}`);
        process.exit(1);
    }
}

let path;
let output;

if(process.argv[2] === '--out'){
    output = process.argv[3];
    path = process.argv[4]
} else {
    path = process.argv[2];
}

if (path.slice(0,4) === 'http'){
    webCat(path);
} else{
    cat(path)
}
