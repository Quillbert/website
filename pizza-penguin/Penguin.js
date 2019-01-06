class Penguin extends Collider {
	constructor(x, y) {
		super(105, 60);
		this.x = x;
		this.y = y;
		this.xc = x-64;
		this.yc = y-30;
		this.velocity = 5;
		this.score = 0;
		this.cheat = false;
		this.isDown = false;
	}
	drawPenguin(x,y) {
		push();
		translate(x,y);
		rotate(radians(90));
		scale(0.8);
		image(penguinPicture, -92, -88);
		pop();
	}
	move() {
		if(keyIsDown(UP_ARROW)) {
			this.y -= this.velocity;
		}
		if(keyIsDown(DOWN_ARROW)) {
			this.y += this.velocity;
		}
		this.y = constrain(this.y, 62, height-62);
	}
	act() {
		this.move();
		this.drawPenguin(this.x, this.y);
		this.xc = this.x-64;
		this.yc = this.y-30;
		//this.showHitBox();
	}
}
