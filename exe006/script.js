// Solicita ao usuário que insira o primeiro número
var numero1 = prompt("Digite o primeiro número:");

// Solicita ao usuário que insira o segundo número
var numero2 = prompt("Digite o segundo número:");

// Converte as entradas para números inteiros
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verifica se o segundo número é zero para evitar divisão por zero
if (numero2 === 0) {
    alert("Divisão por zero não é permitida. Por favor, insira um número diferente de zero.");
} else {
    // Calcula o resultado da divisão
    var resultado = numero1 / numero2;
    
    // Exibe o resultado
    alert("O resultado da divisão de " + numero1 + " por " + numero2 + " é " + resultado);
}
