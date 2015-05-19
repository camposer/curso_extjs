Ext.define('Persona', {
	config: {
		nombre: null,
		apellido: null,
		edad: null
	},

	constructor: function(config) {
		this.initConfig(config);
	},

	respirar: function() {
		window.alert('Estoy respirando...');
	}
});
