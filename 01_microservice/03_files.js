// using the file system
const fs = require('fs') // here we use commonJS

// the call-back argument order mattters. Here error then data
fs.readFile('example.txt', 'utf8', (error, data)=>{
    if(error){
        console.error(error)
    }
    // if all went well, we wil just console.log the data
    console.log(data)
})