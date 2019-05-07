export class NodoInterface {

	dato : number;

	nombre : string;

	hijoIzquierdo : NodoInterface;

	hijoDerecho : NodoInterface;

	constructor(dato : number, nombre : string) {
		this.dato = dato;
		this.nombre = nombre;

		this.hijoIzquierdo = null;
		this.hijoDerecho = null;
	}

	completeNodeName() : string {
		return this.nombre + "Su Dato es :" + this.dato;
	}
}