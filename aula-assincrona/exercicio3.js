//3️⃣ Soma dos Números - Peça 5 números e mostre a soma total ao final.

const input = require('readline-sync');

let soma = 0;

for (let contador = 0; contador < 5; contador++) {
    let numero = input.questionInt("Digite o "+(contador+1)+"o numero --> ");
    soma = soma + numero;
}
console.log("A SOMA DOS 5 NUMEROS É:",soma);