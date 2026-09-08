import {argv} from 'node:process'

const getRandomInt=(max)=>{
  // see if an integer has been provided as a system argument variable
  if(argv[2]){
    return argv[2]
  }
  else {
    return Math.floor(Math.random() * max) + 1;
  }
}

const fetchPersonPromise=()=>{
  const randomId = getRandomInt(83);
  return fetch(`https://swapi.dev/api/people/${randomId}/`)
  .then((response) =>
    response.json()
  );
}

const fetchPlanetPromise=(url)=>{
  return fetch(url).then((response) => response.json());
}

fetchPersonPromise()
  .then((person) => {
    console.log("Person:", person.name);
    return fetchPlanetPromise(person.homeworld);
  })
  .then((planet) => {
    console.log("Homeworld:", planet.name);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
