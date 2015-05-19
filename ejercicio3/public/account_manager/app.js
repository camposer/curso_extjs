Ext.application({
    requires: ['Ext.container.Viewport'], // import
    name: 'AM', // nombre de la app y namespace

    appFolder: 'app', // dónde están los fuentes
    controllers: [ 
        'Users' 
    ],

    launch: function() { // método principal de la app
        Ext.create('Ext.container.Viewport', { // creando el viewport
            layout: 'fit', // disposición de elementos en pantalla (toma toda el área)
            items: [
                {
                    xtype: 'userlist' // alias de un componente
                }
            ]
        });
    }
});