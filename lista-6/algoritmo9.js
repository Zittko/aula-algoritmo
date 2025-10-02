let input = require('readline-sync');
let n1 = 0
while (n1<=20) {
    n1 = input.questionInt('Digite um numero maior que 20 --> ');
}
if (n1>20) {
    n1 = n1-1
    while (n1>1) {
        console.log(n1);
        n1 --;
    }
}