// fetch some public data from an internet REST API

const getRandom = ()=>{
    return Math.floor(Math.random()*8) +1 // random int 1-9
}

// a custom function
const fetchPersonPromise=()=>{
    const r = getRandom()
    return fetch(`https://swapi.dev/api/people/${r}/`)
        .then( (p)=>{ return p.json()} ) // this API always returns JSON
}

// call our code
fetchPersonPromise()
    .then( (p)=>{
        console.log(p)
    } )