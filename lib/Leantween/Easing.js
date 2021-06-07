// EasingFunctions = {
//     // no easing, no acceleration
//     linear: t => t,
//     // accelerating from zero velocity
//     easeInQuad: t => t*t,
//     // decelerating to zero velocity
//     easeOutQuad: t => t*(2-t),
//     // acceleration until halfway, then deceleration
//     easeInOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
//     // accelerating from zero velocity
//     easeInCubic: t => t*t*t,
//     // decelerating to zero velocity
//     easeOutCubic: t => (--t)*t*t+1,
//     // acceleration until halfway, then deceleration
//     easeInOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
//     // accelerating from zero velocity
//     easeInQuart: t => t*t*t*t,
//     // decelerating to zero velocity
//     easeOutQuart: t => 1-(--t)*t*t*t,
//     // acceleration until halfway, then deceleration
//     easeInOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
//     // accelerating from zero velocity
//     easeInQuint: t => t*t*t*t*t,
//     // decelerating to zero velocity
//     easeOutQuint: t => 1+(--t)*t*t*t*t,
//     // acceleration until halfway, then deceleration
//     easeInOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t,
// }

function linear(){

}

function easeInSine(x) {
    return 1 - Math.cos((x * Math.PI) / 2);
}

function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}


function easeInCubic(x) {
    return x * x * x;
}


function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInQuint(x) {
    return x * x * x * x * x;
}

function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
}

function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function easeInCirc(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function easeInOutCirc(x) {
    return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function easeInElastic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
}

function easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeInOutElastic(x) {
    const c5 = (2 * Math.PI) / 4.5;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
                : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}


// row 2
function easeInQuad(x) {
    return x * x;
}

function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
}

function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInQuart(x) {
    return x * x * x * x;
}

function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function easeInExpo(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function easeInOutExpo(x) {
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeInBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
}

function easeOutBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

function easeInOutBack(x) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeInBounce(x) {
    return 1 - easeOutBounce(1 - x);
}

function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}

function easeInOutBounce(x) {
    return x < 0.5
        ? (1 - easeOutBounce(1 - 2 * x)) / 2
        : (1 + easeOutBounce(2 * x - 1)) / 2;
}

function getWantedYFromX(i) {
    switch (easingType) {
        case "none":
            return height / 2;

        case "EaseInSin":
            return ((height - 100)/ 2 - easeInSine(i / width) * height / 2);
        case "EaseInCubic":
            return ((height - 100) / 2 - easeInCubic(i / width) * height / 2);
        case "EaseInQuint":
            return ((height - 100) / 2 - easeInQuint(i / width) * height / 2);
        case "EaseIncirc":
            return ((height - 100) / 2 - easeInCirc(i / width) * height / 2);
        case "EaseInElastic":
            return ((height - 100) / 2 - easeInElastic(i / width) * height / 2);
        case "EaseInQuad":
            return ((height - 100) / 2 - easeInQuad(i / width) * height / 2);
        case "EaseInQuart":
            return ((height - 100) / 2 - easeInQuart(i / width) * height / 2);
        case "EaseInExpo":
            return ((height - 100) / 2 - easeInExpo(i / width) * height / 2);
        case "EaseInBack":
            return ((height - 100) / 2 - easeInBack(i / width) * height / 2);
        case "EaseInBounce":
            return ((height - 100) / 2 - easeInBounce(i / width) * height / 2);


        case "easeOutSin":
            return ((height - 100) - easeOutSine(i / width) * height / 2);
        case "EaseOutCubic":
            return ((height - 100) - easeOutCubic(i / width) * height / 2);
        case "EaseOutQuint":
            return ((height - 100) - easeOutQuart(i / width) * height / 2);
        case "EaseOutcirc":
            return ((height - 100) - easeOutCirc(i / width) * height / 2);
        case "EaseOutElastic":
            return ((height - 100) - easeOutElastic(i / width) * height / 2);
        case "EaseOutQuad":
            return ((height - 100) - easeOutQuad(i / width) * height / 2);
        case "EaseOutQuart":
            return ((height - 100) - easeOutQuart(i / width) * height / 2);
        case "EaseOutExpo":
            return ((height - 100) - easeOutExpo(i / width) * height / 2);
        case "EaseOutBack":
            return ((height - 100) - easeOutBack(i / width) * height / 2);
        case "EaseOutBounce":
            return ((height - 100) - easeOutBounce(i / width) * height / 2);


        case "easeInOutSin":
            return ((height - 100) / 1.5 - easeInOutSine(i / width) * height / 2);
        case "EaseInOutCubic":
            return ((height - 100) / 1.5 - easeInOutCubic(i / width) * height / 2);
        case "EaseInOutQuint":
            return ((height - 100) / 1.5 - easeInOutQuint(i / width) * height / 2);
        case "EaseInOutcirc":
            return ((height - 100) / 1.5 - easeInOutCirc(i / width) * height / 2);
        case "EaseInOutElastic":
            return ((height - 100) / 1.5 - easeInOutElastic(i / width) * height / 2);
        case "EaseInOutQuad":
            return ((height - 100) / 1.5 - easeInOutQuad(i / width) * height / 2);
        case "EaseInOutQuart":
            return ((height - 100) / 1.5 - easeInOutQuart(i / width) * height / 2);
        case "EaseInOutExpo":
            return ((height - 100) / 1.5 - easeInOutExpo(i / width) * height / 2);
        case "EaseInOutBack":
            return ((height - 100) / 1.5 - easeInOutBack(i / width) * height / 2);
        case "EaseInOutBounce":
            return ((height - 100) / 1.5 - easeInOutBounce(i / width) * height / 2);
    }
}
function getWantedFromT(t) {
    switch (easingType) {
        case "none":
            return 0;
        case "EaseInSin":
            return (easeInSine(t));
        case "EaseInCubic":
            return (easeInCubic(t));
        case "EaseInQuint":
            return (easeInQuint(t));
        case "EaseIncirc":
            return (easeInCirc(t));
        case "EaseInElastic":
            return (easeInElastic(t));
        case "EaseInQuad":
            return (easeInQuad(t));
        case "EaseInQuart":
            return (easeInQuart(t));
        case "EaseInExpo":
            return (easeInExpo(t));
        case "EaseInBack":
            return (easeInBack(t));
        case "EaseInBounce":
            return (easeInBounce(t));


        case "easeOutSin":
            return (easeOutSine(t));
        case "EaseOutCubic":
            return (easeOutCubic(t));
        case "EaseOutQuint":
            return (easeOutQuart(t));
        case "EaseOutcirc":
            return (easeOutCirc(t));
        case "EaseOutElastic":
            return (easeOutElastic(t));
        case "EaseOutQuad":
            return (easeOutQuad(t));
        case "EaseOutQuart":
            return (easeOutQuart(t));
        case "EaseOutExpo":
            return (easeOutExpo(t));
        case "EaseOutBack":
            return (easeOutBack(t));
        case "EaseOutBounce":
            return (easeOutBounce(t));


        case "easeInOutSin":
            return (easeInOutSine(t));
        case "EaseInOutCubic":
            return (easeInOutCubic(t));
        case "EaseInOutQuint":
            return (easeInOutQuint(t));
        case "EaseInOutcirc":
            return (easeInOutCirc(t));
        case "EaseInOutElastic":
            return (easeInOutElastic(t));
        case "EaseInOutQuad":
            return (easeInOutQuad(t));
        case "EaseInOutQuart":
            return (easeInOutQuart(t));
        case "EaseInOutExpo":
            return (easeInOutExpo(t));
        case "EaseInOutBack":
            return (easeInOutBack(t));
        case "EaseInOutBounce":
            return (easeInOutBounce(t));
    }
}
