class Shark extends Collider {
	constructor() {
		super(155,60);
		this.x = random(width+600, width+1600);
		this.y = random(height-100);
		this.velocity = random(5,20);
		this.xc = this.x+35;
		this.yc = this.y+40;
	}
	move() {
		this.x -= this.velocity;
		if(this.x < -100) {
			this.reset();
		}
	}
	reset() {
		this.x = random(width+600, width+1600);
		this.y = random(0,height-100);
		this.velocity = random(5,20);
	}
	collide() {
		if(this.rectBox(penguin)) {
			push();
			noLoop();
			lost = true;
			textSize(50);
			fill(0, 0, 0);
			textAlign(CENTER, CENTER);
			text("Game Over!", width/2, 250); 
			textSize(20);
			text("Click to Restart", width/2, 300);
			pop();
		}
	}
	act() {
		image(sharkPicture, this.x, this.y);
		this.move();
		this.xc = this.x+35;
		this.yc = this.y+40;
		//this.showHitBox();
		if(!penguin.cheat) {
			this.collide();
		}
	}
}
