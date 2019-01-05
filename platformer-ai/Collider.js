class Collider {
	constructor(w, h) {
		this.x = 0;
		this.y = 0;
		this.wid = w;
		this.hei = h;
	} 
	show() {
		push();
		stroke(255,0,255);
		noFill();
		strokeWeight(3);
		rect(this.x,this.y,this.wid,this.hei);
		pop();
	}
	rectBox(other) {
		var top = this.y + this.hei > other.y;
		var bottom = this.y < other.y + other.hei;
		var left = this.x + this.wid > other.x;
		var right = this.x < other.x + other.wid;
		if(top && bottom && left && right) {
			return true;
		}
		return false;
	}
	update(x,y) {
		this.x = x;
		this.y = y;
	}
}