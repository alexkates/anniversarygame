function doKeyDown(e) {
		var code = e.keyCode ? e.keyCode : e.which;
		switch (code) {
		case 87: //w
			if(yLoc - sam_height > 0){
				yLoc -= step;
				sam_current = sam_back;
			}
		break;
		case 65: //a
			if(xLoc - sam_height > 0) {
				xLoc -= step;
				sam_current = sam_left;
			}
		break;
		case 83: //s
			if(yLoc + sam_height < canvas_height) {
				yLoc += step;
				sam_current = sam_front;
			}
		break;
		case 68: //d
			if(xLoc + sam_width < canvas_width) {
				xLoc += step;
				sam_current = sam_right;
			}
		break;
	}
}
