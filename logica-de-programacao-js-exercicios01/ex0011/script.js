var valorEmDolares = prompt("Digite o valor em Dólares:")
var taxaDeCambio = 5.30
var valorEmReais = valorEmDolares * taxaDeCambio

alert(`O valor em reais é: ${valorEmReais.toFixed(2)}`)