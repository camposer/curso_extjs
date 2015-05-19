Ext.define('Musico', {
	extend: 'Persona',
	
	mixins: { 
		guitarrista: 'Guitarrista', 
		compositor: 'Compositor', 
		cantante: 'Cantante' 
	},

	conflictivo: function()  {
		// TODO Buscar y resolver
		this.mixins['guitarrista'].coflictivo();
	},

	statics: {
		factory: function(config) {
			return new this(config);
		}
	}
});
