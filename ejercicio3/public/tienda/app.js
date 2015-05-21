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
        'ProductoCtrl',
        'PrincipalCtrl',
        'CatalogoCtrl',
        'CarritoCtrl'
    ],

    launch: function() { 
        Ext.create('Ext.container.Viewport', { 
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    layout: 'border',
                    items: [
                        {
                            html: 'Cabecera',
                            region: 'north'
                        },
                        {
                            html: 'Menú',
                            region: 'west'
                        },
                        {
                            xtype: 'principalMarco',
                            region: 'center'
                        },
                        {
                            html: 'Pie',
                            region: 'south'
                        }
                    ]
                }
            ]
        });
    }
});