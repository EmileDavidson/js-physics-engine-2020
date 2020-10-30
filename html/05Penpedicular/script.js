const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let A, B,C, l, m;

A = new Point(new Vector2d(100, 200), 20, "red", "ball", true);
B = new Point(new Vector2d(500, 201), 20, "red", "ball", true);
C = new Point(new Vector2d(300, 50), 20, "blue", "ball", true);

l = new Linear(1,1);
m = new Linear(1,1);


function loop(){
  context.clearRect(0,0,width,height);
  A.draw();
  B.draw();
  C.draw();

  l.defineByTwoPoints(A,B);
  l.draw(0,width);

  m.slope = -1/l.slope;
  m.intercept = C.pos.dy - C.pos.dx * m.slope;
  m.draw();
}

setInterval(loop, 10);
