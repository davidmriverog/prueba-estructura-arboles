import { Component, OnInit } from '@angular/core';

import { ArbolBinario } from './interface/arbol.binario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	arbolBinario : ArbolBinario;
  
  constructor() {}

  ngOnInit() : void {

  	console.log('init app estructura de datos arboles.');

  	try {

  		this.arbolBinario = new ArbolBinario();

  		this.arbolBinario.insertNode(1, 'prueba');
  		this.arbolBinario.insertNode(3, 'prueba');
  		this.arbolBinario.insertNode(5, 'prueba');
  		this.arbolBinario.insertNode(8, 'prueba');
  		this.arbolBinario.insertNode(15, 'prueba');
  		this.arbolBinario.insertNode(23, 'prueba');

  		console.log('arbol.list', this.arbolBinario);
  	}catch(e) {

  		console.log('exception.handle', e);
  	}
  }
}
