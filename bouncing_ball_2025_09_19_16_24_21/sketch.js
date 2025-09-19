// Reserve memory for x and y
let x,y, step;

function setup() {
  createCanvas(400, 400); 
// Place x and y in the middle of screen
  x = width / 2;
  y = height / 2;
  
  step= 5;
}

function draw() {
  background('yellow'); // yellow background

  // draw the circle
  circle(x, y, 50)
  fill("red")

  // Increase the x variable by step on each new frame
  // same as x = x + step;
  y += step;
  
  // Flip the step after circle moves off the top OR bottom
  if (y >= width || y <= 0) {
    step = -step;
    
  }
}
