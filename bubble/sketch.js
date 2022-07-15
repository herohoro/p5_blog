//class,arry
let bubbles = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(5); // 30fps
  //   for (let i = 0; i < 100; i++) {
  // let x = random(width);
  // let y = random(height);
  // let r = random(10, 30);
  // let x2 = 20 + 100 * i;
  // bubbles[i] = new Bubble(x, y, r);
  //   }
}

//mousePress：クリックすると描写
// function mousePressed() {
//mouseDragged：ドラックすると描写
function mouseDragged() {
  let r = random(5, 20);
  let b = new Bubble(mouseX, mouseY, r);
  //   bubbles[0] = b;
  //　　0に代入するとクリックした場所が更新される
  bubbles.push(b);
  //   pushは最後のarrayに追加される
}

function draw() {
  background("#faf5ec");
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 10);
    this.y = this.y - random(-5, 10);
  }
  show() {
    stroke("rgb(88,73,51)");
    strokeWeight(4);
    noFill();
    // fill(51, 20);
    // noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
