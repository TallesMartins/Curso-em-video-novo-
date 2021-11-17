    var msg = document.getElementById('msg')
    var imagem = document.getElementById('foto')
    var data = new Date()
    var festa = document.querySelector("#festinha")
    var btfesta = document.querySelector('#btfestinha')
    btfesta.style.display='none';
function carregar(){
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    msg.innerHTML = `A hora atual é ${hora}:${minutos}:${segundos}\n`
    
    if(hora >=5 && hora <= 7){
        document.getElementById('onibus').play() 
        festa.innerHTML=''
    }
    if(hora >= 9 && hora <= 11){
        document.getElementById('poco').play()
        festa.innerHTML=''
    }
    if(hora >=5 && hora <=12){
        imagem.src = 'conteudo/manha.png'
        document.body.style.background = '#8CFAF5'
        msg.innerHTML += `Bom dia!`
        festa.innerHTML=''
    }else if(hora >= 13 && hora <= 18){
        imagem.src = 'conteudo/tarde.png'
        document.body.style.background = '#FAD376'
        msg.innerHTML += `Boa Tarde!` 
        festa.innerHTML=''
        
    }else{
        imagem.src = 'conteudo/noite.png'
        document.body.style.backgroung = '#3F3F40'
        msg.innerHTML += `Boa noite!`
        btfesta.style.display='block'
    }
    
}
function Mostrar(){
    if(festa.style.display=='block'){
        festa.style.display='none';
    }else{
        festa.style.display='block';
    }
}