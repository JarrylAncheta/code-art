function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let t = 0; 

function setup() {
  createCanvas(600, 600);
  noStroke();  fill(20, 190, 250);
}

function draw() {
  background(10, 10); 

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      const xAngle = map(mouseX, 0, width, -7 * PI, 5 * PI, true);
      const yAngle = map(mouseY, 0, height, -7 * PI, 5 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 25 * cos(2 * PI * t + angle);
      const myY = y + 25 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); 
    }
  }

  t = t + 0.005;
}
