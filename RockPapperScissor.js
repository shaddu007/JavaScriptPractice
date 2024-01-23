const prompt = require("prompt-sync")();
let win = 0;
let loss = 0;
let draw = 0;

while(true)
{
const gameValue = ["rock","paper","scissor"];
const randomIndex = Math.round(Math.random()*2);
const computerChoice = gameValue[randomIndex];
const yourChoice = prompt("Eneter your Choise(q to exit):");
if(yourChoice==='q') break;

if(yourChoice.toLowerCase()!== "rock" &&
 yourChoice.toLowerCase()!== "paper" &&
 yourChoice.toLowerCase()!== "scissor")
{
    console.log("Please enter a valid choice:")
    continue;
}
console.log("Computer Choice:",gameValue[randomIndex]);
if(yourChoice.toLowerCase()=== computerChoice)
{
    console.log("Draw!");
    draw++;
}
else if((yourChoice.toLowerCase()=="scissor" && computerChoice=="paper") || 
(yourChoice.toLowerCase()=="paper" && computerChoice=="rock") ||
(yourChoice.toLowerCase()=="rock" && computerChoice=="scissor"))
{
    console.log("Win!!!");
    win++;
}
else{
    console.log("losses");
    loss++;
}

}
console.log("You have won:",win,"You have lost:",loss,"You have draw:",draw);

