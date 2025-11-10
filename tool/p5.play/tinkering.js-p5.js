let sprite;

function setup() {
  new Canvas(3000, 3000);
	function circle(x, y){
		 sprite = new Sprite();
    sprite.diameter = 50;
    sprite.x = x;
    sprite.y = y;
	}
	circle(500, 200); circle(500, 300); circle(500, 100); circle(700, 300); circle(600, 300); circle(800, 300); circle(800, 100); circle(800, 200); circle(600, 100); circle(700, 100)
}

function draw() {
  clear();
}

function lightUpRandomButton () {
  for (let b of buttons){
    b.shapeColor = color(100);
  }

  let randomButton = random(buttons);

  randomButton/shapeColor = (255, 255, 0);

  setTimeout(() => {
    randomButton.shapeColor = color(100);
  }, 500);
}

