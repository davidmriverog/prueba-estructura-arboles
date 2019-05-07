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

  		this.treeBinary.insert(1, 'prueba');
  		this.treeBinary.insert(3, 'prueba');
  		this.treeBinary.insert(2, 'prueba');
  		this.treeBinary.insert(6, 'prueba');
  		this.treeBinary.insert(8, 'prueba');
  		this.treeBinary.insert(23, 'prueba');

  		console.log('arbol.list', this.treeBinary);
  	}catch(e) {

  		console.log('exception.handle', e);
  	}
  }
}
