var food = [];
var finders = [];

var newFoodChance = .06;
const MUTATIONRATE = 0.1;
const MUTATIONAMOUNT = 0.3;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  for(let i = 0; i < 40; i++) {
  	food.push(new Food());
  }
  for(let i = 0; i < 5; i++) {
  	finders.push(new Finder(random(width), random(height)));
  }
}

function draw() {
  // put drawing code here
  if(random(1) < newFoodChance) {
  	food.push(new Food());
  }
  background(200);
  for (let i = 0; i < food.length; i++) {
  	food[i].act();
  }
  for(let i = 0; i < food.length; i++) {
  	if(food[i].eaten) {
  		food.splice(i,1);
  	}
  }
  for(let i = 0; i < finders.length; i++) {
  	finders[i].act();
    if(finders[i].dead) {
      finders.splice(i, 1)
    }
  }
}