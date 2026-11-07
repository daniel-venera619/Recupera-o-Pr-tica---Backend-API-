const bd = require("../config/database");

async function buscarTodos() {
    const sql = `SELECT * FROM solicitantes`;
    const [resultado] = await bd.query(sql);

    return resultado;
}

async function buscarPorId(id) {

    const sql = `SELECT * FROM solicitantes WHERE id = ?`;
    const [resultado] = await bd.query(sql, [id]);

    return resultado[0];
}

module.exports = {
    buscarTodos,
    buscarPorId
};
