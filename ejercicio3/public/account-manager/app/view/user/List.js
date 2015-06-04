Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel', // lo define como tabla
    alias: 'widget.userlist', // xtype: userlist

    store: 'Users',
    title: 'All Users',

    initComponent: function() {
        // Definición de las columnas del grid
        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});