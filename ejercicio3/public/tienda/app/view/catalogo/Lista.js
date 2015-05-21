Ext.define('Tienda.view.catalogo.Lista' ,{
    extend: 'Ext.grid.Panel', 
    alias: 'widget.catalogoLista', 

    store: 'CatalogoElementos',
    title: 'Catálogo',
    selType: 'cellmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],

    initComponent: function() {
        this.columns = [
            {header: 'Nombre',  dataIndex: 'nombre',  flex: 1},
            {header: 'Precio', dataIndex: 'precio', flex: 1},
            {header: 'Cantidad', dataIndex: 'cantidad', flex:1,
                editor: {
                    xtype: 'numberfield'
                }
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
                text: 'Limpiar',
                action: 'limpiar'
            }
        ];

        this.callParent(arguments);
    }
});