/* Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, 
cada etiqueta de produto deve exibir uma mensagem anunciando 50% dedesconto(para um item)
na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de
um produto. Após, apresente as mensagens indicando a promoção. */

let descr, valor, valorFinal, abracadabra

descr = prompt("Descrição do produto: ")
valor = Number(prompt("Digite o valor do produto: "))
valorFinal = valor * 3
abracadabra = valorFinal - valor / 2

alert (`PROMOÇÃO!!! a cada (un) de ${descr} na compra de 3 fica por apenas ${valorFinal.toFixed}`)