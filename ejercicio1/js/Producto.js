function Producto(_nombre, _precio) {
	var id;
	var nombre = _nombre;
	var precio = _precio;
	var cantidad;

	this.setId = function(i) { id = i; };
	this.getId = function() { return id; };
	this.setNombre = function(n) { nombre = n; };
	this.getNombre = function() { return nombre; };
	this.setPrecio = function(p) { precio = p; };
	this.getPrecio = function() { return precio; };
	this.setCantidad = function(c) { cantidad = c; };
	this.getCantidad = function() { return cantidad; };
	this.toString = function() {
		return "[ id = " + id +
			", nombre = " + nombre + 
			", precio = " + precio +
			", cantidad = " + cantidad + " ]";
	};
}
