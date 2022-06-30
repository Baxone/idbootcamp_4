GET localhost:3000/personas/new
PUT localhost:3000/personas/edit

POST localhost:3000/contacto
DELETE localhost:3000/personas/remove
GET localhost:3000/products/by-id
PUT localhost:3000/users/edit/form


GET localhost:3000/products/all
DELETE localhost:3000/users/borrar/all
POST localhost:3000/products/create/new
PUT localhost:3000/edit

PUT localhost:3000/dashboard/personas/edit
GET localhost:3000/dashboard/personas
POST localhost:3000/dashboard/products/create

GET localhost:3000/dashboard/clientes/all
POST localhost:3000/dashboard/clientes/create
PUT localhost:3000/dashboard/clientes/edit



# PASOS

- (Terminal) Desde el directorio **servers** lanzamos la creación de la nueva app

```
express --view=pug --git appGimnasio
```

- ¡¡Seguimos las instrucciones que nor marque el terminal!!

- Crear las siguientes rutas

GET /clientes
GET /clientes/new
POST /clientes/create
GET /clientes/edit
POST /clientes/update
GET /clientes/delete