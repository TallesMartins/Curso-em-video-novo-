            alert('para usar a calculadora, utilize somente número e o operador quando solicitado, para usar a calculadora novamente, atualize e página.')
            var n1 = Number(window.prompt('Digite um número: '))
                if(n1 != Number){
                    alert('[ERRO] Digite um número')
                    Number(window.prompt('Digite um número: '))
                }
            var op = window.prompt('Digite o operador: ')
                
            var n2 = Number(window.prompt('Digite outro número: '))
            var soma = n1 + n2
            var div = n1 / n2
            var mult = n1 * n2
            var sub = n1 - n2
            var pot = n1 ** n2
            var resto = n1 % n2
            if(op == '+' ){ 
                document.write(`Olá. O resultado da sua soma é: ${soma}.`)  
            };
            if(op =='-'){
                document.write(`Olá. O resultado da sua subtração é:${sub}.`)    
            };
            if(op =='*'){
                document.write(`Olá. O resultado da sua multiplicação é:${mult}.`)    
            };
            if(op =='/'){
                document.write(`Olá. O resultado da sua divisão é:${div}. E o resto da divisão é:${resto} `)    
            };
            if(op == '**'){
                document.write(`Olá. O resultado da sua potência é:${pot}.`)
            } 