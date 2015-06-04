Ejercicio #1
============

##Objetivo

Repasar los conceptos básicos de JavaScript y orientación a objetos

##Actividades

0. Cree una clase Producto con los siguientes atributos: id, nombre, precio y cantidad. 
0. Cree una clase ProductoUtil que ofrezca las 4 operaciones CRUD+ (Create-Update-Read-Delete-List) sobre Producto: 
	- agregar(p) : void
	- modificar(p) : void
	- eliminar(id) : void
	- obtener(id) : Persona
	- obtenerTodos() : Persona[]

Pista:
```
function ProductoUtil() {
	var productos;

	this.obtenerProductos = function() { 
		return productos; 	
	};
		
	// ...
}
```

0. Probar las funciones de la clase ProductoUtil en un html
