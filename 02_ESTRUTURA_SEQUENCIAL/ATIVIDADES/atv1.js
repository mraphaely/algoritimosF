//1 declarar as variáveis
let titulo
let minutos, horas
let duracao

//2 selecionar/receber os valores das variáveis
titulo = prompt("Digite o título do filme desejado: ");
duracao = parseInt(prompt("Digite a duração do filme em minutos: "));

//3 converter horas em minutos
horas = Math.floor(duracao / 60);
minutos = duracao % 60;

alert (`Título do filme: ${titulo}\n Duração: ${horas}h ${minutos}min`);