// src/data/mockParlamentares.js

export const MOCK_PARLAMENTARES = [
  {
    id: 204554,
    nome: "Abilio Brunini",
    siglaPartido: "PL",
    siglaUf: "MT",
    urlFoto: "https://www.camara.leg.br/internet/deputado/bandep/204554.jpg",
    tipo: "Deputado Federal",
    comissoes: ["Comissão de Fiscalização Financeira", "Comissão de Segurança Pública"],
    frentes: [
      { nome: "Frente Parlamentar da Segurança Pública", coerencia: 95 },
      { nome: "Frente Parlamentar do Empreendedorismo", coerencia: 78 }
    ],
    assiduidade: {
      presencaPlenario: 85,
      presencaComissoes: 60,
    }
  },
  {
    id: 220593,
    nome: "Abilio Santana",
    siglaPartido: "PSC",
    siglaUf: "BA",
    urlFoto: "https://www.camara.leg.br/internet/deputado/bandep/220593.jpg",
    tipo: "Deputado Federal",
    comissoes: ["Comissão de Direitos Humanos, Minorias e Igualdade Racial"],
    frentes: [
      { nome: "Frente Parlamentar Evangélica", coerencia: 98 }
    ],
    assiduidade: {
      presencaPlenario: 98,
      presencaComissoes: 92,
    }
  },
  {
    id: 99999,
    nome: "Senadora Fictícia",
    siglaPartido: "PDB",
    siglaUf: "SP",
    urlFoto: "https://this-person-does-not-exist.com/img/avatar-gen118d7831309325916ed2895f57731773.jpg",
    tipo: "Senador(a)",
    comissoes: ["Comissão de Assuntos Econômicos (CAE)"],
    frentes: [
      { nome: "Frente Parlamentar pela Educação", coerencia: 65 }
    ],
    assiduidade: {
      presencaPlenario: 75,
      presencaComissoes: 88,
    }
  }
];