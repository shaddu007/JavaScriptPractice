// const prompt = require("prompt-sync")();
const numbers = [1,2,3,4,5,6,7,8,9];

const result = numbers.reduce((accumulator,element)=>{
    return accumulator+=element
} );
console.log(`$${result}`);
