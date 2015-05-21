Ext.define('Tienda.view.principal.Marco' ,{
    extend: 'Ext.tab.Panel', 
    alias: 'widget.principalMarco', 

    items: [
        {
            xtype: 'catalogoLista'
        },
        {
            xtype: 'carritoLista'
        },
        {
            xtype: 'productoLista'
        }
    ]
});