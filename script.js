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
//head
  ellipse(100,100,150,150);
//eyes
  ellipse(100,80,50,50);
  ellipse(130,80,50,50);
//mouth
  ellipse(110,120,40,40);
//line experiment
line(mouseX,0,mouseX,100);

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
  ballV += 0.1;
  if(ballY > 375) {
    ballV = -ballV;
  }
}

console.log("version 1.8");
