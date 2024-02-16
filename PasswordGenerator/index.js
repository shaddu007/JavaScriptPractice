
function generatePassword(lenght, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){
    const loweCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "~!@#$%^&*_-=+";
    
    let password = "";
    let allowedChar = "";

    allowedChar += includeLowerCase? loweCaseChar : "";
    allowedChar += includeUpperCase? upperCaseChar : "";
    allowedChar += includeNumber? numbers : "";
    allowedChar += includeSymbols? symbols : "";

    if(lenght <= 0)
    {
        return (`Lenght must be atleast 1`);
    }
    if(allowedChar===0)
    {
        return (`pick atleast any 1 option`);
    }
    for(let i = 0 ; i< lenght ; i++)
    {
        const index = Math.round(Math.random()*allowedChar.length);
        password += allowedChar[index];
    }

    return password;
}

const lenght = 12; 
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(lenght,includeLowerCase,includeUpperCase,includeNumber,includeSymbols);
console.log(password);