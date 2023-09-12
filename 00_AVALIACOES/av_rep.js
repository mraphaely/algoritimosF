alert('Digite as informções que serão pedidas!')
let contador = 1
const salario = 1.200
let i

do{
let operario = Number(prompt("Digite o número de operários(valor máximo: 15): "))
   if(isNaN(operario) || operario > 15 ||operario === 0){
    alert('Número inválido!')}
   
    let sexo = prompt("Digite o sexo biológico de seu funcionário(F ou M): ")
        sexo = sexo.toUpperCase()
    
    
}while(contador === 15){
    document.write(`Valor: ${contador} <br>`)
    contador = math.floor(math.random() * 16)
}
document.write(`Valor contador: ${contador} `)


do{
    let pecas = Number(prompt("Digite a quantidade de peças produzidas por mês apartir de 20: "))
     if(isNaN(pecas) || pecas < 20){
           alert('Número inválido!')
     }else  if(pecas === 20){
        classe1 = salario
       
    }else if(pecas > 20 || pecas <= 30){
            classe2 = salario % 3
           
    }else if(pecas > 30){
        classe3 = salario % 5
    }
    }while(contador === 15){
    document.write(`Valor: ${contador} <br>`)
    contador = math.floor(math.random() * 16)
}
document.write(`Valor contador: ${contador} `)
   
