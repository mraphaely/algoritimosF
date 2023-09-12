let nota1, nota2, nota3, nota4, somaNotas

nota1 = Number(prompt("Digite a primeira nota(0 a 10): "));
nota2 = Number(prompt("Digite a segunda nota(0 a 10): "));
nota3 = Number(prompt("Digite a terceira nota(0 a 10): "));
nota4 = Number(prompt("Digite a quarta nota(0 a 10): "));

somaNotas = (nota1 + nota2 + nota3 + nota4) / 4

if(somaNotas >= 7){
  alert("Aprovado!");
}
else if(somaNotas < 7){
  alert("Reprovado!");
}