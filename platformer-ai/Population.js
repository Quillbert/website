class Population {
	constructor(size) {
		this.players = [];
		this.gen = 1;
		this.fitnessSum = 0;
		this.bestPlayer = 0;
		for(let i = 0; i < size; i++) {
			this.players[i] = new Player(10,500);
		}
	}
	show() {
		for(let i = 1; i < this.players.length; i++) {
			this.players[i].show();
		}
		this.players[0].show();
	}
	update() {
		for(let i = 0; i < this.players.length; i++) {
			this.players[i].act();
		}
	}
	calculateFitness() {
		for(let i = 0; i < this.players.length; i++) {
			this.players[i].calculateFitness();
		}
	}
	allDead() {
		for(let i = 0; i < this.players.length; i++) {
			if(!this.players[i].dead) {
				return false;
			}
		}
		return true;
	}
	naturalSelection() {
		var newPlayers = [];
		this.setBestPlayer();
		this.calculateFitnessSum();
		newPlayers[0] = this.players[this.bestPlayer].gimmeBaby(0);
		newPlayers[0].isBest = true;
		for(let i = 1; i < this.players.length; i++) {
			var parent = this.selectParent();
			if(this.gen % offset == 0) {
				newPlayers[i] = parent.gimmeBaby(increase);
			} else {
				newPlayers[i] = parent.gimmeBaby(0);
			}
		}
	    this.players = [];
	    for(var i = 0 ; i< newPlayers.length;i++){
		    this.players[i] = newPlayers[i];
	    }
		this.gen++;
	}
	mutateDemBabies() {
		for(let i = 0; i < this.players.length; i++) {
			this.players[i].brain.mutate();
		}
	}
	calculateFitnessSum() {
		this.fitnessSum = 0;
		for (let i = 0; i < this.players.length; i++) {
			this.fitnessSum += this.players[i].fitness;
		}
	}
	selectParent() {
		var rand = random(this.fitnessSum);
		var runningSum = 0;
		for (let i = 0; i < this.players.length; i++) {
			runningSum += this.players[i].fitness;
			if(runningSum > rand) {
				return this.players[i];
			}
		}
		return null;
	}
	setBestPlayer() {
		var max = 0;
		var maxIndex = 0;
		for(let i = 0; i < this.players.length; i++) {
			if(this.players[i].fitness > max) {
				max = this.players[i].fitness;
				maxIndex = i;
			}
		}
		this.bestPlayer = maxIndex;
	}
}