function drawImage(imgSrc, imgX, imgY) {
	var canvas = document.getElementById("graphics");
	canvas.height = canvas_height;
	canvas.width = canvas_width;
	var context = canvas.getContext("2d");

	var img = new Image();
	img.onload = function () {
		context.drawImage(img, imgX, imgY);
	}
	img.src = imgSrc;
}