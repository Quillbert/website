class Actor {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.wid = 0;
		this.hei = 0;
		this.dx = 0;
		this.dy = 0;
		this.course = 0;
		this.velocity = 0;
		this.xc = this.x;
		this.yc = this.y;
	}

	move() {
		this.computeVector();
		this.x += this.dx;
		this.y += this.dy;
	}
	computeVector() {
		this.dx = this.velocity * cos(radians(this.course));
		this.dy = this.velocity * sin(radians(this.course));
	}
	xBounce() {
		this.course += (90-this.course) *2;
	}
	yBounce() {
		this.course += (0-this.course) *2;
	}
	bounceTop() {
		if(this.y < 0) {
			this.yBounce();
		}
	}
	bounceBottom() {
		if(this.y > height) {
			this.yBounce();
		}
	}
	bounceLeft() {
		if (this.x < 0) {
			this.xBounce();
		}
	}

	bounceRight() {
		if (this.x > width) {
			this.xBounce();
		}
	}
	rectBox(other) {
		var top = this.yc + this.hei > other.yc;
		var bottom = this.yc < other.yc + other.hei;
		var left = this.xc + this.wid > other.xc;
		var right = this.xc < other.xc + other.wid;
		if(top && bottom && left && right) {
			return true;
		} else {
			return false;
		}
	}
	showHitBox() {
		push();
		noFill();
		stroke(255,0,255);
		strokeWeight(3);
		rect(this.xc, this.yc, this.wid, this.hei);
		pop();
	}
}