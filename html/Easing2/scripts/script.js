const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const navbarOffset = document.getElementsByClassName("navbar")[0].offsetHeight;


let width = window.innerWidth;
let height = window.innerHeight - navbarOffset;

canvas.width = width;
canvas.height = height;


let easingType = EasingEnum.EaseInElastic;
let targetCircle = new Point(new Vector2d(width - 75, height / 2), 20, "rgba(163, 10, 163)", "endPosition", true);
targetCircle.SetNavbarOffset(navbarOffset);

let circle = new Point(new Vector2d(width / 2, height / 2), 50, "rgba(163, 10, 10)", "circle", false);

start();
function start(){
    update();
}


function update(){
    requestAnimationFrame(update);
    //other updates from other scripts
    TweenMachineUpdate();
    //drawings
    context.clearRect(0,0,width,height);
    circle.draw();
    targetCircle.draw();
}

document.addEventListener("keydown", (event)=>{
    if(event.key == " "){
        //space is pressed.
        CreateNewTween(circle, targetCircle.pos, .5, easingType);
    }
})

function StartTween(){
    CreateNewTween(circle, targetCircle.pos, .5, easingType);
}

