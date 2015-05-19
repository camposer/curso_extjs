Ext.application({
	name: 'HM',

	launch: function() {
		/*
		Ext.require('Persona', function() {
			var p = new Persona({
				nombre: 'Juan',
				apellido: 'Pérez'
			});

			var texto = '[ nombre = ' + p.getNombre() + 
				', apellido = ' + p.getApellido() + 
				', edad = ' + p.getEdad() + ' ]';
			window.alert(texto);
			p.respirar();
		});
		*/
		Ext.require('Musico', function() {
			var m = new Musico({
                                nombre: 'Juan',
                                apellido: 'Pérez'
                        });
	                var texto = '[ nombre = ' + m.getNombre() + 
                                ', apellido = ' + m.getApellido() + 
                                ', edad = ' + m.getEdad() + ' ]';
                        window.alert(texto);
                        m.respirar();
			m.tocarGuitarra();
			m.componer();
			m.cantar();
			window.alert("compositor.tipo = " + m.tipo);
			window.alert("compositor.tipo = " + m.getTipo());
		});
	}
});
