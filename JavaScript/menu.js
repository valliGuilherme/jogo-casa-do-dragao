let modoMenu = true;
let modoJogando = false;
let modoCreditos = false;
let modoTutorial = false;
let modoHistoria = false;

let jogar = true;
let creditos = false;
let tutorial = false;
let historia = false;


function menuSelecao(){
  
  if (modoMenu){
    
    if (keyCode === 83 && jogar === true) {

      // jogar > creditos, S 
      
      creditosSelecionado()
    
    }

    if (keyCode === 83 && tutorial === true) {

      // tutorial > historia, S

      historiaSelecionado()    
      
    }

    
    if (keyCode === 87 && creditos === true) {

      // creditos > jogar, W

      jogarSelecionado()  
      
    }
    
    if (keyCode === 87 && historia === true){
      
      // historia > tutorial, W
    
      tutorialSelecionado()
    
    }
    
    
    if (keyCode === 68 && jogar === true) {

      // jogar > tutorial, D

      tutorialSelecionado()
      
    }
    
    if (keyCode === 68 && creditos === true) {

      // creditos > historia, D
      
      historiaSelecionado()
    
    }
    
    if (keyCode === 65 && tutorial === true) {
  
    // tutorial > jogar, A  
      
      jogarSelecionado()
      
    }

    if (keyCode === 65 && historia === true) {

      // historia > creditos, A
      
      creditosSelecionado()
      
    }
    
    // ENTER   
      
    if (keyCode === 13 && jogar === true){

      // se ENTER_KEY > jogar
      
      modoJogando = true;
      fundoImg = jogoImg
      
      modoMenu = false;
      modoTutorial = false;
      pontoSong.play();
      
      }

    if (keyCode === 13 && creditos === true){
      
      // se ENTER_KEY > creditos
      
      modoCreditos = true;
      fundoImg = creditosImg;
      
      modoMenu = false;
      modoTutorial = false;
      pontoSong.play();
      
  }
    
  if (keyCode === 13 && tutorial === true){
      
      // se ENTER_KEY > tutorial
    
      modoTutorial = true;
      fundoImg = fundoTutorial1Img;
      
      modoMenu = false;
      modoCreditos = false;
      pontoSong.play();
      
  }
    
    if (keyCode === 13 && historia === true){
      
      // se ENTER_KEY > historia
      
      fundoImg = fundoHistoriaImg;
      
      modoMenu = false;
      modoCreditos = false;
      modoTutorial = false;
      pontoSong.play();
      
    }
  }  
}

function jogarSelecionado() {
      
  jogar = true;
      
  fundoImg = menuJogarImg;
  creditos = false;
  historia = false;
  tutorial = false;
    
}

function creditosSelecionado() {
  
  creditos = true;
      
  fundoImg = menuCreditosImg;
  tutorial = false;
  jogar = false;
  historia = false;
    
}

function tutorialSelecionado(){
  
  tutorial = true;

  fundoImg = menuTutorialImg;
  jogar = false;
  creditos = false;
  historia = false;
      
}

function historiaSelecionado(){
  
  historia = true;
      
  fundoImg = menuHistoriaImg
  jogar = false;
  tutorial = false;
  creditos = false;
    
}

function modoTutorialSelecao(){
  
  if(modoTutorial){
    
    if(keyCode === 68){
      
      fundoImg = fundoTutorial2Img
      
    }
  
    if(keyCode === 65){
      
      fundoImg = fundoTutorial1Img
      
    }
  }
}

function voltarMenu(){
  
  if (keyCode === 77){
      
      fundoImg = menuJogarImg
      creditos = false;
      jogar = true;
      modoJogando = false
      modoGameOver = false
      modoTutorial = false;
      modoMenu = true
      resetaJogoMenu()
      tutorial = false
      historia = false
  
  }
}



