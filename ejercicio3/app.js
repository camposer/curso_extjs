
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/productos', routes.obtenerProductos);
app.get('/productos/:id', routes.obtenerProducto);
app.post('/productos', routes.agregarProducto);
app.put('/productos/:id', routes.modificarProducto);
app.delete('/productos/:id', routes.eliminarProducto);

//app.get('/compras', routes.obtenerCompras);
app.get('/compras', routes.obtenerComprasPorProducto);
app.post('/compras', routes.agregarCompra);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
