const calcularPreco = (produto, preco) => {
  let envio;
  let precoFinal;
  if (preco >= 1 && preco <= 2000) {
    envio = 300
    precoFinal = preco + envio;
  }
  if (preco >= 2001 && preco <= 4000) {
    envio = 450
    precoFinal = preco + envio;
  }
  if (preco > 4000) {
    envio = 700
    precoFinal = preco + envio;
  }

  return `O produto ${produto} custa ${preco}. Seu custo de envio é ${envio}. Portanto, o preço final é ${precoFinal}`;
}

console.log(calcularPreco ('Macbook', 2500))
console.log(calcularPreco ('Celular', 500))
console.log(calcularPreco ('Playstation', 4500))