function ProductoUtil() {
	var productos = [];
	var contador = 1;
	
	this.agregar = function(p) {
		p.setId(contador++);
		productos.push(p);
	};

	this.obtenerTodos = function() {
		return productos;
	};

	var buscarPos = function(id) {
		for (var i in productos) 
			if (productos[i].getId() == id)
				return i;
	};

	this.obtener = function(id) {
		var pos = buscarPos(id);
		if (pos)
			return productos[pos];
	};

	this.modificar = function(p) {
		var pos = buscarPos(p.getId());
		if (pos)
			productos[pos] = p;
	};

	this.eliminar = function(id) {
		var pos = buscarPos(id);
		if (pos)
			productos.splice(pos, 1);
	};	
	
}





