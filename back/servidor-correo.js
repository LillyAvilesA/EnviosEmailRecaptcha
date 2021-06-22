//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
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
      user: "mailpruebas46@gmail.com",
      pass: "zdmmitiymhbonzvl"
    }
  });
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400);
      return console.log(error);
    }
    console.log('Mensaje Enviado: %s', info.messageId);
    res.status(200);
    return "Enviado";
  });
});