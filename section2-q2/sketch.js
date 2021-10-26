// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    if((i + j) % 2 == 1){
      fill(120);
    }

    else{
      noFill();
    }
      rect(size * i, size * j, size, size);

    if((i + j) % 2 == 1 && j < 3){
      fill(196, 0, 0);
      ellipse(size * i + size / 2, size * j + size / 2, size * 0.8);
    }

    else if((i + j) % 2 == 1 && j > 4){
      fill(0, 0, 0);
      ellipse(size * i + size / 2, size * j + size / 2, size * 0.8);
    }
    }
  }
}
