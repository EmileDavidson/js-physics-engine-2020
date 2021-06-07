
function drawGraph() {

    context.beginPath();

    context.lineWidth = 10;
    context.strokeStyle = "black"
    context.moveTo(0, height / 2);
    for (let i = 0; i < width; i++) {
        if (i === 0 && getWantedYFromX(i) === height) context.moveTo(0, 0);
        if (i === 0 && getWantedYFromX(i) === height / 1.5) context.moveTo(0, height / 1.5);
        context.lineTo(i, getWantedYFromX(i));
    }

    context.stroke();
    context.closePath();

    context.beginPath()
    context.fillStyle = 'rgba(255, 174,0, 1)';
    context.arc(time * width, height, 50, 0, 2 * Math.PI, false);
    context.fill()
    context.closePath();
}