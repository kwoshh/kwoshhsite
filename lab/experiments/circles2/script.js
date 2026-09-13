const canvas = document.getElementById("game_window");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

let mouseX;
let mouseY;
canvas.addEventListener("click", function(){
    mouseX = Math.floor(event.clientX - rect.left);
    mouseY = Math.floor(event.clientY - rect.top);

    let randR = Math.floor(Math.random()*255);
    let randG = Math.floor(Math.random()*255);
    let randB = Math.floor(Math.random()*255);

    ctx.beginPath();
    ctx.arc(mouseX,mouseY,50,0,Math.PI*2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = `rgb(${randR}, ${randG}, ${randB})`;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,60,0,Math.PI*2);
    ctx.lineWidth = 3;
    ctx.stroke();
})

canvas.addEventListener("mousemove", function () {
    document.getElementById("x").innerText = event.clientX - rect.left;
    document.getElementById("y").innerText = event.clientY - rect.top;
})
