let gameOver = false;
let endTime;

let buttons = [];
let litButton = null;
let score = 0;
let lightTimeout;
let sprite;

let gameStarted = false;
let scoreDisplay = document.getElementById("scoreBoard");

document.getElementById("button").addEventListener("click", () => {
  gameStarted = true;
  document.getElementById("button").style.display = "none";
  scoreBoard.style.display = "block";

  endTime = millis() + 30000;
});

function setup() {
  new Canvas(1000, 600);
	function circle(x, y){
		sprite = new Sprite();
    sprite.diameter = 50;
    sprite.x = x;
    sprite.y = y;
    sprite.shapeColor = "white";
    buttons.push(sprite);
	}
	circle(500, 200); circle(500, 300); circle(500, 100); circle(700, 300); circle(600, 300); circle(800, 300); circle(800, 100); circle(800, 200); circle(600, 100); circle(700, 100)

  chooseRandomButton();

}

function draw() {
  clear();
   allSprites.draw();

   if (litButton && millis() - lightTimeout > 600) {
        litButton.shapeColor = "white";
        litButton.diameter = 50;
        litButton = null;
        chooseRandomButton();
    }

    if (gameStarted && !gameOver && millis() > endTime) {
    gameOver = true;
    litButton = null;
    alert("Time's up! Final score: " + score);

    alert("If you would like to restart, please refresh the page")
}
}


function chooseRandomButton() {
    litButton = random(buttons);
    litButton.shapeColor = "yellow";
    litButton.diameter = 70;
    lightTimeout = millis();
}

function mousePressed() {
    if (gameStarted && litButton && dist(mouseX, mouseY, litButton.x, litButton.y) < litButton.diameter / 2) {
        score += 5;
        scoreDisplay.innerText = "Score: " + score;
        litButton.shapeColor = "white";
        litButton.diameter = 50;
        litButton = null;
        chooseRandomButton();
    }
}




// lightRandmButton();

// function lightRandomButton() {
//   if (litButton) {

//   let index = floor(random(buttons,length));
//   litButton = buttons[index];

//   litButton.color = 'yellow';

//   lightTimeout = setTimeout(() => {
//     litButton.color = 'white';
//     litButton = null;
//     lightRandomButton();
//   }, 1000);

//   }
// }

// function mousePressed() {
//   if (litButton && mouseOverButton(litButton)){
//     score++;
//     clearTimeout(lighttimeout);
//     litButton.color = 'white';
//     litButton = null;

//     lightRandomButton();
//   }
// }

// function mouseOverButton(button) {
//   let d = dist(mouseX, mouseY, button.x, button.y);
//   return d < button.diameter / 2;
// }

// function draw() {
//   background(220);
//   buttons.forEach(button => {
//     fill(button.color);
//     ellepse(button.x , button.y, buttom.diameter);
//   });

//   fill(0);
//   textSize(32);
//   text("Score:" + score, 20, 40);
// }


