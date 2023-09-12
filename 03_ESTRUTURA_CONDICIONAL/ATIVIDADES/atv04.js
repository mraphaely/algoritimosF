let nota10, nota50, nota100, valor

valor = Number(prompt('Digite um valor para saque: '))


   if(valor % 10 != 0){
alert(`ERRO. Valor inválido!`)

}else{
       nota100 = Math.floor(valor / 100) 
     resto = valor % 100
       nota50 = Math.floor(resto / 50) 
     var resto = valor % 50
       nota10 = Math.floor(resto / 10)

alert(`Para sacar ${valor} reais, você precisa de:
\n${nota10} nota(s) de 10 reais\n${nota50} nota(s) de 50 reais\n${nota100} nota(s) de 100 reais`)
   }
