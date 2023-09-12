alert('Para sair do laço, digite "0" ou algum valor inválido!')
do{
    number = Number(prompt('Digite algum número: '));
    if(isNaN(number) || number === 0){
        alert('Abracadabra!')
   break;

}  else if(number % 2 === 0){
    du = number * 2
    document.write(`O dobro de ${number} é ${du}.<br>`)
}else{
    tri = number * 3
    document.write(`O triplo de ${number} é ${tri}.<br>`)}

}while(true)

