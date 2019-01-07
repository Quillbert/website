let paddle;
let ball;

let bricks = [];

var ballVelocity = 5;
var timesCleared = 0;
var completed = false;
var started = false;
var lost = false;

function setup() {
  // put setup code here
  createCanvas(600,400);
  paddle = new Paddle(width/2-40, 350);
  ball = new Ball(width/2, 300);
  for (let i = 0; i < 8; i++) {
  	bricks[i] = [];
  	for (let j = 0; j < 4; j++) {
  		bricks[i][j] = new Brick(75 * i, 25 * j);
  	}
  }
}

function draw() {
  // put drawing code here
    if(started) {
    completed = true;
    background(0);
    ball.act();
    paddle.act();
    for (let i = 0; i < bricks.length; i++) {
    	for(let j = 0; j < bricks[i].length; j++) {
    		bricks[i][j].act();
    	}
    }
    reset();
    fill(255);
    textSize(20);
    text(timesCleared, 585, 395);
  } else {
    background(0);
    push();
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Start", width/2, height/2);
    pop();
  }
}

function mousePressed() {
  if(lost) {
    lost = false;
    loop();
    paddle = new Paddle(width/2-40, 350);
    ball = new Ball(width/2, 300);
    for (let i = 0; i < 8; i++) {
      bricks[i] = [];
      for (let j = 0; j < 4; j++) {
        bricks[i][j] = new Brick(75 * i, 25 * j);
      }
    }
    timesCleared = 0;
  }
  if(!started) {
    started = true;
  }
}

function reset() {
	for (let i = 0; i < bricks.length; i++) {
  		for(let j = 0; j < bricks[i].length; j++) {
  			if(!bricks[i][j].hit) {
  				completed = false;
  			}
  		}
  	}
  	if (completed) {
  		timesCleared++;
  		ballVelocity += 0.5;
  		setup();
  	}
}
