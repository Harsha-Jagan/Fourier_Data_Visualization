function setup() {
	createCanvas(800, 600);
}
let time = 0;
function draw() {
	background(0);
	noFill();
	stroke(255);
	translate(200, 200);

	let radius = 150;
	ellipse(0, 0, radius * 2);
	ellipse(radius * cos(time), radius * sin(time), 10);

	



	time -= 0.03;
}
