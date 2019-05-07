
import { NodoInterface } from './nodo.interface';

export class ArbolBinario {

	raiz : NodoInterface;

	constructor() {
		this.raiz = null;
	}

	insertNode(dato : number, nombre : string) : void {

		const nuevoNodo : NodoInterface = new NodoInterface(dato, nombre);

		if(this.raiz === null) {
			this.raiz = nuevoNodo;
		} else {
			let nodoAux : NodoInterface = this.raiz;
			let nodoPadre : NodoInterface = null;

			while(true) {
				nodoPadre = nodoAux;

				if(dato < nodoAux.dato) {
					// se inserta a la izquierda
					nodoAux = nodoAux.hijoIzquierdo;

					if (nodoAux === null) {
						nodoPadre.hijoIzquierdo = nuevoNodo;
						return;
					}
				} else {
					// se inserta a la derecha
					nodoAux = nodoAux.hijoDerecho;

					if (nodoAux === null) {
						nodoPadre.hijoDerecho = nuevoNodo;
						return;
					}					
				}
			}
		}


	}
}