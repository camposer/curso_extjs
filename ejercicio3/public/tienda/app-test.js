Ext.Loader.setConfig({ enabled: true });

Ext.application({
        name: 'Tienda',

        controllers: [
            'ProductoCtrl'
        ],

        appFolder: './app',

        autoCreateViewport: false
    });
