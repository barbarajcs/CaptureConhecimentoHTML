var canvas;//o elemento canvas sobre o qual desenharemos
var score;
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 30;//a taxa de variação (velocidade) horizontal do objeto
var x = 0//210;//posição horizontal da boneca (com valor inicial)
var y = 240;//posição vertical da boneca (com valor inicial)

var xl = 0;//posição horizontal do livro (com valor inicial)
var yl = 20;//posição vertical do livro (com valor inicial)
var ylDif = 20; // posição de dificuldade do livro

var Score = 0;
var scoreText;
var livrosPerdidos = 3;// quantidade de chances que o usuário tem
var xLivro = getRandomInt(1, 500);// posição randomica de x onde o livro vai cair
var url = "GameOver.html";

var HEIGHT = 329;//altura da área retangular
var WIDTH = 537;//largura da área retangular
var IMG_WIDTH = 52;//largura da imagem
var tile1 = new Image();//Imagem que será carregada e desenhada na canvas
var tile2 = new Image();//Imagem que será carregada e desenhada na canvas
var posicao = 1;//Indicador da posição atual do personagem
var NUM_POSICOES = 7;//Quantidade de imagens que compõem o movimento
var direcao= "D";
var background = new Image();
    background.src = "background1.png";

    
function Desenhar() {   
    tile1.src = direcao+posicao+".png";
    ctx.drawImage(tile1, x, y);
    
}
function DesenharLivro() {   
    tile2.src = "livro.png";
    ctx.drawImage(tile2, xLivro, yl);
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
    CaiLivro();
    LimparTela();    
    DesenharLivro();
    Desenhar();
    DrawScore();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    //score = document.getElementById("score");
    //startup();
    ctx = canvas.getContext("2d");
    setInterval(Atualizar, 60);
  
}
function getRandomInt(min, max) { // pega um random para a localizacao do livro (passa o tam do canvas utilizado)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function CaiLivro (){
    
    
    if (livrosPerdidos==0){
         var win = window.open(url,"_self")
    }
    
    yl=yl+2;
    if (yl >=295) { // chegou no chão e não foi pego
       livrosPerdidos --;
       xLivro = getRandomInt(1, 500);
       yl=20;
    }
    if ((xLivro>=x) && xLivro<=(x+IMG_WIDTH )
        && yl>=210 ) {
        ylDif=+2;
        yl=ylDif;
        xLivro = getRandomInt(1, 500);
        Score++;
        
    }
    
    
}
function DrawScore() {
    ctx.font = "16px Arial ";
    ctx.fillStyle = "#d62828";
    ctx.fillText("Score: "+Score, 590, 40);
    ctx.fillText("Possibilidades: "+livrosPerdidos, 590, 70);
    
}

function keyDownEvent(evt){
    //alert(' posLivroy '+yl+ ' posLivro x '+xLivro+ ' posBoneca'+x);
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
    