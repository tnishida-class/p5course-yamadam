// 最終課題を制作しよう
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(180, 214, 182);
  calender(2021, 12);
  let d = 1;
  for(let d = 1; d <= 31; d++){
    if(d < 5){
      fill(0);
      text(d, (d - 1) * 80 + 295, 120);
  　}
    else if(d < 12){
      fill(0);
      text(d, (d - 5) * 80 + 55, 200);
  　}
    else if(d < 19){
      fill(0);
      text(d, (d - 12) * 80 + 55, 280);
    }
    else if(d < 26){
      fill(0);
      text(d, (d - 19) * 80 + 55, 360);
    }
    else{
      fill(0);
      text(d, (d - 26) * 80 + 55, 440);
    }
  }
  fill(255, 0, 0);
  noStroke();
  textSize(15);
  text("予備日", 310, 150);
  text("冬休み", 228, 480);
  fill(0);
  stroke(2);
  line(215, 460, 525, 460);
  triangle(525, 460, 515, 455, 515, 465)
  fill()
}

function calender(y, m){
  let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  fill(61, 71, 61);
  noStroke();
  textSize(30);
  textFont("Mv Boli");
  let thismonth = Months.splice(m - 1, 1);
  text(thismonth, 210, 40);
  text(y, 380, 40);
  fill(255, 0, 0);
  textSize(20);
  text("Sun", 70, 90);
  fill(0);
  text("Mon", 150, 90);
  fill(0);
  text("Tue", 230, 90);
  fill(0);
  text("Wed", 310, 90);
  fill(0);
  text("Thu", 390, 90);
  fill(0);
  text("Fri", 470, 90);
  fill(0, 0, 255);
  text("Sat", 550, 90);

for(let i = 0; i < 7; i++){
 for(let j = 0; j < 5; j++){
   noFill();
   stroke(0);
   rect(i * 80 + 50, j * 80 + 100, 80, 80);
  }
 }
}

function mouseClicked(){
    fill(232, 80, 80);
    rect(530, 340, 80, 80);
    fill(61, 71, 61);
    textSize(15);
    text("Merry", 550, 390);
    text("Christmas!", 533, 410);
    fill(0);
    textSize(20);
    text("25", 535, 360);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
