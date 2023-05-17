function helloworld() {
    alert("Hello World!");
}

var n1
var n2

function soma(n1, n2) {
    alert(n1 + n2)

}


function subtracao(n1, n2) {
    alert(n1 - n2)
}

function multiplicacao(n1, n2) {
    alert(n1 * n2)
}

function divisao(n1, n2) {
    alert(n1 / n2)
}

function mostrarnome() {
    let nome = prompt("Qual o seu nome?")
    alert('Olá ' + nome)
}

function arearet() {
    let b = prompt("Qual a base?")
    let h = prompt("Qual a altura?")
    let arearet = b * h
    alert('A área é de ' + arearet + ' metros quadrados')
}

function areacirc() {
    let raio = prompt("Qual o raio?")
    let areacirc = 3.14 * raio * raio
    alert('A área é de ' + areacirc + ' metros quadrados')
}

function hipotenusa() {
    let c1 = prompt("Qual o primeiro cateto?")
    let c2 = prompt("Qual o segundo cateto?")
    let hip = (c1 * c1) + (c2 * c2)
    alert('O valor da hipotenusa é de ' + Math.sqrt(hip))
}

function dolar() {
    let real = prompt("Quantos reais você quer converter?")
    let dolar = prompt("Qual o valor do dólar?")
    let valor = real / dolar
    alert('$' + valor)
}

function grauf() {
    let celsius = prompt("Qual a temperatura em celsius?")
    let far = (celsius * (9 / 5)) + 32
    alert(far + "F")
}


function media() {
    let n1 = parseFloat(prompt("Nota 1:"))
    let n2 = parseFloat(prompt("Nota 2:"))
    let n3 = parseFloat(prompt("Nota 3:"))
    let media = (n1 + n2 + n3) / 3
    alert("A média é de: " + media)
}

function raizes() {
    let a = prompt("Qual o valor de a?")
    let b = prompt("Qual o valor de b?")
    let c = prompt("Qual o valor de c?")
    let delta = (b * b) - (4 * a * c)
    let rpositivo = (Math.sqrt(delta) - b) / (2 * a)
    let rnegativo = (-Math.sqrt(delta) - b) / (2 * a)

    alert('Valor das raizes: ' + rpositivo + " e " + rnegativo)
}
let nome = "QWERTY"
let peso = 70.1
let fumante = false


//  DECLARAÇÃO reservar espaço na memória
//  ATRIBUIÇÃO preencher o espaço reservado
//  INICIALIZAÇÃO os dois juntos
//  VARIAVEL caixa
//  VALOR conteúdo
//  TIPO  tamanho

// Tipos de dados (lógicos: V OU F, numérico: INTEIROS / DECIMAIS,  alfanumérico: TEXTUAL / CÓDIGO)

// Lógicos - boolean
// Numérico - number
// Alfanumérico - string


// var - Pode ser alterado a declaração
// let - poder alterar apenas a atribuição
// const - não pode ser alterado após inicializado