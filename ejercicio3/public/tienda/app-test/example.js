describe("ProductoCtrl", function() {
Application = Ext.create('Ext.app.Application', {
        name: 'Tienda',

        controllers: [
            'ProductoCtrl'
        ]);

    var store = null, ctlr = null;

    beforeEach(function(){
        if (!ctlr) {
            ctlr = Application.getController('ProductoCtrl');
        }

        if (!store) {
            store = ctlr.getStore('Productos');
        }

        expect(store).toBeTruthy();

        waitsFor(
            function(){ return !store.isLoading(); 
			},
            "load never completed",
            4000
        );
    });

    it("Debería tener prodyctos",function(){
        expect(store.getCount()).toBeGreaterThan(1);
    });

});
