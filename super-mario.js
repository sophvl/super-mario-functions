// Player position
let x = 100;
let y = 300;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(212,232,245); // sky
  // changes to night time
  if (mouseIsPressed == true) 
    background(75,83,142)

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();
  // house body
  fill(255, 204, 153);
  rect(360, 200, 150, 150)
  // house roof
  fill(150, 0, 0)
  triangle(360, 200, 435, 125, 510, 200);
  // door 
  fill(148,123,105);
  rect(360, 290, 40, 60)
  // window
  fill(177, 216, 230)
  rect(380, 230, 30, 30);
  rect(455, 230, 30, 30)
  // cloud 
  fill(255)
  noStroke();
  ellipse(200, 100, 60, 60)
  ellipse(250, 100, 60, 60)
  ellipse(220, 80, 70, 70)
  ellipse(270, 80, 70, 70)
  
}


// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 5;
  }
}

function keyPressed() {
  if (key === " ") jump();
  
  if (key == "d") moveRight();
  
  if (key == "a") moveLeft();
}
function moveRight() {
  x = x + 10;
  speed = x +15
}
function moveLeft() {
  x = x - 10
}


// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(233,206,202);
  rect(x, y, 40, 40);
}