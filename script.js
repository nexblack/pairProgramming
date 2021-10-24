function setup() {
  createCanvas(400, 400);
}

var x = 30;

function draw() {
  background(220);
  clareStuff();
  nStuff();
}

function clareStuff() {
  ellipse(x,30,30,30);
  x++;

  if(x > 400) {
    x = 1;
  }
text("hello test",50,50);
}

var abc = 0;
function nStuff() {
  if(abc == 0) {
    console.log("WE CAN CODE LIKE THIS");
    abc++;
  }
  if(abc == 2) {
    console.log("in theory each of these should only run 1 time");
    abc++;
  }
  for(var i =0;i<50;i++) {
    ellipse(i*5,i*3,5,3);
  }
}

console.log("version 1.4");
