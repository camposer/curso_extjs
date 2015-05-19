	var compras = [];
	var contador = 1;

	this.agregar = function(c) {
		compras.push(c);
	};

	this.obtenerTodas = function() {
		return compras;
	};

	this.obtenerTodasPorProducto = function() {
		var comprasPorProducto = {};
		var resultado = [];
	
		for (var i in compras) {
			var c = compras[i];
			var key = compras[i].productoId;

			var cantidad = (comprasPorProducto[key]) ? 
				comprasPorProducto[key].cantidad : 0;

			comprasPorProducto[key] = {
				'productoId': key,
				'nombre': c.nombre,
				'cantidad': cantidad +  c.cantidad
			};
		}

		// Transformando array
		var idx = 0;
		for (var i in comprasPorProducto)
			resultado[idx++] = comprasPorProducto[i];

		return resultado;
	}
