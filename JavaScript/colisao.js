function verificaColisao(bot1, bot2){
  
  return collideCircleCircle(bot1.posicaoX, bot1.posicaoY, bot1.comprimento, bot2.posicaoX, bot2.posicaoY, bot2.comprimento)

}

function colisao(){
  
  // robo
  
  if (verificaColisao(lagarto, robo) && modoAtaque === false){
    
    retorna(robo)
    
    perde1Vida()
  
    hitSong.play() 
    
  }
  
  if (verificaColisao(lagarto, robo) && modoAtaque === true){
    
    retorna(robo);
    
    pontos++;
    
    pontoSong.play()
    
  }
  
  // dragao
    
  if (verificaColisao(lagarto, dragao) && modoAtaque === false){
    
    retorna(dragao)
    
    perde1Vida()
  
    hitSong.play()
    
  }
  
  if (verificaColisao(lagarto, dragao) && modoAtaque === true){
    
    retorna(dragao)
    
    pontos++;
    
    pontoSong.play()
  }
  
  // fogo
  
  if (verificaColisao(lagarto, fogo)){
    
    retorna(fogo)
    
    perde1Vida()
    
    hitSong.play()
    
  }
  
  if (verificaColisao(lagarto, fogo2)){
    
    retorna(fogo2)
    
    perde1Vida()
    
    hitSong.play()
    
  }
  
  if (verificaColisao(lagarto, fogo3)){
    
    retorna(fogo3)
    
    perde1Vida()
    
    hitSong.play()
   
  }
  
  if (verificaColisao(lagarto, fogo4)){
    
    retorna(fogo4)
    
    perde1Vida()
    
    hitSong.play()
    
  }
}

