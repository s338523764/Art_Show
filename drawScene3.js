function drawScene3() {
  currentScene = 3;
  background(200, 100, 200);
  textSize(24);
  fill("black");
  text("Spot the Difference", 90, 100);
  textSize(18);
  text("- Two pictures will be shown on the screen", 20, 150);
  text("- There will be five slight differences between", 20, 180);
  text("them", 20, 210);
  text("- Click the difference on the picture at the top", 20, 240);
  text("of the screen", 20, 270);
  btn1.draw();
}
