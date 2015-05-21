Ext.define('Tienda.controller.CarritoCtrl', {
    extend: 'Ext.app.Controller',

    views: [ 
    	'carrito.Lista' 
    ],

    stores: [ 
    	'CarritoElementos', 
    	'CompraElementos' 
    ],

    init: function() {
        this.control({ 
            'carritoLista button[action=comprar]': {
                click: this.comprar
            }
        }); 
    },

    comprar: function(button) {
    	var carritoElementos = 
    		Ext.getStore('CarritoElementos').getRange();

    	for (var i in carritoElementos) {
    		var c = carritoElementos[i];

    		var compraElemento = 
    			Ext.create('Tienda.model.CompraElemento', {
    				productoId: c.get('productoId'),
    				nombre: c.get('nombre'),
    				cantidad: c.get('cantidad')
    			});

    		this.getCompraElementosStore()
    			.add(compraElemento);
    	}

    	// Eliminando elementos del carrito
    	this.getCarritoElementosStore().removeAll();
    	this.getCarritoElementosStore().sync();

    	// Actualizando compra
    	// TODO Cuando el store está vacío no funciona!!!
   		this.getCompraElementosStore().sync();    			
    	this.getCompraElementosStore().load();
    }


});