const roll = document.getElementById("roll");

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");

roll.onclick = function(){
    dice1.textContent = Math.round(Math.random()*5) + 1;
    dice2.textContent = Math.round(Math.random()*5) + 1;
    dice3.textContent = Math.round(Math.random()*5) + 1;
}