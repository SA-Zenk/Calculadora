class display {
	constructor(valorAnterior, valorActual) {
		this.valorActual = valorActual;
		this.valorAnterior = valorAnterior;
		this.calculador = new calculadora();
		this.valorActual = ``;
		this.valorAnterior = ``;
	}

	agregarNumero(numero) {
		this.valorActual = numero;
		this.imprimirValores();
	}

	imprimirValores() {
		this.valorActual.texContent = this.valorActual;
		this.valorAnterior.texContent = this.valorAnterior;
	}
}