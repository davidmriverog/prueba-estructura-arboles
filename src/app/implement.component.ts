import { Component, OnInit } from '@angular/core';

import { TreeBinary } from './interface/tree.interface';

@Component({
  selector: 'app-imp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ImplementComponent implements OnInit {

	treeBinary : TreeBinary;
  
  constructor() {}

  ngOnInit() : void {

  	console.log('init app estructura de datos arboles.');

  	try {

  		this.treeBinary = new TreeBinary();

  		// in orden

  		// this.treeBinary.insert(4, 'Juan');
  		// this.treeBinary.insert(7, 'Pedro');
  		// this.treeBinary.insert(8, 'Maria');
  		// this.treeBinary.insert(23, 'Julia');
  		// this.treeBinary.insert(5, 'Miguel');

  		// pre orden
  		
  		// this.treeBinary.insert(8, 'Juan');
  		// this.treeBinary.insert(3, 'Pedro');
  		// this.treeBinary.insert(1, 'Maria');
  		// this.treeBinary.insert(6, 'Julia');
  		// this.treeBinary.insert(4, 'Miguel');
  		// this.treeBinary.insert(7, 'Ana');
  		// this.treeBinary.insert(10, 'Ambar');
  		// this.treeBinary.insert(14, 'Leyla');
  		// this.treeBinary.insert(13, 'Keyla');

  		// post orden
  		// this.treeBinary.insert(8, 'Juan');
  		// this.treeBinary.insert(3, 'Pedro');
  		// this.treeBinary.insert(10, 'Maria');
  		// this.treeBinary.insert(14, 'Julia');
  		// this.treeBinary.insert(13, 'Miguel');
  		// this.treeBinary.insert(1, 'Ana');
  		// this.treeBinary.insert(6, 'Ambar');
  		// this.treeBinary.insert(4, 'Leyla');
  		// this.treeBinary.insert(7, 'Keyla');  	

  		// apply ready 
  		
  		//this.readyInOrden();
  		//this.readyPreOrden();
  		//this.readyInPostOrden();

  		// let search = this.treeBinary.searchNodeInTree(8);

  		// if (search != null) {
  		// 	console.log('result.node.8', search);	
  		// } else {
  		// 	console.log('not search result node 8.')
  		// }

  		this.treeBinary.insert(1, '');
  		this.treeBinary.insert(4, '');
  		this.treeBinary.insert(5, '');
  		this.treeBinary.insert(8, '');
  		this.treeBinary.insert(9, '');
  		this.treeBinary.insert(11, '');

  		this.readyInOrden();
  	}catch(e) {

  		console.log('exception.handle', e);
  	}
  }

  readyInOrden() : void {
  	console.log('INIT - READY IN ORDEN');

  	if (!this.treeBinary.treeIsEmpty()) {
			this.treeBinary.readInOrden(this.treeBinary.root);
		} else {
			console.error('tree is empty');
		}

		console.log('FINISHED - READY IN ORDEN');
  }

  /**
   * Root -  Left - Right (Raiz Izquierda Derecha)
   *
   * 
   */
  readyPreOrden() : void  {
  	console.log('INIT - READY IN PRE ORDEN');  	
  	if (!this.treeBinary.treeIsEmpty()) {
			this.treeBinary.readInPreOrden(this.treeBinary.root);
		} else {
			console.error('tree is empty');
		}
  	console.log('FINISHED - READY IN PRE ORDEN');  	
  }

  /**
   * Left Child - Right Child - Root.
   *
   * 
   */
  readyInPostOrden() : void {
  	console.log('INIT - READY IN POST ORDEN');
  	if (!this.treeBinary.treeIsEmpty()) {
			this.treeBinary.readyInPostOrden(this.treeBinary.root);
		} else {
			console.error('tree is empty');
		}
  	console.log('FINISHED - READY IN POST ORDEN');
  }

  searchNodeInTree() : void {
  	console.log('INIT - SEARCH NODE');

  	console.log('FINISHED - SEARCH NODE');
  }
}
