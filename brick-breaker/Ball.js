class Ball extends Actor {
	constructor(x,y) {
		super(x,y);
		this.x = x;
		this.y = y;
		this.wid = 20;
		this.hei = 20;
		this.course = 90;
		this.velocity = ballVelocity;
		this.xc = this.x-this.wid/2;
		this.yc = this.y-this.hei/2;
		this.bounceTimer = 0;
	}

	bouncePaddle() {
		if(this.rectBox(paddle)) {
			this.course = map((this.x - paddle.x), -10, paddle.wid + 10, 210, 330);
		}
	}

	endGame() {
		if(this.y > height) {
			push();
			textAlign(CENTER, CENTER);
			textSize(30);
			text("GAME OVER", width/2, height/2);
	        text("Click to restart", width/2, height/2 + 50);
      		lost = true;
			noLoop();
			pop();
		}
	}

	act() {
		this.move();
		this.bouncePaddle();
		this.endGame();
		//this.showHitBox();
		fill(255);
		ellipse(this.x,this.y,this.wid,this.hei);
		this.bounceTop();
		//this.bounceBottom();
		this.bounceLeft();
		this.bounceRight();
		this.xc = this.x-this.wid/2;
		this.yc = this.y-this.hei/2;
		this.bounceTimer++;
	}
}