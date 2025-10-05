console.log("Sketch loaded!");

function setup() {
  createCanvas(400, 400); // regular p5.js canvas creation

  let player = new Sprite();
  player.x = width / 2;
  player.y = height / 2;
  player.color = 'blue';
  player.text = 'Hello!';
}

function draw() {
  background(220); // clear the background

  drawSprites(); // draw all sprites on canvas
}
