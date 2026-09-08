import {EventEmitter} from 'node:events'
// understand events in JavaScript

// on the web...
// myButton.addEventListener('click', ()=>{})

// despite the limitations of callback architecture, we do need events
// pretty much everything is event driven
// we derive our own custom events from the EventEmitter class
const MyEvent = new EventEmitter()

// next we decide on what our event will respond to
MyEvent.on('wibble', ()=>{
    console.log('a wibble event just happened')
})
MyEvent.on('wobble', ()=>{
    console.warn('Warning Will Robinson ....')
})
MyEvent.on('wubble', ()=>{
    throw Error('oops')
})

// we trigger our event like this
MyEvent.emit('wibble') // here the wibble event will happen!!!
MyEvent.emit('wobble') 
MyEvent.emit('wubble') 