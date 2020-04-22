
var Emitter = require("./emitter.js");

var emitter = new Emitter();
emitter.on("bad",function(){
    console.log("Một môn nào đó bị điểm kém");
})
emitter.on("bad",function(){
    console.log("Đã có điểm kém, phát tới phụ huynh");
})


//có bảng điểm
var scores = [10,4];
for(var s of scores){
    if(s<5){
        console.log("Điểm thấp quá",s);
        emitter.emit("bad");
    }
    //insert db
}