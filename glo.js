function doline(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "blue";
}

function doyellow(){
    var dd1 = document.getElementById("d1")
    dd1.style.backgroundColor = "white"
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "yellow"
    ctx.fillRect(10,10,40,40)
    ctx.fillRect(60,10,40,40)

    ctx.fillStyle = "black"
    ctx.font = "30px Arial"
    ctx.fillText("hello world", 10, 70)
}
function setWidth (value) {
    if (isNumeric(value) ) {
        paintcanvas.width = value;
    }
}

function setHeight(value){
    var canvas = document.getElementById("canvas1")
    canvas.setHeight= "value"

}