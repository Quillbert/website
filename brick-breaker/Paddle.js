class Paddle extends Actor {
	constructor(x,y) {
		super(x,y);
		this.x = x;
		this.y = y;
		this.wid = 80;
		this.hei = 15;
		this.xc = x;
		this.yc = y;
		this.velocity = 3.5;
	}
	controls() {
		if(keyIsDown(RIGHT_ARROW)) {
			this.x += this.velocity;
		}
		if(keyIsDown(LEFT_ARROW)) {
			this.x -= this.velocity;
		}
		this.x = constrain(this.x, 0, width - this.wid);
	}
	act() {
		this.controls();
		//this.showHitBox();
		fill(255);
		rect(this.x,this.y,this.wid,this.hei);
		this.xc = this.x;
		this.yc = this.y;
	}
}