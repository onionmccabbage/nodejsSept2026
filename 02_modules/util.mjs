// utilities to be imported
// NB we name this mjs to indicate it uses ESM
export const greet = (name)=>{
    return `Hello ${name}`
}
// NB an array can be sparse (empty members)
export let arr = [5,4,3,2,7,,35,12]
// export default means we import without {}
export default class DoNowt{ 
    // does nothing
}
// an alternative syntax
function fn(){
    return 'this works'
}
export {fn}