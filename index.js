const valorAnterior = document.querySelector(`calculadora__valor-anterior`);
const valorActual = document.querySelector(`calculadora__valor-actual`);
const botonesNumeros = document.querySelectorAll(`calculadora__numero`);
const botonesOperadores = document.querySelectorAll(`calculadora__operador`);

const $display = new Display(valorAnterior, valorActual);

botonesNumeros.forEach(boton => {
	boton.addEventListener(`click`, () => display.agregarNumero(boton.innerHTML));
})

botonesOperadores.forEach(boton => {
	boton.addEventListener(`click`, () => display.computar(boton.value))
});