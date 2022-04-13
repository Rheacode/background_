
function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background("purple");
  if(keyIsDown(RIGHT_ARROW)) {
    background("yellow")
  }
  if(keyIsDown(LEFT_ARROW)) {
    background ("pink")
  }
  if(keyIsDown(DOWN_ARROW)) {
    background("blue")
  }

  if(keyIsDown(UP_ARROW)) {
    background("red")
  }
}

