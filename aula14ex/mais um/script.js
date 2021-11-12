
function contar(){
    var res = document.getElementById('res')
    var ini = document.getElementById('ini')
    var fim = document.getElementById('end')
    var pas = document.getElementById('pas')
    if(ini.value.length == 0|| fim.value.length == 0){
        alert('[ERRO]Dados insuficientes, verifique novamente.')
    
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p<=0){
            alert('passo inválido! considerando Passo 1')
            p = 1
        }
        if(i<f){
            for(i;i<=f;i+=p){
                res.innerHTML += `${i}\u{1F449}`
            }
        }else{
            for(i;i>=f;i-=p){
                res.innerHTML += `${i}\u{1F449}`
            }
        }
        }
        res.innerHTML += `\u{1F3C1}`
}