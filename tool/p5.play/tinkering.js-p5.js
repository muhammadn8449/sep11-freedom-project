console.log("Sketch loaded!");

function setup() {
  createCanvas(400, 400);

  let player = new Sprite();
  player.position.x = width / 2;
  player.position.y = height / 2;
  player.color = 'blue';
  player.text = 'Hello!';
}

function draw() {
  background(220);
  drawSprites();
}
