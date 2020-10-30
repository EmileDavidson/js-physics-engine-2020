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
    let circle = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0,height)), getRandomInt(30,50), "red", i, true);
    circles.push(circle);
    let circle1 = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0,height)), getRandomInt(30,50), "blue", i, true);
    circles.push(circle1);
    let circle2 = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0,height)), getRandomInt(30,50), T, "yellow", true);
    circles.push(circle2);

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
