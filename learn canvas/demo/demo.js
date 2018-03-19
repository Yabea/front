

var myCanvas=document.getElementById("myCanvas");
myCanvas.width="500";
myCanvas.height="300";

var cxt=myCanvas.getContext("2d");

//圆
var x=10,y=10;
var a=490,b=290;
var duration=2000;
var cishu=2000/30;
var xstep=(a-x)/cishu;
var ystep=(b-y)/cishu;


function huayuan(x,y){
    cxt.beginPath();
    cxt.arc(x,y,10,0,Math.PI*2);
    cxt.fillStyle="red";
    cxt.fill();
}

huayuan();
var timer=setInterval(function(){
     //橡皮擦
    cxt.clearRect(x-11,y-11,22,22);

    x+=xstep;
    y+=ystep;

    if(x>=a){
        x=a;
        y=b;
    }
    huayuan(x,y);

},30);