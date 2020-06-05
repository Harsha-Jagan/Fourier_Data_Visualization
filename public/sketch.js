function setup() {
	createCanvas(800, 600);
}
let time = 0;
let display = [];

function drawPt(x, y){
	strokeWeight(5);
	point(x,y);
	strokeWeight(1);
}

function draw() {
	background(0);
	noFill();
	stroke(255);
	translate(200, 200);

	let n = 9;
	let x = 0, y = 0;
	let radius = 0;
	drawPt(0,0);
	for(var i = 1; i <= n; i += 2){
		var prevX = x;
		var prevY = y;

		radius = 100 * 4 / (i * Math.PI);
		ellipse(x, y, radius * 2);

		x += radius * cos(i * time);
		y += radius * sin(i * time);

		line(prevX, prevY, x, y);
		drawPt(x,y);
	}


	line(x, y, 200, y);

	display.unshift(createVector(200, y));

	beginShape();
	let k = 0;
	for(v of display){
		vertex(v.x + k, v.y);
		k = k + .8;
	}
	endShape();

	if(display.length > 550){
		display.pop();
	}

	time -= 0.02;
}
