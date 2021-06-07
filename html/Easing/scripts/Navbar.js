// In
document.getElementById("easeInSin").addEventListener("mousedown", function (e) {
    easingType = "EaseInSin";
});
document.getElementById("EaseInCubic").addEventListener("mousedown", function (e) {
    easingType = "EaseInCubic";
});
document.getElementById("EaseInQuint").addEventListener("mousedown", function (e) {
    easingType = "EaseInQuint";
});
document.getElementById("EaseIncirc").addEventListener("mousedown", function (e) {
    easingType = "EaseIncirc";
});
document.getElementById("EaseInElastic").addEventListener("mousedown", function (e) {
    easingType = "EaseInElastic";
});
document.getElementById("EaseInQuad").addEventListener("mousedown", function (e) {
    easingType = "EaseInQuad";
});
document.getElementById("EaseInQuart").addEventListener("mousedown", function (e) {
    easingType = "EaseInQuart";
});
document.getElementById("EaseInExpo").addEventListener("mousedown", function (e) {
    easingType = "EaseInExpo";
});
document.getElementById("EaseInBack").addEventListener("mousedown", function (e) {
    easingType = "EaseInBack";
});
document.getElementById("EaseInBounce").addEventListener("mousedown", function (e) {
    easingType = "EaseInBounce";
});
// out
document.getElementById("easeOutSin").addEventListener("mousedown", function (e) {
    easingType = "easeOutSin";
});
document.getElementById("EaseOutCubic").addEventListener("mousedown", function (e) {
    easingType = "EaseOutCubic";
});
document.getElementById("EaseOutQuint").addEventListener("mousedown", function (e) {
    easingType = "EaseOutQuint";
});
document.getElementById("EaseOutcirc").addEventListener("mousedown", function (e) {
    easingType = "EaseOutcirc";
});
document.getElementById("EaseOutElastic").addEventListener("mousedown", function (e) {
    easingType = "EaseOutElastic";
});
document.getElementById("EaseOutQuad").addEventListener("mousedown", function (e) {
    easingType = "EaseOutQuad";
});
document.getElementById("EaseOutQuart").addEventListener("mousedown", function (e) {
    easingType = "EaseOutQuart";
});
document.getElementById("EaseOutExpo").addEventListener("mousedown", function (e) {
    easingType = "EaseOutExpo";
});
document.getElementById("EaseOutBack").addEventListener("mousedown", function (e) {
    easingType = "EaseOutBack";
});
document.getElementById("EaseOutBounce").addEventListener("mousedown", function (e) {
    easingType = "EaseOutBounce";
});


// inout
document.getElementById("easeInOutSin").addEventListener("mousedown", function (e) {
    easingType = "easeInOutSin";
});
document.getElementById("EaseInOutCubic").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutCubic";
});
document.getElementById("EaseInOutQuint").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutQuint";
});
document.getElementById("EaseInOutcirc").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutcirc";
});
document.getElementById("EaseInOutElastic").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutElastic";
});
document.getElementById("EaseInOutQuad").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutQuad";
});
document.getElementById("EaseInOutQuart").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutQuart";
});
document.getElementById("EaseInOutExpo").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutExpo";
});
document.getElementById("EaseInOutBack").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutBack";
});
document.getElementById("EaseInOutBounce").addEventListener("mousedown", function (e) {
    easingType = "EaseInOutBounce";
});


document.getElementById("movingCircle").addEventListener("mousedown", function (e) {
    if (moveCircle) {
        document.getElementById("movingCircleText").innerHTML = "Start MovingCircle"
    } else {
        document.getElementById("movingCircleText").innerHTML = "Stop MovingCircle"
    }
    moveCircle = !moveCircle;
});
