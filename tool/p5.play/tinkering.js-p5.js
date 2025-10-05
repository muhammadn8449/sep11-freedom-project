console.log("Sketch loaded!"); // for debugging

function setup() {
  new Canvas(400, 400); // create a canvas

  let sprite = new Sprite();
  sprite.text = "Hello!";
  sprite.color = "blue";
}
