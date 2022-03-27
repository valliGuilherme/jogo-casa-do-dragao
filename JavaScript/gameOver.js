let modoGameOver = false;


function gameOver(){
  
  modoGameOver = true;
  
  if(modoGameOver){
    
    modoJogando = false;
    fundoImg = gameOverImg;
    
    textAlign(CENTER)
    textSize(30)
    fill(color(205, 92, 92))
    text(pontos, 200, 200)

    
  }  
  
}

function jogarNovamente(){
  
  if(modoGameOver && keyIsDown(13)){
    
    resetaJogo()
  
  }
}

function resetaJogo(){

  modoJogando = true;
  fundoImg = jogoImg
  
  vida = 3;
  pontos = 0;
  
  lagarto.posicaoX = 100;
  lagarto.posicaoY = 200;
  
  retorna(robo);
  retorna(dragao);
  
  retorna(fogo);
  retornaY(fogo2, 1450);
  retorna(fogo3);
  retornaY(fogo4, 1450);
  
  modoGameOver = false;
  
}

function resetaJogoMenu(){
  
  vida = 3;
  pontos = 0;
  
  lagarto.posicaoX = 100;
  lagarto.posicaoY = 200;
  
  retorna(robo);
  retorna(dragao);
  
  retorna(fogo);
  retornaY(fogo2, 1450);
  retorna(fogo3);
  retornaY(fogo4, 1450);
  
  modoGameOver = false;
  modoMenu = true;
  modoTutorial = false;

}