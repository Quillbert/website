class Tile {
	constructor(x,y) {
		this.identifier = 0;
		this.x = x;
		this.y = y;
		this.hitBox = new Collider(70,70);
		this.hitBox.update(x,y);
	}
	touchPlayer(player) {
		if(this.identifier != 0 && dist(player.x,player.y,this.x,this.y) < 300) {
			if(this.hitBox.rectBox(player.hitBox)) {
				if(player.y + 70 < this.y+15) {
					player.jumping = false;
					player.jumpTimer = 0;
					player.y = this.y-70;
				} else if(player.y > this.y + 55) {
					player.y = this.y+70
				} else if(player.x + 70 < this.x +15) {
					player.x = this.x - 70;
				} else if(player.x > this.x + 55) {
					player.x = this.x + 70;
				} else {
					player.y = this.y+70;
				}
			}
		}
	}
	act() {
		switch(this.identifier) {
			case 1:
				image(ground,this.x,this.y);
				break;
			case 2:
				image(brick,this.x,this.y);
				break;
			case 3:
				image(stack,this.x,this.y);
				break;
		}
		for(let i = 0; i < population.players.length; i++) {
			this.touchPlayer(population.players[i]);
		}
	}
}