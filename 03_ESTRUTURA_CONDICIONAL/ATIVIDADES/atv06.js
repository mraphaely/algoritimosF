let velocidade, haunter, multita, multona

haunter = parseInt(prompt('Digite a velocidade permitida (km): '))
velocidade = parseInt(prompt('Digite a velocidade alcançada (km): '))
multita = (velocidade  * 20) / 100
multona = multita + velocidade

if(isNaN(haunter === 0 && velocidade === 0)){
    alert('ERRO: Número inválido, digite novamente!')
    location.reload()

}else if(velocidade <= haunter){
    alert('Sem multa!')
    location.reload()

}else if(velocidade > haunter && velocidade <= multona){
    alert('Multa leve!')
    location.reload()

}else if( velocidade > multona){
    alert('Multa grave!')
    location.reload()
}
    
