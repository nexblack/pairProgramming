function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
    clareStuff();
    nStuff();

}

function clareStuff() {
  stroke(0);
ellipse(mouseX,mouseY,50,50);

}



var ballY = 100;
var ballV = 5;
function nStuff() {
  noStroke();
  fill(255);
  rect(200,0,200,400);
  fill(255,0,0);
  ellipse(300,ballY,50,50);
  ballY += ballV;
  ballV += 0.13;
  if(ballY > 375) {
    ballV = -ballV;
    ballV += 0.5;
  }
}

console.log("version 1.10");
