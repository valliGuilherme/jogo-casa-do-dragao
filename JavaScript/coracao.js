class Bot {
    
    constructor(posicaoX, posicaoY, altura, comprimento){
        
        this.posicaoX = posicaoX
        this.posicaoY = posicaoY
        this.comprimento = comprimento
        this.altura = altura
      
    }
}

let coracao1 = new Bot (740, 400, 33, 33)
let coracao2 = new Bot (700, 400, 33, 33)
let coracao3 = new Bot (660, 400, 33, 33)

let vida = 3;


function printBotParado (img, bot) {
  
    image(img, bot.posicaoX, bot.posicaoY, bot.altura, bot.comprimento);

}

function printCoracoes(){
  
  if(modoJogando){
    
    printBotParado(coracaoImg, coracao1)
    printBotParado(coracaoImg, coracao2)
    printBotParado(coracaoImg, coracao3)
  
  }
  
  if (vida === 3){
    coracao3.posicaoX = 740 
    coracao2.posicaoX =  700
    coracao1.posicaoX = 660 
    
  }
  
  if (vida === 2){
    coracao3.posicaoX = -200;
    coracao2.posicaoX = 700 
    coracao1.posicaoX = 660 
    
  }
  
  if (vida === 1){
    coracao3.posicaoX = -200;
    coracao2.posicaoX = -200 
    coracao1.posicaoX = 660 
    
  }  
}

function perde1Vida(){
  if (vida > 1){
    vida--;
  } else {
    gameOver();
  }
}





