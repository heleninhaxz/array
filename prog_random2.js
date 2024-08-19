const readlineSync = require('readline-sync')

let numArray = []

function gerarAleatorio(num){
    // Math.random() * (max - min + 1)) + min => fórmyula do aleatório

    let valor = Math.floor(Math.random() * (num - 0 + 1)) + 0
    return valor
}
function gravar(){
    console.log('Digite apenas numeros inteiros entre 1 e 10')
    let num1 = readlineSync.question('Digite a quantidade de numeros aleatorios: ')

    if((num1 > 10)||(num1 <= 0)){
        console.log('Valor inválido, digite um número inteiro entre 1 e 10 ')
    }else{
        for(i=0; i < num1; i++){
            numArray.push(gerarAleatorio(i+10))
        }
    }
    console.log('--------------------')
    console.table(numArray)
    console.log('--------------------')
    numArray.sort()
    console.log('--------------------')
    console.table(numArray)
}
gravar()