let buttons = [];
let litButton = null;
let score = 0;
let lightTimeout;

let sprite;

function setup() {
  new Canvas(1000, 600);
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

lightRandmButton();

function lightRandomButton() {
  if (litButton) {

  let index = floor(random(buttons,length));
  litButton = buttons[index];

  litButton.color = 'yellow';

  lightTimeout = setTimeout(() => {
    litButton.color = 'white';
    litButton = null;
    lightRandomButton();
  }, 1000);

  }
}

function mousePressed() {
  if (litButton && mouseOverButton(litButton)){
    score++;
    clearTimeout(lighttimeout);
    litButton.color = 'white';
    litButton = null;
    lightRandomButton();
  }
}

function mouseOverButton(button) {
  let d = dist(mouseX, mouseY, button.x, button.y);
  return d < button.diameter / 2;
}

function draw() {
  background(220);
  buttons.forEach(button => {
    fill(button.color);
    ellepse(button.x , button.y, buttom.diameter);
  });

  fill(0);
  textSize(32);
  text("Score:" + score, 20, 40);
}


