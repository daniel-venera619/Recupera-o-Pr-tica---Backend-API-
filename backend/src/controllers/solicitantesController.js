const solicitantesModel = require("../models/solicitantesModel");

const buscarTodos = async (req, res) => {
    try {
        const solicitantes = await solicitantesModel.buscarTodos();
        return res.status(200).json(solicitantes);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar solicitantes",
            erro: erro.message
        });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ mensagem: "ID inválido" });
        }

        const solicitante = await solicitantesModel.buscarPorId(id);

        if (!solicitante) {
            return res.status(404).json({ mensagem: "Solicitante não encontrado" });
        }

        return res.status(200).json(solicitante);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar solicitante",
            erro: erro.message
        });
    }
};

module.exports = {
    buscarTodos,
    buscarPorId
};
