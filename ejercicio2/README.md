Ejercicio #2
============

##Objetivo

Repasar los conceptos básicos de JavaScript, orientación a objetos, JSON, DOM, HTML y CSS

##Actividades

0. Cree una interfaz que permita gestionar Productos (CRUD+) para que funcione únicamente con JavaScript. Debe utilizar la clase ProductoUtil (ejercicio anterior). Los objetos dinámicos deben ser mostrados en pantalla con DOM.

Orden sugerido de trabajo:
- Listar productos
- Agregar
- Eliminar
- Mostrar
- Modificar

NOTA: En el PDF adjunto (ejercicio2.pdf) podrá conseguir un mockup simple de la interfaz.

0. Modifique la clase ProductoUtil y producto.html para que funcione con objetos simples (JSON).
Pista: quitar el archivo producto.js

Esto:
```
var p = new Producto(tal, tal);
```

Cambiaría por esto:
```
var p = {
	nombre: tal,
	precio: tal
};
window.alert(p.nombre) // => tal
window.alert(p["nombre"]) // => tal
```

