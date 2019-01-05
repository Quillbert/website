class Brain {
	constructor(size) {
		this.directions = [];
		this.step = 0;
		this.s = size;
		this.randomize();
	}
	randomize() {
		for(let i = 0; i < this.s; i++) {
			this.directions[i] = [];
			this.directions[i][0] = floor(random(-1,2));
			this.directions[i][1] = floor(random(0,2));
			this.directions[i][2] = floor(random(0,2));
		}
	}
	clone(add) {
		var clone = new Brain(this.directions.length+add);
		for(let i = 0; i < this.directions.length; i++) {
			clone.directions[i][0] = this.directions[i][0];
			clone.directions[i][1] = this.directions[i][1];
			clone.directions[i][2] = this.directions[i][2];
		}
		for (let i = 0; i < add; i++) {
			clone.directions[i][0] = floor(random(-1,2));
			clone.directions[i][1] = floor(random(0,2));
			clone.directions[i][2] = floor(random(0,2));
		}
		return clone;
	}
	mutate() {
		var mutationRate = 0.01
		for (let i = 0; i < this.directions.length; i++) {
			var rand = random(1);
			if(rand < mutationRate) {
				this.directions[i][0] = floor(random(-1,2));
				this.directions[i][1] = floor(random(0,2));
				this.directions[i][2] = floor(random(0,2));
			}
		}
	}
}