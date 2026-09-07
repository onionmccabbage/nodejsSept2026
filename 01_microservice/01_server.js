// a server
import http from 'node:http' // this is aprt of the default Node library

// we often write call-back functions
http.createServer((request, response)=>{
    // what are we going to do...
    // good idea to code against errors first
    request.on('error', (err)=>{
        console.log(err)
    })
    // respond to requests
    if (request.method === 'GET') {
        response.write('hello')
        response.end() // this ends the response stream
    }
}).listen(8080)