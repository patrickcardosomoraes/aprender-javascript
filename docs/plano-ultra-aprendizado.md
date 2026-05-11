# Plano de ultra aprendizado — JavaScript na prática

Este plano foi criado para aprender JavaScript construindo uma aplicação real, sem pular etapas. O projeto principal é uma lista de tarefas, mas cada ciclo adiciona uma habilidade nova.

## A regra principal

Antes de escrever código, responda:

> Qual problema essa linha resolve?

Uma boa analogia: programar é como montar uma cozinha funcional. Você não compra ferramentas aleatórias; você escolhe uma faca, uma panela ou uma geladeira porque existe uma necessidade concreta. No código é igual: variável guarda informação, função evita repetição, array organiza listas, evento reage ao usuário e `localStorage` guarda dados para depois.

## Técnica 1 — Projeto real, escopo pequeno

Em vez de estudar JavaScript como uma lista solta de assuntos, usamos uma aplicação pequena e real.

Projeto-base:

- criar tarefas;
- listar tarefas;
- concluir tarefas;
- remover tarefas;
- salvar tarefas no navegador.

Isso ajuda porque cada conceito aparece com uma função clara dentro do produto.

## Técnica 2 — Ciclos de prática deliberada

Cada sessão de estudo deve ter este formato:

1. **Missão** — escolher uma habilidade pequena.
2. **Previsão** — dizer o que você acha que vai acontecer.
3. **Implementação** — alterar poucas linhas.
4. **Feedback** — rodar o projeto e observar o resultado.
5. **Explicação** — explicar com suas palavras o que mudou.
6. **Desafio** — fazer uma variação sem copiar.

Exemplo de missão:

> Quero entender `filter`. Vou criar um botão para mostrar apenas tarefas pendentes.

## Técnica 3 — Recordação ativa

Depois de estudar um trecho, feche o arquivo e responda sem olhar:

- Onde as tarefas ficam guardadas?
- Qual função cria uma tarefa?
- Qual função redesenha a tela?
- Por que precisamos chamar `salvarNoStorage()` depois de mudar a lista?
- O que aconteceria se `renderizar()` não fosse chamado?

Se travar, volte ao código, releia e tente de novo. O objetivo é recuperar a ideia da memória, não apenas reconhecer quando está lendo.

## Técnica 4 — Intercalação

Não estudar apenas um tema por muito tempo. Misture conceitos conectados:

- array + função;
- objeto + DOM;
- evento + renderização;
- `localStorage` + JSON;
- validação de entrada + experiência do usuário.

Isso parece mais difícil no começo, mas prepara melhor para construir projetos reais.

## Técnica 5 — Dificuldade desejável

Um desafio bom deve ser desconfortável, mas possível.

Use esta escala:

- **Fácil demais:** copiei e funcionou sem pensar.
- **Bom:** precisei testar, errar e ajustar.
- **Difícil demais:** não sei nem por onde começar.

Procure ficar no nível “bom”.

## Roteiro prático da Fase 1

### Semana 1 — Entender o fluxo

Objetivo: conseguir explicar o caminho completo da aplicação.

Fluxo:

1. usuário digita uma tarefa;
2. clique ou Enter chama `adicionarTarefa()`;
3. `criarTarefa()` adiciona no array;
4. `salvarNoStorage()` persiste no navegador;
5. `renderizar()` atualiza a tela.

Desafios:

- mudar os textos das tarefas de exemplo;
- adicionar uma mensagem diferente quando a lista estiver vazia;
- impedir tarefas com menos de 3 caracteres.

### Semana 2 — Arrays e objetos

Objetivo: manipular listas com confiança.

Conceitos:

- `push` para adicionar;
- `find` para encontrar;
- `findIndex` para descobrir posição;
- `splice` para remover;
- `filter` para contar ou separar;
- `map` para transformar tarefas em HTML.

Desafios:

- criar contador de porcentagem concluída;
- criar botão para remover somente tarefas concluídas;
- criar filtro visual: todas, pendentes e concluídas.

### Semana 3 — DOM e eventos

Objetivo: entender como JavaScript conversa com a página.

Conceitos:

- `getElementById` encontra elementos;
- `innerHTML` troca conteúdo;
- `addEventListener` reage a ações;
- `onclick` chama funções a partir dos botões.

Desafios:

- mostrar um aviso quando a tarefa for criada;
- adicionar um contador de caracteres no input;
- desabilitar o botão “Adicionar” quando o input estiver vazio.

### Semana 4 — Persistência e revisão

Objetivo: entender por que os dados continuam após recarregar a página.

Conceitos:

- `localStorage` só salva texto;
- `JSON.stringify` transforma objeto/array em texto;
- `JSON.parse` transforma texto de volta em objeto/array;
- IDs evitam confundir uma tarefa com outra.

Desafios:

- criar botão “limpar tudo”;
- confirmar antes de remover uma tarefa;
- registrar a data de criação da tarefa.

## Checklist antes da Fase 2

Só avance para API REST quando conseguir responder:

- O que é um array?
- O que é um objeto?
- Por que uma função recebe parâmetros?
- Qual é a diferença entre alterar dados e renderizar a tela?
- Por que salvar no `localStorage` não é a mesma coisa que salvar em um servidor?
- Como uma tarefa sai do input e aparece na tela?

## Como eu posso te ajudar daqui para frente

Para cada nova melhoria, seguiremos este padrão:

1. explicar o conceito com analogia;
2. localizar onde ele entra no projeto;
3. implementar a menor mudança útil;
4. testar juntos;
5. deixar um desafio para você praticar sozinho.
