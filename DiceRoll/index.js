const submit = document.getElementById("submit");
// const diceResults = ;
// const  = ;
submit.addEventListener('click',function(){
    let numOfDice = document.getElementById("numOfDice").value;
    let diceResults = document.getElementById("diceResults");
    let diceImages = document.getElementById("diceImages") ;

    const values = [];
    const images = [];
    for(let i = 0;i < numOfDice ;i++)
    {
        let num = Math.round(Math.random()* 5) + 1;
        values.push(num);
        images.push(`<img src="images/Dice-${num}.png">`);
    }
    diceResults.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
});