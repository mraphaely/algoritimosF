let titulo
let minutos, horas
let duracao

titulo = prompt("Digite o título do filme desejado: ");
duracao = parseInt(prompt("Digite a duração do filme em minutos: "));

horas = math.floor(duracao / 60);
minutos = duracao % 60;

alert (`Título do filme:${titulo}\nDuração: 4${horas}h ${minutos}min`);