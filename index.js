const valorAnterior = document.getElementById(`.calculadora__valorAnterior`);
const valorActual = document.getElementById(`.calculadora__valorActual`);
const botonesNumeros = document.querySelectorAll(`.calculadora__numero`);
const botonesOperadores = document.querySelectorAll(`.calculadora__operador`);


const calculadora = new Calculadora();


console.log(calculadora.sumar(2, 3));
console.log(calculadora.restar(2, 3));
console.log(calculadora.multiplicar(2, 3));
console.log(calculadora.dividir(2, 3));