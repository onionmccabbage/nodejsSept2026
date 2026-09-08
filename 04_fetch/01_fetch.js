// fetch some public data from an internet REST API

const getRandom = ()=>{
    return Math.floor(Math.random()*8) +1 // random int 1-9
}

// a custom function
// using a promise
const fetchPersonPromise=()=>{
    const r = getRandom()
    // fetch is designed to always return a promise
    return fetch(`https://swapi.dev/api/people/${r}/`)
    // promises are thenable
        .then( (p)=>{ 
            // NB we may need to handle 404 etc a a successful promise
            // here the promise is resolved by reading the json() from the response object
            return p.json()} ) // this API always returns JSON
        // catch exceptions
        .catch((err)=>{
            console.error(err)
        })
    }
// the same thing using async-await
// we write the 'async' keyword before our function. 
// This makes it a promise
const fetchPlanetAsync = async ()=>{
    const rand = getRandom()
    const response = await fetch(`https://swapi.dev/api/planets/${rand}`)
    // this next line will only run when the await has returned
    return response.json()
}

// call our code
fetchPersonPromise()
    // entertain the user here....
    .then( (p)=>{
        console.log(p)
    } )

// call our async code
const planet = await fetchPlanetAsync()
console.log(planet)