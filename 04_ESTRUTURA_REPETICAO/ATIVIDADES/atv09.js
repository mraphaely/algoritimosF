let soma = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º idade:`));
    soma += numero;
}

alert(`A soma dos 10 números é ${soma}`);

let media = soma / 10;

alert(`A média dos 10 números é ${media.toFixed(2)}`);

let ages = [];
for (let i = 0; i < 10; i++) {
    let age = parseInt(prompt(`Digite a ${i + 1}º idade: `));
    ages.push(age);
}

let adults = ages.filter(age => age >= 18);
document.write(`Os maiores de idade são: ${adults}<br>`);
