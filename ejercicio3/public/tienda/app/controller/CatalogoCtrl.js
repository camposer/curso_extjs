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

    agregarProductos: function(button) {
    	var catalogoElementos = 
            this.getCatalogoElementosStore()
            .getRange();

        var carritoStore = 
            this.getCarritoElementosStore();

        for (var i in catalogoElementos) {
            var catalogo = catalogoElementos[i];

            var total = catalogo.get('precio') * catalogo.get('cantidad');

            var carrito = Ext.create('Tienda.model.CarritoElemento', {
                id: catalogo.get('id'),
                nombre: catalogo.get('nombre'),
                precio: catalogo.get('precio'),
                cantidad: catalogo.get('cantidad'),
                total: total
            });

            carritoStore.add(carrito);
        }

        carritoStore.sync();
    }
});