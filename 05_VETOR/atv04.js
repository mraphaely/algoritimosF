let vetor1 = [];
let vetor2 = [];
let vetorResultante = [];
let j = 0

for (let i = 0; i < 10; i++){
    vetor1[i] = parseInt(prompt(`Digite algum número para o índice ${i}º do vetor 1: `));
    vetorResultante[j] = vetor1[i]
   j = j + 1

    vetor2[i] = parseInt(prompt(`Digite algum número para o índice ${i}º do vetor 2: `));
    vetorResultante[j] = vetor2[i]
    j++
}

console.log("Vetor 1: " + vetor1);
console.log("Vetor 2: " + vetor2);
console.log("Vetor Resultante: " + vetorResultante)





















  /*
  for (let i = 0; i < 10; i++)
  vetor1.push(Math.floor(Math.random() * 100));
  vetor2.push(Math.floor(Math.random() * 100));
}

let vetorResultante = [];

for (let i = 0; i < 10; i++) {
  vetorResultante.push(vetor1[i]);
  vetorResultante.push(vetor2[i]);
}

console.log("Vetor 1: " + vetor1);
console.log("Vetor 2: " + vetor2);
console.log("Vetor Resultante: " + vetorResultante);*/
