// Import et utilisation du module express
const express = require('express');
const app = express();
// Import dotenv
require("dotenv/config");
// Import du router
const router = require('./router.js');
// Import du middleware 404
const middleware404 = require('./middlewares/middleware404');


// Configuration du moteur de template EJS
app.set("view engine", "ejs");
app.set("views", ('./views'));

// BodyParser pour Parse les datas en JSON
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Fichier accessible sans créer de route grâce au "public"
app.use(express.static("./public"));

// On plug le router
app.use(router);

// Apres le router, si la requête n'est pas interceptée et terminé par un des controllers du router), alors on passe au middleware de la 404
app.use(middleware404);

// Création du variable PORT
const port = process.env.PORT;

// Serveur sur écoute du port 5500
app.listen(port, () => {
  console.log('Server app listening on port ' + port);
});
