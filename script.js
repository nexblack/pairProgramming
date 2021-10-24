function setup() {
  createCanvas(400, 400);
}

var x = 50;

function draw() {
  background(220);
  ellipse(x,50,80,80);
  x++;
}

if(x > 400) {
  x = 5;
}


console.log("version 1.2");
