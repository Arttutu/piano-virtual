function Toca (seletorAudio){

    const elemento = document.querySelector(seletorAudio);
    
    elemento.play();
    //trata mento de erro
   

}


const listadeTeclas = document.querySelectorAll('.botao');
const listadeTeclasPretas = document.querySelectorAll('.botao_preto');



for(let contador = 0; contador < listadeTeclas.length; contador++){

    const tecla = listadeTeclas [contador];
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`; //template string
    
    console.log(idAudio);

    //console.log(idAudio);
     
    //function onclick quando clikca no elemento
    tecla.onclick = function(){
        Toca(idAudio);
    }
    //onkeydown quando pressiona o botao
    
    tecla.onkeydown = function(evento){

        if(evento.code  ){
            tecla.classList.add('ativa');
        }
    }
    //onkeyup quando solta o botao
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }


}

