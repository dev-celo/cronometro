// Declaração de variáveis
let hora = 00
let minuto = 00
let segundo = 00

let milesimo_segundo= 1000
let cron

// Função chamando a função timer a cada segundo
function iniciar() {
    clearInterval(cron)

    cron = setInterval(() => {timer()}, milesimo_segundo)

}

// Pausa cronometro
function parar() {
    clearInterval(cron)
}

// Limpa e seta cronometro
function  resetar() {
    clearInterval(cron)
    
    hora = 00
    minuto = 00
    segundo = 00

    document.getElementById('counter').innerHTML = '00:00:00'

}

//lógica de encremento de valores para ariáveis segundo, minuto, hora
function timer() {
    segundo++

    if(segundo == 60){
        segundo = 0
        minuto++

        if(minuto == 60){
            minuto = 0
            hora++
        }
    }
    
    //formatando a exibição do campo
    let format = (hora < 10 ? '0' + hora : hora)+':'+(minuto < 10 ? '0' + minuto : minuto)+':'+(segundo < 10 ? '0' + segundo : segundo)
    
    //setando format no elemento counter
    document.getElementById('counter').innerHTML = format
}

// Efeito máquina de escrever apresentando o website
function efeito_maquina_escrever(){
    let titulo = document.querySelector('#efeito_maquina_escrever')

    const textoArray = titulo.innerHTML.split('');

    titulo.innerHTML = ' '

    textoArray.forEach(function(letra, i){   
  
      setTimeout(function(){
          titulo.innerHTML += letra;
      }, 75 * i)
  
    });
}

efeito_maquina_escrever()