function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  for (var x = 500; x >= 0; x = x-20){
    ellipse (250,250,x,x)
    if (x == 500 | x == 440 | x== 380 | x==320 | x== 260 | x== 200 | x == 140 | x== 80 ){
      fill(0,250,0)
    } else if (x == 480|x == 420|x == 360|x == 300|x == 240|x == 180|x == 120|x == 60){
      fill(0,0,250)
    } else {
      fill (250,0,0)
    }
  }
}