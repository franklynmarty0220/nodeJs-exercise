const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(error,content){
        if (error){
            console.error(`Error: ${error} ${path}`);
            process.exit(1);
        }
        console.log(` Here it is: ${content}`)
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

let path = process.argv[2];

if (path.slice(0,4) === 'http'){
    webCat(path);
} else{
    cat(path)
}
