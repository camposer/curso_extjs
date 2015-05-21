Ext.define('Tienda.store.CarritoElementos', {
    extend: 'Ext.data.Store', 
    model: 'Tienda.model.CarritoElemento',
    autoLoad: true,

    proxy: {
        type: 'sessionstorage',
        id  : 'sessionStorageCarritoElementos'
    }
});