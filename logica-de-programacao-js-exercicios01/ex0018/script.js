// Solicita o valor do salário ao usuário
var salario = Number(prompt("Digite o valor do salário:"));

// Solicita o valor do bônus ao usuário
var bonus = Number(prompt("Digite o valor do bônus:"));

// Calcula o valor total com o bônus incluído
var valorTotal = salario + bonus;

// Exibe o valor total
alert(`O valor total com o bônus incluído é: R$ ${valorTotal.toFixed(2)}`);
