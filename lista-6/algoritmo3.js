let input = require('readline-sync');
let n1 = input.questionInt('Digite um número --> ');
let n2 = input.questionInt('Digite um número --> ');
n1 = n1 + 1;

while (n1<=n2-1) {
    console.log(n1);
    n1 ++;
}