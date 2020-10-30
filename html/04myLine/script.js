const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let colors = ["Red", "Blue", "Green", "Orange", "Purple"];
let lines = [];

let a = new Point(new Vector2d(100, 100), 20, "red", "",true);
let b = new Point(new Vector2d(250, 250), 20, "red", "",true);
a.draw(context);
b.draw(context);

let myline = new Linear(0.5, 800);
myline.defineByTwoPoints(a, b);
myline.draw(context);


Update();
function Update() {
  context.clearRect(0,0,width,height);
  if (a.drag == true) {
      a.pos.dx = mousePosX;
      a.pos.dy = mousePosY;
  }
  if (b.drag == true) {
      b.pos.dx = mousePosX;
      b.pos.dy = mousePosY;
  }


  myline.defineByTwoPoints(a, b);
  myline.draw(context);

  a.draw(context);
  b.draw(context);

}
setInterval(Update, 10);
//maak de public variable aan voor mouse possibilitie
let mousePosX = 0;
let mousePosY = 0;
