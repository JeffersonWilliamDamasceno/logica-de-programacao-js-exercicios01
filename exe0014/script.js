// Solicita ao usuário que insira o valor do lado de um quadrado
let lado = prompt("Digite o valor do lado de um quadrado:");

// Converte a entrada para número de ponto flutuante
lado = parseFloat(lado);

// Calcula a área do quadrado
let area = lado * lado;

// Exibe o resultado
alert("A área do quadrado com lado " + lado + " é " + area);
