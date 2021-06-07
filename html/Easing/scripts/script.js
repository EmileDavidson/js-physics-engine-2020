const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const navbarOffset = document.getElementsByClassName("navbar")[0].offsetHeight;

let width = window.innerWidth;
let height = window.innerHeight - navbarOffset;

canvas.width = width;
canvas.height = height;

let easingType = "none";

let circle = new Point(new Vector2d(0, 0), 50, "rgba(163, 10, 10)", false);
let moveCircle = true;
let circleToBegin;
let movementSpeed = 10;

function start() {
    update();
}

function update() {
    context.clearRect(0, 0, width, height);

    DrawLine();
    DrawCircle();

    requestAnimationFrame(update);
}

function DrawLine(){
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "black"
    context.moveTo(0, height / 2);
    for (let i = 0; i < width; i++) {context.lineTo(i, getWantedYFromX(i));}
    context.stroke();
    context.closePath();
}

function DrawCircle(){
    if (moveCircle) {
        if (circleToBegin) circle.pos = new Vector2d(circle.pos.dx - movementSpeed, getWantedYFromX(circle.pos.dx - movementSpeed));
        if (!circleToBegin) circle.pos = new Vector2d(circle.pos.dx + movementSpeed, getWantedYFromX(circle.pos.dx + movementSpeed));
        if (circle.pos.dx < 0) circleToBegin = false;
        if (circle.pos.dx > width) circleToBegin = true;
    }
    //make sure the Y is always on the right place (fixes when you stop moving an change it you will still be on the right y)
    circle.pos.dy = getWantedYFromX(circle.pos.dx);
    circle.draw(context);
}



start()
