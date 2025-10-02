let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
if (n1<n2){
    n1 = n1*10
    n2 = n2/2
} else {
    if (n2<n1){
        n2 = n2*10
        n1 = n1/2
    }
}
sm = n1+n2
if (sm % 2 === 0){
    console.log(sm, "é par");
} else {
    console.log(sm, "é ímpar");
}