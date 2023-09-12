let idade, listaIdade = [], maiorIdade = 0, acumulador = 0, media = 0
do{
    idade = parseInt(prompt('Digite uma idade. ou digite 0 para sair'))
    listaIdade.push(idade)
}while(idade != 0)

listaIdade.pop()
let menorIdade = listaIdade[0]

for(let i = 0; i < listaIdade.length; i++){
if(listaIdade[i] > maiorIdade){
    maiorIdade = listaIdade[i]
}
  acumulador += listaIdade[i]
} media = acumulador / listaIdade.length

document.write(`Lista de idades: ${listaIdade}<br>`)
document.write(`Maior idade: ${maiorIdade}<br>`)
document.write(`Menor idade: ${maiorIdade}<br>`)
document.write(`Média das idade: ${maiorIdade}<br>`)

/*n = Number(prompt("Digite quantas vezes você vai armazenar dados: "))
let idades = [], n
for(let i = 0;i < n; i++){
    idades[i] = Number(parseInt(prompt(`Digite a idade do ${i}º discente:`)))
    idades.push(idades)
}
let idademaior = 0, idademenor = idades[0]
for(let i = 0; i < idades.length; i++){
    if(idades[i] > idademaior){
        idademaior = idades[i]
    }if(idades[i] < idademenor) {
idademenor = idades[i]
    }
}document.write("Você tem " + idades.length + " discentes e o mais velho tem " + idademaior + " anos, o discente mais novo tem" + idademenor + "anos.");*/