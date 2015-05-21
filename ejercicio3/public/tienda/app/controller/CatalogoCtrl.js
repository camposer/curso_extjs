Ext.define('Tienda.controller.CatalogoCtrl', {
    extend: 'Ext.app.Controller',

    views: [ 
    	'catalogo.Lista' 
    ],
    stores: [ 'CatalogoElementos', 'CarritoElementos' ],

    init: function() {
        this.control({ 
            'catalogoLista button[action=agregar]': {
                click: this.agregarProductos
            }
        }); 
    },

    buscarCarrito: function(productoId) {
        var carritoElementos = this.getCarritoElementosStore().getRange();

        for (var i in carritoElementos) 
            if (carritoElementos[i].get('productoId') == productoId)
                return carritoElementos[i];
    },

    agregarProductos: function(button) {
    	var catalogoElementos = this.getCatalogoElementosStore().getRange();

        for (var i in catalogoElementos) {
            var catalogo = catalogoElementos[i];

            if (catalogo.get('cantidad')) {
                var total = catalogo.get('precio') * catalogo.get('cantidad');

                var carrito = this.buscarCarrito(catalogo.get('id'));

                if (!carrito) {
                    carrito = Ext.create('Tienda.model.CarritoElemento', {
                        productoId: catalogo.get('id'),
                        nombre: catalogo.get('nombre'),
                        precio: catalogo.get('precio'),
                        cantidad: catalogo.get('cantidad'),
                        total: total
                    });

                    this.getCarritoElementosStore().add(carrito);
                } else {
                    carrito.set('cantidad', 
                        carrito.get('cantidad') + catalogo.get('cantidad'));
                    carrito.set('total',
                        carrito.get('total') + total);
                }
            }
        }

        console.log('sync carritoElementosStore');
        this.getCarritoElementosStore().sync();
    }
});