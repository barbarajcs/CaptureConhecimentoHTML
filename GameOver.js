var canvas;//o elemento canvas sobre o qual desenharemos
var background = new Image();
    background.src = "GameOver.png";
        
var x = 0//210;//posição horizontal da boneca (com valor inicial)
var y = 240;//posição vertical da boneca (com valor inicial)
var url = "index1.html";
//var btn = document.querySelector("#btn");
var jogo= 0;
var ctx;


function Iniciar() {
    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    Atualizar();
}

function Atualizar() {
    ctx.drawImage(background,0,0); 
    ctx.beginPath();// esvazia os caminhos anteriores preenchidos
    
}

function keyDownEvent(evt){
  
}

function touchstartEvent(event){
	 
}

function IncluiCena(event) {
      
            var win = window.open(url,"_self")
       }
 
 
function touchendEvent(event){
    //alert('touchend'+ x);
    
    
    return ;
}

window.onload = function(){
    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyDownEvent);
    document.addEventListener("touchstart", touchstartEvent);
    document.addEventListener('click',IncluiCena)
        

        
    Iniciar();
};
	