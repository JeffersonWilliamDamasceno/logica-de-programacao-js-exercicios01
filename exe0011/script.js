// Solicita ao usuário que insira um valor em dólares
let valorEmDolares = prompt("Digite um valor em dólares:");

// Converte a entrada para número de ponto flutuante
valorEmDolares = parseFloat(valorEmDolares);

// Define a taxa de câmbio fixa
const taxaDeCambio = 5.30;

// Calcula o valor em reais
let valorEmReais = valorEmDolares * taxaDeCambio;

// Exibe o resultado
alert("O valor de " + valorEmDolares + " dólares em reais é " + valorEmReais.toFixed(2));
