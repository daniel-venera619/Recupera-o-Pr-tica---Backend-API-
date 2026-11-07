
const chamadosModel = require("../models/chamadosModel");
const bd = require("../config/database");


async function buscarTodos(req, res) {
    try {
        const resultado = await chamadosModel.buscarTodos();

        return res.status(200).json(resultado);

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar chamados",
            erro: erro.message
        });
    }
}

async function buscarPorSituacao(req, res) {
    try {
        const situacao = req.params.situacao;

        const situacoes = ["aberta", "emProgresso", "concluida"];

        if (!situacoes.includes(situacao)) {
            return res.status(400).json({
                mensagem: "Situação inválida"
            });
        }

        const resultado = await chamadosModel.buscarPorSituacao(situacao);

        return res.status(200).json(resultado);

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar chamados por situação",
            erro: erro.message
        });
    }
}

async function buscarPorPrioridade(req, res) {
    try {
        const prioridade = req.params.prioridade;

        const prioridades = ["baixa", "media", "alta"];

        if (!prioridades.includes(prioridade)) {
            return res.status(400).json({
                mensagem: "Prioridade inválida"
            });
        }

        const resultado = await chamadosModel.buscarPorPrioridade(prioridade);

        return res.status(200).json(resultado);

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar chamados por prioridade",
            erro: erro.message
        });
    }
}

async function buscarPorId(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensagem: "ID inválido"
            });
        }

        const resultado = await chamadosModel.buscarPorId(id);

        if (!resultado) {
            return res.status(404).json({
                mensagem: "Chamado não encontrado"
            });
        }

        return res.status(200).json(resultado);

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar chamado",
            erro: erro.message
        });
    }
}

async function criar(req, res) {
    try {
        const {
            solicitanteId,
            titulo,
            descricao,
            prioridade
        } = req.body;

        if (!solicitanteId || !titulo || !descricao || !prioridade) {
            return res.status(400).json({
                mensagem: "Preencha todos os campos obrigatórios"
            });
        }

        if (!Number.isInteger(Number(solicitanteId)) || Number(solicitanteId) <= 0) {
            return res.status(400).json({
                mensagem: "ID do solicitante inválido"
            });
        }

        const prioridades = ["baixa", "media", "alta"];

        if (!prioridades.includes(prioridade)) {
            return res.status(400).json({
                mensagem: "Prioridade inválida"
            });
        }


        const [solicitante] = await bd.query(
            "SELECT id FROM solicitantes WHERE id = ?",
            [solicitanteId]
        );

        if (solicitante.length === 0) {
            return res.status(404).json({
                mensagem: "Solicitante não encontrado"
            });
        }

        const id = await chamadosModel.criar(
            solicitanteId,
            titulo,
            descricao,
            prioridade
        );

        return res.status(201).json({
            mensagem: "Chamado cadastrado com sucesso",
            id: id
        });

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar chamado",
            erro: erro.message
        });
    }
}

async function atualizar(req, res) {
    try {
        const id = Number(req.params.id);

        const {
            solicitanteId,
            titulo,
            descricao,
            prioridade,
            situacao
        } = req.body;

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensagem: "ID do chamado inválido"
            });
        }

        if (!solicitanteId || !titulo || !descricao || !prioridade || !situacao) {
            return res.status(400).json({
                mensagem: "Preencha todos os campos obrigatórios"
            });
        }

        if (!Number.isInteger(Number(solicitanteId)) || Number(solicitanteId) <= 0) {
            return res.status(400).json({
                mensagem: "ID do solicitante inválido"
            });
        }

        const prioridades = ["baixa", "media", "alta"];
        const situacoes = ["aberta", "emProgresso", "concluida"];

        if (!prioridades.includes(prioridade)) {
            return res.status(400).json({
                mensagem: "Prioridade inválida"
            });
        }

        if (!situacoes.includes(situacao)) {
            return res.status(400).json({
                mensagem: "Situação inválida"
            });
        }

      
        const chamado = await chamadosModel.buscarPorId(id);

        if (!chamado) {
            return res.status(404).json({
                mensagem: "Chamado não encontrado"
            });
        }

        const [solicitante] = await bd.query(
            "SELECT id FROM solicitantes WHERE id = ?",
            [solicitanteId]
        );

        if (solicitante.length === 0) {
            return res.status(404).json({
                mensagem: "Solicitante não encontrado"
            });
        }

        await chamadosModel.atualizar(
            id,
            solicitanteId,
            titulo,
            descricao,
            prioridade,
            situacao
        );

        return res.status(200).json({
            mensagem: "Chamado atualizado com sucesso"
        });

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao atualizar chamado",
            erro: erro.message
        });
    }
}

async function excluir(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensagem: "ID inválido"
            });
        }

        const chamado = await chamadosModel.buscarPorId(id);

        if (!chamado) {
            return res.status(404).json({
                mensagem: "Chamado não encontrado"
            });
        }

        await chamadosModel.excluir(id);

        return res.status(200).json({
            mensagem: "Chamado excluído com sucesso"
        });

    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao excluir chamado",
            erro: erro.message
        });
    }
}

module.exports = {
    buscarTodos,
    buscarPorSituacao,
    buscarPorPrioridade,
    buscarPorId,
    criar,
    atualizar,
    excluir
};