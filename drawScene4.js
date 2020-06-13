function drawScene4() {
  currentScene = 4;
  background("white");
  //draw a line to divide the canvas for both drawings
  line(0, 200, 400, 200);
  //top half of the screen
  //draw an allien' figure in the top left corner
  //body (orange and purple rectangles)
  rectMode(CENTER);
  fill("orange");
  rect(125, 145, 100, 80, 5);
  fill("purple");
  rect(125, 145, 80, 60, 5);
  fill("orange");
  rect(125, 145, 60, 40, 5);
  fill("purple");
  rect(125, 145, 40, 20, 5);
  fill("orange");
  rect(125, 145, 20, 10, 5);
  //head
  fill("blue");
  ellipse(125, 60, 100);
  //ears
  fill("red");
  rect(200, 60, 50, 100, 30);
  ellipse(50, 60, 50, 100);
  fill("yellow");
  ellipse(200, 60, 10, 30);
  ellipse(50, 60, 10, 30);

  //draw the alien's face
  //mouth
  fill("green");
  ellipse(125, 85, 50, 20);
  //eyes
  fill("black");
  ellipse(110, 50, 20, 20);
  ellipse(140, 50, 20, 20);
  fill("white");
  ellipse(110, 50, 10, 10);
  ellipse(140, 50, 10, 10);

  //bottom half of the screen
  //draw the alien's figure
  //body (orange and purple rectangles)
  rectMode(CENTER);
  fill("orange");
  rect(125, 345, 100, 80);
  fill("purple");
  rect(125, 345, 80, 60);
  fill("orange");
  rect(125, 345, 60, 40);
  fill("purple");
  rect(125, 345, 40, 20);
  fill("orange");
  rect(125, 345, 20, 10);
  //head
  fill("blue");
  ellipse(125, 260, 100);
  //ears
  fill("red");
  ellipse(200, 260, 50, 100);
  ellipse(50, 260, 50, 100);
  fill("yellow");
  ellipse(200, 260, 10, 30);
  fill("orange");
  ellipse(50, 260, 10, 30);

  //draw the alien's face
  //mouth
  fill(34, 255, 0);
  ellipse(125, 285, 50, 20);
  //eyes
  fill("black");
  ellipse(110, 250, 20, 20);
  ellipse(140, 250, 20, 20);
  fill("white");
  ellipse(110, 250, 10, 10);

  //display the next button
  rectMode(CORNER);
  btn1.draw();
  
  //win screen
  if (score === 500){
    background("yellow");
    fill("black");
    textSize(50);
    text("You Win!", 100, 210);
    btn1.draw();
  }
}
