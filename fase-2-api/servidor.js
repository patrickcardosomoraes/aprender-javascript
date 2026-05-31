// ============================================================
// FASE 2 — API REST com Node.js + Express
//
// Execute com:  node servidor.js
// Teste com:    curl http://localhost:3000/tarefas
// ============================================================

// "require" é como o Node.js importa bibliotecas instaladas via npm
const express = require("express");

// express() cria a aplicação — pense como "ligar o restaurante"
const app = express();
const PORTA = 3000;

// ---- MIDDLEWARE ----
// Middleware é um código que roda ANTES de chegar nas rotas.
// express.json() ensina o Express a ler o corpo das requisições POST
// (por padrão ele não sabe ler JSON vindo do cliente)
app.use(express.json());

// ---- DADOS EM MEMÓRIA ----
// Por enquanto guardamos tudo numa variável.
// Na Fase 3 substituiremos por um arquivo ou banco de dados.
let tarefas = [
  { id: 1, titulo: "Aprender o que é um servidor",  concluida: true  },
  { id: 2, titulo: "Entender GET, POST e DELETE",    concluida: false },
  { id: 3, titulo: "Criar minha primeira API REST",  concluida: false },
];
let proximoId = 4;

// ============================================================
// ROTAS — cada rota é um "cardápio" que o servidor oferece
// app.get / app.post / app.delete  →  verbo HTTP
// "/tarefas"                       →  endereço (URL)
// (req, res) => {}                 →  função que trata o pedido
//   req = requisição  (o pedido do cliente)
//   res = resposta    (o que o servidor devolve)
// ============================================================

// GET /tarefas — devolve a lista completa
app.get("/tarefas", (req, res) => {
  res.json(tarefas); // .json() converte o array em JSON e envia
});

// GET /tarefas/:id — devolve UMA tarefa pelo id
// ":id" é um parâmetro dinâmico — capturado em req.params.id
app.get("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id); // params chegam como string, converte para número
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    // status(404) = "não encontrado" — respostas HTTP têm códigos de status
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  res.json(tarefa);
});

// POST /tarefas — cria uma nova tarefa
// O corpo (body) da requisição vem em req.body (graças ao express.json() acima)
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body; // desestruturação — extrai "titulo" do objeto

  if (!titulo) {
    return res.status(400).json({ erro: "O campo titulo é obrigatório" });
  }

  const novaTarefa = { id: proximoId, titulo, concluida: false };
  proximoId++;
  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa); // 201 = "criado com sucesso"
});

// DELETE /tarefas/:id — remove uma tarefa pelo id
app.delete("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const posicao = tarefas.findIndex(t => t.id === id);

  if (posicao === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefas.splice(posicao, 1);
  res.status(204).send(); // 204 = "sucesso, sem conteúdo para devolver"
});

// PATCH /tarefas/:id/concluir — alterna o status de concluída
// PATCH = atualização parcial (diferente de PUT que substitui tudo)
app.patch("/tarefas/:id/concluir", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefa.concluida = !tarefa.concluida;
  res.json(tarefa);
});

// ---- INICIAR O SERVIDOR ----
// .listen() coloca o servidor "de plantão" esperando requisições
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
  console.log("");
  console.log("Endpoints disponíveis:");
  console.log(`  GET    http://localhost:${PORTA}/tarefas`);
  console.log(`  GET    http://localhost:${PORTA}/tarefas/:id`);
  console.log(`  POST   http://localhost:${PORTA}/tarefas`);
  console.log(`  DELETE http://localhost:${PORTA}/tarefas/:id`);
  console.log(`  PATCH  http://localhost:${PORTA}/tarefas/:id/concluir`);
});
