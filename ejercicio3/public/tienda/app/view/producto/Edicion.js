Ext.define('Tienda.view.producto.Edicion', {
    extend: 'Ext.window.Window', 
    alias: 'widget.edicionproducto',

    title: 'Editar producto',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        readOnly: true,
                        name : 'id',
                        fieldLabel: 'Id'
                    },
                    {
                        xtype: 'textfield',
                        name : 'nombre',
                        fieldLabel: 'Nombre'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'precio',
                        fieldLabel: 'Precio'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Guardar',
                action: 'guardar'
            },
            {
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});