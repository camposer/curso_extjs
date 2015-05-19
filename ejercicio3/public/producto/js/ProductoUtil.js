function ProductoUtil() {
	var BASE_URL = "/productos";

	this.agregar = function(p, callback) {
		$.ajax(BASE_URL, {
			type: "post",
			contentType: "application/json",
			data: JSON.stringify(p)
		}).done(callback).fail(function() {
			window.alert("Error al agregar!!");
		});
	};

	this.obtenerTodos = function(callback) {
		$.ajax(BASE_URL, {
			type: "get",
			dataType: "json"
		}).done(function(productos) {
			callback(productos);
		});
	};

	this.obtener = function(id, callback) {
		$.ajax(BASE_URL + "/" + id, {
			type: "get",
			dataType: "json"
		}).done(callback);
	};

	this.modificar = function(p, callback) {
                $.ajax(BASE_URL + "/" + p.id, {
                        type: "put",
                        contentType: "application/json",
                        data: JSON.stringify(p)
                }).done(callback).fail(function() {
                        window.alert("Error al modificar!!");
                });
	};

	this.eliminar = function(id, callback) {
		$.ajax(BASE_URL + "/" + id, {
			type: "delete"
		}).done(callback);
	};	
	
}
