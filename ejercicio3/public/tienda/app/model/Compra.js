Ext.define('Tienda.model.Compra', {
    extend: 'Ext.data.Model', 
    fields: [ 'fecha', 'cliente' ],
    hasMany: { 
    	model: 'Tienda.model.CompraElemento', 
    	name: 'elementos' 
    }
});