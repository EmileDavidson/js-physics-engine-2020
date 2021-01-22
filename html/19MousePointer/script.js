const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace
let PointA,PointB,arrow,dx,dy;
PointA = new Point(new Vector2d(100, 100),15,"red","circle1",true);
PointB = new Point(new Vector2d(400, 300),15,"blue","circle2",true);

arrow = {};

arrow.sh = 10;
arrow.sw = 100;
arrow.hh = 20;
arrow.hw = 37;
arrow.color = "rgba(120,120,120,0.5)";

arrow.draw = function(){
  context.beginPath();
  context.fillStyle = arrow.color;
  context.moveTo(0,0);
  context.lineTo(0,arrow.sh);
  context.lineTo(arrow.sw,arrow.sh);
  context.lineTo(arrow.sw,arrow.hh);
  context.lineTo(arrow.sw + arrow.hw ,0);
  context.lineTo(arrow.sw,-arrow.hh);
  context.lineTo(arrow.sw,-arrow.sh);
  context.lineTo(0,-arrow.sh);
  context.closePath();
  context.stroke();
  context.fill();
}

//x,y,radius,color,draggable,label

animate();

function animate(){
  dx = PointB.pos.dx - PointA.pos.dx;
  dy = PointB.pos.dy - PointA.pos.dy;

  context.clearRect(0,0,width,height)

  context.save();
  context.translate(PointA.pos.dx,PointA.pos.dy);
  context.rotate(Math.atan2(dy,dx));
  arrow.draw();
  context.restore();

  PointA.draw();
  PointB.draw();
}

setInterval(animate, 1)