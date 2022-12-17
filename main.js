function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou o seletor é inválido')
    }
}
//gerar as listas de teclas para por no while
const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    //pegar o nome do instrumento tecla_pom por exemplo
    const instrumento = tecla.classList[1];
    //juntar String para completar o nome do som do instrumento
    const idAudio = `#som_${instrumento}`;


//clicar com o mouse para fazer tocar o som pegando a posição do indice do contador
tecla.onclick = function(){
    tocaSom(idAudio);
}
//tecla pressionada fazer tocar
tecla.onkeydown = function (evento){
    if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
}
//desativar o pressionamento não ocorrido pelo teclado
tecla.onkeyup = function(){
    tecla.classList.remove('ativa')
}

}
