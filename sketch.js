var bubbles = [];

var addNumBubbles = function (totalBubbles) {
  for (var i = 0; i < totalBubbles; i++) {
    bubbles[i] = new Bubble(random(0, width),
    random(0, height));
  }
};

setup = function () {
  createCanvas(600, 600);
  // your code goes here
  addNumBubbles(500);
};

draw = function () {
  background(0);
  var index = 0;
  while(index < bubbles.length) {
    bubbles[index].update();
    bubbles[index].display();
    index += 1;
  }
};
