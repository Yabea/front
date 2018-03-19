function line(){
	var myCanvas=document.getElementById("line");
    myCanvas.width="250";
    myCanvas.height="120";

    var cxt=myCanvas.getContext("2d");
  
    //画直线
    cxt.moveTo(30, 30);
    cxt.lineTo(220, 90);

    //定义画线样式
    cxt.strokeStyle="rgba(238, 220, 20)";//红色
    cxt.lineWidth="3";

    cxt.lineCap="round";//圆头

    cxt.stroke();
}

function triangle(){
	var myCanvas=document.getElementById("triangle");
    myCanvas.width="250";
    myCanvas.height="120";

    var cxt=myCanvas.getContext("2d");
    //画三角形
    cxt.moveTo(60,10);
    cxt.lineTo(200,50);
    cxt.lineTo(60, 110);
    cxt.lineTo(60, 10);
    cxt.strokeStyle="rgb(43, 154, 191)";
    cxt.lineWidth="3";

    cxt.lineCap="round";

    cxt.stroke();
}

function circle(){
	var myCanvas=document.getElementById("circle");
    myCanvas.width="250";
    myCanvas.height="120";
    var cxt=myCanvas.getContext("2d");
    cxt.beginPath();
    cxt.arc(65, 50, 40, 0, Math.PI*2, true);
    cxt.strokeStyle = '#ffffff';
	cxt.stroke();
	cxt.closePath();

	cxt.beginPath();
	cxt.arc(180, 50, 40, 0, Math.PI*2, true);
    cxt.strokeStyle = '#ffffff';
	cxt.stroke();
	cxt.closePath();

	cxt.beginPath();
	cxt.arc(130, 60, 60, Math.PI*0.25, Math.PI*0.75, false);
    cxt.strokeStyle = '#ffffff';
	cxt.stroke();
	cxt.closePath();
}


