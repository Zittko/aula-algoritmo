let input = require('readline-sync');
let num = input.questionInt('Digite um número --> ');
num = num + 1;

while (num<20) {
    console.log(num);
    num ++;
}