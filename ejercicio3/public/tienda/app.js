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