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

La idea de es algo asi 
![prototipo-proyecto](./Proyecto-Desktop.png)

### Migraciones 
En este proyecto tambien se practicara Migraciones tanto para MySQL como para MongooDB con datos creados con aletoriamente con fakerjs
Para crear migraciones de bases de datos MySQL podemos utilizar [sequelize](https://sequelize.org/) que es una de las herramientas más populares.
[Curso sequelize migrations seeders](https://github.com/japsolo/curso-sequelize-migrations-seeders)
Para crear migraciones para mongoDB podemos utilizar mongoose o [migrate-mongoose](https://www.npmjs.com/package/migrate-mongoose).   

[Crear Seeders Mongo DB](https://ronaldl337.wordpress.com/2020/06/20/crear-seeders-en-node-js-y-mongo-db/)
### Correr migraciones 

-  `npm run mongo-migrate`: Corre las migraciones de mongo 
-  `npm run msql-migrate`: Corre las migraciones de mysql
-  `sequelize db:migrate:undo:all`: Revertirá todas las migraciones de mysql ejecutadas 
-  `sequelize db:migrate`: Corre las migraciones de mysql pendientes 

> Para mas comandos de sequelize revisar la documentacion [Curso sequelize migrations seeders](https://github.com/japsolo/curso-sequelize-migrations-seeders)

### Despliegue en produccion 
Para desplegar la app vamos a usar [railway](https://railway.app/)
[Documenteacion de railway](https://docs.railway.app/)

Tambien podemos usar [fly.io](https://fly.io/) 
Investigar bien este servicio [documentacion de fly.io](https://fly.io/docs/)