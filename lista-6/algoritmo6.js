let input = require('readline-sync');

let n1 = 11;

while (n1>=10) {
    n1 = input.questionInt('Digite um numero menor que 10 --> ');
    if (n1<10) {
        console.log(n1);
    } 
    else{
        console.log('O numero e maior ou igual a 10');
    }

}