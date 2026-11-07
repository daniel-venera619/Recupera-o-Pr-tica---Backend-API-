
const express = require("express");
const router = express.Router();


const chamadosController = require("../controllers/chamadosController");
router.get("/", chamadosController.buscarTodos);
router.get("/situacao/:situacao", chamadosController.buscarPorSituacao);
router.get("/prioridade/:prioridade", chamadosController.buscarPorPrioridade);
router.get("/:id", chamadosController.buscarPorId);
router.post("/", chamadosController.criar);
router.put("/:id", chamadosController.atualizar);
router.delete("/:id", chamadosController.excluir);

module.exports = router;