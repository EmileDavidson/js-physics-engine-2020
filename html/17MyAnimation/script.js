const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let runningCat, sw, sh, sx, sy, x, y, w, h, index, xspeed;

runningCat = new Image();
runningCat.src = "images/RunningCat.png";
index = 0;
xspeed = 100;

runningCat.addEventListener("load", ()=>{
  sw = runningCat.width / 2;
  sh = runningCat.height / 4 ;
  x = 100;
  y = 100;
  setInterval(animate, 100);
});

function animate(){
  context.clearRect(0,0,width,height)
  sx = Math.floor(index % 2 * sw);
  sy = Math.floor(index / 2) * sh;
  w = sw;
  h = sh;
  console.log(x)
  context.drawImage(runningCat,sx, sy, sw, sh, x, y , w, h);
  index++;
  x += xspeed;
  console.log(x)
  if(index > 7){
    index = 0;
  }
  if(x > width){
    x = -(sw / 2)
  }
}
