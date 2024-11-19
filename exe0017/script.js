// Solicita ao usuário que insira quatro valores
let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor:");
let valor3 = prompt("Digite o terceiro valor:");
let valor4 = prompt("Digite o quarto valor:");

// Converte as entradas para números de ponto flutuante
valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
valor3 = parseFloat(valor3);
valor4 = parseFloat(valor4);

// Calcula a média simples dos quatro valores
let media = (valor1 + valor2 + valor3 + valor4) / 4;

// Exibe o resultado
alert("A média simples dos valores é " + media);
