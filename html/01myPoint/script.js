const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let circles = [];
let colors = ["Red", "Green", "Blue", "Orange", "Purple"];

CreateCircles();
function CreateCircles() {
    context.clearRect(0,0,width,height);
    // let mycircle = new Point(getRandomInt(0, width), getRandomInt(0,height),getRandomInt(20, 50), getRandomColor(), false)
    let mycircle = new Point(new Vector2d(getRandomInt(0,width), getRandomInt(0,height)), getRandomInt(20,50), getRandomColor(), "", false);
    circles.push(mycircle);
    for(let i = 0; i < circles.length; i++){
        circles[i].draw(context);
    }
}
setInterval(CreateCircles, 100);

function  getRandomColor() {
    let number = getRandomInt(0, colors.length);
    return colors[number];
}
