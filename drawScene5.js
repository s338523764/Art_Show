function drawScene5() {
  currentScene = 5;
  //idea taken from the "Make it rain" project on Khan Academy
  var xPositions = [110];
  var yPositions = [110];
  background(204, 204, 255);
  image(cloud, 100, 10, 175, 100);
  for (var i = 0; i < 50; i++) {
    xPositions.push(random(100, 275));
    yPositions.push(random(110, 380));
  }
// noprotect
  for(var rain = 0; rain < 50; rain++) {
  fill("blue");  
  image(raindrop, xPositions[rain], yPositions[rain], 12, 20);
  }
  
  btn1.draw();
}
