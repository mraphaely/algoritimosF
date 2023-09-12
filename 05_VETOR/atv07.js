// document.write(`Porcentagem de aprovação`)
// Definindo o gabarito da prova
let gabarito = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];

// Definindo as respostas dos alunos
let alunos = [
  { nome: 'João', respostas: ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'] },
  { nome: 'Maria', respostas: ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'a'] },
  { nome: 'Pedro', respostas: ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'b'] },
  { nome: 'Carlos', respostas: ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd'] },
  { nome: "Ana", respostas: ['a','b','c','d','e','a','b','c','d','e'] }
];

// Função para calcular a nota de cada aluno
function calcularNota(aluno) {
  let nota = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (aluno.respostas[i] === gabarito[i]) {
      nota++;
    }
  }
  return nota;
}

// Calculando a nota de cada aluno e mostrando o número e nota de cada um
for (let i = 0; i < alunos.length; i++) {
  let nota = calcularNota(alunos[i]);
  console.log(`Aluno ${i + 1}: ${alunos[i].nome} - Nota: ${nota}`);
}

// Calculando a porcentagem de aprovação
let aprovados = alunos.filter(aluno => calcularNota(aluno) >= 6);
let porcentagemAprovados = (aprovados.length / alunos.length) * 100;

console.log(`Porcentagem de aprovação: ${porcentagemAprovados}%`);