var preX = 0;
var preY = 0;
var ifInModule = 0;


MoveModule = document.getElementsByTagName('body')[0];
img = document.getElementById('backgroundIMG');


MoveModule.onmousemove = function Move(){
  height = MoveModule.clientHeight;
  width = MoveModule.clientWidth;
  nowLeft = img.getBoundingClientRect().left;
  nowTop = img.getBoundingClientRect().top;

  var e = event || window.event;
  x = e.clientX; y = e.clientY;

  xP = (x-preX)/5;
  yP = (y-preY)/5;

  nowLeft -= xP;
  if(nowLeft < -width/5){nowLeft = -width/5;}
  if(nowLeft >0 ){nowLeft = 0;}
  nowTop -=yP;
  if(nowTop < -height/5){nowTop = -height/5;}
  if(nowTop >0 ){nowTop = 0;}

  img.style.left = nowLeft + "px";
  img.style.top = nowTop + "px";
  preX = x;preY = y;
}

MoveModule.onmouseenter = function Over(){
  if(ifInModule == 1){return;}
  var e = event || window.event;
  x = e.clientX; y = e.clientY;
  preX = x;preY = y;
  ifInModule = 1;
}
MoveModule.onmouseleave = function Leave(){
  ifInModule = 0;
}
