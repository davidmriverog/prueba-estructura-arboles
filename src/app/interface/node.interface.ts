export class NodeInterface {

	key : number;

	name : string;

	leftChild : NodeInterface;

	rightChild : NodeInterface;

	constructor(key : number, name : string) {
		this.key = key;
		this.name = name;

		this.leftChild = null;
		this.rightChild = null;
	}

	completeNodeName() : string {
		return this.key + "your data is :" + this.name;
	}
}