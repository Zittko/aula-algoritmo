let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
let n3 = input.questionInt('--> ');
let n4 = input.questionInt('--> ');
let s1 = n1+n2;
let s2 = n3-n4;
let r1 = s1+s2;
if (r1>10) {
    console.log(r1, "é maior que 10");
} else {
    console.log(r1, 'é menor ou igual a 10');
}