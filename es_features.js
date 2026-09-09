// ES6+ introduces modern ways to write code

function fn(){}

// Arrow functions
const fnA = ()=>{}
// if we drop the {} we do not need to say 'return'
const fnB = ()=>'hello' // if there is only one statememnt, we can leave out the brackets
const fnC = x=>x**2  // if there is exactly one argument, we can leave out the ()




console.log(fnB())
console.log(fnC(3))