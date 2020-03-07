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
let a = new Point(300, 100, 20, "blue", true);
circles.push(a);
let b = new Point(301,500, 20, "blue", true);
circles.push(b);
let c = new Point(50, 300, 20, "red", true);
circles.push(c);
let d = new Point(550, 300, 20, "red", true);
circles.push(d);
let e = new Point(100, 400, 20, "Purple", true);
circles.push(e);
let f = new Point(450, 400, 20, "Purple", true);
circles.push(f);

//maak de lines between circles aan
for (let i = 0; i < 3; i++) {
  let myline = new Linear(1, 1);
  lines.push(myline);
}

//interseption point
let S = new Point(550, 300, 10, "GREEN", true);

Update();
function Update() {
  context.clearRect(0, 0, width, height);
  //verander circle location wanneer ze worden gedragged
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].drag == true) {
      circles[i].x = mousePosX;
      circles[i].y = mousePosY;
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
  S.x = lines[0].intersection(lines[1]).x;
  S.y = lines[0].intersection(lines[1]).y;
  S.draw();

  S.x = lines[0].intersection(lines[2]).x;
  S.y = lines[0].intersection(lines[2]).y;
  S.draw();

  S.x = lines[1].intersection(lines[2]).x;
  S.y = lines[1].intersection(lines[2]).y;
  S.draw();
}
setInterval(Update, 10);


//maak de public variable aan voor mouse possibilitie
let mousePosX = 0;
let mousePosY = 0;

//onmouse move save the location of my mouse
document.onmousemove = function(e) {
  mousePosX = e.pageX;
  mousePosY = e.pageY;
};

//on mouse down check if its on a circle an set it to draggable
document.onmousedown = function(e) {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].draggable == true) {
      if (e.pageY > circles[i].y - circles[i].radius && e.pageY < circles[i].y + circles[i].radius) {
        if (e.pageX > circles[i].x - circles[i].radius && e.pageX < circles[i].x + circles[i].radius) {
          circles[i].drag = true;
          return;
        }
      }
    }
  }
};

//on mouse up check if there is a circle that gets dragged an set is back to false
document.onmouseup = function(e) {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].drag == true) {
      circles[i].drag = false;
    }
  }
};
