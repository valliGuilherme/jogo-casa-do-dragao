let modoAtaque = false;
let podeMover = true;

class Player {
    
    constructor(posicaoX, posicaoY, altura, comprimento, velocidade){
        
        this.posicaoX = posicaoX
        this.posicaoY = posicaoY
        this.comprimento = comprimento
        this.altura = altura
        this.velocidade = velocidade
        
    }
    
    movimentaPlayer(){

      if (podeMover === true){
            
            let limiteDaTelaUp = 165;
            let limiteDaTelaDown = 378
            let limiteDaTelaLeft = 0
            let limiteDaTelaRight = 715
            
          if (keyIsDown(87) && this.posicaoY > limiteDaTelaUp) {
            this.posicaoY -= this.velocidade;
            modoAtaque = false;
            lagartoImg = lagartoAndandoImg;
            this.velocidade = 3
        
          } else if (keyIsDown(83) && this.posicaoY < limiteDaTelaDown) {
            this.posicaoY += this.velocidade;
            modoAtaque = false;
            lagartoImg = lagartoAndandoImg;
            this.velocidade = 3
            
          } else if(keyIsDown(65) && this.posicaoX > limiteDaTelaLeft) {
            this.posicaoX -= this.velocidade;
            modoAtaque = false;
            lagartoImg = lagartoAndandoImg;
            this.velocidade = 3
              
              
          } else if(keyIsDown(68) && this.posicaoX < limiteDaTelaRight) {
            this.posicaoX += this.velocidade;
            modoAtaque = false;
            lagartoImg = lagartoAndandoImg;
            this.velocidade = 3
              
          } else{
                lagartoImg = lagartoParadoImg;
                
          }
        }  
    }        
}


//               (x, y, altura, comprimento, velocidade)

let lagarto = new Player (100, 200, 80, 60, 3)


function sprites(refreshTime){
  
  if(time01 > refreshTime){
    
    andar01++;
    time01 = 0;
  
  }  
}

function printBotAnimado(imagemDoBot, bot, size) {
    
  if(modoJogando){
      
    image(imagemDoBot[andar01 % size], bot.posicaoX, bot.posicaoY, bot.altura, bot.comprimento);
    }
}

function player(imagemDoPlayer, player, size, refreshTime){
    
  if(modoJogando){
  
    sprites(refreshTime)
    printBotAnimado(imagemDoPlayer, player, size)
    player.movimentaPlayer()
      
  }
}


function ataca(){
  
  if (modoJogando && keyIsDown(13)){
  
    lagartoImg = lagartoAtacandoImg;
    modoAtaque = true;
    lagarto.velocidade = 0;
  
  }
}

