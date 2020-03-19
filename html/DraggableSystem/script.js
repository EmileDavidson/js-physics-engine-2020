const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
var mousePosX = 0;
var mousePosY = 0;
let circles = [];
let colors = ["Red", "Green", "Blue", "Orange", "Purple"];
//Maakt alle circles aan en zet ze in een array
CreateCircles();

function CreateCircles() {
  for (let i = 0; i < 10; i++) {
    let circle = new Point(getRandomInt(0, width), getRandomInt(0, height), getRandomInt(30,50), GetRandomColor(), true);
    circles.push(circle);
  }
}

//update word elke 10 milli seconde uitgevoert en kijkt of er dingen moeten veranderen en drawed alles opnieuw.
Update();
function Update() {
  context.clearRect(0, 0, width, height);
  DrawCircles();
  drawLinesBetweenPoints();
}
setInterval(Update, 10);

function DrawCircles(){
  for(let i = 0; i < circles.length; i++){
    circles[i].draw();
  }
}



function drawLinesBetweenPoints() {

  context.beginPath();
  context.lineWidth = 1;
  for (let i = 0; i < circles.length; i++) {
    context.lineTo(circles[i].x, circles[i].y);
  }
  context.closePath();
  context.stroke();
}


//Simple functies for getting things.
function GetRandomColor() {
  let number = getRandomInt(0, colors.length);
  return colors[number];
}
