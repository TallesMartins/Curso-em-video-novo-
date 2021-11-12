//variavel com os numeros para a array
var numar = document.getElementById('numar')
var lista = document.getElementById('list')
var valor = document.querySelector('div#valor')
//array criada  
var num = []
/* botões que verificam e adicionam na lista de números

*/ 
function addLista(){
    if(numar.value.length == 0 || numar.value == 0 || numar.value == '0'){
        //mensagem de erro quando não tem nada no input, ou quando é escrito '0'
        alert('[ERRO] Verifique os valores e tente novamente.')
    }else{
        if(numar.value > 100 || numar.value < 0){
            alert('[ERRO] Valor incorreto, tente um valor menor que 100 e maior que 0.')
        }else{
            if(num.includes(Number(numar.value))){
                alert('[ERRO]Valor já está adicionado na lista.')
            }else{
            //retorna o menor valor
            Array.min = function(array){
                return Math.min.apply(Math,array)
            }
            //retorna o maior valor
            Array.max = function(array){
                return Math.max.apply(Math, array)
            }
            //empurrando o valor inserido em "numar"
            num.push(Number(numar.value))
            let ultimo = num[num.length-1]
            let item = document.createElement('option')
            item.text = `Número adicionado: ${ultimo}`
            lista.appendChild(item)
            valor.innerHTML=''
            //verifica se o número é igual a 69
            if(numar.value == 69){
                //adicionando um meme, é claro
                valor.innerHTML = `( ͡° ͜ʖ ͡°)`
                //senão ele segue normalmente
                }
                
            }
        }  
    }
    numar.value=''
    numar.focus() 
}
function finalizar(){
    if(lista.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar')
    }else{
        let soma = 0
        for(let i = 0;i<num.length;i++){
        soma+=num[i]
        }
        valor.innerHTML = `Número de valores na lista: ${num.length}<br>
        Menor valor adicionado: ${Array.min(num)} <br> 
        Maior valor adicionado: ${Array.max(num)}<br>
        Soma de todos os valores: ${soma}<br>
        Média de valores: ${soma/num.length} u/`
    }
}