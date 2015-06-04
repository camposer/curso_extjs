Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller', // lo convierte en controller

    views: [ 
    	'user.List', // this.getUserListView();
    	'user.Edit' // this.getUserEditView()
    ],
    stores: [ 'Users' ], // this.getUsersStore()
    models: [ 'User' ], // this.getUserModel()

    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');

        this.control({ // registro todos los listeners de las vistas asociadas al controller
            'viewport > panel': { // ComponentQuery (parecido a Selector CSS)
                render: this.onPanelRendered // cuando se dispare el evento render del panel se ejecutará el método onPanelRendered
            },
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }            
        });        
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    editUser: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));

        var view = Ext.widget('useredit'); // crea la ventana

        view.down('form').loadRecord(record);
    },

	updateUser: function(button) {
	    var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(), // lo que me diste originalmente (del store)
	        values = form.getValues(); // los nuevos valores

	    record.set(values);
	    win.close();

	    // synchronize the store after editing the record
	    this.getUsersStore().sync();
	}    
});