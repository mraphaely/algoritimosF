let number;

do{
    number = Number(prompt('Digite algum número: '));
    if(isNaN(number) || number === 0){
        alert('Número inválido!')
}

}while(isNaN(number) || number === 0)

for(let i = 0; i <= number; i++){
    if(i % 2 === 0){
       document.white(`Número ${i}`)
    }
}




