
let modelo, valor

modelo = prompt("Digite o veículo desejado: ");
valor = parseInt(prompt("Digite o valor do veículo: "));

valor = math.floor(valor / 2);
saldo = valor - entrada;
parcela = saldo / 12;


alert (`O preço da entrada é: ${saldo} \n O saldo em 12 parcelas é: ${parcela}!`);