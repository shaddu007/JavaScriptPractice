const promt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
// MAP OR OBJECT
const SYBMOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const SYBMOLS_VALUES = {
    A : 5,
    B : 4,
    C : 3,
    D : 2,
}


const deposit = () =>{
    const depositAmount = promt("Enter the number:");
    const depositAmountNumber = parseFloat(depositAmount);
    if(isNaN(depositAmountNumber) || depositAmountNumber<=0)
    {
        console.log("Invalid deposit amount plz try again!")
        deposit();
    }
    else{
        //console.log("You have entered the amount:",depositAmountNumber);
        return depositAmountNumber;
    }
}
const getNumberOfLines = () =>{
    const lines = promt("Enter numbers of lines to bet on(1-3):");
    const numberOfLines = parseFloat(lines);
    if(isNaN(numberOfLines) || numberOfLines >3 || numberOfLines <=0)
    {
        console.log("Enter the numbers of lines again!");
        getNumberOfLines();
    }
    else{
       // console.log("You are trying to bet on total:",numberOfLines);
       return numberOfLines;
    }
}
const getBet = (balance,lines) =>{
    const betAmount = parseFloat(promt("Enter the bet amount:"));
    if(isNaN(betAmount) || betAmount<=0 || betAmount > balance/lines)
    {
        console.log("You have entered the invalid amount plz try again!");
        getBet();
    }
    else{
        return betAmount;
    }
}
const spin = () =>{
    const symbols= [];
    //iterationg through map/object
    for(const[symbol,count] of Object.entries(SYBMOLS_COUNT)){
        for(let i = 0; i<count ; i++)
        {
            symbols.push(symbol);
        }
    }
    
    const wheels = [];
    for(let i = 0;i < COLS ;i++)
    {
        wheels.push([]);
        const wheelsSymbols = [...symbols]; // copy of symbols is stored right side
        for(let j = 0;j<ROWS ;j++)
        {
            const randomIndex = Math.floor(Math.random()*wheelsSymbols.length);
            const selectSymbol = wheelsSymbols[randomIndex];
            wheels[i].push(selectSymbol);
            wheelsSymbols.slice(randomIndex,1); // slice just work as erase in c++ so it remove one ele at index
        }
    }
    return wheels;
}
const wheels = spin();
console.log(wheels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
