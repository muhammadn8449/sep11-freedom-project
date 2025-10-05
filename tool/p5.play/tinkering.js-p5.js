console.log("Sketch loaded!");

function setup() {
  new Canvas(400, 400); // Only works with p5play v3

  let player = new Sprite();
  player.text = "Hello!";
  player.color = "blue";
}
