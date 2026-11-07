CREATE DATABASE IF NOT EXISTS centralChamados;
USE centralChamados;

-- =====================================================
-- TABELA: solicitantes
-- =====================================================
CREATE TABLE solicitantes (
    id INT AUTO_INCREMENT,
    nomeCompleto VARCHAR(120) NOT NULL,
    email VARCHAR(254) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    dataCadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_solicitantes
        PRIMARY KEY (id)
);

-- =====================================================
-- TABELA: chamados
-- =====================================================
CREATE TABLE chamados (
    id INT AUTO_INCREMENT,
    solicitanteId INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT NOT NULL,
    prioridade ENUM('baixa', 'media', 'alta')
        NOT NULL DEFAULT 'media',
    situacao ENUM('aberta', 'emProgresso', 'concluida')
        NOT NULL DEFAULT 'aberta',
    dataAbertura DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_chamados
        PRIMARY KEY (id),
    CONSTRAINT fk_chamados_solicitantes
        FOREIGN KEY (solicitanteId)
        REFERENCES solicitantes(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- =====================================================
-- INSERÇÃO DE DADOS: solicitantes
-- =====================================================
INSERT INTO solicitantes (nomeCompleto, email, telefone)
VALUES
('Mariana Oliveira', 'mariana.oliveira@email.com', '47999112233'),
('Rafael Santos', 'rafael.santos@email.com', '47999223344'),
('Beatriz Almeida', 'beatriz.almeida@email.com', NULL),
('Lucas Ferreira', 'lucas.ferreira@email.com', '47999334455'),
('Camila Rodrigues', 'camila.rodrigues@email.com', '47999445566');

-- =====================================================
-- INSERÇÃO DE DADOS: chamados
-- =====================================================
INSERT INTO chamados (solicitanteId, titulo, descricao, prioridade, situacao) VALUES
(1, 'Computador não inicia', 'O computador apresenta tela preta ao ser ligado.', 'alta', 'aberta'),
(2, 'Problema de acesso ao sistema', 'O sistema interno apresenta erro durante o login.', 'media', 'emProgresso'),
(1, 'Instalação de impressora', 'Solicito auxílio para instalar uma impressora.', 'baixa', 'concluida'),
(3, 'Internet instável', 'A conexão apresenta quedas frequentes durante o expediente.', 'alta', 'aberta'),
(4, 'Atualização de software', 'É necessário atualizar o software do setor administrativo.', 'media', 'emProgresso'),
(5, 'Teclado com defeito', 'Algumas teclas do teclado não estão funcionando corretamente.', 'baixa', 'aberta'),
(2, 'Lentidão no computador', 'O computador apresenta lentidão durante a utilização dos sistemas.', 'media', 'concluida'),
(3, 'Falha na conexão de rede', 'A estação de trabalho não consegue acessar a rede interna.', 'alta', 'emProgresso');

-- =====================================================
-- CONSULTAS PARA CONFERÊNCIA DOS DADOS
-- =====================================================

-- Consultar todos os solicitantes
SELECT * 
FROM solicitantes;

-- Consultar todos os chamados
SELECT *
FROM chamados;

-- Consultar chamados com os dados dos solicitantes
SELECT chamados.id, chamados.titulo, chamados.descricao, chamados.prioridade, chamados.situacao, chamados.dataAbertura, solicitantes.id AS solicitanteId, solicitantes.nomeCompleto, solicitantes.email
FROM chamados
INNER JOIN solicitantes
    ON chamados.solicitanteId = solicitantes.id;

-- Consultar somente chamados em aberto
SELECT *
FROM chamados
WHERE situacao = 'aberta';

-- Consultar chamados de alta prioridade
SELECT *
FROM chamados
WHERE prioridade = 'alta';