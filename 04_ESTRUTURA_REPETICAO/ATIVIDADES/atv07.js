let chinchilas = 0, tri = 0

do{
    chinchilas = Number(prompt('Digite a quantidade de chinchilas maior ou igual a dois: '));
    if(isNaN(chinchilas) || chinchilas <= 1){
        alert("Erro, digite um valor válido!")
    }
    
}while(isNaN(chinchilas) || chinchilas <= 1)

do{
    tri = Number(prompt('Digite a quantidade anos: '));
    if(isNaN(tri) || tri === 0 ){
        alert("Erro, digite um valor válido!")
    }
    
}while(isNaN(tri) || tri === 0 )

for(let i = 2; i <= tri; i++){
    (chinchilas *= 3);

    document.write(`Ano ${i}: ${chinchilas} chinchilas. <br>`)
}

