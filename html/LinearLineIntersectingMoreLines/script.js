const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let colors = ["Red", "Blue", "Green", "Orange", "Purple"];
let circles = [];
let lines = [];

// maak de circles aan
let a = new Point(new Vector2d(300, 100), 20, "blue","", true);
circles.push(a);
let b = new Point(new Vector2d(301,500), 20, "blue","", true);
circles.push(b);
let c = new Point(new Vector2d(50, 300), 20, "red","", true);
circles.push(c);
let d = new Point(new Vector2d(550, 300), 20, "red","", true);
circles.push(d);
let e = new Point(new Vector2d(100, 400), 20, "Purple","", true);
circles.push(e);
let f = new Point(new Vector2d(450, 400), 20, "Purple","", true);
circles.push(f);

//maak de lines between circles aan
for (let i = 0; i < circles.length/2  ; i++) {
  let myline = new Linear(1, 1);
  lines.push(myline);
}

//interseption point
let s = new Point(new Vector2d(550, 300), 10, "GREEN","", true);

Update();
function Update() {
  context.clearRect(0, 0, width, height);
  //verander circle location wanneer ze worden gedragged
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].drag == true) {
      circles[i].pos.dx = mousePosX;
      circles[i].pos.dy = mousePosY;
    }
  }
  //draw de circles
  for (let i = 0; i < circles.length; i++) {
    circles[i].draw(context);
  }

  //plaats de lines tussen de 2 circles
  lines[0].defineByTwoPoints(circles[0], circles[1]);
  lines[0].draw(context);

  lines[1].defineByTwoPoints(circles[2], circles[3]);
  lines[1].draw(context);

  lines[2].defineByTwoPoints(circles[4], circles[5]);
  lines[2].draw(context);

  //update de interception point en draw it again.
  s.pos.dx = lines[0].intersection(lines[1]).x;
  s.pos.dy = lines[0].intersection(lines[1]).y;
  s.draw();

  s.pos.dx = lines[0].intersection(lines[2]).x;
  s.pos.dy = lines[0].intersection(lines[2]).y;
  s.draw();

  s.pos.dx = lines[1].intersection(lines[2]).x;
  s.pos.dy = lines[1].intersection(lines[2]).y;
  s.draw();
}
setInterval(Update, 10);
