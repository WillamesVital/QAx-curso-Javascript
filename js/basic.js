console.log('Olá, Javascript!')

var userName = 'Willames Vital'

document.getElementById('user-name').innerHTML = userName

// Variavéis //

// Uma variável chamada 'nome' é declarada e recebe o valor 'Mestre Yoda'.
// A palavra-chave 'var' é usada para declarar uma variável em JavaScript.
// É importante observar que as variáveis JavaScript declaradas com var têm escopo de função e não de bloco.

// Javascript tem uma tipagem dinamica
//var nome = 'Mestre Yoda'
//var idade = 100 
//var jedi = true 

//console.log(nome)
//console.log(idade)
//console.log(jedi)


// Operadores Matemáticos //

//var n1 = 7
//var n2 = 2.5

//console.log(typeof n1)
//console.log(typeof n2)

//var total   = n1 / n2
//console.log(total)

// dividir (o sinal do "+" indica a adição)
// dividir (o sinal do "-" indica a subtração)
// dividir (o sinal do "*" indica a multiplicação)
// dividir (o sinal do "/" indica a divisão)

// Operadores de Comparação

//var v1 = 5
//var v2 = 5

//var resultado = v1 === v2
//console.log(resultado)

// Funções

//function soma(n1, n2) {
    //console.log(n1 + n2)
//}

//soma(5, 100)

//function boasVindas(nome) {
  //  alert(nome + ', seja bem-vindo(a)')
//}
//boasVindas('Willames')

/*function soma(n1, n2) {
    return n1 + n2
}

var resultado = soma(5,5)
console.log(resultado)*/

// Controle de fluxos

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais 
// Então o valor do saque deve ser deduzir do meu saldo

// var saldo = 1000

// function saque(valor) {

//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor do saque é supeior ao máximo permitido por operação')
//     } else {
//         saldo = saldo - valor
//     }
   
// }

// saque(701)
// console.log(saldo)

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais 
// Quando faço um saque de 1000 reais
// Então não deve reduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reias
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não dever reduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por saque

// Arrays/Listas um conjunto de dados ou informações
// Arrays começam por 0

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[1])

// var personagens = ['Mestre Yoda', 'Luke', 'Leia', 'Vader']

// personagens.push('C3PO')
// personagens.push('R2D2')

// // personagens.pop()

// personagens = personagens.filter(function(p){
//         return p !== 'Vader'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })


// console.log(personagens)

// Controles de Repetição ou Loops //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Dart Vader']

// Ao invés disso

// console.log(personagens[0])
// console.log(personagens[1])
// console.log(personagens[2])
// console.log(personagens[3])

//Posso usar isso 
// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
//     // o código vai ser executado até a condição returnar false
// }

// Objetos // Como se fossem super variaveis

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

// Constantes //

// const nome = 'Dart Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)