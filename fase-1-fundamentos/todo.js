// ============================================================
// FASE 1 — Fundamentos de JavaScript
// Lista de Tarefas no terminal
// ============================================================

// ----- VARIÁVEIS -----
// Em JS moderno usamos "let" (pode mudar) e "const" (não muda)
// Evite "var" — é antigo e tem comportamento confuso

const appNome = "Minhas Tarefas";  // string (texto)
let proximoId = 1;                  // number (número)

// ----- ARRAYS -----
// Arrays são listas. Usamos [] para criar e .push() para adicionar
const tarefas = [];  // começa vazia

// ----- FUNÇÕES -----
// Funções encapsulam um bloco de código reutilizável
// "function nomeDaFuncao(parametros) { ... }"

function criarTarefa(titulo) {
  // Objetos usam {} e guardam dados em pares chave: valor
  const novaTarefa = {
    id: proximoId,       // number
    titulo: titulo,      // string
    concluida: false,    // boolean (true ou false)
    criadaEm: new Date() // objeto Date — data/hora atual
  };

  proximoId = proximoId + 1;  // incrementa o contador de IDs
  tarefas.push(novaTarefa);   // adiciona ao array

  return novaTarefa;  // devolve o objeto criado
}

function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return;
  }

  // "for...of" percorre cada item de um array
  for (const tarefa of tarefas) {
    // Template literals usam crase ` e ${} para inserir variáveis
    const status = tarefa.concluida ? "✓" : "○";  // operador ternário
    console.log(`  [${status}] #${tarefa.id} — ${tarefa.titulo}`);
  }
}

function concluirTarefa(id) {
  // .find() percorre o array e retorna o primeiro item que satisfaz a condição
  const tarefa = tarefas.find(function(t) {
    return t.id === id;
  });

  // Verificação de segurança: e se o id não existir?
  if (!tarefa) {
    console.log(`Tarefa #${id} não encontrada.`);
    return;
  }

  tarefa.concluida = true;
  console.log(`Tarefa #${id} concluída!`);
}

function removerTarefa(id) {
  // .findIndex() retorna a posição no array (-1 se não encontrar)
  const posicao = tarefas.findIndex(function(t) {
    return t.id === id;
  });

  if (posicao === -1) {
    console.log(`Tarefa #${id} não encontrada.`);
    return;
  }

  // .splice(posicao, quantidade) remove items do array
  tarefas.splice(posicao, 1);
  console.log(`Tarefa #${id} removida.`);
}

function resumo() {
  // .filter() retorna um novo array com os itens que passam na condição
  const pendentes = tarefas.filter(function(t) {
    return !t.concluida;
  });

  const concluidas = tarefas.filter(function(t) {
    return t.concluida;
  });

  console.log(`Total: ${tarefas.length} | Pendentes: ${pendentes.length} | Concluídas: ${concluidas.length}`);
}

// ============================================================
// PROGRAMA PRINCIPAL — aqui executamos as funções
// ============================================================

console.log(`=== ${appNome} ===\n`);

// Criando tarefas
criarTarefa("Aprender variáveis e tipos em JS");
criarTarefa("Entender arrays e objetos");
criarTarefa("Criar funções");
criarTarefa("Construir uma API com Node.js");

console.log("Tarefas criadas:");
listarTarefas();

console.log("\nConcluindo a tarefa #1...");
concluirTarefa(1);

console.log("\nConcluindo a tarefa #2...");
concluirTarefa(2);

console.log("\nLista atualizada:");
listarTarefas();

console.log("\nRemovendo a tarefa #3...");
removerTarefa(3);

console.log("\nLista final:");
listarTarefas();

console.log("\nResumo:");
resumo();
