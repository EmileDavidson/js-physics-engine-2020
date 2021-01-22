const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace en scope
let point,position,velocity,acc;

// assign values
point = new Point(new Vector2d(200,300),15,"red","p", false);
position = point.vPos;
velocity = new Vector2d(1,2);
acc = new Vector2d(0,1)

animate();

//animation loop
function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate)
  point.draw();
  point.pos.drawArrow(new Vector2d(0,0),"yellow");
  velocity.sumVector(velocity,acc);
  point.pos.sumVector(point.pos,velocity);
  point.vPos = position;

  if(point.pos.dy > height){
    velocity.dy = -velocity.dy;
    point.pos.dy = height;
  }

  if(point.pos.dy < 0 ){
    velocity.dy = -velocity.dy;
  }

  if(point.pos.dx > width){
    velocity.dx = -velocity.dx;
  }
  if(point.pos.dx < 0 ){
    velocity.dx = -velocity.dx ;
  }

  velocity.drawArrow(new Vector2d(point.pos.dx,point.pos.dy),"blue",10);
  acc.drawArrow(new Vector2d(point.pos.dx,point.pos.dy),"green",50);
}
