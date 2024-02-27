const display = document.getElementById("display");
let timer = null;
let starTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning)
    {
        starTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        console.log(starTime);
    }
}
start();
function stop(){
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime = Date.now() - starTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    starTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - starTime;
    let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let milisec = Math.floor(elapsedTime%1000 /10);

    hours = String(hours).padEnd(2,'0');
    minutes = String(minutes).padEnd(2,'0');
    seconds = String(seconds).padEnd(2,'0');
    milisec = String(milisec).padEnd(2,'0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milisec}`
}