bplist00�_WebMainResource�	
_WebResourceTextEncodingName_WebResourceData_WebResourceMIMEType_WebResourceFrameName^WebResourceURLUutf-8O',<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #0000ff; -webkit-text-stroke: #0000ff}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; -webkit-text-stroke: #000000; min-height: 16.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; -webkit-text-stroke: #000000}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #900112; -webkit-text-stroke: #900112}
    span.s1 {font-kerning: none; background-color: #fffffe}
    span.s2 {font-kerning: none}
    span.s3 {font-kerning: none; color: #0000ff; background-color: #fffffe; -webkit-text-stroke: 0px #0000ff}
    span.s4 {font-kerning: none; color: #900112; background-color: #fffffe; -webkit-text-stroke: 0px #900112}
    span.s5 {font-kerning: none; color: #000000; background-color: #fffffe; -webkit-text-stroke: 0px #000000}
  </style>
</head>
<body>
<p class="p1"><span class="s1"># Projeto: Acompanhe Seu Parlamentar</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1"><i>*Uma ferramenta de código aberto para fiscalizar as votações de deputados federais e senadores no Brasil.*</i><i></i></span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">---</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">## Objetivo</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1">Facilitar o acesso do cidadão às informações sobre a atuação dos seus representantes eleitos, permitindo a consulta de forma rápida e visual sobre como cada deputado vota nas pautas do Congresso Nacional.</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">---</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">## Escopo da Versão 1.0 (MVP)</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1">A primeira versão focará nas seguintes funcionalidades essenciais:</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s3">- </span><span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">[ ]</span><span class="s1"> <b>**Busca de Parlamentar:**</b> Campo de busca para encontrar deputados pelo nome.</span></p>
<p class="p3"><span class="s3">- </span><span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">[ ]</span><span class="s1"> <b>**Perfil do Parlamentar:**</b> Página dedicada com informações básicas (foto, nome, partido, UF).</span></p>
<p class="p3"><span class="s3">- </span><span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">[ ]</span><span class="s1"> <b>**Histórico de Votos:**</b> Listagem clara das votações nominais do parlamentar.</span></p>
<p class="p3"><span class="s3">- </span><span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">[ ]</span><span class="s1"> <b>**Detalhe do Voto:**</b> Indicação visual do voto (Sim, Não, Abstenção, Obstrução) em cada pauta.</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">---</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">## Stack de Tecnologia</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">| Área<span class="Apple-converted-space">      </span>| Tecnologia<span class="Apple-converted-space">              </span>| Descrição <span class="Apple-converted-space">                                        </span>|</span></p>
<p class="p1"><span class="s1">| :-------- | :---------------------- | :------------------------------------------------ |</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <b>**Backend**</b> </span><span class="s3">|</span><span class="s1"> <b>**Java (JDK 17+)**</b> </span><span class="s3">|</span><span class="s1"> Linguagem principal para a lógica de negócio. <span class="Apple-converted-space">    </span></span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <span class="Apple-converted-space">          </span></span><span class="s3">|</span><span class="s1"> <b>**Spring Boot 3**</b> </span><span class="s3">|</span><span class="s1"> Framework para construção da API REST.<span class="Apple-converted-space">            </span></span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <span class="Apple-converted-space">          </span></span><span class="s3">|</span><span class="s1"> <b>**PostgreSQL**</b> </span><span class="s3">|</span><span class="s1"> Banco de dados para persistir os dados coletados. </span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <b>**Frontend**</b></span><span class="s3">|</span><span class="s1"> <b>**React 18**</b> </span><span class="s3">|</span><span class="s1"> Biblioteca para a construção da interface.<span class="Apple-converted-space">        </span></span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <span class="Apple-converted-space">          </span></span><span class="s3">|</span><span class="s1"> <b>**Vite**</b> </span><span class="s3">|</span><span class="s1"> Ferramenta de build e desenvolvimento local.<span class="Apple-converted-space">      </span></span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <span class="Apple-converted-space">          </span></span><span class="s3">|</span><span class="s1"> <b>**CSS Modules / Styled-Components**</b> </span><span class="s3">|</span><span class="s1"> Para estilização dos componentes.<span class="Apple-converted-space">      </span></span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <b>**DevOps**</b> </span><span class="s3">|</span><span class="s1"> <b>**Git &amp; GitHub**</b> </span><span class="s3">|</span><span class="s1"> Controle de versão e repositório do código. <span class="Apple-converted-space">      </span></span><span class="s3">|</span></p>
<p class="p3"><span class="s3">|</span><span class="s1"> <span class="Apple-converted-space">          </span></span><span class="s3">|</span><span class="s1"> <b>**Trello**</b> </span><span class="s3">|</span><span class="s1"> Gerenciamento de tarefas (Kanban).<span class="Apple-converted-space">                </span></span><span class="s3">|</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">---</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">## Como Executar o Projeto</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">### Pré-requisitos</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p4"><span class="s3">- </span><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">[</span><span class="s5">Git</span><span class="s1">](https://git-scm.com/)</span></p>
<p class="p4"><span class="s3">- </span><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">[</span><span class="s5">Node.js (LTS)</span><span class="s1">](https://nodejs.org/en/)</span></p>
<p class="p4"><span class="s3">- </span><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">[</span><span class="s5">Java JDK (versão 17 ou superior)</span><span class="s1">](https://www.oracle.com/java/technologies/downloads/)</span></p>
<p class="p4"><span class="s3">- </span><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">[</span><span class="s5">Maven</span><span class="s1">](https://maven.apache.org/download.cgi)</span></p>
<p class="p4"><span class="s3">- </span><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">[</span><span class="s5">Postman</span><span class="s1">](https://www.postman.com/)</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">### Backend (API) e Frontend</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p4"><span class="s1">```bash</span></p>
<p class="p3"><span class="s1">BACKEND</span></p>
<p class="p3"><span class="s1"># 1. Navegue até a pasta do backend</span></p>
<p class="p3"><span class="s1">cd backend</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1"># 2. (Primeira vez) Instale as dependências do Maven</span></p>
<p class="p3"><span class="s1">./mvnw clean install</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1"># 3. Inicie o servidor Spring Boot</span></p>
<p class="p3"><span class="s1">./mvnw spring-boot:run</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1">FRONTEND</span></p>
<p class="p3"><span class="s1"># 1. Navegue até a pasta do backend</span></p>
<p class="p3"><span class="s1">cd backend</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1"># 2. (Primeira vez) Instale as dependências do Maven</span></p>
<p class="p3"><span class="s1">./mvnw clean install</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p3"><span class="s1"># 3. Inicie o servidor Spring Boot</span></p>
<p class="p3"><span class="s1">./mvnw spring-boot:run</span></p>
</body>
</html>
Ytext/htmlP_file:///index.html    ( F X n � � �'�'�'�                           '�