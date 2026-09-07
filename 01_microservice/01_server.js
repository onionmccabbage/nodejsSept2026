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
    const data = 'here is some content'
    if (request.method === 'GET') { // GET or POST
        response.write(data)
        response.write('is it coffee time yet?')
        response.end('we are nearly there') // this ends the response stream
    }
    // we could hande POST, PUT, UPDATE etc with further code blocks
}).listen(8080)

// how to run code in watch mode....