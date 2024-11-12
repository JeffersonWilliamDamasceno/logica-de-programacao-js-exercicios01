// Solicita um número ao usuário
var numero = Number(prompt("Digite um número:"));

// Exibe a tabuada do número de 1 a 10
var tabuada = `Tabuada do ${numero}:\n`;
for (var i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`;
}

alert(tabuada);
