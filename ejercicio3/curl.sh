#!/bin/bash

# Obtener todos
curl http://localhost:3000/productos ;  echo

# Agregar 
curl -X POST -d '{ "nombre": "TV", "precio": 500 }' -H "Content-Type: application/json" http://localhost:3000/productos ; echo

# Actualizar
curl -X PUT -d '{ "nombre": "TV LED", "precio": "600" }' -H "Content-Type: application/json" http://localhost:3000/productos/3 ; echo

# Obtener uno
curl http://localhost:3000/productos/3 ; echo

# Eliminar 
curl -X DELETE http://localhost:3000/productos/3 ; echo

# Obtener todos
curl http://localhost:3000/productos ;  echo
