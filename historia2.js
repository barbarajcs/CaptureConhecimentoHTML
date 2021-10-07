var canvas;//o elemento canvas sobre o qual desenharemos
var background = new Image();
    background.src = "historia2background.png";
var tile1 = new Image();//Imagem que será carregada e desenhada na canvas
    tile1.src = "historia2fala1.png";
var tile2 = new Image();
    tile2.src = "historia2fala2.png";
var tile3 = new Image();
    tile3.src = "historia2fala3.png";
        
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
       if (jogo==0){
            ctx.drawImage(tile1, 0, 0 );
            jogo=1;
       }
       else if (jogo==1){
            ctx.drawImage(tile2, 0, 0 );
            jogo=2;
       }
        else if (jogo==2){
            ctx.drawImage(tile3, 0, 0 );
            jogo=3;
       }
        else if (jogo==3){
            var win = window.open(url,"_self")
       }
             
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
	