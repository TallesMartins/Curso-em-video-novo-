function contar(){
    let num = document.getElementById('num')
    let res = document.getElementById('tabu')
    if(num.value.length == 0){
        alert('Insira um número')
    }else{
        let n1 = Number(num.value)
        let i = 1
        res.innerHTML = ''
        while(i<=10){
            let item = document.createElement('option')
            item.text = `${n1} X ${i} = ${n1*i}\n`
            res.appendChild(item)
            i++
        }
    }
}