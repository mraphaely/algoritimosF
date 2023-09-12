let A, B, C

A = Number(prompt("Digite o primeiro lado: "))
B = Number(prompt("Digite o segundo lado: "))
C = Number(prompt("Digite o terceiro lado: "))

if(isNaN(A === 0 && B === 0 && C === 0)){
    alert("EROO:inválido, digite novaemente!")
}else{location.reload()}


if(A != B && B != C){
    alert("Triângulo Escaleno")
}else if(A === B && B === C){
    alert("Triângulo Equilátero")

}else if(A === B && B != C || B === C && C != A ||C === A && A != B ){
    alert("Triângulo Isósceles")

}else{location.reload()} 


