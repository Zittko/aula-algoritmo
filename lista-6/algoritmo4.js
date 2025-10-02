let input = require('readline-sync');
let tabuada = input.questionInt('qual o valor dessa multiplicacao? --> ');

let multiplicador = 0;
while (multiplicador<=10) {
    console.log(tabuada+("*")+multiplicador,("="),tabuada*multiplicador);
    multiplicador ++;
}