let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
if(n1<20){
    let res1 = n1*10;
    console.log(res1);
}
if(n2<20){
    let res2 = n2*10;
    console.log(res2);
}