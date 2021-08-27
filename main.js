canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
color = "aqua";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(100, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 7;
    ctx.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}