//5️⃣ Tabuada - Mostre a tabuada de um número informado pelo usuário (de 1 a 10).

const input = require('readline-sync');

let numero = input.questionInt("Digite o numero para ser multiplicado --> ");
console.log("-------- TABUADA DO",numero,"--------");
for (let i = 1; i <= 10; i++) {
    console.log(i,"*",numero,"=",i*numero);
}