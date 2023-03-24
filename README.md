# proyecto-cuso-node

El proyecto sera un CRUD de una lista de creadores de contenidos, los cuales se vera un boton para eliminar y editar,la infomacion del usuario y la cantidad de seguidores.
En el header tendra Inicio, agregra, notificaciones, mensajes. 
Lo importante es poder es poder listar los usuarios, agregar, eliminar y editar un usuario. las demas funcionalidad no son necesarias. 
Podemos utiliza [fakerjs](https://fakerjs.dev/api/) para generar los datos aletorios de nuestra base de datos.
Los datos que contendra seran:
* Imagen de Portada
* Avatar
* Nombre de usuario
* Nombre
* Apellido  
* Edad
* Cargos (Dedicacaion / empleo)
* Descripcion
* Segidores

La idea de es algo asi 
![prototipo-proyecto](./Proyecto-Desktop.png)

### Migraciones 
En este proyecto tambien se practicara Migraciones tanto para MySQL como para MongooDB con datos creados con aletoriamente con fakerjs
Para crear migraciones de bases de datos MySQL podemos utilizar [sequelize](https://sequelize.org/) que es una de las herramientas más populares.
Para crear migraciones para mongoDB podemos utilizar mongoose.