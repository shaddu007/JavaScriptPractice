const prompt = require("prompt-sync")();
const target = Math.round(Math.random()*100)
let guesses = 0;
while(true)
{
    const guess = Number(prompt("Enter your guess:"));
    guesses++;
    if(guess>target)
    {
        console.log("Your guess is too high!");
    }
    else if(guess<target)
    {
        console.log("Your guess is too low!");
    }
    else{
        console.log("Congrats you have guessed it!");
        break;
    }
}

console.log("You have tried",guesses,"to guess the number");