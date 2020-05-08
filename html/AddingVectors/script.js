const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let circles = [];
//Maakt alle circles aan en zet ze in een array
let A = new Point(new Vector2d(100, 100), 20, "Red", "", true);
let B = new Point(new Vector2d(400, 150), 20, "blue", "", true);
let C = new Point(new Vector2d(200, 300), 20, "green", "", true);

let D = new Point(new Vector2d(0, 0), 10, "rgb(255,0,0, 0.2)", "", false);
let E = new Point(new Vector2d(0, 0), 10, "rgb(0,0,255, 0.2)", "", false);
let F = new Point(new Vector2d(0, 0), 10, "rgb(0,255,0, 0.2)", "", false);

d = new Vector2d();
e = new Vector2d();
f = new Vector2d();

let trans = new Vector2d(500, 300);

//update word elke 10 milli seconde uitgevoert en kijkt of er dingen moeten veranderen en drawed alles opnieuw.
Update();

function Update() {
  context.clearRect(0, 0, width, height);

  d.sumVector(A.pos, trans)
  e.sumVector(B.pos, trans)
  f.sumVector(C.pos, trans)

  D.pos = d;
  E.pos = e;
  F.pos = f;

  drawlines();
  DrawCircles();
}
setInterval(Update, 10);

function drawlines() {
  context.beginPath();
  context.fillStyle = "rgba(255, 255, 0,0.2)"
  context.moveTo(A.pos.dx, A.pos.dy);
  context.lineTo(B.pos.dx, B.pos.dy);
  context.lineTo(C.pos.dx, C.pos.dy);
  context.closePath();
  context.stroke();
  context.fill();

  context.beginPath();
  context.fillStyle = "rgba(99, 99, 99,0.2)"
  context.moveTo(D.pos.dx, D.pos.dy);
  context.lineTo(E.pos.dx, E.pos.dy);
  context.lineTo(F.pos.dx, F.pos.dy);
  context.closePath();
  context.stroke();
  context.fill();
}

function DrawCircles(){
  A.draw();
  B.draw();
  C.draw();

  D.draw();
  E.draw();
  F.draw();
}
