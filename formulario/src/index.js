const express = require() //En la constante express voy a guardar l oque requiero del módulo express
const app= express(); //Inicializo 
const path = require('path'); //Se guarda en la constante path el módulo path que nos permitirá saber en donde está una carpeta o un archivo

app.use(require('./routes/index')) //requerimos el archivo index de la carpeta routes


app.use(express.static(path.join(__filename, 'app.component.html'))) //nos permite acceder a una carpeta. Me va a dar la ruta de la carpeta pública del servidor



app.listen(4200, () => { //Vamos hacer que la variable escuche en el puerto 4200
console.log('Server en puerto 4200') //Mensaje por consola para que avise cuando escuche el servidor
})