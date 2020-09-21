const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let time, clockFace, hoursHand, minutesHand, secondsHand;
let seconds, minutes, hours;

clockFace = new Image();
secondsHand = new Image();
minutesHand = new Image();
hoursHand = new Image();
randomHand = new Image();

clockFace.src = "images/clockFace.png";
secondsHand.src = "images/secondHand.png";
minutesHand.src = "images/minutesHand.png";
hoursHand.src = "images/hoursHand.png";
randomHand.src = "images/RandomHand.png"

time = new Date();

setInterval(animate,0.1)

function animate(){
  time = new Date();
  minutes = time.getMinutes();
  hours = time.getHours();

  seconds = time.getSeconds(); // 1/1 van een seconde
  milliseconds = time.getMilliseconds(); //1/1000 van een seconde
  microSeconds = seconds / 1000000; // 1/millionvan een seconde
  nanoSeconds = seconds/1000000000; // 1/billion van een seconde
  picosecond= seconds/1000000000000; // 1 / trillionth  van een seconde
  femtosecond = seconds/1000000000000000; // 1 quadrillionth van een second
console.log(microSeconds);
  context.clearRect(0,0,width,height);
  context.drawImage(clockFace,0,0);

  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(milliseconds*2*Math.PI/1000 + microSeconds*2*Math.PI/(1000 * 1000000) + nanoSeconds*2*Math.PI/((1000 * 1000000)) * 1000000000 + picosecond*2*Math.PI/1000000000000 * (((1000 * 1000000)) * 1000000000) + femtosecond*2*Math.PI/1000000000000000 * (1000000000000 * (((1000 * 1000000)) * 1000000000)) ); //
  context.drawImage(randomHand,-randomHand.width/2,-randomHand.height);
  context.restore()

  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(seconds*2*Math.PI/60 + milliseconds*2*Math.PI/60000 + microSeconds*2*Math.PI/60000000000 + nanoSeconds*2*Math.PI/(60000000000 * 1000000000) + picosecond*2*Math.PI/(60000000000 * 1000000000) * 1000000000000 + femtosecond*2*Math.PI/((60000000000 * 1000000000) * 1000000000000) * 1000000000000000); //
  context.drawImage(secondsHand,-secondsHand.width/2,-secondsHand.height);
  context.restore()

  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(minutes*2*Math.PI/60 + seconds*2*Math.PI/3600 + milliseconds*2*Math.PI/216000000 + microSeconds*2*Math.PI/(60000000000*216000000) + nanoSeconds*2*Math.PI/((60000000000 * 1000000000) * (60000000000*216000000)) + picosecond*2*Math.PI/((60000000000 * 1000000000) * 1000000000000) * ((60000000000 * 1000000000) * (60000000000*216000000)) + femtosecond*2*Math.PI/(((60000000000 * 1000000000) * 1000000000000) * ((60000000000 * 1000000000) * (60000000000*216000000))) * (((60000000000 * 1000000000) * 1000000000000) * 1000000000000000) );
  context.drawImage(minutesHand,-minutesHand.width/2,-minutesHand.height);
  context.restore()

  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(hours*2*Math.PI/12 + minutes*2*Math.PI/720 + seconds*2*Math.PI/2592000 + milliseconds*2*Math.PI/559872000000000 + microSeconds*2*Math.PI/(60000000000*216000000) * 559872000000000 + nanoSeconds*2*Math.PI/(((60000000000 * 1000000000) * (60000000000*216000000)) * (60000000000*216000000) * 559872000000000) + picosecond*2*Math.PI/(((60000000000 * 1000000000) * 1000000000000) * ((60000000000 * 1000000000) * (60000000000*216000000))) * (((60000000000 * 1000000000) * (60000000000*216000000)) * (60000000000*216000000) * 559872000000000) + femtosecond*2*Math.PI/((((60000000000 * 1000000000) * 1000000000000) * ((60000000000 * 1000000000) * (60000000000*216000000))) * (((60000000000 * 1000000000) * (60000000000*216000000)) * (60000000000*216000000) * 559872000000000)) * ((((60000000000 * 1000000000) * 1000000000000) * ((60000000000 * 1000000000) * (60000000000*216000000))) * (((60000000000 * 1000000000) * 1000000000000) * 1000000000000000)));
  context.drawImage(hoursHand,-hoursHand.width/2,-hoursHand.height);
  context.restore()

  // milli * sec // sec * min // min * hours
}
