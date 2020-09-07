const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img;

img = new Image();
img.src = "./Images/gear_12.png"

img2 = new Image();
img2.src = "./Images/gear_12_blue.png"

img3 = new Image();
img3.src = "./Images/gear_12.png"

img4 = new Image();
img4.src = "./Images/gear_12_blue.png"

img5 = new Image();
img5.src = "./Images/gear_12.png"

img6 = new Image();
img6.src = "./Images/gear_12_blue.png"

angle = 0.1;

img.addEventListener("load", function () {
    setInterval(animate, 10);
});
function animate() {
    context.clearRect(0, 0, width, height)
    context.save();
    context.translate(300, 300);
    context.rotate(angle);
    context.drawImage(img, -150, -150, 300, 300);
    context.restore();

    context.save();
    context.translate(575, 300);
    context.rotate(-angle+0.25);
    context.drawImage(img2, -150, -150, 300, 300);
    context.restore();

    context.save();
    context.translate(850, 300);
    context.rotate(angle);
    context.drawImage(img3, -150, -150, 300, 300);
    context.restore();
      //layer 2
      context.save();
      context.translate(300, 575);
      context.rotate(-angle+0.25);
      context.drawImage(img4, -150, -150, 300, 300);
      context.restore();

      context.save();
      context.translate(575, 575);
      context.rotate(angle);
      context.drawImage(img5, -150, -150, 300, 300);
      context.restore();

      context.save();
      context.translate(850, 575);
      context.rotate(-angle+0.25);
      context.drawImage(img6, -150, -150, 300, 300);
      context.restore();

    angle += 0.01;
}
