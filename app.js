
var Emitter = require("./emitter.js");
var eventConfig = require("./config.js");

var emitter = new Emitter();
emitter.on(eventConfig.BAD_SCORE,function(){
    console.log("Một môn nào đó bị điểm kém");
})
emitter.on(eventConfig.BAD_SCORE,function(){
    console.log("Đã có điểm kém, phát tới phụ huynh");
})


//có bảng điểm
var scores = [10,4];
for(var s of scores){
    if(s<5){
        console.log("Điểm thấp quá",s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
    //insert db
}