let raiz, number

number=Number(prompt('Digite um número para calcularmos a raiz exata: '))

raiz = Math.sqrt(number)

alert (raiz)

    if(isNan(raiz == Math.floor(raiz))){
  alert(`A raiz de ${number} é ${number}!`)
  location.reload()
    }else{
  alert(`Não existe raiz!`)
  location.reload()
    }