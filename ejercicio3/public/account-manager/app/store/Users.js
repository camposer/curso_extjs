Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store', // todo store extiende de data.Store
    model: 'AM.model.User',
    autoLoad: true, // al cargar el store ejecuta load()

    proxy: {
        type: 'ajax', // tipo del proxy (server-side)
        api: {
	        read: 'data/users.json',
	        update: 'data/updateUsers.json'
    	},
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});