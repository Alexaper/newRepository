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
