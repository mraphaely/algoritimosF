//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

let numb, divisao = 0
 
do{
    numb = Number(prompt('Digite algum número: '))
    if(isNaN(numb) || numb <= 0){
        alert('Digite algum número inteiro maior que 0 ')
    }
}while(isNaN(numb) || numb <= 0)


for(let i = 1; i <= numb; i++){
    let resultado = numb % i
    if(resultado === 0){
        alert('É possível dividir' + resultado)
        divisao++
    }

}

if (divisao === 2){
    alert(`${numb} é número primo!`)
}else{
    alert(`${numb} não é número primo!`)
}
