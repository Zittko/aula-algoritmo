let input = require('readline-sync');
let n1 = input.questionInt('--> ');
let n2 = input.questionInt('--> ');
let n3 = input.questionInt('--> ');
if(n1>n2 && n1>n3){
    console.log(n1);
}
else{
    if(n2>n1 && n2>n3){
        console.log(n2);
    }
    else{
    if(n3>n1 && n3>n2){
        console.log(n3);
    }
}
}