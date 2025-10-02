let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
let n3 = input.questionInt('--> ');
let res = n1+n2+n3;
if(res>20){
    console.log(res);
}