function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
    clareStuff();
    nStuff();
}

var billybob = [0,155,255];


function nStuff() {
  if(mouseX < 100) {
    background(billbob[0]);
  } else if (mouseX > 100 && mouseX < 300) {
    background(billybob[1]);
  } else {
    background(billybob[2]);
  }
}

function clareStuff() {

}


console.log("ver 2.0");
