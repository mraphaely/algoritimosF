let vetornumb = []; 

for (let i = 0; i < 10; i++){
    vetornumb[i] = parseInt(prompt(`Digite algum número para o índice ${i}º do vetor: `));
    if(isNaN(vetornumb[i])){
          alert('Digite um valor válido.')
        
for(let i = vetornumb.length - 1; i >= 0; i--){
   console.log(vetornumb[i]+',')}}}



   //vetor = [1, 3, 9, 7]
   //console.log(vetor.sort((a,b)=>b-a)) //= ordenação ordem decrescente
   //console.log(vetor.sort((a,b)=>a-b)) //= ordenação ordem crescente