// Node uses an event loop on a single thread
// this may mean any operation prevents other operations from happening
// Node uses an event loop to move as much as possible out of Node to the Operating System
// file system, server (https, tcp/ip, socket), API/REST, console.log

// here is some pseudo code
// const doStuff = ()=>{}
// anything.on('wibble', doStuff)

// Response.status(()=>{})
// .then(()=>{})
// FileSystem.read(()=>{})

// main( await doStuff(), ()=>{} )


// timeout_vs_immediate.js
setTimeout(() => {
  console.log('timeout');
}, 0); // we ask to run in zero milliseconds

setImmediate(() => {
  console.log('immediate');
});

// code from https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick
import EventEmitter from 'node:events';

class MyEmitter extends EventEmitter {
  constructor() {
    super();

    // use nextTick to emit the event once a handler is assigned
    process.nextTick(() => {
      this.emit('event');
    });
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});











