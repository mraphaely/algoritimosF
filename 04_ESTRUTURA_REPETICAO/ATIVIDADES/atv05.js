alert('Digite as informções que serão pedidas!')
do{
let operario = Number(prompt("Digite o identificador seu operários(números menor ou igual 15): "))
   if(isNaN(operario) || operario > 15 ||operario === 0){
    alert('Número inválido!')}
}while(isNaN(operario) ||operario > 15 || operario === 0)

do{
let sexo = prompt("Digite seu sexo(F ou M): ")
 sexo = sexo.toUpperCase()
}while(sexo = sexo.toUpperCase())
do{
    const salario = (1.200)
    let pecas = Number(prompt("Digite a quantidade de peças produzidas por mês apartir de 20: "))
     if(isNaN(pecas) || pecas < 20){
           alert('Número inválido!')
     }else  if(pecas === 20){
        classe1 = salario
        document.write(`Operário ${operario} classe 1<br>O salário é: ${salario}<br>$O sexo biológico é: ${sexo}`)
    }else if(pecas > 20 || pecas <= 30){
            classe2 = salario % 3
            document.write(`Operário ${operario} classe 2<br>${salario}<br>$O sexo biológico é: ${sexo}`)
    }else if(pecas > 30){
        classe3 = salario % 5
        document.write(`Operário ${operario} classe 3<br>${salario}<br>$O sexo biológico é: ${sexo}`)
    }
    }while(isNaN(pecas) || pecas < 20)
   

   for(let i = 15; i < operario; i--){
    document.write()
   }
   
