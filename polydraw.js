var
	canvas = document.getElementById('canvas'),
	c = canvas.getContext('2d'),

	x,y,
	_x,_y,
	angle

	frame = -1,
	points = [
		0,0,
		0,200,
		200,200
	];

function toRad(angle) {
	return angle * (Math.PI / 180);
}

var xPreR, yPreR;
function rotatePoint(p, angle) {
	xPreR = points[p], yPreR = points[p+1];

	points[p]   = xPreR*Math.cos(toRad(angle)) - yPreR*Math.sin(toRad(angle));
	points[p+1] = xPreR*Math.sin(toRad(angle)) + yPreR*Math.cos(toRad(angle));
}

function loop() {
	frame++;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	c.fillStyle = 'white';
	c.translate(300, 300);
	for(var i=0; i<points.length; i+=2) {
		rotatePoint(i, 1);

		if(i == 0) {
			c.moveTo(points[i], points[i+1]);
		} else {
			c.lineTo(points[i], points[i+1]);
		}
	}

	c.closePath();
	c.fill();
	c.restore();

	requestAnimationFrame(loop);
}

loop();

