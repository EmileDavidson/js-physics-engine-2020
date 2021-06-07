const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const navbarOffset = 0;


// begin hier met jouw code voor deze opdracht
let A,B,S,line

function setup(){
  A = new Point(new Vector2d(100,100),10,"yellow", "",true);
  B = new Point(new Vector2d(700,300),10,"lightgreen", "",true);
  S = new Point(new Vector2d(550, 300), 20, "GREEN","", false);
  line = new Linear(1, 1);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height)

  line.defineByTwoPoints(A,B);
  line.draw(context);

  A.draw();
  B.draw();

}

setup();