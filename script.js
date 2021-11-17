var res = document.getElementById('res')
var nome =   document.getElementById('nome').value
var altura = document.getElementById('altura')
var peso   = document.getElementById('peso')
function verificar(){
altura = parseFloat(altura.value)
peso = parseFloat(peso.value)
altura = altura/100
var imc = (peso /(altura*altura))
imc = parseFloat(imc.toFixed(2))
var classi=''
res.value=''
if(nome.value == '' && nome.length == '' || altura.value =='' || peso ==''){
    alert(' Escreva Seu Nome e As Notas Corretamente ')
    }else{
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (imc < 16){

    classi = ' Baixo Peso Muito Grave '
    res.innerHTML=` ${nome}: Seu Peso Atual é ${peso} com um IMC de  ${classi}  `
    

    }else if(imc <= 16.99){
    classi = ' Baixo Peso Grave '
    res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi} `
    

    }else if(imc <= 18.49){
    classi = ' Baixo Peso '
    res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
    

    }else if(imc <= 24.99){
        classi = ' Peso Normal '
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
        

    }else if(imc <= 29.99){
        classi= ' Sobrepeso '
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi} `
        

    }else if(imc <= 34.99){
        classi = ' Obesidade Em Grau 1 '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
       

    }else if(imc <= 39.99){
        classi = ' Obesidade Em Grau 2 '
        res.innerHTML=''

    }else{
        classi = ' Obesidade Em Grau 3 '
        res.innerHTML=''
        res.innerHTML+=` ${nome}: Seu Peso Atual é ${peso} kilos com um IMC de ${classi}  `
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