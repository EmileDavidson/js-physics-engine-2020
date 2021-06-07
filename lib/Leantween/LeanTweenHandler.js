//variable declaration
let activeTweens = [];
let timeMultiplier = 0.001;
start();
function start(){
    //start methodes

    //start update function
    TweenMachineUpdate();
}

function TweenMachineUpdate(){
    // requestAnimationFrame(TweenMachineUpdate);
    if(activeTweens == null) {
        console.log("activetweens == null")
        return;
    }
    for (let i = 0; i < activeTweens.length; i++){
        if(activeTweens[i].percent >= 1) {
            activeTweens.splice(i,1)
            return;
        }
        activeTweens[i].UpdateTween(timeMultiplier);
    }
}

function CreateNewTween(obj, targetPos, speed, type){
    console.log(type)
    activeTweens[activeTweens.length] = (new Tween(obj, new Vector2d(targetPos.dx, targetPos.dy), speed, type))
}