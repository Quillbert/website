class Pizza extends Collider {
	constructor() {
		super(80,50);
		this.x = random(width+600,width+1600);
		this.y = random(25,height-25);
		this.velocity = random(5,15);
		this.xc = this.x;
		this.yc = this.y-30;
	}
	drawPizza(x, y) {
		noStroke();
		fill(160,167,80);
		arc(x+65,y,40,63,radians(290),radians(425));
		fill(246,255,142);
		triangle(x,y,x+75,y-25,x+75,y+25);
		fill(255,0,0);
		ellipse(x+30,y-2,10,10);
		ellipse(x+50,y+7,10,10);
		ellipse(x+62,y-12,10,10);
	}
	move() {
		this.x -= this.velocity;
		if(this.x < -100) {
			this.reset();
		}
	}
	reset() {
		this.x = random(width+600,width+1600);
		this.velocity = random(5,15);
		this.y = random(25,height-25);
	}
	collide() {
		if(this.rectBox(penguin)) {
			penguin.score++;
			if(penguin.score % 5 == 0) {
				sharks.push(new Shark());
			}
			this.reset();
		}
	}
	act() {
		this.drawPizza(this.x,this.y);
		this.move();
		this.xc = this.x+10;
		this.yc = this.y-25;
		//this.showHitBox();
		if(!penguin.cheat) {
			this.collide();
		}
	}
}