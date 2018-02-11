var canvas = document.getElementById('sandbox');
var conext =canvas.getContext("2d");
var square = new Path2D();
var line = new Path2D();
var R = 150, d, angle, pX, pY, qX, qY;
for(d=0; d<60; ++d){
  angle=(d/60)*2*(Math.PI);
  pX=Math.cos(angle)*R;
  pY=-Math.sin(angle)*R;
  qX=0.9*pX;
  qY=0.9*pY;
  pX+=R;
  pY+=R;
  qX+=R;
  qY+=R;
  line.moveTo(pX,pY);
  line.lineTo(qX,qY);
}
conext.stroke(line);

function drawWatch(){
  var date = new Date(), h, min, sec;
  h=date.getHours();
  min=date.getMinutes();
  sec=date.getSeconds();
  secAngle = (sec/60)*(2*Math.PI);
  minAngle = (min/60)*(2*Math.PI);
  hAngle = (h%12/12)*(2*Math.PI);
  secAngle = Math.PI/2-secAngle;
  minAngle = Math.PI/2-minAngle;
  hAngle = Math.PI/2-hAngle;

  var sX, sY;
  sX=Math.cos(secAngle)*R+R;
  sY=-Math.sin(secAngle)*R+R;
  line.moveTo(sX,sY);
  line.lineTo(R,R);
  conext.stroke(line);

  var mX, mY;
  mX=Math.cos(minAngle)*R+R;
  mY=-Math.sin(minAngle)*R+R;
  line.moveTo(mX,mY);
  line.lineTo(R,R);
  conext.stroke(line);

  var hX, hY;
  hX=Math.cos(hAngle)*R+R;
  hY=-Math.sin(hAngle)*R+R;
  line.moveTo(hX,hY);
  line.lineTo(R,R);
  conext.stroke(line);

  setTimeout(drawWatch, 1000);
}
drawWatch();
