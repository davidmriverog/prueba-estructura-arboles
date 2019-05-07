import { Component, OnInit } from '@angular/core';

export interface NodeData {
	key : number,
	childLeft?: number,
	rightRight?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	treeList : any[];

	nodeList : NodeData[] = [];
  
  constructor() {}

  ngOnInit() : void {

  	console.log('init app estructura de datos arboles.');

  	try {

  		this.treeList = [
				[1,4,5],
				[2,5,6],
				[3,6,7],
				[4],
				[5,8,9],
				[6,9,10],
				[7,10],
				[8,11],
				[9,11,12],
				[10,12,13],
				[11],
				[12],
				[13]
		  ];

		  this.buildNodeList();

		  // 1) Dado un número dado, encontrar sus ancestros. (3, 5, 8, 12)
		  this.findAncestors(3);
		  this.findAncestors(5);
		  this.findAncestors(8);
		  this.findAncestors(12);

		  // 2) Dado un número dado, encontrar sus hijos. (1, 6, 9, 11)
		  

  	}catch(e) {

  		console.log('exception.handle', e);
  	}
  }

  buildNodeList() : void {
  	this.treeList.forEach((item, index) => {

	  	let nodeObj : NodeData = {
	  		key: item[0],
	  		childLeft: item.length > 1 ? item[1] : null,
	  		rightRight: item.length === 3 ? item[2] : null
	  	};

	  	this.nodeList.push(nodeObj);
	  })

	  console.log('node.list', this.nodeList);

  }

  findAncestors(key : number) :NodeData[] {

  	console.log('INIT - FIND ANCESTORS['+key+']');

  	let findAncestors : NodeData[] = this.nodeList.filter((item, index) => {

  		return item.childLeft === key || item.rightRight === key;
  	});

  	if (!findAncestors.length) {
  		console.log('he '+key+' does not have ancestors');
  	} else {
  		console.log('the Ancestors for ' + key + 'is: ', findAncestors);	
  	}

  	console.log('FINISHED - FIND ANCESTORS['+key+']');

  	return findAncestors;
  }

  findChildByKeyNode(key : number) : void {

  }

}
