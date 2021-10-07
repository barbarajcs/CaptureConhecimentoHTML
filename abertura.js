var canvas;//o elemento canvas sobre o qual desenharemos
var background = new Image();
    background.src = "abertura.png";
var x = 0//210;//posição horizontal da boneca (com valor inicial)
var y = 240;//posição vertical da boneca (com valor inicial)
var url = "historia.html";
//var btn = document.querySelector("#btn");





function Iniciar() {
    
    canvas = document.getElementById("canvas");
    //alert('limite x+');
    //score = document.getElementById("score");
    //startup();
    ctx = canvas.getContext("2d");
    setInterval(Atualizar, 60);
}

function Atualizar() {
    //CaiLivro();
    LimparTela();    
    //DesenharLivro();
    //Desenhar();
    //DrawScore();
}
function LimparTela() {
     
    ctx.drawImage(background,0,0); 
    
    //ctx.fillStyle = "rgb(233,233,233)";   
    ctx.beginPath();// esvazia os caminhos anteriores preenchidos
    //ctx.rect(0, 0, WIDTH, HEIGHT);
    //ctx.closePath();
    //ctx.fill();   
}
function keyDownEvent(evt){
     var win = window.open(url,"_self")
   win.focus();
}

function touchstartEvent(event){
    
   var win = window.open(url,"_self")
   win.focus();
	 
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
    document.addEventListener('click', function() {var win = window.open(url,"_self");})
        
    Iniciar();
};
	