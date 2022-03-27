let pontos = 0;
let caixa = new Bot (75, 388, 105, 45)


function exibePontuacao(){  
  
    if(modoJogando){
  
      printBotParado(caixaImg, caixa);

      //textAlign(CENTER)

      textSize(24)
      fill(color(28,28,28))
      text(pontos, 123, 419)
      
    }
   
    if(modoGameOver){
      
      textSize(30)
      fill(color(28, 28, 28))
      text(pontos, 660, 225)

    }
}