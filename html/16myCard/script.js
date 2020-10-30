const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let img,numberOnARow,numberOnAColumn,sx,sy,sw,sh,x,y,w,h,index;
img = new Image();
img.src = "images/cardDeck.png";

numberOnARow = 13;
numberOnAColumn = 5;

// index = Math.floor(Math.random()*52);
let card = {};
card.index = Math.floor(Math.random()*52);
card.position = 0;

let card2 = {};
card2.index = Math.floor(Math.random()*52);
card2.position = 1;
card2.draw = ()=>{
  x = (card2.position%numberOnARow) * sw;
  y = Math.floor(card.index/numberOnARow)*sh;

  sx= (card.index%numberOnARow)*sw;
  sy = Math.floor(card.position/numberOnARow)*sh;
  context.drawImage(img,sx,sy,sw,sh, x,0,sw,sh);
}

card.draw = ()=>{
  x = (card.position%numberOnARow) * sw;
  y = Math.floor(card2.index/numberOnARow)*sh;

  sx= (card2.index%numberOnARow)*sw;
  sy = Math.floor(card.position/numberOnARow)*sh;
  context.drawImage(img,sx,sy,sw,sh, x,0,sw,sh);
}

img.addEventListener('load',()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColumn;
  card.draw();
  card2.draw();
})

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 32) {
    card.index = Math.floor(Math.random()*52);
    card2.index = Math.floor(Math.random()*52);
    card.draw();
    card2.draw();
  }
})

