const express = require("express");
const router = express.Router();

const controller = require("../controllers/clientControllers")

//DEMANDA: Ver todos os clientes cadastrados
router.get("/all", controller.getAll);
router.post("/register", controller.registerClient);

module.exports = router;