const saoPaulo = 3000000
const saoBernardo = 500000
const diadema = 50000

if(saoPaulo >= 30000000) {
    console.log("Esta cidade é grande")
} else {
    console.log("Esta cidade é pequena!")
}


//Aula 4

/* Functions / Funções
    - Trecho de código que é executado
    SOMENTE quando solicitado ( Parente gente boa)
    - Trecho de código que pode ser reutilazado várias vezes

    [ ] O que é uma função e como usar
    [ ] Função VOID (vazia)
    [ ] Função com parâmetros
    [ ] Função return
    [ ] Arrow Function

*/

const number = 200
console.log(number)

//Void
function digaMeuNome() {
    console.log("Gustavo Dias")
}

digaMeuNome()

// Parâmetros

function soma(numero1, numero2) {
    const resultado = numero1 + numero2

    console.log(resultado)
}

soma(10,30)

function subtracao(numero3, numero4){
    const resultado2 = numero3 - numero4

    console.log(resultado2)
}

subtracao(50,40)


function divisao(numero5, numero6){
    const resultado3 = numero5 / numero6
    console.log(resultado3)
}

divisao(100,10)

// return

function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return 'Está no AZUL'
    } else {
        return 'Está no VERMELHO'
    }
}

const maria = estaEndividado(5000,7000)
const gustavo = estaEndividado(10000, 2500)

console.log(maria)
console.log(gustavo)


// arrow function (Função flecha)

function abacate() {} // Forma clássica
const digaMeuNome2 = (name) => {
    console.log("Gustavo")
}

digaMeuNome2()