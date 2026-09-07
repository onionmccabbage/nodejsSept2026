// we can grab bits of Node to use in our own code (Node standard library)
import { createServer } from 'http' // this is ESM - an ES Module
import fs from 'node:fs'
// const fs = require('fs') // commonJS ...or 'node:fs'
// import * as http from 'http'

// some handy config data
const hostName = '127.0.0.1'
const port = 3000

// we can make our own server like this
const server = createServer((req, res) => { // request and response objects
    // explore sending html
    // explore routing (conditional responses)
    console.log(req.url) // url is the path
    // append to a file (with a new line at the end) Notiee the empty call-back
    fs.appendFile('serverlog.txt', `${req.url}\n`, () => {})
    // act acording to the path
    console.log(req.query)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (req.url == '/') { // the home route
        res.write('<h3>Welcome</h3>')
        res.end()
    }
    else if (req.url == '/about') { // the about route
        res.write('<h3>About this website...</h3>')
        res.end()
    }
    else if (req.url == '/content') {
        // read from file (async) // also see readFileSync
        fs.readFile('example.txt', 'utf8', (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            else if (data) { // when we have the data retrieved...
                console.log(data)
                // send the file contents in the request response
                res.write(data)
                res.end()
            }
        })
    }
    else { // all other routes
        res.write('<h3>404 Not Found</h3>')
        res.end()
    }

})

// we need to start our microserver
server.listen(port, hostName, () => {
    // we may use back-tick syntax to inject any pure JS statement
    console.log(`Server running at http://${hostName}:${port}/`)
})