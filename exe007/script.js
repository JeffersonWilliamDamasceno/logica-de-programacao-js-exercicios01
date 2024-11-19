// Solicita ao usuário que insira o primeiro número
var numero1 = prompt("Digite o primeiro número:");

// Solicita ao usuário que insira o segundo número
var numero2 = prompt("Digite o segundo número:");

// Converte as entradas para números de ponto flutuante
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Calcula o produto dos dois números
var produto = numero1 * numero2;

// Exibe o resultado
alert("O produto de " + numero1 + " e " + numero2 + " é " + produto);
