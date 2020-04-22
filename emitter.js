//Creat module kiểu OBJ - dạng 4
function Emitter(){
    this.events={};
}

//Expand OBJ
Emitter.prototype.on =function (type,listener){
    this.events[type]=this.events[type]|| [];
    this.events[type].push(listener);
}

//phát
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener) {
            listener();
        })
    }
}
module.exports = Emitter;