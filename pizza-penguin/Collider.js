class Collider {
	constructor(wid, hei) {
		this.xc = 0;
		this.yc = 0;
		this.wid = wid;
		this.hei = hei;
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