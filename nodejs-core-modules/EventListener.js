const EventEmitter = require('events');
class MyEmiter extends EventEmitter{}

const emitter = new MyEmiter();

emitter.once('newListener',(event,listener)=>{
    if (event==='event'){
        emitter.on('event',()=>{
            console.log("B");
        });
    }
});

emitter.on('event',()=>{
    console.log("A");
});

emitter.emit('event');