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
  for (let i = 0; i < 5; i++) {
    let circle = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0,height)), getRandomInt(30,50), GetRandomColor(), i, true);
    circles.push(circle);
  }
}

//update word elke 10 milli seconde uitgevoert en kijkt of er dingen moeten veranderen en drawed alles opnieuw.
Update();
function Update() {
  context.clearRect(0, 0, width, height);
  DrawCircles();
}
setInterval(Update, 10);

function DrawCircles(){
  for(let i = 0; i < circles.length; i++){
    circles[i].draw();
  }
}
//Simple functies for getting things.
function GetRandomColor() {
  let number = getRandomInt(0, colors.length);
  return colors[number];
}
