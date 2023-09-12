//crie um sistema que simula uma urna eletrônica onde há 4 candidatos à presidência. onde: 1,2,,3,4: representa o número dos candidatos 5:voto em branco 6:voto nulo. o sistema deve continuar rodando até o usuário pedir para sair. Ao final, deve ser exibido o número de votos que cada candidato recebeu, votos brancos e votos total

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let votosBrancos = 0;
let votosNulos = 0;

let continuarVotando = true;

while (continuarVotando) {
  let voto = prompt("Digite o número do candidato que deseja votar:\n1. Seu madruga\n2. Bruxa do 71 e satanás\n3. Seu barriga\n4. Dona florinda\n(ou digite 5 para voto em branco ou 6 para voto nulo.)\nDigite 'sair' para encerrar a votação.");

  switch (voto) {
    case "1":
      candidato1++;
      break;
    case "2":
      candidato2++;
      break;
    case "3":
      candidato3++;
      break;
    case "4":
      candidato4++;
      break;
    case "5":
      votosBrancos++;
      break;
    case "6":
      votosNulos++;
      break;
    case "sair":
      continuarVotando = false;
      break;
    default:
      alert("Opção inválida.");
  }
}

let totalVotos = candidato1 + candidato2 + candidato3 + candidato4 + votosBrancos + votosNulos;

alert("Resultado da votação dos:\n\n1. Seu madruga: " + candidato1 + " voto(s)\n2. Bruxa do 71 e satanás: " + candidato2 + " voto(s)\n3. Seu barriga: " + candidato3 + " voto(s)\n4. Dona florinda: " + candidato4 + " voto(s)\nVotos em branco: " + votosBrancos + "\nVotos nulos: " + votosNulos + "\n\nTotal de votos: " + totalVotos);

