// Solicita ao usuário que insira a base do triângulo
let base = prompt("Digite o valor da base do triângulo:");

// Solicita ao usuário que insira a altura do triângulo
let altura = prompt("Digite o valor da altura do triângulo:");

// Converte as entradas para números de ponto flutuante
base = parseFloat(base);
altura = parseFloat(altura);

// Calcula a área do triângulo
let area = (base * altura) / 2;

// Exibe o resultado
alert("A área do triângulo com base " + base + " e altura " + altura + " é " + area);
