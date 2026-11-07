const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const PORT = process.env.API_PORT || 3033;

const solicitantesRoute = require("./routes/solicitantesRoute");
const chamadosRoute = require("./routes/chamadosRoute");

app.use(express.json());
app.use("/solicitantes", solicitantesRoute);
app.use("/chamados", chamadosRoute);

app.use((req, res) => {
    res.status(404).json({ mensagem: "Rota não encontrada" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});