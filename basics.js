// This is is Node file
// Everything we write in Node is JavaScript (ECMASscript or ES)
// Everything is an object

var old = 3 // still works
let modern = 7.5 // best practice
also = 9 // permitted

function trad(x){
    return x*x
}

// modern alternative
const fn = (x)=>{
    return x*x
}

// on older versions of Node there is no default console
// NB Node is not run in a browser, so there is no DOM etc.
console.log(old, trad(2))

// this is a common pattern: makes good use of the run-loop
const run = (n)=>{
    if (n==0) {
        throw new Error('We have reached zero')
    }
    run(n-1) // call itself
}

console.log(run(4))

// when and why to use either function syntax....? 