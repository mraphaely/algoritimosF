
let modelo, valor, entrada, parcela

modelo = prompt("Digite o veículo desejado: ");
valor = parseFloat(prompt("Digite o valor do veículo: "));

entrada = valor * 0.50;
parcela = (valor * 0.50) / 12;



alert (`Modelo do veículo: ${modelo} <br> Preço do carro: ${valor} 
<br> Entrada é de: ${entrada} e as parcelas são 12x se r$${parcela}!`);