/*
function returning a random number between a min and a maximum value
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Simple functies for getting things.
let colors = ["Red", "Green", "Blue", "Orange", "Purple"];
function GetRandomColor() {
  let number = getRandomInt(0, colors.length);
  return colors[number];
}
