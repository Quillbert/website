class Player {
	constructor(x,y) {
		this.deltaY = 0.0;
		this.gravity = 1.0;
		this.jumping = true;
		this.jumpTimer = 0;
		this.dead = false;
		this.velocity = 4;
		this.x = x;
		this.y = y;
		this.hitBox = new Collider(70,70);
		this.hitBox.update(x,y);
		this.brain = new Brain(5);
		this.fitness = 0;
		this.isBest = false;
		this.controls = [];
	}
	jump() {
		if(this.controls[1] == 1 && this.jumpTimer <= 12) {
			this.jumping = true;
			this.deltaY = -10;
			if(this.jumpTimer==12) {
				this.deltaY = -15;
			}
		}
		if(this.jumping) {
			this.jumpTimer++;
			this.y+=this.deltaY;
			this.deltaY += this.gravity;
			if(this.deltaY > 10) {
				this.deltaY = 10;
			}
		}
	}
	movement() {
		if(this.controls[0] == -1) {
			this.x -= this.velocity;
		}
		if(this.controls[0] == 1) {
			this.x += this.velocity;
		}
		if(this.controls[2] == 1) {
			if(this.velocity < 8) {
				this.velocity += 0.1;
			} 
		} else {
			this.velocity = 4;
		}
	}
	fall() {
		if(this.y > height) {
			this.dead = true;
		}
	}
	move() {
		if(this.brain.directions.length > this.brain.step) {
			this.controls[0] = this.brain.directions[this.brain.step][0];
			this.controls[1] = this.brain.directions[this.brain.step][1];
			this.controls[2] = this.brain.directions[this.brain.step][2];
			this.hitBox.update(this.x,this.y);
			this.jump();
			this.hitBox.update(this.x,this.y);
			this.movement();
			this.hitBox.update(this.x,this.y);
			this.fall();
			this.jumping = true;
			this.brain.step++;
		} else {
			this.dead = true;
		}
	}
	show() {
		if(this.isBest) {
			fill(0,255,0);
		} else {
			fill(255,0,0);
		}
		rect(this.x,this.y,70,70);
	}
	act() {
		//this.show();
		if(!this.dead) {
			this.move();
		}
	}
	calculateFitness() {
		this.fitness = this.x * abs(this.x);
	}
	gimmeBaby(add) {
		var baby = new Player(10,500);
		baby.brain=this.brain.clone(add);
		return baby;
	}
}