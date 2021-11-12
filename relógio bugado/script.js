function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `A hora atual é ${hora}:${minutos}:${segundos}`
    if(hora >=5 && hora <= 7){
        document.getElementById('onibus').play() 
    }
    if(hora >= 9 && hora <= 11){
        document.getElementById('poco').play()
    }
    if(hora >=5 && hora <=12){
        imagem.src = 'manha.png'
        document.body.style.background = '#8CFAF5'
    }else if(hora >= 13 && hora <= 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#FAD376'
    }else{
        imagem.src = 'noite.png'
        document.body.style.backgroung = '#3F3F40'
    }
}
