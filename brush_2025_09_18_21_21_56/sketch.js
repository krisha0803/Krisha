function setup() {
  createCanvas(400, 400); 
  background('pink');        // pink background
  
}

function draw() {
  if (mouseIsPressed) {
    stroke('purple'); // purple color for dots
    strokeWeight(10);
    
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  // place a dot on a screen
  point(posX, posY);
  
   //call jump function
  jump();
  }
  function jump() {
  console.log('paint!');
}
}
