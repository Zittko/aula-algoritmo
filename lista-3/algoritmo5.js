let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
let soma = n1+n2;
if(soma<20){
    let res1 = n1*10;
    let res2 = n2*10;
    console.log("numeros", res1, res2);
}