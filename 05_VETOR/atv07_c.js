//1º montar o gabarito
let gabarito = [], resposta = []
let alunoSala, num, percAprovado
let pontos = 0, totalAprovados = 0

for(let i = 0; i < 10; i++){
    gabarito[i] = prompt(`Digite a resposta da questão ${i+1}º :`)
}
alunoSala = Number(prompt('Digite a quantidade de alunos em sala: '))
    for(let i = 0; i < alunoSala; i++){
    num = Number(prompt('Digite o número de identificação do aluno: '))
    pontos = 0
    for(let j = 0; j < 10; j++){
        resposta[j] = prompt(`Digite a resposta da ${j+1}º questão do aluno: `)
        if(resposta[j] === gabarito[j]){
          pontos++
        }
    }
    document.write(`O aluno ${num} tirou anota ${pontos.toFixed(2)}<br>`)
    if(pontos >= 6){
       totalAprovados++
    }
}
percAprovado = totalAprovados * 100 / alunoSala
document.write(`O percentual de alunos aprovados é ${percAprovado}%`)
