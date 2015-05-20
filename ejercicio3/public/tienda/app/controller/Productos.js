Ext.define('Tienda.controller.Productos', {
    extend: 'Ext.app.Controller',

    views: [ 
    	'producto.Lista', 
    	'producto.Edicion' 
    ],
    stores: [ 'Productos' ], 
    models: [ 'Producto' ], 

    init: function() {
        this.control({ 
            'listaproductos': {
                itemdblclick: this.editarProducto
            },
            'edicionproducto button[action=guardar]': {
                click: this.guardarProducto
            },    
            'listaproductos button[action=eliminar]': {
                click: this.eliminarProducto
            },
            'listaproductos button[action=agregar]': {
                click: this.agregarProducto
            }
        });        
    },

    editarProducto: function(grid, record) {
        var view = Ext.widget('edicionproducto'); 

        view.down('form').loadRecord(record);
    },

    agregarProducto: function(grid, record) {
        var view = Ext.widget('edicionproducto');
        view.setTitle('Agregar producto');
        //view.title = 'Agregar producto'; // no funciona porque es un config!
    },

	guardarProducto: function(button) {
	    var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(), 
	        values = form.getValues(); 

        if (!form.isValid()) // Si es inválido no sigue adelante
            return;

        if (record) { // modificando
            record.set(values);
        } else { // agregando
            record = Ext.create('Tienda.model.Producto', {
                nombre: values.nombre,
                precio: values.precio
            });

            //record.get('nombre')
            //this.getProductosStore().add(values);
            this.getProductosStore().add(record);
        }

	    win.close();

	    // synchronize the store after editing the record
	    this.getProductosStore().sync();
        this.getProductosStore().load();
	},

    eliminarProducto: function(button) {
        var grid    = button.up('listaproductos'),
            records = grid.getSelectionModel().getSelection();

        this.getProductosStore().remove(records);
        this.getProductosStore().sync();
    }
});