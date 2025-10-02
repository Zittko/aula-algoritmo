let input = require('readline-sync');
let n1 = 6;
let n2 = 9;

while (!(n1>10 && n2<5)) {
    n1 = input.questionInt('Digite o primeiro numero --> ');
    n2 = input.questionInt('Digite o segundo numero --> ');

    if (n1>10 && n2<5) {
        console.log('n1:'+n1+', n2:'+n2);
    } else if (n1>10 && n2>=5) {
        console.log('n1:'+n1+', n2 é maior ou igual a 5');
    } else if (n1<=10 && n2<5) {
        console.log('n1 é menor ou igual a 10,','n2:'+n2);
    } else if (n1<=10 && n2>=5) {
        console.log('n1 é menor ou igual a 10','e n2 é maior ou igual a 5');
    }
}