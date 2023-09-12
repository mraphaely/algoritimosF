let vetornumb = []; 
let ResultanteN = [];
let ResultanteP = [];
let count_p =  0, count_n = 0



for (let i = 0; i < 8; i++){
    vetornumb[i] = parseInt(prompt(`Digite algum número para o índice ${i}º do vetor: `));
    if(isNaN(vetornumb[i])){
          alert('Digite um valor válido.')
    }else if(vetornumb[i] >= 0){
        ResultanteP[count_p] = vetornumb[i]
        count_p++
    }else{
        ResultanteN[count_n] = vetornumb[i]
        count_n++
    }
}console.log(vetornumb, ResultanteN, ResultanteP)


    