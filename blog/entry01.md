# Entry 1
##### 11/09/25

### Context:
I decided to use p5.play as my tool to build a game where the okayer has to press the button as soon as possible when it lights up, if they don;t they don't get the point. I picked p5.play because it's easy to use for making a interactive game.

So far I have written code to create circles on the preview page in a rectangle shape that will act like buttons later on. Each circle is sprite, and I placed them at different positions. My next goal is to make them light up and know when they are clicked.

```
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
```

### Source:
<a href="https://p5play.org/learn/sprite">p5.play</a> - Learn how to make and use sprites for my game

<h4>Youtube Videos:</h4>
<a href="https://www.youtube.com/watch?v=cPTrLLdCX-Y">Sprite</a> - Learned how to create and animate sprites.



[Next](entry02.md)

[Home](../README.md)
