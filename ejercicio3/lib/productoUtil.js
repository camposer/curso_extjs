	var productos = [];
	var contador = 1;
	
	this.agregar = function(p) {
		p.id = contador++;
		productos.push(p);
	};

	var buscarPos = function(id) {
		var pos = -1;

		for (var i in productos) {
			if (productos[i].id == id) {
				pos = i;
				break;
			}
		}
		
		return pos;
	};

	this.obtener = function(id) {
		var pos = buscarPos(id);
		var p = null;

		if (pos >= 0)
			p = productos[pos];

		return p;
	};

	this.modificar = function(p) {
		var pos = buscarPos(p.id);

		if (pos >= 0)
			productos[pos] = p;
	};

	this.eliminar = function(id) {
		var pos = buscarPos(id);

		if (pos >= 0)
			productos.splice(pos, 1);
	};

	this.obtenerTodos = function() {
		return productos;
	};
