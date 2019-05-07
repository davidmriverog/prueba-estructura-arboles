import { Component, OnInit } from '@angular/core';

import { TreeBinary } from './interface/tree.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	treeBinary : TreeBinary;
  
  constructor() {}

  ngOnInit() : void {

  	console.log('init app estructura de datos arboles.');

  	try {

  		this.treeBinary = new TreeBinary();

  		this.treeBinary.insert(4, 'Juan');
  		this.treeBinary.insert(7, 'Pedro');
  		this.treeBinary.insert(8, 'Maria');
  		this.treeBinary.insert(23, 'Julia');
  		this.treeBinary.insert(5, 'Miguel');
  	

  		// aplicamos recorrido inOrden
  		if (!this.treeBinary.treeIsEmpty()) {
  			this.treeBinary.readInOrden(this.treeBinary.root);
  		} else {
  			console.error('tree is empty');
  		}
  	}catch(e) {

  		console.log('exception.handle', e);
  	}
  }
}
