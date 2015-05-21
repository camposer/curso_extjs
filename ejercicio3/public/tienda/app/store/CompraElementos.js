Ext.define('Tienda.store.CompraElementos', {
    extend: 'Ext.data.Store', 
    model: 'Tienda.model.CompraElemento',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url  : '/compras'
    }
});