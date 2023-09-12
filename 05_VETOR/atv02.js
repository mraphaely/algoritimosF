let lista = [];

while (true) {
  let item = prompt("Digite o nome do produto que deseja adicionar à sua lista ou 'fim' para finalizar:");

  if (item === "fim") {
    break;
  }
  lista.push(item);
}
document.write("Você tem "+ lista.length +" produtos. Sua lista é:<br>" + lista + "<br>");


/*let produto;
  const listaProdutos = []

  do{
    produto = prompt('Digite o produto. Digite SAIR para encerrar.')
    listaProdutos.push(produto)
  }while(produto != "SAIR");

  listaProdutos.pop()//tira a última
document.write(listaProdutos)*/