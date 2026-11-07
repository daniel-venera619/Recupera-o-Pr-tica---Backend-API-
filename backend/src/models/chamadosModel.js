
const bd = require("../config/database");

async function buscarTodos() {
    const sql = `SELECT * FROM chamados`;
    const [resultado] = await bd.query(sql);
    return resultado;
}

async function buscarPorSituacao(situacao) {
    const sql = `SELECT * FROM chamados WHERE situacao = ?`;
    const [resultado] = await bd.query(sql, [situacao]);
    return resultado;
}

async function buscarPorPrioridade(prioridade) {
    const sql = `SELECT * FROM chamados WHERE prioridade = ?`;
    const [resultado] = await bd.query(sql, [prioridade]);
    return resultado;
}

async function buscarPorId(id) {
    const sql = `
        SELECT
            chamados.*,
            solicitantes.nomeCompleto,
            solicitantes.email,
            solicitantes.telefone
        FROM chamados
        INNER JOIN solicitantes
            ON chamados.solicitanteId = solicitantes.id
        WHERE chamados.id = ?
    `;
    const [resultado] = await bd.query(sql, [id]);
    return resultado[0];
}

async function criar(solicitanteId, titulo, descricao, prioridade) {
    const sql = `
        INSERT INTO chamados
        (solicitanteId, titulo, descricao, prioridade)
        VALUES (?, ?, ?, ?)
    `;
    const [resultado] = await bd.query(sql, [
        solicitanteId,
        titulo,
        descricao,
        prioridade
    ]);
    return resultado.insertId;
}

async function atualizar(id, solicitanteId, titulo, descricao, prioridade, situacao) {
    const sql = `
        UPDATE chamados
        SET
            solicitanteId = ?,
            titulo = ?,
            descricao = ?,
            prioridade = ?,
            situacao = ?
        WHERE id = ?
    `;
    const [resultado] = await bd.query(sql, [
        solicitanteId,
        titulo,
        descricao,
        prioridade,
        situacao,
        id
    ]);
    return resultado.affectedRows;
}

async function excluir(id) {
    const sql = `
        DELETE FROM chamados
        WHERE id = ?
    `;
    const [resultado] = await bd.query(sql, [id]);
    return resultado.affectedRows;
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
