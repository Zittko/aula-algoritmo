let input = require('readline-sync');
let n1 = input.questionInt('Digite um numero entre cinco e dez --> ');

if (n1>5) {
    if (n1<10) {
        console.log('Numero:', n1);
    }
}