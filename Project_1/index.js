let val =0;
document.getElementById("decreaseBtn").onclick = function(){
    val --;
    document.getElementById("counter").textContent = val;
}
document.getElementById("IncreaseBtn").onclick = function(){
    val ++;
    document.getElementById("counter").textContent = val;
}
document.getElementById("resetBtn").onclick = function(){
    val = 0;
    document.getElementById("counter").textContent = val;
}