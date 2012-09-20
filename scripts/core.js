function start() {
	getPageSize();
	setInterval(update,1000/15);
}

function update() {
	clear();
	draw();
}

function clear() {
	var canvas = document.getElementById("graphics");
	canvas.height = canvasPoint.y;
	canvas.width = canvasPoint.x;
	var context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width,canvas.height);
}


function say(person, msg) {
	alert(person + ":\n" + msg);
}

function drawImage(imgSrc, imgX, imgY) {
	var canvas = document.getElementById("graphics");
	canvas.height = canvasPoint.y;
	canvas.width = canvasPoint.x;
	var context = canvas.getContext("2d");

	var img = new Image();
	img.onload = function () {
		context.drawImage(img, imgX, imgY);
	}
	img.src = imgSrc;
}

function point(x, y) {
	this.x = x;
	this.y = y;
	
	this.toString = function() {
		return "(" + this.x + ", " + this.y + ")";
	}
}

function numberRange(lower, upper) {
    var numbers = [],
        modify = 1;

    if (lower > upper) {
        modify = -1;
    }

  upper += modify;
  while (lower != upper) {

      numbers.push(lower);
      lower += modify;
  }

  return numbers;
}

function object(topLeft, img) {
	this.topLeft = topLeft;
	this.img = img;
	
	this.moveRight = function(step) {
		this.topLeft.x = Math.round(this.topLeft.x + step);
	}
	
	this.moveLeft = function(step) {
		this.topLeft.x = Math.round(this.topLeft.x - step);
	}
	
	this.moveDown = function(step) {
		this.topLeft.y = Math.round(this.topLeft.y + step);
	}
	
	this.moveUp = function(step) {
		this.topLeft.y = Math.round(this.topLeft.y - step);
	}
	
	this.willLeaveUp = function(step) {
		return this.topLeft.y - step <= 10;		
	}
	
	this.willLeaveLeft = function(step) {
		return this.topLeft.x - step <= 10;
	}
	
	this.willLeaveRight = function(step) {
		return this.topLeft.x + step >= canvasPoint.x;
	}
	
	this.willLeaveDown = function(step) {
		return this.topLeft.y + step >= canvasPoint.y;
	}
}

function getPageSize() {
  return new point(window.innerWidth, window.innerHeight);
}