Ejercicio #3
============

##Objetivo

Repasar los conceptos de AJAX y ExtJS.

##Instrucciones

- Este ejercicio3 tiene una API Rest implementada con NodeJS sobre Express
- Para iniciar el proyecto en Windows:
```
C:EJERCICIO3> node_64.exe app
```
- Para ver cómo funciona la API puede consultar el fichero curl.sh
- Para ejecutar los ejercicios debe descargar el extjs-4.X y descomprimirlo dentro de la carpeta public (en Linux bastaría con un enlace simbólico)
- Los diferentes componentes desarrollados puede conseguirlos en:
	- Implementación JavaScript del CRUD de producto utilizando AJAX con jQuery. http://localhost:3000/producto
	- Implementación básica de ExtJS utilizando Clases, Herencia, Mixins, Configs y Statics. http://localhost:3000/hola-mundo
	- Implementación de la aplicación MVC de ejemplo del tutorial de ExtJS. http://localhost:3000/account-manager
	- Implementación ExtJS de una tienda en línea (CRUD productos, catálogo, carrito y gráfico). http://localhost:3000/tienda
- Un mockup (espantoso) del ejercicio puede conseguirlo en ejercicio3.pdf

##Actividades


###PARTE 1

0. Refactorice el código de producto-jquery.html (ejercicio 2) para que ahora utilice la API Rest de /productos

NOTA:
- Los ficheros producto.html y sus JS deberá copiarlos dentro de la carpeta public/producto del ejercicio3
- Cambiar el nombre de producto-jquery.html a index.html
- Para ejecutar el proyecto ahora deberá introducir en el navegador:
	http://localhost:3000/producto

###PARTE 2

0. Vea y comprenda el ejercicio account_manager (ejecutar, probar)
0. Refactorice el código de am (Account Manager) que seguimos con el tutorial de Ext JS para que ahora haga las operaciones de Actualización (U) y Lectura (R) de Productos (utilizando el proxy REST).
0. Refactorice el código de tienda para que ahora se puedan Agregar (C) y Eliminar (D) productos
2.1. Elimine múltiples filas en una sola operación
0. Incluya validaciones al CRUD para que todos los productos tengan precio>0 (validación global) y nombres que contengan al menos 3 caracteres (validación local). Si los campos no son válidos no debería poder editar el producto!
Ver: Guides -> Component -> The Form Package
0. Tienda. Ahora debe agregar las pantallas Inicio y Carrito, además del CRUD de producto que ya hicimos en el ejercicio anterior. Ver abajo:
Ver: Guides -> Layout Managers -> Layout Browser
0.0. Cree una nueva vista principal con Layout (Card) y dentro de esta agregar las otras vistas, a saber: Inicio, Carrito y CRUD (listaproductos y edicionproducto). Para mantener el código simple puede mantener un sólo controlador
0.0. Para la lógica de almacenamiento del carrito debe utilizar un proxy SessionStorage
NOTA: 
	- Primero implemente la parte visual y luego la parte funcional (SessionStore)
	- Ver Guides -> Layout Managers -> Layout Browser
	- Utilizar grids y para editar las cantidades el plugin CellEditing
0. Registre las compras y muestre en el 3er tab un gráfico de tarta. Modelo del objeto a enviar:
NOTA: No incluir ID (sino no reconoce que es un nuevo objeto)
```
GET /compras
POST /compras
{
	"productoId": 1,
	"nombre": "TV",
    "cantidad": 2
}

POST /compras
{
	"productoId": 2,
	"nombre": "DVD",
    "cantidad": 3
}
```
