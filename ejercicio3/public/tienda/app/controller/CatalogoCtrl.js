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

    buscarCarrito: function(id) {
        var carritoElementos = 
            this.getCarritoElementosStore().getRange();

        for (var i in carritoElementos) 
            if (carritoElementos[i].get('id') == id)
                return carritoElementos[i];
    },

    agregarProductos: function(button) {
    	var catalogoElementos = 
            this.getCatalogoElementosStore()
            .getRange();

        var carritoStore = 
            this.getCarritoElementosStore();

        for (var i in catalogoElementos) {
            var catalogo = catalogoElementos[i];

            if (catalogo.get('cantidad')) {
                var total = catalogo.get('precio') * catalogo.get('cantidad');

                var carrito = this.buscarCarrito(catalogo.get('id'));

                if (!carrito) {
                    carrito = Ext.create('Tienda.model.CarritoElemento', {
                        id: catalogo.get('id'),
                        nombre: catalogo.get('nombre'),
                        precio: catalogo.get('precio'),
                        cantidad: catalogo.get('cantidad'),
                        total: total
                    });

                    carritoStore.add(carrito);
                } else {
                    carrito.set('cantidad', 
                        carrito.get('cantidad') + catalogo.get('cantidad'));
                    carrito.set('total',
                        carrito.get('total') + total);
                }
            }
        }

        carritoStore.sync();
    }
});