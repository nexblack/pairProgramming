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
  255,
  98,
  0
];


for(var i = 0;i<billybob.length;i++) {
  fill(billybob[i]);
  ellipse(billybob[i],50*i,10,10);
}

var mapp = [
  [0,0,0,0,1],
  [0,2,2,2,1],
  [0,0,0,0,1],
  [0,0,0,0,1],
  [2,2,2,2,2]
];


var nStuff = function() {
  for(var i = 0;i<mapp.length;i++) {
    for(var j = 0;j<mapp[i].length;j++) {
      if(mapp[i][j] === 0) {
        fill(0);
      } else if (mapp[i][j] === 1) {
        fill(255);
      } else if (mapp[i][j] === 2){
        fill(85);
      }
      ellipse(j*20+50,i*20+50,10,10);
    }
  }
};
nStuff();



function clareStuff() {

}


console.log("ver 2.2");
