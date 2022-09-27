let numberOne = Number(prompt("Dígite o primeiro número: "))
let numberTwo = Number(prompt("Dígite o segundo número: "))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert("Soma = " + sum)
alert("Subtração = " + sub)
alert("Multiplicação = " + mult)
alert("Divisão = " + div)
alert("Resto = " + rest)

if ((sum % 2) == 0) {
    alert("é par")
}

if (numberOne == numberTwo) {
    alert("os números são iguais")
}