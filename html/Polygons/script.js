const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let colors = ["Red", "Blue", "Green", "Orange", "Purple"];
let mypolygon = new Polygon(getRandomInt(5, 30), GetRandomColor());

mypolygon.draw();

function GetRandomColor(){
  let number = getRandomInt(0, colors.length);
  return colors[number];
}
