//2400  -  960
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight/1.5;

canvas.width = width;
canvas.height = height;

let dice = new Image();
dice.src = "images/Dice.png"

let diceRolls = [];

function Update() {
    context.clearRect(0, 0, height, width);
    let numbers = [];
    let dice3 = 0;
    for(let i = 0; i < numberOfDice.value; i++){
      numbers[i] = Math.floor(Math.random() * 6) + 1;
      dice3 += numbers[i];
    }

    for(let i = 0; i < numbers.length; i++){
      context.drawImage(dice, (numbers[i] * dice.width/6) - dice.width/6, 0, dice.width/6, dice.height, 10 + ( i * dice.width/6), 50, 100, 100);
    }
    diceRolls[dice3 - 1] += 1;

    UpdateScores();
}


document.addEventListener("keyup", function (e) {
  if (e.keyCode == 32) {
      Loop(document.getElementById("numberOfRoles").value)
  }
})

function Loop(AantalKeer) {
    for (let i = 0; i < AantalKeer; i++) {
        Update();
    }
}

function UpdateScores() {
  document.getElementById("times").innerHTML = "";
  for (let i = 0; i < numberOfDice.value * 6; i++){
    let item = document.createElement('td');
    item.setAttribute("id", i);
    item.innerHTML = diceRolls[i];
    document.getElementById("times").appendChild(item);
  }
}


//fix table
document.getElementById("numberOfDice").addEventListener("input", ()=>{
    if(dice.width / 6 * numberOfDice.value > width - 10){
      document.getElementById("numberOfDice").value = (canvas.width / (dice.width / 6) - 1).toFixed(0);
    }
  resetTable();
});

resetTable();
function resetTable(){
  let items = "";
  let items2 = "";
  document.getElementById("numbers").innerHTML = "";
  document.getElementById("times").innerHTML = "";
  for (let i = 0; i < numberOfDice.value * 6; i++) // - numberOfDice.value + 1
  {
    diceRolls[i] = 0;
    let item1 = document.createElement("td");
    item1.innerHTML = i + 1; //* numberOfDice.value
    document.getElementById("numbers").appendChild(item1);
    let item2 = document.createElement('td');
    item2.setAttribute("id", i);
    item2.innerHTML = 0;
    document.getElementById("times").appendChild(item2);
  }
}

//char.js
let dices = [];
function getDicelist(){
  index = numbers[i] = Math.floor(Math.random() * 6) + 1;
  context.drawImage(dice, (2 * dice.width/6) - dice.width/6, 0, dice.width/6, dice.height, 10, 50, 100, 100);
}
