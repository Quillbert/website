class Wave {
	constructor() {
		this.x = random(0, width);
		this.y = random(0, height);
		this.velocity = random(10,20);
	}
	drawWave(x, y) {
		noFill();
		stroke(3,215,255);
		strokeWeight(5);
		arc(x,y,20,10.66,radians(180), radians(360));
		arc(x+20,y,20,10.66,radians(0), radians(180));
	}
	move() {
		this.x -= this.velocity;
		if(this.x < 0) {
			this.x = width+30;
			this.y = random(height);
			this.velocity = random(10,20);
		}
	}
	act() {
		this.drawWave(this.x, this.y);
		this.move();
	}
}