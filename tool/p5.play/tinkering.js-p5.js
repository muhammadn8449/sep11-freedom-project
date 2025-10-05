console.log("Sketch loaded!");

function setup() {
  new Canvas(400, 400); // p5play function

  let player = new Sprite();
  player.x = 200;
  player.y = 200;
  player.color = 'blue';
  player.text = 'Hello!';
}
