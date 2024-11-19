// Solicita ao usuário que insira um valor em reais
let valorEmReais = prompt("Digite um valor em reais:");

// Converte a entrada para número de ponto flutuante
valorEmReais = parseFloat(valorEmReais);

// Define a taxa de câmbio fixa
const taxaDeCambio = 5.30;

// Calcula o valor em dólares
let valorEmDolares = valorEmReais / taxaDeCambio;

// Exibe o resultado
alert("O valor de " + valorEmReais + " reais em dólares é " + valorEmDolares.toFixed(2));
