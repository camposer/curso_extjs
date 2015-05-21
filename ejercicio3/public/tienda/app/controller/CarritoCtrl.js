Ext.define('Tienda.controller.CarritoCtrl', {
    extend: 'Ext.app.Controller',

    views: [ 
    	'carrito.Lista' 
    ],

    stores: [ 'CarritoElementos' ]

});