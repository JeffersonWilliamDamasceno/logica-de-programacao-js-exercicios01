// Solicita ao usuário que insira a largura do retângulo
let largura = prompt("Digite a largura do retângulo:");

// Solicita ao usuário que insira a altura do retângulo
let altura = prompt("Digite a altura do retângulo:");

// Converte as entradas para números de ponto flutuante
largura = parseFloat(largura);
altura = parseFloat(altura);

// Calcula a área do retângulo
let area = largura * altura;

// Exibe o resultado
alert("A área do retângulo com largura " + largura + " e altura " + altura + " é " + area);
