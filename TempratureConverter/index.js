const textbox = document.getElementById("textbox");
const celTofah = document.getElementById("celTofah");
const fahToCel = document.getElementById("fahToCel");
const result = document.getElementById("result");

let temp;
function convert(){
    if(celTofah.checked)
    {
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1)+"°F";
    }
    else if(fahToCel.checked)
    {
        temp = Number(textbox.value);
        temp = (temp-32) * 5/9;
        result.textContent = temp.toFixed(1)+"°C";
    }
    else{
        result.textContent = "Plz pick a option";
    }
}