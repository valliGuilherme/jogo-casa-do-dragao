class Inimigo {
    
    constructor(posicaoX, posicaoY, altura, comprimento, velocidade){
        
        this.posicaoX = posicaoX
        this.posicaoY = posicaoY
        this.comprimento = comprimento
        this.altura = altura
        this.velocidade = velocidade
        this.morreu = false
        this.matou = false
        
    }
}


let robo = new Inimigo (800, 190, 95, 55, getRandomArbitrary(1.45, 2.75))

let dragao = new Inimigo (800, 340, 95, 55, getRandomArbitrary(1.45, 2.75))

let fogo = new Inimigo (800, 300, 65, 35, getRandomArbitrary(1.45, 2.75))

let fogo2 = new Inimigo (1450, 290, 65, 35, getRandomArbitrary(1.45, 2.75))

let fogo3 = new Inimigo (800, 190, 65, 35, getRandomArbitrary(1.45, 2.75))

let fogo4 = new Inimigo (1450, 190, 65, 35, getRandomArbitrary(1.45, 2.75))


// funçoes globais

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function runSprites(refreshTime){
  
      if(time02 > refreshTime){
        andar02++;
        time02 = 0;
    }  
  }

function printBot(imagemDoBot, bot, size) {
  
    image(imagemDoBot[andar02 % size], bot.posicaoX, bot.posicaoY, bot.altura, bot.comprimento);
    
}

function novoBot(imagemDoInimigo, inimigo, size, refreshTime){
    
  if(modoJogando){
      
      runSprites(refreshTime)
      printBot(imagemDoInimigo, inimigo, size)
      
  }
}

function deveVoltar(bot){
  if (bot.posicaoX < -170)
    return true;
}

function voltaPosicaoInicial(bot){
  if (deveVoltar(bot)){
    bot.posicaoX = 800
    bot.posicaoY = getRandomInt(150, 370);
    bot.velocidade = getRandomArbitrary(1.45, 2.75);

  }
}

function retorna(bot){
  bot.posicaoX = 800
  bot.posicaoY = getRandomInt(150, 370);
  bot.velocidade = getRandomArbitrary(1.45, 2.75);
}

function retornaY(bot, x){
  bot.posicaoX = x
  bot.posicaoY = getRandomInt(150, 370);
  bot.velocidade = getRandomArbitrary(1.45, 2.75);
}

function movimentaBot(bot){
  if (modoJogando){
    bot.posicaoX -= bot.velocidade;
    voltaPosicaoInicial(bot)
  }
}

// fogo

function bolaDeFogo(){
  
  if(modoJogando){
    
    printBotParado(fogoImg, fogo)
    
    printBotParado(fogoImg, fogo2)
    
    printBotParado(fogoImg, fogo3)
    
    printBotParado(fogoImg, fogo4)
    
  
    movimentaBot(fogo)
    
    movimentaBot(fogo2)
    
    movimentaBot(fogo3)
    
    movimentaBot(fogo4)
    
  }
}









