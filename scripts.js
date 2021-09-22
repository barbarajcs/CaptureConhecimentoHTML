var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 30;//a taxa de variação (velocidade) horizontal do objeto
var x = 210;//posição horizontal do objeto (com valor inicial)
var y = 240;//posição vertical do objeto (com valor inicial)
var HEIGHT = 329;//altura da área retangular
var WIDTH = 537;//largura da área retangular
var IMG_WIDTH = 52;//largura da imagem
var tile1 = new Image();//Imagem que será carregada e desenhada na canvas
var posicao = 1;//Indicador da posição atual do personagem
var NUM_POSICOES = 7;//Quantidade de imagens que compõem o movimento
var direcao= "D";
var background = new Image();
    background.src = "background.png";


function Desenhar() {   
    tile1.src = direcao+posicao+".png";
    ctx.drawImage(tile1, x, y);
}
function LimparTela() {
     
    ctx.drawImage(background,0,0); 
    //ctx.fillStyle = "rgb(233,233,233)";   
    ctx.beginPath();// esvazia os caminhos anteriores preenchidos
    //ctx.rect(0, 0, WIDTH, HEIGHT);
    //ctx.closePath();
    //ctx.fill();   
}

function Atualizar() {
    LimparTela();    
    Desenhar();
}
function Iniciar() {
    canvas = document.getElementById("canvas");
    //startup();
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 60);
    
    
}



function keyDownEvent(evt){
    //alert('keydown event\n\n' + 'key: ' + evt.key);
    switch (evt.keyCode) {
        case 39:  /*seta para direita*/
            direcao = "D";
            if (x + dx + IMG_WIDTH <= WIDTH){
                x += dx;
                posicao++;
                //alert('limite x+'+ x);
            } else {
                //alert('limite x+'+ WIDTH);
            }
            break;  
        case 37:  /*seta para esquerda*/
            direcao = "E";
            if (x - dx >= 0){
                x -= dx;
                posicao--;
            } else {
                //alert('limite x-');
                    }
                    break;              
    }

    if(posicao > NUM_POSICOES) 
    {
        posicao = 1;
    }
    
    if(posicao < 1) 
    {
        posicao = 7;
    }
}

function touchstartEvent(event){
    //alert('touchstart'+ event.changedTouches[0].clientX + "-"+ WIDTH);
    var posclique = event.changedTouches[0].clientX;
        if(posclique < WIDTH/2){
            //alert('e');
            direcao= "E";
            if (x - dx >= 0){
                x -= dx;
                posicao--;
            } else {
                //alert('limite x-');
                    }

        }
        if(posclique > WIDTH/2){
            //alert('d');
            direcao= "D";
            if (x + dx + IMG_WIDTH <= WIDTH){
                x += dx;
                posicao++;
                //alert('limite x+'+ x);
            } else {
                //alert('limite x+'+ WIDTH);
            }
        }
if(posicao > NUM_POSICOES) 
    {
        posicao = 1;
    }
    
    if(posicao < 1) 
    {
        posicao = 7;
    }
        
    return ;
}
function touchendEvent(event){
    alert('touchend'+ x);
    
    
    return ;
}

 

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyDownEvent);
    document.addEventListener("touchstart", touchstartEvent);
    Iniciar();
};
    