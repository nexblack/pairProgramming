function setup() {
  createCanvas(400, 400);
}

var x = 30;
var y = 30;

function draw() {
  background(220);
  clareStuff();
  nStuff();
}

function clareStuff() {
  ellipse(x,y,30,30);
  x++;
  y++;

  if(x > 400) {
    x = 1;
  }
text('hello test',100,100);
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
  ellipse(mouseX,mouseY,20,20);
}

console.log("version 1.5");
