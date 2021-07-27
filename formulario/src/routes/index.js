const admin= require('firebase-admin'); // requerimos conexión firebase
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

//var ref = admin.database().ref('formulario/usuario');
const db = admin.database();

const{Router} = require('express');// importamos desde el módulo express
const router= Router(); //Se define objeto Router para definir rutas

/*router.get('/', (req, res) => {
    db.ref('usuarios').once('value', (snapshot) => {
       data = snapshot.val();
       res.render('servidor-correo', {usuarios: data})
    });
})*/
router.get('/', (req, res) => {
       res.render('servidor-correo');
    });

router.post('/nuevo-usuario', (req, res) => {
    console.log(req.body);
    const newUsuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        correo: req.body.correo,
        tipoPersona: req.body.tipoPersona,
        cursot: req.body.cursot
        

    }
    db.ref('usuarios').push(newUsuario);
  //  res.redirect('/');
  res.send('recibido');
});

/*router.get('/delete-usuario/:id', (req, res) => {
    db.ref('usuarios/' + req.params.id).remove();
    res.redirect('/');
});*/
module.exports=router;