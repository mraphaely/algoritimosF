let numbs = [], n


n = Number(prompt("Digite quantas vezes você vai armazenar dados: "))
  for(let i = 0;i < n; i++){
  numbs[i] = Number(prompt(`Digite o ${i}º valor :`))
}
  document.write(numbs+',')
  document.write("<br>------------------------------------------<br>")

  for(let i = n-1; i >= 0; i--){
    document.write(numbs[i]+',')
  }