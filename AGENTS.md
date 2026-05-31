# AGENTS.md — Contexto compartilhado entre agentes de IA

Este arquivo é lido por qualquer agente (Claude, Codex, Gemini, etc.) antes de agir neste repositório.
Mantenha-o atualizado a cada nova fase ou decisão relevante.

---

## Propósito do repositório

Aprender JavaScript na prática construindo uma aplicação real de lista de tarefas (To-Do).
O aprendizado é incremental e didático: cada fase introduz conceitos novos sobre o que já existe.

**Usuário:** Patrick — nível básico em programação, pouca experiência com JavaScript.
**Formato pedagógico:** explicação do conceito primeiro (com analogia), depois o código.
**Regra principal:** nunca introduzir código sem explicar o "porquê" antes.

---

## Stack atual

| Camada | Tecnologia |
|---|---|
| Linguagem | JavaScript (ES2020+) |
| Runtime local | Node.js |
| Frontend | HTML + CSS + JS vanilla (sem framework) |
| Backend | Node.js + Express |
| Persistência frontend | localStorage (navegador) |
| Persistência backend | memória (variável) — será substituída na Fase 3 |
| Hospedagem frontend | GitHub Pages (branch `gh-pages`) |
| Versionamento | Git — branch de desenvolvimento: `claude/learn-javascript-cloud-app-B5Dfs` |

---

## Estrutura de arquivos

```
aprender-javascript/
├── AGENTS.md                        ← este arquivo (lido por Codex e outros agentes)
├── CLAUDE.md                        ← lido automaticamente pelo Claude Code
├── vercel.json                      ← config de deploy (outputDirectory: fase-1-fundamentos)
├── fase-1-fundamentos/
│   ├── todo.js                      ← versão terminal (Node.js puro, sem DOM)
│   └── index.html                   ← versão visual com localStorage
└── fase-2-api/
    ├── servidor.js                  ← API REST com Express
    ├── package.json                 ← dependências npm
    └── .gitignore                   ← exclui node_modules
```

O branch `gh-pages` contém apenas `index.html` na raiz (para GitHub Pages).

---

## O que já foi ensinado

### Fase 1 — Fundamentos de JavaScript (`fase-1-fundamentos/`)

| Conceito | Onde aparece |
|---|---|
| `const` / `let` | declaração de variáveis |
| Tipos: `string`, `number`, `boolean` | campos do objeto tarefa |
| `Array` + `.push()` | lista de tarefas |
| `Object` (`{}`) | estrutura de cada tarefa |
| `function` | `criarTarefa`, `listarTarefas`, etc. |
| `for...of` | laço em `listarTarefas` (todo.js) |
| Operador ternário `? :` | status visual da tarefa |
| Template literals (crase) | strings com variáveis |
| `.find()` / `.filter()` | busca e filtragem |
| `.findIndex()` + `.splice()` | remoção de item |
| DOM: `getElementById`, `innerHTML` | interface visual |
| `.map()` + `.join("")` | renderizar lista como HTML |
| `addEventListener` | capturar tecla Enter |
| `localStorage.getItem/setItem` | persistência entre sessões |
| `JSON.stringify` / `JSON.parse` | serializar/desserializar dados |
| `Math.max(...array)` + spread `...` | calcular próximo ID |

### Fase 2 — API REST com Node.js + Express (`fase-2-api/`) ✅

| Conceito | Onde aparece |
|---|---|
| `require()` | importar Express |
| `express()` / `app.listen()` | criar e iniciar servidor |
| `app.use(express.json())` | middleware para ler JSON no body |
| Rotas: `app.get/post/delete/patch` | endpoints da API |
| `req.params` | parâmetros dinâmicos na URL (`:id`) |
| `req.body` | corpo da requisição POST |
| `res.json()` / `res.status()` / `res.send()` | formatos de resposta |
| Códigos HTTP: 200, 201, 204, 400, 404 | semântica das respostas |
| Desestruturação `{ titulo }` | extrair campos do objeto |

---

## Estratégia pedagógica atual

Além das fases técnicas, o estudo seguirá técnicas de ultra aprendizado:

- Projeto real como fio condutor: evoluir a lista de tarefas em pequenos incrementos.
- Prática deliberada: cada sessão deve ter missão, previsão, implementação, feedback, explicação e desafio.
- Recordação ativa: pedir que o usuário explique o fluxo sem olhar antes de avançar.
- Intercalação: misturar conceitos conectados, como array + função, DOM + evento, localStorage + JSON.
- Dificuldade desejável: propor desafios curtos que exijam pensar, mas sem pular fases.

Documento de apoio: `docs/plano-ultra-aprendizado.md`.

## Convenções de código

- Português para nomes de variáveis, funções e comentários (contexto de aprendizado)
- Sem frameworks de frontend — JavaScript puro até a Fase 4
- Comentários apenas quando o "porquê" não é óbvio
- Sem `var` — usar `const` por padrão, `let` quando reatribuição for necessária
- Funções pequenas e com responsabilidade única

---

## Próximas fases planejadas

### Fase 3 — Persistência no servidor
- Conceitos: por que memória não é suficiente (dados somem ao reiniciar)
- `fs.promises.readFile` / `writeFile` para salvar em arquivo JSON
- Ou banco de dados simples (SQLite)

### Fase 4 — Conectar frontend ao backend
- Conceitos: `fetch()` no browser, async/await, Promises
- Substituir localStorage por chamadas à API
- CORS — por que o browser bloqueia e como liberar

### Fase 5 — Deploy na nuvem (backend)
- Vercel Serverless Functions ou Cloudflare Workers
- Variáveis de ambiente
- URL pública para o backend

---

## Regras para agentes

1. **Não inventar contexto.** Se algo não estiver documentado aqui, pergunte ao usuário.
2. **Manter o formato pedagógico.** Sempre explicar antes de codar.
3. **Branch de desenvolvimento:** `claude/learn-javascript-cloud-app-B5Dfs` — nunca fazer push direto na `main`.
4. **GitHub Pages:** atualizar o branch `gh-pages` sempre que o `index.html` mudar.
5. **Atualizar este arquivo** ao concluir cada fase ou introduzir nova tecnologia.
6. **Não pular fases.** O usuário aprende de forma incremental.
7. **Linguagem:** responder sempre em português.
