let andar01 = 0;
let andar02 = 0
let time01 = 0
let time02 = 0

function setup() {
  
  createCanvas(800, 435);
  
  temaSong.loop();
    
}

function draw() {

  time01++;
  
  time02++;
  
  background(fundoImg);
  
  // funções
  
  menuSelecao()
  
  modoTutorialSelecao()
  
  player(lagartoImg, lagarto, 6, 5)
  
  ataca()
  
  printCoracoes()
  
  novoBot(dragaoImg, dragao, 5, 5)
  
  movimentaBot(robo)
  
  movimentaBot(dragao) 
  
  colisao()
  
  exibePontuacao()
  
  bolaDeFogo()
  
  voltarMenu()

}

