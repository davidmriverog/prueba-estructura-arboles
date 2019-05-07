
import { NodeInterface } from './node.interface';

export class TreeBinary {

	root : NodeInterface;

	constructor() {
		this.root = null;
	}

	insert(key : number, name : string) : void {

		const newNode : NodeInterface = new NodeInterface(key, name);

		if(this.root === null) {
			this.root = newNode;
		} else {
			let auxNode : NodeInterface = this.root;
			let parentNode : NodeInterface = null;

			while(true) {
				parentNode = auxNode;

				if(key < auxNode.key) {
					// se inserta a la izquierda
					auxNode = auxNode.leftChild;

					if (auxNode === null) {
						parentNode.leftChild = newNode;
						return;
					}
				} else {
					// se inserta a la derecha
					auxNode = auxNode.rightChild;

					if (auxNode === null) {
						parentNode.rightChild = newNode;
						return;
					}					
				}
			}
		}
	}

	treeIsEmpty() : boolean {
		return false;
	}
}