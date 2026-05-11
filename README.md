# Aprender JavaScript na prática

Este repositório é um projeto de estudo para aprender JavaScript construindo uma aplicação real: uma lista de tarefas.

A ideia não é decorar comandos. A ideia é entender **por que cada peça existe**, usar essa peça em um projeto pequeno e repetir com desafios cada vez um pouco mais difíceis.

## Como estudar este projeto

Pense no projeto como uma oficina:

1. **Conceito primeiro** — antes do código, entenda qual problema ele resolve.
2. **Código pequeno** — escreva ou altere poucas linhas por vez.
3. **Teste na hora** — rode o arquivo e veja o efeito da mudança.
4. **Explique em voz alta** — se conseguir explicar, você realmente entendeu.
5. **Desafio curto** — mude algo sem copiar exatamente a solução.

## Onde começar

### 1. Versão de terminal

Arquivo: `fase-1-fundamentos/todo.js`

Essa versão mostra os fundamentos sem navegador: variáveis, arrays, objetos, funções, laços e métodos como `find`, `filter`, `findIndex` e `splice`.

Para rodar:

```bash
node fase-1-fundamentos/todo.js
```

### 2. Versão visual

Arquivo: `fase-1-fundamentos/index.html`

Essa versão usa HTML, CSS, DOM e `localStorage` para transformar a lógica em uma aplicação visual que salva as tarefas no navegador.

Para testar, abra o arquivo no navegador ou sirva a pasta com um servidor local simples.

## Trilha de ultra aprendizado

A trilha detalhada está em [`docs/plano-ultra-aprendizado.md`](docs/plano-ultra-aprendizado.md).

Ela organiza o estudo em ciclos curtos de prática deliberada:

- escolher uma habilidade específica;
- criar algo visível;
- receber feedback rápido;
- revisar o que errou;
- aumentar a dificuldade aos poucos.

## Fase atual

Estamos na **Fase 1 — Fundamentos de JavaScript**.

Antes de avançar para API REST com Node.js + Express, o objetivo é consolidar bem:

- manipulação de arrays e objetos;
- funções pequenas;
- leitura e alteração do DOM;
- eventos do navegador;
- persistência com `localStorage`;
- leitura do fluxo completo: entrada → lógica → renderização → salvamento.
