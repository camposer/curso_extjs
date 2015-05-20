Ext.define('Tienda.store.Productos', {
    extend: 'Ext.data.Store', 
    model: 'Tienda.model.Producto',
    autoLoad: true, 

    proxy: {
        type: 'rest',
        url : '/productos'
    }
});