let penguin;
let waves = [];
let pizza = [];
let sharks = [];
var penguinPicture;
var sharkPicture;
var lost = false;
var paused = false;
var started = false;
var music;

function preload() {
  penguinPicture = loadImage("assets/Penguin.png");
  sharkPicture = loadImage("assets/shark.png");
  soundFormats('mp3');
  music = loadSound("assets/FunListening1.mp3");
}

function setup() {
  // put setup code here
  createCanvas(1100,680);
  penguin = new Penguin(100, height/2);
  for(let i = 0; i < height/2; i++) {
  	waves[i] = new Wave();
  }
  for(let i = 0; i < 3; i++) {
    pizza[i] = new Pizza();
  }
  sharks.push(new Shark());
  music.loop();
}

function draw() {
  // put drawing code here
  background(3, 143, 255);
  if(!started) {
    startScreen();
  } else {
    for(let i = 0; i < waves.length; i++) {
     waves[i].act();
   }
   if(lost) {
    sharks = [];
    sharks.push(new Shark());
    pizza = [];
    for(let i = 0; i < 3; i++) {
      pizza[i] = new Pizza();
    }
  }
  for(let i = 0; i < pizza.length; i++) {
    pizza[i].act();
  }
  for(let i = 0; i < sharks.length; i++) {
    sharks[i].act();
  }
  penguin.act();
  textSize(20);
  fill(250, 255, 0);
  text("Score: ", 20, 20);
  text(penguin.score, 100, 20);
  text("Frame Rate: " + Math.floor(frameRate()), 450, 20);
  text("Press P to Pause", 900, 20);
  if (penguin.cheat) {
    textSize(5);
    fill(0, 0, 0);
    text("o", 10, 10);
  }
}
}

function mousePressed() {
  if (lost) {
    loop();
    penguin.score = 0;
    lost = false;
  }
  if(!started) {
    if(dist(mouseX,mouseY,width/2, height/2) < 75) {
      started = true;
    }
  }
}

function keyTyped() {
  if(started) {
    if(key === 'l' || key === 'L') {
      penguin.cheat = !penguin.cheat;
      console.log("Hey, stop cheating!");
    }
  }
  if (key == 'p' || key == 'P') {
    if (paused == false) {
      noLoop();
      paused = true;
    } else {
      loop();
      paused = false;
    }
  }
}

  function startScreen() {
    fill(255,0,0);
    ellipse(width/2,height/2,150,150);
    fill(250,201,23);
    triangle(width/2-20,height/2-30,width/2-20,height/2+30,width/2+40,height/2);
    textSize(20);
    fill(250, 255, 0);
    push();
    textAlign(CENTER);
    text("INSTRUCTIONS: Use the arrow keys to move the penguin." + '\n' + "Eat the Pizzas and avoid the sharks.",width/2,60);
    pop();
  }
