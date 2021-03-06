
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
		return this.root === null;
	}

	readInOrden(root : NodeInterface) : void {

		if (root!=null) {
			this.readInOrden(root.leftChild);

			console.log('node['+root.key+'] = ' + root.name, root);

			this.readInOrden(root.rightChild);
		}
	}

	readInPreOrden(root : NodeInterface) : void {

		if (root!=null) {
			console.log('node['+root.key+'] = ' + root.name, root);

			this.readInPreOrden(root.leftChild);
			this.readInPreOrden(root.rightChild);
		}
	}

	readyInPostOrden(root : NodeInterface) : void {
		if (root!=null) {
			
			this.readyInPostOrden(root.leftChild);
			this.readyInPostOrden(root.rightChild);

			console.log('node['+root.key+'] = ' + root.name, root);
		}
	}

	searchNodeInTree(key : number) : NodeInterface {
		
		let auxNode : NodeInterface = this.root;

		while(auxNode.key != key) {

			if (key < auxNode.key) {
				auxNode = auxNode.leftChild;
			} else {
				auxNode = auxNode.rightChild;
			}

			if (auxNode === null) {
				return null;
			}
		}

		return auxNode;
	}
}