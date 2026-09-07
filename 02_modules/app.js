// an app which import from elsewhere
import {greet, arr} from './util.mjs' // or '../util.mjs' a relative path
// import {arr} from './util.mjs'  // individual imports
import DoNowt from './util.mjs' // no {} since this is the default
console.log(greet('Ethel'), arr[6])