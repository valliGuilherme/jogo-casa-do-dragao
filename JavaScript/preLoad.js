let fundoImg;
let menuCreditosImg;
let menuJogarImg;
let menuTutorialImg;
let menuHistoiaImg;


function preload(){
  
  fundoImg = loadImage("imagens/jogarSelecionado.gif");
  
  menuJogarImg = loadImage("imagens/jogarSelecionado.gif");
  
  menuCreditosImg = loadImage("imagens/creditosSelecionado.gif");
  
  menuTutorialImg = loadImage("imagens/tutorialSelecionado.gif");
  
  menuHistoriaImg = loadImage("imagens/historiaSelecionado.gif");
  
  fundoTutorial1Img = loadImage("imagens/controleTutorial.png")
  
  fundoTutorial2Img = loadImage("imagens/comoJogarTutorial.gif")
  
  fundoHistoriaImg = loadImage("imagens/fundoHistoria.png")
  
  jogoImg = loadImage("imagens/jogoFundo.png");
  
  
  // lagarto
  
  lagartoImg = [];
  for (i = 0; i < 6; i++){
        lagartoImg[i] = loadImage("imagens/lagartoParado" + i + ".png")
  }
  
  lagartoParadoImg = [];
  for (i = 0; i < 6; i++){
        lagartoParadoImg[i] = loadImage("imagens/lagartoParado" + i + ".png")
  }
  
  
  lagartoAtacandoImg = [];
  for (i = 0; i < 6; i++){
        lagartoAtacandoImg[i] = loadImage("imagens/lagartoAtacando" + i + ".png")
  }
  
  lagartoAndandoImg = [];
  for (i = 0; i < 6; i++){
        lagartoAndandoImg[i] = loadImage("imagens/lagartoAndando" + i + ".png")
  }
  
  // inimigos
  
  dragaoImg = [];
  for (i = 0; i < 5; i++){
        dragaoImg[i] = loadImage("imagens/dragao" + i + ".png")
  }
  
  fogoImg = loadImage ("imagens/fogo.gif")
  
  // outros
  
  coracaoImg = loadImage("imagens/coracao.png");
  
  gameOverImg = loadImage("imagens/telaGameOver.gif")
  
  caixaImg = loadImage("imagens/caixa.png")
  
  creditosImg = loadImage("imagens/creditosImg.png")
  
  // sons
  
  temaSong = loadSound("sons/temaDone.mp3");
  
  pontoSong = loadSound("sons/pontoDone.mp3");
  
  hitSong = loadSound("sons/hitDone.mp3");
  
  menuSong = loadSound("sons/menuDone.mp3")
  
}