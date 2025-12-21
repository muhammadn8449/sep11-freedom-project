# Entry 2
##### 12/21/25

### Content:
For my Freedom Project, I’m working on a button-click game using p5.js and p5.play, where the player has 30 seconds to earn as many points as possible by clicking on a button that that increases in size every 0.7 seconds. I started by learning p5.play to manage the game objects and the button sprite. Since I have figured out most of my conflicts like how to increase the the sprite size, the coordinates, and time, now I'm focusing on how to attract the user in my game. My game page looks plain with sprites, start game, and a score tracker.

### Time Managment:
In order for the sprite to increase in size in less than 1 second.
```
if (litButton && millis() - lightTimeout > 700) {
        litButton.shapeColor = "white";
        litButton.diameter = 50;
        litButton = null;
        chooseRandomButton();
```
30 seconds to earn as many points as possible, 30,000 mill(milliseconds) = 30 seconds:
```
endTime = millis() + 30000;
```

Score Tracker:
```
function mousePressed() {
    if (gameStarted && litButton && dist(mouseX, mouseY, litButton.x, litButton.y) < litButton.diameter / 2) {
        score += 5;
        scoreDisplay.innerText = "Score: " + score;
        litButton.diameter = 50;
        litButton = null;
        chooseRandomButton();
    }
}
```
Project Page:<img width="1365" height="587" alt="Screenshot 2025-12-21 10 55 17 AM" src="https://github.com/user-attachments/assets/8856aab9-7dc8-4c3f-b578-879cc62dc416" />

### Source:
<h3>p5.js Documentation:</h3> <a href = "https://p5js.org/reference/">Referance</a>
<h3>p5.play:</h3> <a href = "https://p5play.org/learn/sprite">Documentation</a>

### EDP:
When I looked at my blog entry 1, I see that I got most of my plans done and went a little beyond my EDP. So right now I'm at stage where I wanna decorate my page and probably change some button to a different coordinates so it looks simple. When I get to finish what I wanna do at this stage process I might make the game a bit more complex if it seems too easy. Cause When I played my game, I got a score of 50 in 30 seconds. My goal is to reach 75+ and when I acccomplish my goal, I might decrease the timing from 0.7 to 0.5 for the sprite and also the 30 seconds to 25 for overall timing. 

Skills:

