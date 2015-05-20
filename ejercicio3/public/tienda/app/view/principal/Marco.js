Ext.define('Tienda.view.principal.Marco' ,{
    extend: 'Ext.tab.Panel', 
    alias: 'widget.principalMarco', 

    items: [
        {
            title: 'Catálogo',
            html: 'Catálogo'
        },
        {
            title: 'Carrito',
            html: 'Carrito'
        },
        {
            xtype: 'productoLista'
        }
    ]
});