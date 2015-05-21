Ext.define('Tienda.store.CatalogoElementos', {
    extend: 'Ext.data.Store', 
    model: 'Tienda.model.CatalogoElemento',
    autoLoad: true, 

    proxy: {
        type: 'ajax', 
        api: {
	        read: '/productos'
    	},
        reader: {
            type: 'json'
		}
    }
});