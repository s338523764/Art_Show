//create the cloud, raindrop, and dog variable for the images
let cloud;
let raindrop;
let dog;

//preload the cloud, raindrop, and images
function preload() {
  cloud = loadImage("cloud.png");
  raindrop = loadImage("raindrop.png");
  dog = loadImage("dog.png");
}

var currentScene;
var score = 0;
//create boolean variables for the circles drawn when a difference is spotted
var firstCircleHasNotBeenDrawn = true;
var secondCircleHasNotBeenDrawn = true;
var thirdCircleHasNotBeenDrawn = true;
var fourthCircleHasNotBeenDrawn = true;
var fifthCircleHasNotBeenDrawn = true;

function setup() {
  createCanvas(400, 400);
  drawScene1();
}

//create a button object type
var Button = function(config) {
  this.x = config.x;
  this.y = config.y;
  this.height = config.height;
  this.width = config.width;
  this.label = config.label;
}

//create button method to draw the button
Button.prototype.draw = function() {
  fill(34, 255, 0);
  rect(this.x, this.y, this.height, this.width, 5);
  fill(0, 0, 0);
  textSize(19);
  text(this.label, this.x + 10, this.y + this.height / 2.5);
}

//create a button instance for the scene changing button
var btn1 = new Button({
  x: 320,
  y: 20,
  width: 40,
  height: 60,
  label: "next"
});

//if the mouse is inside the "next" button, change scenes
mouseClicked = function() {
  if (mouseX >= 320 && mouseX <= 360 && mouseY >= 20 && mouseY <= 80) {
    if (currentScene === 1) {
      drawScene2();
    } else if (currentScene === 2) {
      drawScene3();
    } else if (currentScene === 3) {
      drawScene4();
    } else if (currentScene === 4) {
      drawScene5();
    } else if (currentScene === 5) {
      drawScene6();
    }
  }

  //if the user clicks on the yellow part of the left ear on the top half of the screen, increase the score by 100
  if (mouseX >= 45 && mouseX <= 55 && mouseY >= 45 && mouseY <= 75 && firstCircleHasNotBeenDrawn) {
    firstCircleHasNotBeenDrawn = false;
    score += 100;
  }

  //if the user clicks the red yellow part of the right ear on the top half of the screeb, increase the score by 100
  //200, 60, 50, 100
  if (mouseX >= 175 && mouseX <= 225 && mouseY >= 10 && mouseY <= 110 && secondCircleHasNotBeenDrawn) {
    secondCircleHasNotBeenDrawn = false;
    score += 100;
  }

  //if the user clicks the biggest orange square on the top half of the screen, increase the score by 100
  if (mouseX >= 75 && mouseX <= 175 && mouseY >= 105 && mouseY <= 185 && thirdCircleHasNotBeenDrawn) {
    thirdCircleHasNotBeenDrawn = false;
    score += 100;
  }

  //if the user clicks the white part of the right eye on the top half of the screen, increase the score by 100
  //140, 50, 10, 10
  if (mouseX >= 135 && mouseX <= 145 && mouseY >= 45 && mouseY <= 55 && fourthCircleHasNotBeenDrawn) {
    fourthCircleHasNotBeenDrawn = false;
    score += 100;
  }

  //if the user clicks the green oval on the top half of the screen, increase the score by 100
  //125, 85, 50, 20
  if (mouseX >= 100 && mouseX <= 150 && mouseY >= 75 && mouseY <= 95 && fifthCircleHasNotBeenDrawn) {
    fifthCircleHasNotBeenDrawn = false;
    score += 100;
  }
};

//if the mouse is pressed and it is scene 2, draw the dots
mousePressed = function() {
  if (currentScene === 2) {
    fill("blue");
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX + 20, mouseY + 20, 20, 20);
    ellipse(mouseX - 20, mouseY + 20, 20, 20);
    ellipse(mouseX - 20, mouseY - 20, 20, 20);
    ellipse(mouseX + 20, mouseY - 20, 20, 20);
    ellipse(mouseX + 30, mouseY, 20, 20);
    ellipse(mouseX - 30, mouseY, 20, 20);
    ellipse(mouseX, mouseY + 30, 20, 20);
    ellipse(mouseX, mouseY - 30, 20, 20);
    ellipse(mouseX + 50, mouseY + 50, 30, 30);
    ellipse(mouseX - 50, mouseY - 50, 30, 30);
    ellipse(mouseX - 50, mouseY + 50, 30, 30);
    ellipse(mouseX + 50, mouseY - 50, 30, 30);
    ellipse(mouseX, mouseY + 70, 30, 30);
    ellipse(mouseX, mouseY - 70, 30, 30);
    ellipse(mouseX + 70, mouseY, 30, 30);
    ellipse(mouseX - 70, mouseY, 30, 30);
  }
  
  //if the user presses the mouse in scene 5, draw a dog where they pressed
  //100, 10, 175, 100
  if (currentScene === 5) {
    image(dog, mouseX - 50, mouseY - 110, 96, 160);
  }
}

function draw() {
  if (currentScene === 4) {
    //display the score
    //noStroke();
    rectMode(CENTER);
    fill("white");
    rect(300, 365, 180, 50);
    fill(255, 0, 196);
    textSize(19);
    text("Score: " + score, 250, 370);
    rectMode(CORNER);
  }

  //win screen
  if (score === 500 && currentScene === 4) {
    background("yellow");
    fill("black");
    textSize(50);
    text("You Win!", 100, 210);
    btn1.draw();
  }
}
