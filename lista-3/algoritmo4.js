let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
let n3 = input.questionInt('--> ');
n1 = n1+5;
n2 = n2+5;
n3 = n3+5;
if(n1>10){
    console.log(n1);
}
if(n2>10){
    console.log(n2);
}
if(n3>10){
    console.log(n3);
}