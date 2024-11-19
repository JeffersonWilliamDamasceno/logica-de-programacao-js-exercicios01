// Solicita ao usuário que insira um número
let numero = prompt("Digite um número:");

// Converte a entrada para número de ponto flutuante
numero = parseFloat(numero);

// Inicializa uma variável para armazenar a tabuada
let tabuada = "";

// Calcula a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
    tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
}

// Exibe o resultado
alert("Tabuada de " + numero + ":\n\n" + tabuada);
