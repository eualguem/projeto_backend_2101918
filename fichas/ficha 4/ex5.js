/*var obj ={name:"pedro"};
var obj2 ={name:"dino"};
obj.age=20;
console.log(abj.age);*/
/*this.events={};
var obj={};
obj.events={};
obj.events[eventsName]
ex this.events[type]=[];*/
class emitter{
    constructor(){
        this.events={};
    }
}
//type="greet"
//listener = function()...
emitter.prototype.on=function(type,listener){
    if (this.events[type]!=undefined);

    this.events[type]=[];

    this.event[type].push(listener);
}