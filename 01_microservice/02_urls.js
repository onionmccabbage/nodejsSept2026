// here we build a microservice web server that respondds to URL requests
// previously we import http from 'node:http'

// {} let us import non-default members
import { createServer } from "node:http";

// identifiers: letters, numbers and underscore, don't start with a digit

// we often store stuff in const like this
const server = createServer( (req, res)=>{
    // code for errors
    req.on('error', (err)=>{
        console.error(err) // console has log, error, warn, info
    })
    // act according to the URL
    // if it is the root 
    if (req.url == '/'){
        // res.statusCode = 200 // specificy a status code
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h3>Welcome</h3>')
    }
} )

server.listen( ()=>{} )