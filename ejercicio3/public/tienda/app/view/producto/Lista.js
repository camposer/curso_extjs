Ext.define('Tienda.view.producto.Lista' ,{
    extend: 'Ext.grid.Panel', 
    alias: 'widget.productoLista', 

    store: 'Productos',
    title: 'Productos',
    multiSelect: true,

    initComponent: function() {
        this.columns = [
            {header: 'Id',  dataIndex: 'id',  flex: 1},
            {header: 'Nombre',  dataIndex: 'nombre',  flex: 1},
            {header: 'Precio', dataIndex: 'precio', flex: 1},
            {
                xtype:'actioncolumn',
                width:50,
                items: [{
                    icon: '/ext-4/examples/restful/images/delete.png',
                    tooltip: 'Eliminar',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        
                        grid.getStore().remove(rec);
                        grid.getStore().sync();
                    }
                }]
            }
        ];

        this.tbar = [
            '->',
            {
                text: 'Agregar',
                action: 'agregar'
            },
            '-',
            {
                text: 'Eliminar',
                action: 'eliminar'
            }
        ];

        this.callParent(arguments);
    }
});