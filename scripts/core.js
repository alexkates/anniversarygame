function start() {
	setInterval(update,1000/15);
}

function update() {
	clear();
	draw();
}

function clear() {
	var canvas = document.getElementById("graphics");
	canvas.height = canvas_height;
	canvas.width = canvas_width;
	var context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width,canvas.height);
}