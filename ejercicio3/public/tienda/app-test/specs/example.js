// @see http://stackoverflow.com/questions/20119324/jasmine-2-0-rc-waits-is-not-defined
Ext.onReady(function() {
    var Application = Tienda.getApplication();

    describe("ProductoCtrl", function() {
        var store = null, ctrl = null;

        beforeEach(function(done){
            setTimeout(function() {
                if (!ctrl) {
                    ctrl = Application.getController('ProductoCtrl');
                }

                if (!store) {
                    store = ctrl.getStore('Productos');
                }

                expect(store).toBeTruthy();

                if (!store.isLoading()) 
                    done();
            }, 1000);
        });

        it("Debería tener productos",function(done){
            expect(store.getCount()).toBeGreaterThan(1);
            done();
        });
    });
});
