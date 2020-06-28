//Adquirindo altura e largura da página

var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

//Gerando posições randomicas para o objeto mosquito

function posicaoRandomica() {

    //remover mosquito anterior (caso exsita)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //Criando o elemento HTML

    var mosquito = document.createElement('img');

    mosquito.src = 'img/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito);
    
}

//Gerando tamanhos aleatórios para o objeto mosquito

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            
            return 'mosquito1';
    
        case 1:
            return 'mosquito2';

        case 2:

            return 'mosquito3';
    }
}

//Gerando os lados aleatórios da mosquito

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            
            return 'ladoA';
    
        case 1:
            return 'ladoB';
    }
}

