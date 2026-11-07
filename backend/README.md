# API de Central de Chamados

## Descrição
API REST em Node.js e Express para gerenciar chamados de suporte técnico, conectada ao MySQL.

## Requisitos
- Node.js
- MySQL
- npm

## Configuração do ambiente
1. Copie o arquivo `.env.example` para `.env`.
2. Ajuste as variáveis conforme o seu ambiente local.

Exemplo:
```env
API_PORT=3033
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
DB_NAME=centralChamados
```

## Instalação
```bash
npm install
```

## Executar a aplicação
```bash
npm start
```

A API ficará disponível em:
```text
http://localhost:3033
```

## Banco de dados
Antes de testar as rotas, execute o script localizado em `src/config/script.sql` para criar o banco e popular os dados iniciais.

## Rotas

### Solicitantes
- `GET /solicitantes` - lista todos os solicitantes
- `GET /solicitantes/:id` - busca um solicitante pelo id

### Chamados
- `GET /chamados` - lista todos os chamados
- `GET /chamados/situacao/:situacao` - filtra por situação (`aberta`, `emProgresso`, `concluida`)
- `GET /chamados/prioridade/:prioridade` - filtra por prioridade (`baixa`, `media`, `alta`)
- `GET /chamados/:id` - busca um chamado pelo id
- `POST /chamados` - cadastra um chamado
- `PUT /chamados/:id` - atualiza um chamado
- `DELETE /chamados/:id` - exclui um chamado

## Estrutura MVC
- `src/controllers` - lógica das rotas
- `src/models` - acesso ao banco
- `src/routes` - definição das rotas
- `src/config` - conexão e scripts do banco

## Observações
- Todo chamado deve estar vinculado a um solicitante existente.
- A situação padrão de um novo chamado é `aberta`.
- A API retorna mensagens e códigos HTTP adequados para erros e validações.
