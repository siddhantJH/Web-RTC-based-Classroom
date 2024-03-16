const colors = document.querySelectorAll(".col");
const canvas = document.querySelector(".drawing-pannel");
const ctx = canvas.getContext('2d');
const canvasOffsetX=canvas.offsetLeft;
const canvasOffsetY=canvas.offsetTop;

let isPainting=false;
let lineWidth=5;
let startX;
let startY;

canvas.addEventListener("mousedown", function(e) {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});


canvas.addEventListener('mousemove',draw)


function draw(e) {
    console.log('draw');
    if (! isPainting) return;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}


function stopDrawing()
{
    console.log('stopDrawing');
    isPainting=false;
}