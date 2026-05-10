# agents.md — Contexto compartilhado entre agentes de IA

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
| Persistência | localStorage (navegador) |
| Hospedagem | GitHub Pages (branch `gh-pages`) |
| Versionamento | Git — branch de desenvolvimento: `claude/learn-javascript-cloud-app-B5Dfs` |

---

## Estrutura de arquivos

```
aprender-javascript/
├── agents.md                        ← este arquivo
├── vercel.json                      ← config de deploy (outputDirectory: fase-1-fundamentos)
└── fase-1-fundamentos/
    ├── todo.js                      ← versão terminal (Node.js puro, sem DOM)
    └── index.html                   ← versão visual com localStorage
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

---

## Convenções de código

- Português para nomes de variáveis, funções e comentários (contexto de aprendizado)
- Sem frameworks — JavaScript puro até a Fase 3
- Comentários apenas quando o "porquê" não é óbvio
- Sem `var` — usar `const` por padrão, `let` quando reatribuição for necessária
- Funções pequenas e com responsabilidade única

---

## Próximas fases planejadas

### Fase 2 — API REST com Node.js + Express
- Instalar Express via npm
- Conceitos: `require`/`import`, rotas HTTP (GET, POST, DELETE), `req`/`res`, JSON como protocolo
- Criar endpoints: `GET /tarefas`, `POST /tarefas`, `DELETE /tarefas/:id`
- Testar com `fetch()` no browser ou curl

### Fase 3 — Persistência no servidor
- Conceitos: por que localStorage não é suficiente em multiusuário
- Salvar tarefas em arquivo JSON no servidor (fs.readFile/writeFile)
- Ou banco de dados simples (SQLite ou Cloudflare D1)

### Fase 4 — Deploy na nuvem (backend)
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
6. **Não pular fases.** O usuário aprende de forma incremental — não introduzir Express antes de consolidar o DOM, por exemplo.
7. **Linguagem:** responder sempre em português.
