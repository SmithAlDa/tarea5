function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var x = 0;x <=400;x = x+100){
    for (var y= 50;y <=400;y = y+100){
      fill(0)
      rect(x, y, 50, 50)
      rect(y,x,50,50)
    }
  }
}