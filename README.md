# Projeto: Acompanhe Seu Parlamentar
 
*Uma ferramenta de código aberto para fiscalizar as votações de deputados federais e senadores no Brasil.*
 
---
 
## Objetivo
 
Facilitar o acesso do cidadão às informações sobre a atuação dos seus representantes eleitos, permitindo a consulta de forma rápida e visual sobre como cada deputado vota nas pautas do Congresso Nacional.
 
---
 
## Escopo da Versão 1.0 (MVP)
 
A primeira versão focará nas seguintes funcionalidades essenciais:
 
-   [ ] **Busca de Parlamentar:** Campo de busca para encontrar deputados pelo nome.
-   [ ] **Perfil do Parlamentar:** Página dedicada com informações básicas (foto, nome, partido, UF).
-   [ ] **Histórico de Votos:** Listagem clara das votações nominais do parlamentar.
-   [ ] **Detalhe do Voto:** Indicação visual do voto (Sim, Não, Abstenção, Obstrução) em cada pauta.
 
---
 
## Stack de Tecnologia
 
| Área      | Tecnologia              | Descrição                                         |
| :-------- | :---------------------- | :------------------------------------------------ |
| **Backend** | **Java (JDK 17+)** | Linguagem principal para a lógica de negócio.     |
|           | **Spring Boot 3** | Framework para construção da API REST.            |
|           | **PostgreSQL** | Banco de dados para persistir os dados coletados. |
| **Frontend**| **React 18** | Biblioteca para a construção da interface.        |
|           | **Vite** | Ferramenta de build e desenvolvimento local.      |
|           | **CSS Modules / Styled-Components** | Para estilização dos componentes.      |
| **DevOps** | **Git & GitHub** | Controle de versão e repositório do código.       |
|           | **Trello** | Gerenciamento de tarefas (Kanban).                |
 
---
 
## Como Executar o Projeto
 
### Pré-requisitos
 
-   [Git](https://git-scm.com/)
-   [Node.js (LTS)](https://nodejs.org/en/)
-   [Java JDK (versão 17 ou superior)](https://www.oracle.com/java/technologies/downloads/)
-   [Maven](https://maven.apache.org/download.cgi)
-   [Postman](https://www.postman.com/)
 
### Backend (API) e Frontend
 
```bash
BACKEND
# 1. Navegue até a pasta do backend
cd backend
 
# 2. (Primeira vez) Instale as dependências do Maven
./mvnw clean install
 
# 3. Inicie o servidor Spring Boot
./mvnw spring-boot:run
 
 
FRONTEND
# 1. Navegue até a pasta do backend
cd backend
 
# 2. (Primeira vez) Instale as dependências do Maven
./mvnw clean install
 
# 3. Inicie o servidor Spring Boot
./mvnw spring-boot:run
