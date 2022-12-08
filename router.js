// Création d'un nouveau fichier router.js
const express = require("express");
const mainController = require("./controllers/mainController");

// Création d'un router
const router = express.Router();

// On configure ce que fait le router

// Afficher la home page
router.get("/", mainController.renderHomePage);

router.get("/project", mainController.renderProjectPage);



// Export du module router
module.exports = router;
