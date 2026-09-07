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
    res.writeHead(200, {'content-type':'text/html'})
    // if it is the root 
    if (req.url == '/'){
        // res.statusCode = 200 // specificy a status code
        res.write('<h3>Welcome</h3>')
    }
    // a route to the 'about' page
    else if (req.url == '/about'){
        // res.statusCode = 200 // specificy a status code
        // res.writeHead(200, {'content-type':'text/html'})
        res.write('<h3>About Us</h3>')
    }
    // any other route...
    else {
        res.write('<h3>Not Found</h3>')
    }
    // when done
    res.end('all done') // runs after any of the above
} )

// some parameters (in the global scope)
const hostName = '127.0.0.1'
const port = 3000

// the order of arguments matters, this is what the server.listen expects
server.listen( port, hostName, ()=>{
    // we use back-tick syntax to build strings
    console.info(`Server is running at http://${hostName}:${port}`)
} )

// to run a node mdule 
// node nnn.js
// or
// node --watch nnn.js // this will re-run the code when we make changes
