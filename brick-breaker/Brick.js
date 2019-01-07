class Brick extends Actor {
	constructor(x,y) {
		super(x,y);
		this.x = x;
		this.y = y;
		this.wid = 75;
		this.hei = 25;
		this.hit = false;
		this.xc = x;
		this.yc = y;
	}
	collusion() {
		if(this.rectBox(ball)) {
			if(ball.y < this.y || ball.y > this.y + this.hei) {
				if(ball.bounceTimer > 5)  {
					ball.yBounce();
				}
			}
			if(ball.x < this.x || ball.x > this.x + this.wid) {
				if(ball.bounceTimer > 5)  {
					ball.xBounce();
				}
			}
			this.hit = true;
			ball.bounceTimer = 0;
		}
	}
	act() {
		if(!this.hit) {
			fill(255);
			rect(this.x,this.y,this.wid,this.hei);
			this.collusion();
			//this.showHitBox();
		}
	}
}
