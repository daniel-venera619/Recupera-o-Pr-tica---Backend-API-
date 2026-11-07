const express = require("express");
const router = express.Router();

const solicitantesController = require("../controllers/solicitantesController");
router.get("/",solicitantesController.buscarTodos);
router.get("/:id", solicitantesController.buscarPorId);

module.exports = router;