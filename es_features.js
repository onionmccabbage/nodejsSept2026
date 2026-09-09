// ES6+ introduces modern ways to write code

function fn(){}

// Arrow functions
const fnA = ()=>{}
// if we drop the {} we do not need to say 'return'
const fnB = ()=>'hello' // if there is only one statememnt, we can leave out the brackets
const fnC = x=>x**2  // if there is exactly one argument, we can leave out the ()

console.log(fnB())
console.log(fnC(3))

// everything above is in the global scope
// we can create a new scope using {}
{
    // this is a separate scope
    // unpacking with ...rest
    let a = [3,4,5,6,2,7]
    let [x,y,z, ...rest] = a // here we unpack the members of a  

    console.log(x,y,z, rest)
}
{
    // another scope
    let a = {name:'Play School', presenter:'Floella', start:1976}
    // unpack this object
    const {name:n, presenter:p, ...rest} = a

    console.log(`${n} presented by ${p} from ${rest.start}`)

}