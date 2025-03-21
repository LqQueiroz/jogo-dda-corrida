function setup() {
    createCanvas(610, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("#D2EBB4");
    } else {
      background("rgb(238,18,18)");
    }
  
    textSize(40);
    text("🐒", xJogador1, 100);
    text("🐴", xJogador2, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 340) {
      text("Jogador 1 parabens!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Jogador 2 parabens!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "w") {
      xJogador1 += random(30);
    }
    if (key == "p") {
      xJogador2 += random(30);
    }
  }
  