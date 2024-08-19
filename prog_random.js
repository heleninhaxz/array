const readlineSync = require('readline-sync')

let numArray = []

function gerarAleatorio(num){
// Math.random() * (max - min + 1)) + min => formula do aleatorio

    let valor = Math.floor(Math.random() * (num - 0 + 1)) + 0
    return valor

}

function gravar(){
    console.log('Digite os numeros inteiros')
    let num1 = readlineSync.question('Digite a quantidade de numeros aleatorios: ')

    for(i=0; i< num1; i++){
        numArray.push(gerarAleatorio(i+1))
    }
    console.table(numArray)


}
gravar()

