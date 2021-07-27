// Se importan los módulos instalados en el paso anterior. Los necesitamos para ejecutar el servidor Node.js y enviar correos electrónicos
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var admin= require('firebase-admin');
const app = express(); // se crea una nueva instancia de aplicación Express para inicializar el servicio

var serviceAccount = require("./proyectoregistros-589d7-firebase-adminsdk-rrf39-ddde108618.json");
//inicializar una app de admin
/*admin.inicializeApp({
  credential: admin.credential.applicationDefault(), //aplicar autenticación por defacto
  databaseURL:'https://proyectoregistros-589d7-default-rtdb.firebaseio.com/' //cadena de conexión
})
*/
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyectoregistros-589d7-default-rtdb.firebaseio.com/"
});

var database = admin.database();
var ref = database.ref("/News-list/"); ///AYUDAAAAAAAA
ref.remove(); // Clear all news



//Se configura el middleware Express para aceptar solicitudes CORS y analizar el cuerpo de la solicitud en JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//se inicia el servidor de aplicaciones en el puerto 3000
app.listen(3000, () => { //Vamos hacer que la variable escuche en el puerto 3000
  console.log("Server iniciado en puerto 3000"); //Mensaje por consola para que avise cuando escuche el servidor
});

// Se define un punto final de sendmail, que enviará correos electrónicos y responderá con el estado correspondiente
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  console.log(user);
  const mailOptions = {
    from: `"Registro de Cursos", "registro.cursosweb@mail.com"`,
    to: user.correo,
    subject: "Confirmacion de Registro",
    html: `<p>Gracias por inscribirte a nuestro curso de ${user.curso} el costo del mismo es de $${user.precio}</p>`
  };
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "proyectoangular2021@gmail.com",
      pass: "fbsjnepvvnmyxoch"
    }
  });
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400);
      res.end();
      return console.log(error);
    }
    console.log('Mensaje Enviado: %s', info.messageId);
    res.status(200);
    res.end();
    return "Enviado";
  });
});