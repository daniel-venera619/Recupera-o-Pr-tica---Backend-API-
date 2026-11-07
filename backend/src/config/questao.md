Recuperação Prática - Backend (API)
Conteúdo principal
Condições de conclusão
CONTEXTUALIZAÇÃO
Uma empresa de suporte técnico atende diversos clientes e recebe diariamente solicitações relacionadas a problemas em computadores, sistemas e equipamentos.

Atualmente, os atendimentos são registrados manualmente, dificultando o acompanhamento das solicitações. A equipe enfrenta problemas para localizar chamados, identificar quais ainda estão pendentes e acompanhar os atendimentos que já foram iniciados ou concluídos.

Para melhorar essa organização, a empresa decidiu contratar você para desenvolver uma API REST que permita controlar os chamdos de suporte técnico.

 
DESAFIO
Desenvolva uma API REST utilizando Node.js e Express, com integração ao banco de dados MySQL.

Ela deverá permitir o gerenciamento dos chamados de suporte técnico, contemplado operações de consulta, cadastro, atualização e exclusão.

Deverá ainda ser organizada utilizando o padrão arquitetural MVC.

 
Estrutura Fornecida
Para realizar a atividade, você receberá:

Diagrama Entidade-Relacionamento (DER);
Scritp SQL para criação e população inicial do Banco de Dados.
 
REQUISITOS FUNCIONAIS
A API deverá:

Utilizar Node.js e Express para sua construção;
Utilizar MySQL como Banco de Dados;
Realizar a conexão com o Banco de Dados utilizando a biblioteca mysql2; 
Utilizar a biblioteca dotenv para guardar as variáveis de ambiente;
Organizar o projeto usando a arquitetura MVC;
Disponibilizar as rotas necessárias para o gerenciamento dos chamados.
 
FUNCIONALIDADES OBRIGATÓRIAS
A API deverá permitir o gerenciamento dos solicitantes e dos chamados de suporte técnico.

 
1. Gerenciamento de solicitantes
Implemente as seguintes operações:

Consultar todos os solicitantes: retornar a lista de pessoas cadastradas no banco de dados;
Consultar um solicitante específico: localizar um solicitante pelo seu identificador;
Não é necessário implementar cadastro, atualização ou exclusão de solicitantes. Os registros já estarão disponíveis no banco de dados.
 
2. Gerenciamento de chamados
Implemente as seguintes operações:

Consultar todos os chamados: retornar os chamados cadastrados; 
Filtrar chamados: permitir a consulta por situação ou prioridade; 
Consultar um chamado específico: localizar um chamado pelo seu identificador; 
Cadastrar um chamado: registrar uma nova solicitação, vinculando-a a um solicitante já cadastrado; 
Atualizar um chamado: permitir a atualização completa dos dados por meio do método PUT; 
Excluir um chamado: remover um chamado pelo seu identificador.
 
3. Regras para o relacionamento
Todo chamado deverá estar vinculado a um solicitante existente;
Um solicitante poderá possuir vários chamados.
 
REGRAS DE NEGÓCIO E VALIDAÇÕES
Durante o desenvolvimento, considere as seguintes regras:

O nome do solicitante é obrigatório;
O e-mail do solicitante é obrigatório e deve possuir um formato válido;
O título e a descrição do chamado são obrigatórios;
A prioridade deve ser uma das seguintes opções: baixa, media ou alta;
A situação de um chamado deve ser uma das seguintes opções: aberta, emProgresso ou concluida;
Todo novo chamado deverá ser registrado inicialmente com a situação aberta;
Não será permitido cadastrar ou atualizar um chamado com informações inválidas;
Não será permitido atualizar ou excluir um chamado que não exista.
 
TRATAMENTO DE ERROS
A API deverá apresentar respostas adequadas para situações como:

Dados obrigatórios não informados;
Dados inválidos;
Chamado não encontrado;
Erros durante a comunicação com o banco de dados.
Utilize os códigos de status HTTP adequados para cada operação e situação.

 
ENTREGA
Ao finalizar, entregue:

O projeto da API desenvolvido;
O arquivo .env.example, contendo os nomes das variáveis de ambiente necessárias, sem expor senhas ou credenciais reais;
Um arquivo README.md com as instruções para executar a aplicação e a documentação das rotas implementadas.
Atenção: a API deverá estar funcional e integrada ao banco de dados fornecido. Teste as operações implementadas antes de realizar a entrega.