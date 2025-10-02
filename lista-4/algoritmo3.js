let input = require('readline-sync');
let n1 = input.questionInt('--> ');
if(n1>10){
    console.log(n1, "é maior que 10");
}
else{
    console.log(n1, "é menor ou igual a 10");
}