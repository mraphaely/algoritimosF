/*Elaborar um programa para uma lan house de um aeroporto – O programa deve ler o
valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente 
em minutos. Informe o valor a ser pago pelo cliente,  sabendo que as frações extras
de 15 minutos devem ser cobradas de forma integral. */
let tempinho, valorCobrado, adicionais 

tempinho = Number(prompt("Digite o tempo que usou o computador: "))
const valormin = 15
valorCobrado = Math.ceil(tempinho / 15) * valormin
 
alert (`o valor a ser pago é ${valorCobrado.toFixed(2)}`)