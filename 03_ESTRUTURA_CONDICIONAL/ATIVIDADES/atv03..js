let masculino, feminino, sexo

sexo = (prompt("Digite seu sexo(feminino - masculinho): "))
altura = Number(prompt("Digite sua altura: "))

feminino = 21 * altura**2
masculino = 22 * altura**2

if(feminino){
    alert(`Seu peso ideal é ${altura}.`)
}
else if(masculino){
    alert(`Seu peso ideal é ${altura}.`)
}
else {
    ("Talvez você tenha colocado alguma informação errada. Reinicie o site e tente novamente.")
}