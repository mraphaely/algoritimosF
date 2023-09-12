let number//ímpar ou par diferença

number = Number(prompt('Digite um número: '))

number = parseInt(number)

if(isNaN(number)){
    alert('ERRO: número inválido, digite novamente!')
   location.reload()
}else if(number % 2 == 0){
    alert(`o número ${number} é par!`)
   location.reload()
}else{
    alert(`o número ${number} é ímpar!`)
   location.reload()
}