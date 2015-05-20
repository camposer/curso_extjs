Ext.require('Ext.form.field.VTypes', function() {
    Ext.apply(Ext.form.field.VTypes, {
        precio: function(val, field) {
            return val > 0;
        },
        precioText: 'Precio inválido',
        precioMask: /[\d]/
    });
});

Ext.application({
    requires: ['Ext.container.Viewport'], 
    name: 'Tienda', 

    appFolder: 'app', 
    controllers: [ 
        'Productos' 
    ],

    launch: function() { 
        Ext.create('Ext.container.Viewport', { 
            layout: 'fit',
            items: [
                {
                    xtype: 'listaproductos' 
                }
            ]
        });
    }
});