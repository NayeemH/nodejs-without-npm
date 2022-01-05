const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const emitter = new MyEmitter();

emitter.once('event', ({period,text}) => {
    setTimeout(()=>{
        console.log(`${period} ${text}, We have to run`);
    },2000)
});

emitter.emit('event',{
    period: 'first',
    text: ' period done'
});
emitter.emit('event',{
    period: 'second',
    text: ' period done'
});

console.log("hello");