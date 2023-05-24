# proyecto-cuso-node

El proyecto sera una API Rest de una lista de contactos o empleados de una empresa que mostrara una carta con sus datos. 
En este proyecto se hara uso de los conocimientos del curso de Nodejs, de flexbox y CSS Grid.
Ademas se intoducira migraciones que estan fuera del alcanse del curso de Nodejs

La idea es la siguiente:
Tendra un header con el nombre de la empresa, el avatar del aministrador y un icono de notificaciones (su no son necesarias).
En el inicio tendra un boton de agrega, la cantidad de empleados que tiene la empresa y se listaran los empleados, que se mostraran en forma de carta con su informacion (No es necesario mostrar toda la info) y cada uno tendra un boton de eliminar y uno editar. 

Podemos utiliza [fakerjs](https://fakerjs.dev/api/) para generar los datos aletorios de nuestra base de datos.
Los datos que contendra seran:
* Avatar
* Nombre
* Apellido  
* Edad
* Fecha de nacimiento
* Numero de telefono
* Email
* Ciudad
* provincia (estado)
* Direccion
* Area de trabajo
* Descripcion del trabajo
* Titulo de trabajo 
* Tipo de trabajo
* Años de experiencia
* Descripcion 

## Migraciones 
En este proyecto tambien se practicara Migraciones tanto para MySQL como para MongooDB con datos creados con aletoriamente con fakerjs
Para crear migraciones de bases de datos MySQL podemos utilizar [sequelize](https://sequelize.org/) que es una de las herramientas más populares.
[Curso sequelize migrations seeders](https://github.com/japsolo/curso-sequelize-migrations-seeders)
Para crear migraciones para mongoDB podemos utilizar mongoose o [migrate-mongoose](https://www.npmjs.com/package/migrate-mongoose).   

[Crear Seeders Mongo DB](https://ronaldl337.wordpress.com/2020/06/20/crear-seeders-en-node-js-y-mongo-db/)

## Correr migraciones 

-  `npm run mongo-migrate`: Corre las migraciones de mongo 
-  `npm run msql-migrate`: Corre las migraciones de mysql
-  `sequelize db:migrate:undo:all`: Revertirá todas las migraciones de mysql ejecutadas 
-  `sequelize db:migrate`: Corre las migraciones de mysql pendientes 

> Para mas comandos de sequelize revisar la documentacion [Curso sequelize migrations seeders](https://github.com/japsolo/curso-sequelize-migrations-seeders)

## Despliegue en produccion 
Para desplegar la app vamos a usar [railway](https://railway.app/).
La plataforma nos da un servicio gratuito de $5 que equivalen a 500 hs que se renueva todos los meses. 
[Documenteacion de railway](https://docs.railway.app/).
Si bien se puede deplgar todo en railway, en este proyecto lo vamos a hacer por separado,para poner en practica los conocimientos.

La base de datos: 
   - mongodb vamos a usar [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
      Nos provee un servicio de 500mb gratis para siempre, hay que tener en cuenta que para conectarse a la base de datos, nuestra app necesita un domio ip.
   - MySQL vamos a usar [PanetScale](https://planetscale.com/)
      Nos provee un servicio gratis por 30 dias
## Configuracion Variables 
### Ejemplo (Modo developer)
``` Bash
# Enviroment  develop || production || test
ENV= develop 

# App  
HOST = localhost
PORT = 5000

# Local  
DB_DATABASE= name_database
DB_HOST= `mongodb://host/name_database` || localhost
DB_PORT= 3306
DB_USER= user
DB_PASSWORD= password
DB_COLLECTION= table or colletion
DB_ENGINE = mongo || mysql

# Migration (numero de empleados que vamos a crear)  
CANT_EMPLOYEES = 50
```

### Ejemplo (Modo production)
``` Bash
# Enviroment  develop || production || test
ENV= production 

# App  
HOST = host
PORT = 5000

# Production   
DB_DATABASE_PRODUCTION= name_database
DB_HOST_PRODUCTION= `mongodb://host/name_database` || localhost
DB_PORT_PRODUCTION= 7000
DB_USER_PRODUCTION= user
DB_PASSWORD_PRODUCTION= password
DB_COLLECTION_PRODUCTION= table or colletion
DB_ENGINE_PRODUCTION= mongo || mysql

# Migration (numero de empleados que vamos a crear)  
CANT_EMPLOYEES= 50
```
