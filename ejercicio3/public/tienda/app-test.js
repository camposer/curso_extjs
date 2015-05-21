Ext.Loader.setConfig({ enabled: true });

Ext.application({
        name: 'Tienda',

        controllers: [
            'ProductoCtrl'
        ],

        autoCreateViewport: false,

        launch: function() {
            var jasmineEnv = jasmine.getEnv();
            jasmineEnv.updateInterval = 1000;
            jasmineEnv.execute();
        }
    });
