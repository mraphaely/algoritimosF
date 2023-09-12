/*Elaborar um programa para um restauranteque leia o preço por kg e o consumo 
(em gramas) de um cliente. Exiba o valor a ser pago em R$.
let valorkg, consumog, produto*/

//1 declarar variáveis
let valor1kilo, consumoCliente, valorPratito 

//2 selecionar valores
valor1kilo = number(prompt("Digite o valor do Kg R$: "));
consumoCliente = number(prompt("Digite o peso em (g): "));

//3 fazer continhas
valorPratito = (valor1kilo / 1000) * consumoCliente;

//4 result para user
alert(`O valor do prato R$${valorPratito.toFixed(2)}`)