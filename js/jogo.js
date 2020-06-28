//Adquirindo altura e largura da página

var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    //Gerando posições randomicas para o objeto mosca

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //Criando o elemento HTML

    var mosca = document.createElement('img');

    mosca.src = 'img/mosca.png';
    mosca.className = 'mosca1';
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';

    document.body.appendChild(mosca);
    
}

