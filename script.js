function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
    clareStuff();
    nStuff();
}

var billybob = [
  0,
  155,
  255
];

var mapp = [
  [0,0,0,0,1],
  [0,2,2,2,1],
  [0,0,0,0,1],
  [0,0,0,0,1],
  [2,2,2,2,2]
];


function nStuff() {
  for(var i = 0;i<30;i++) {
    ellipse(i*3,20,5,5);
  }
}

function clareStuff() {

}


console.log("ver 2.2");
