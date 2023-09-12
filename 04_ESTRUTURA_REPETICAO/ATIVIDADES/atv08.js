let numb, somadivisores = 0

do{
    numb = parseInt(prompt('Digite algum número: '))
    if(isNaN(numb) || numb <= 0){
        alert('Digite algum número maior que (0).')
    }
}while(isNaN(numb) || numb <= 0)

for(let i = 0; i <= numb; i++){
     
     if(numb % i === 0){
        somadivisores += i;
        i++
    } }
    
    if(divisao === numb){
        alert(`${numb} é um número perfeito!`)
    }else{
        alert(`${numb} não é um número perfeito!`)
    }
