Ext.define('Tienda.view.producto.Lista' ,{
    extend: 'Ext.grid.Panel', 
    alias: 'widget.listaproductos', 

    store: 'Productos',
    title: 'Productos',

    initComponent: function() {
        this.columns = [
            {header: 'Id',  dataIndex: 'id',  flex: 1},
            {header: 'Nombre',  dataIndex: 'nombre',  flex: 1},
            {header: 'Precio', dataIndex: 'precio', flex: 1}
        ];

        this.callParent(arguments);
    }
});