const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace
let pointA, positionVectorA, pointB, positionVectorB,sumVector,difVector;

// assign values
positionVectorA = new Vector2d(300,200);
positionVectorB = new Vector2d(100,300);
sumVector = new Vector2d(0,0);
difVector = new Vector2d(0,0);

pointA = new Point(new Vector2d(100, 100),20,"rgba(255,255,30,0.5)","pointA", true);
pointB = new Point(new Vector2d(400, 300),20,"rgba(255,255,30,0.5)","pointB", true);

animate();

//animation loop
function animate(){
  sumVector.sumVector(pointA.pos,pointB.pos);
  difVector.difVector(pointA.pos,pointB.pos);

  context.clearRect(0,0,width,height);
  pointA.pos.drawArrow(new Vector2d(0,0), "blue");
  pointB.pos.drawArrow(new Vector2d(0,0), "red");
  pointB.pos.drawArrow(new Vector2d(pointA.pos.dx,pointA.pos.dy), "green");
  sumVector.drawArrow(new Vector2d(0,0), "yellow")
  difVector.drawArrow(new Vector2d(pointB.pos.dx,pointB.pos.dy),"white")
  pointA.draw();
  pointB.draw();
}

setInterval(animate, 1);
