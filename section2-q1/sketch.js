// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    noFill();
    ellipse(50, 50, i * 10 + 10);

    if(i < 4){
    stroke(0, 0, 255);
　  }
    else if(i < 10){
    stroke(255, 0, 0);
    }
  }
}
