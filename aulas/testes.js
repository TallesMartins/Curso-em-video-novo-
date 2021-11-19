var res = document.getElementById('res')

function verificar(){

var nome =   document.getElementById('nome').value
var altura = document.getElementById('altura').value
var peso   = document.getElementById('peso').value

altura = parseFloat(altura)
peso = parseFloat(peso)
altura = altura/100
var imc = (peso /(altura*altura))
imc = parseFloat(imc.toFixed(2))
var classi=''

if(nome == '' && nome.length <= 3 || altura =='' || peso ==''){
    alert(' Escreva Seu Nome e As Notas Corretamente ')
    document.getElementById ('nome' ).value=''
    document.getElementById ('altura').value=''
    document.getElementById ('peso').value=''


    }else{
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (imc < 16){

    classi = ' Baixo Peso Muito Grave '
    res.innerHTML=` ${nome}: Seu Peso Atual é ${peso} com um IMC de  ${classi}  `
    res.style.textAlign='center'
    

    }else if(imc <= 16.99){
    classi = ' Baixo Peso Grave '
    res.innerHTML=''
    res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi} `
    res.style.textAlign='center'
    

    }else if(imc <= 18.49){
    classi = ' Baixo Peso '
    res.innerHTML=''
    res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
    res.style.textAlign='center'
    

    }else if(imc <= 24.99){
        classi = ' Peso Normal '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
        res.style.textAlign='center'
        

    }else if(imc <= 29.99){
        classi= ' Sobrepeso '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi} `
        res.style.textAlign='center'
        

    }else if(imc <= 34.99){
        classi = ' Obesidade Em Grau 1 '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
        res.style.textAlign='center'
       

    }else if(imc <= 39.99){
        classi = ' Obesidade Em Grau 2 '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
        res.style.textAlign='center'

    }else{
        classi = ' Obesidade Em Grau 3 '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
        res.style.textAlign='center'
    }   
    
    res.appendChild(img)
}

}
function limpar(){
    nome.value=''
    altura.value=''
    peso.value=''
    res.innerHTML+=''
}