// Solicita ao usuário que insira o valor do salário
let salario = prompt("Digite o valor do salário:");

// Solicita ao usuário que insira o valor do bônus
let bonus = prompt("Digite o valor do bônus:");

// Converte as entradas para números de ponto flutuante
salario = parseFloat(salario);
bonus = parseFloat(bonus);

// Calcula o valor total com o bônus incluído
let valorTotal = salario + bonus;

// Exibe o resultado
alert("O valor total com o bônus incluído é " + valorTotal);
