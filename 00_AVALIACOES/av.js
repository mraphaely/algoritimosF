let somaNotasA, somaNotasB, somaNotasC, somaNotasD
let notaA, notaB, notaC, notaD


notaA = Number(prompt("Arquitetura de Hardware e Softwere - Digite a nota das atividades em sala (0 a 10): "))
notaB = Number(prompt("Arquitetura de Hardware e Softwere - Digite a nota das atividades para casa (0 a 10): "))
notaC = Number(prompt("Arquitetura de Hardware e Softwere - Digite a nota da situação de aprendizagem (0 a 10): "))
notaD = Number(prompt("Arquitetura de Hardware e Softwere - Digite a nota da avaliação objetiva (0 a 10): "))

somaNotasA = Math.floor(notaA + notaB + notaC + notaD) / 4

notaA = Number(prompt("Metodologias de Desenvolvimento de Projetos - Digite a nota das atividades em sala (0 a 10): "))
notaB = Number(prompt("Metodologias de Desenvolvimento de Projetos - Digite a nota das atividades para casa (0 a 10): "))
notaC = Number(prompt("Metodologias de Desenvolvimento de Projetos - Digite a nota da situação de aprendizagem (0 a 10): "))
notaD = Number(prompt("Metodologias de Desenvolvimento de Projetos - Digite a nota da avaliação objetiva (0 a 10): "))

somaNotasB = Math.floor(notaA + notaB + notaC + notaD) / 4

notaA = Number(prompt("Lógica Computacional - Digite a nota das atividades em sala (0 a 10): "))
notaB = Number(prompt("Lógica Computacional - Digite a nota das atividades para casa (0 a 10): "))
notaC = Number(prompt("Lógica Computacional - Digite a nota da situação de aprendizagem (0 a 10): "))
notaD = Number(prompt("Lógica Computacional - Digite a nota da avaliação objetiva (0 a 10): "))

somaNotasC = Math.floor(notaA + notaB + notaC + notaD) / 4

notaA = Number(prompt("Fundamentos de banco de dados - Digite a nota das atividades em sala (0 a 10): "))
notaB = Number(prompt("Fundamentos de banco de dados - Digite a nota das atividades para casa (0 a 10): "))
notaC = Number(prompt("Fundamentos de banco de dados - Digite a nota da situação de aprendizagem (0 a 10): "))
notaD = Number(prompt("Fundamentos de banco de dados - Digite a nota da avaliação objetiva (0 a 10): "))

somaNotasD = Math.floor(notaA + notaB + notaC + notaD) / 4

alert(`Média referente as unidades lesionadas!\n
Arquitetura de Hardware e Software: ${somaNotasA.toFixed(2)}\nMetodologias de Desenvolvimento de Projetos: ${somaNotasB.toFixed(2)}\nLógica Computacional: ${somaNotasC.toFixed(2)}\nFundamentos de banco de dados: ${somaNotasD.toFixed(2)} `)
