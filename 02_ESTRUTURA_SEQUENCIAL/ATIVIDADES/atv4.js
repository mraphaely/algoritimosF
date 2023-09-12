/*A farmácia Zé ciço está com uma promoção –Na compra de duas unidades de um mesmo
medicamento, o cliente recebe como descontos centavos do valor total. Elaborar um
programa que leia descrição e preço de ummedicamento. Informe o valor do produto na
promoção.*/ 

let valor, medicaciones, total

medicaciones = prompt("Digite o nome do seu medicamento: ");
valor = Number(prompt("Digite o valor do medicamento: "));

total = Math.floor(valor * 2) 

alert (`Seu deconto no medicamento ${medicaciones}, foi de ${total}`)