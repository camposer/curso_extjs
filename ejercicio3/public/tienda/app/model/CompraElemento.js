Ext.define('Tienda.model.CompraElemento', {
    extend: 'Ext.data.Model', 
    fields: [ 
    	{ name: 'productoId', type: 'string' },
    	{ name: 'nombre', type: 'string' },
    	{ name: 'precio', type: 'float' }, 
    	{ name: 'cantidad', type: 'int' },
    	{ name: 'total', type: 'float' }
    ],
    belongsTo: 'Tienda.model.Compra'
});