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
            }            
        });        
    },

    editarProducto: function(grid, record) {
        var view = Ext.widget('edicionproducto'); 

        view.down('form').loadRecord(record);
    },

	guardarProducto: function(button) {
	    var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(), 
	        values = form.getValues(); 

	    record.set(values);
	    win.close();

	    // synchronize the store after editing the record
	    this.getProductosStore().sync();
	}    
});