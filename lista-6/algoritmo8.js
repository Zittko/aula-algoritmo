let input = require('readline-sync');
let n1 = 6;

while (n1>=5) {
    n1 = input.questionInt('Digite um numero --> ');
    if (n1>=5) {
        console.log('O numero digitado é maior ou igual a 5');
    } else {
        for (n1 = n1+1; n1 < 20; n1 = n1+2) {
            console.log(n1);
        }
        n1 = 4;
    }
}