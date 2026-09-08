import {argv} from 'node:process'
// we may choose to pass in arguments at the point where we run any file
// to do this:
// node nnnn.js hello world

// we can access any runtime arguments like this
const fnGrabArgs = ()=>{
    // iterate over every passed-in argv
    argv.forEach( (val, index)=>{
        console.log(`${index}: ${val}`)
    } )
}

// run our code
fnGrabArgs()