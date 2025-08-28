let input = require('readline-sync');
let n1 = input.questionInt('Digite o Numero 1 (N1) --> ');
let n2 = input.questionInt('Digite o Numero 2 (N2) --> ');
let n3 = input.questionInt('Digite o Numero 3 (N3) --> ');
n1 = n1+10;
n2 =  n2-5;
n3 = n3*2;
console.log('Número 1:', n1, 'Número 2:', n2, 'Número 3:', n3);