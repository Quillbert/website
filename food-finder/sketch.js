var food = [];
var finders = [];

var newFoodChance = .06;
const MUTATIONRATE = 0.1;
const MUTATIONAMOUNT = 0.3;

var input;
var saveButton;
var saveData;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  for(let i = 0; i < 40; i++) {
  	food.push(new Food());
  }
  for(let i = 0; i < 5; i++) {
  	finders.push(new Finder(random(width), random(height)));
  }
  createElement('br');
  saveButton = createButton('Save Simulation');
  saveButton.mousePressed(saveSim);
  createElement('label',  " Load Save: ");
  input = createFileInput(handleFile);
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

function saveSim() {
  var out = [];
  for(let i = 0; i < finders.length; i++) {
    f = finders[i];
    out.push(f.x + "," + 
      f.y + "," + 
      f.vel + "," + 
      f.detectionRadius + "," + 
      f.breedAllowance + "," + 
      f.energyGiven + "," + 
      f.breedDistance + "," + 
      f.energy + "," + 
      f.eatRadius);
  }
  saveStrings(out, "NaturalSelectionSimulatorSave.txt");
}

function handleFile(file) {
  console.log("Called");
  try {
    saveData = split(file.data, '\n');
    finders = [];
    for(let i = 0; i < saveData.length; i++) {
      var c = split(saveData[i], ',');
      for(let j = 0; j < c.length; j++) {
        c[j] = Number(c[j]);
      }
      console.log(c);
      var f = new Finder(c[0], c[1]);
      f.vel = c[2];
      f.detectionRadius = c[3];
      f.breedAllowance = c[4];
      f.energyGiven = c[5];
      f.breedDistance = c[6];
      f.energy = c[7];
      f.eatRadius = c[8];
      console.log(f);
      finders.push(f);
    }
    food = [];
    for(let i = 0; i < 40; i++) {
      food.push(new Food());
    }
  } catch(e) {
    window.alert("Not a valid save file.");
  }
}