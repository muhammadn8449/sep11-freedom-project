let sprite;

function setup() {
  new Canvas(3000, 3000); // Keep your original small canvas
	function circle(x, y){
		 sprite = new Sprite();
    sprite.diameter = 50;
    sprite.x = x;
    sprite.y = y;
	}
	circle(500, 200); circle(200, 100); circle(300, 400); circle(400, 100); circle(500, 100); circle(50, 100);circle(350, 100);circle(600, 100);circle(700, 100);
}

function draw() {
  clear(); // No background
}


