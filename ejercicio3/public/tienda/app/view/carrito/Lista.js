Ext.define('Tienda.view.carrito.Lista' ,{
    extend: 'Ext.grid.Panel', 
    alias: 'widget.carritoLista', 

    store: 'CarritoElementos',
    title: 'Carrito',
    features: [{
        ftype: 'summary'
    }],

    initComponent: function() {
        this.columns = [
            {header: 'Nombre',  dataIndex: 'nombre',  flex: 1},
            {header: 'Precio', dataIndex: 'precio', flex: 1},
            {header: 'Cantidad', dataIndex: 'cantidad', flex: 1},
            {header: 'Total', dataIndex: 'total', flex:1, summaryType: 'sum' }
        ];

        this.tbar = [
            '->',
            {
                text: 'Comprar',
                action: 'comprar'
            },
            '-',
            {
                text: 'Cancelar',
                action: 'cancelar'
            }
        ];

        this.callParent(arguments);
    }
});