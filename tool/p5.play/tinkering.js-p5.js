let sprite;

function setup() {
  new Canvas(3000, 3000); // Keep your original small canvas
	function circle(x, y){
		 sprite = new Sprite();
    sprite.diameter = 50;
    sprite.x = x;
    sprite.y = y;
	}
	circle(500, 200); circle(500, 300); circle();
}

function draw() {
  clear(); // No background
}


