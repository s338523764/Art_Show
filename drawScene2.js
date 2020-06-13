function drawScene2() {
  currentScene = 2;
  background("white");
  //draw the rectangle at the bottom of the screen
  fill(71, 163, 255);
  rect(-10, 320, 420, 90);

  //draw the text in the rectangle
  fill(0, 0, 0);
  text("Click to draw some cool dots", 70, 360);
  btn1.draw();
}
