let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
if(n1<n2){
    n1 = n1+5
}
else{
    if(n2<n1){
        n2 = n2+5
    }
}
if(n1>n2){
    console.log(n1);
}
else{
    if(n2>n1){
        console.log(n2);
    }
}