let c;
let img;
let y = 0;
var x = 0;
var speed = 3;
// var offset = 0;

// 画像やフォントなどの外部ファイルを読み込む
// プログラム開始時に1度だけ実行される
function preload() {
  img = loadImage("../img/katatsumuri.jpg"); //画像の読み込み
}

// preload()が完了すれば実行される
// プログラム開始時に1度だけ実行される
function setup() {
  createCanvas(400, 200); // 幅400px, 高さ400px
  frameRate(5); // 30fps

  img.loadPixels(); // 画像のピクセルデータを読み込み
  c = img.get(img.width / 2, img.height / 2); //
  // stroke(255);
  background("#faf5ec");
}

// setup()が完了すれば実行される
// プログラムが停止するまで繰り返し実行される
function draw() {
  // background(c); // 背景を塗りつぶし
  // image(img, 25, 25, 50, 50); // 画像を出力

  //**　ラインの移動 */
  y = y - 1; //画面内は下から上へ移り変わる
  if (y < 0) {
    y = height;
  } //画面上まで登りきったら画面下に戻る
  line(0, y, width, y); // 開始(x,y)と最後(x,y)

  stroke(225);
  strokeWeight(4);
  noFill(); //ラインが通過した部分が色変わる

  //** バウンド変化 */
  //   ellipse(x, 200, 100, 100);

  //   if (x > width) {
  //     speed = -3;
  //   }
  //   x += speed;

  //** 連続表示 */
  for (var w = 0; w <= width; w += 50) {
    // fill(random(255), 0, 200);
    // ellipse(w, 200, 24, 24);
    for (var h = 0; h <= height; h += 50) {
      fill(random(255), 100, 100);
      ellipse(w, h, 20, 20);
    }
  }
  //   offset = offset + 1;
}
// function mousePressed() {
//   loop();
// }
