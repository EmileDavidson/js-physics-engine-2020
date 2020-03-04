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
    for (let i = 0; i < 50; i++) {
        //    let circle = new Point(getRandomInt(0, width), getRandomInt(0, height), getRandomInt(20, 50), GetRandomColor(), true);
        let circle = new Point(getRandomInt(0, width), getRandomInt(0, height), getRandomInt(20, 50), "Red", false);
        circles.push(circle);
    }
    for (let i = 0; i < 50; i++) {
        //    let circle = new Point(getRandomInt(0, width), getRandomInt(0, height), getRandomInt(20, 50), GetRandomColor(), true);
        let circle = new Point(getRandomInt(0, width), getRandomInt(0, height), getRandomInt(20, 50), "Green", true);
        circles.push(circle);
    }
}

//Update alle circles wanneer nodig.
function UpdateCircles() {
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].drag == true) {
            circles[i].x = mousePosX;
            circles[i].y = mousePosY;
        }
    }
}

//tekent alle circles
function DrawCircles() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].draw(context);
    }
}

//update word elke 10 milli seconde uitgevoert en kijkt of er dingen moeten veranderen en drawed alles opnieuw.
Update();
function Update() {
    context.clearRect(0,0,width,height);
    UpdateCircles();
    DrawCircles();
}
setInterval(Update, 10);

//onmouse move save the location of my mouse
document.onmousemove = function (e) {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
};
//on mouse down check if its on a circle an set it to draggable
document.onmousedown = function (e) {
    for (let i = 0; i < circles.length; i++) {
        if(circles[i].draggable == true) {
            if(e.pageY > circles[i].y - circles[i].radius && e.pageY < circles[i].y + circles[i].radius){
                if(e.pageX > circles[i].x - circles[i].radius && e.pageX < circles[i].x + circles[i].radius){
                    circles[i].drag = true;
                    return;
                }
            }
        }
    }
};
//on mouse up check if there is a circle that gets dragged an set is back to false
document.onmouseup = function (e) {
    for (let i = 0; i < circles.length; i++) {
        if(circles[i].drag == true){
            circles[i].drag = false;
        }
    }
};

//Simple functies for getting things.
function GetRandomColor() {
    let number = getRandomInt(0, colors.length);
    return colors[number];
}


