# 💈 Barbearia Dashboard

## 📌 Descrição do Projeto

Este projeto consiste em uma aplicação web desenvolvida com **React**, **TypeScript** e **Bootstrap**, com o objetivo de simular um sistema de gerenciamento de atendimentos de uma barbearia.

A aplicação permite visualizar atendimentos, acompanhar o status de cada serviço e observar métricas atualizadas em tempo real através de um dashboard dinâmico.

---

## 🎯 Objetivo

Desenvolver uma aplicação funcional aplicando conceitos de:

* Componentização
* Tipagem com TypeScript
* Organização de código
* Gerenciamento de estado
* Interface responsiva com Bootstrap

---

## 🛠️ Tecnologias Utilizadas

* React (Vite)
* TypeScript
* Bootstrap (via CDN)
* CSS externo

---

## 🏗️ Arquitetura do Projeto

O projeto foi estruturado com base na separação de responsabilidades, visando organização, escalabilidade e reutilização de código.

### 📁 Estrutura de Pastas

```
src/
 ├── components/     # Componentes reutilizáveis (Navbar, Sidebar, Cards, Dashboard)
 ├── interfaces/     # Interfaces TypeScript para tipagem dos dados
 ├── data/           # Dados mockados da aplicação
 ├── styles/         # Estilização personalizada (CSS)
 ├── assets/         # Imagens e ícones
 ├── App.tsx         # Componente principal
 └── main.tsx        # Ponto de entrada da aplicação
```

---

## 🧩 Componentização

A interface foi dividida em componentes reutilizáveis, como:

* Navbar
* Sidebar
* Dashboard
* AtendimentoCard

Essa abordagem melhora a organização e facilita manutenção e evolução do sistema.

---

## 🔐 Tipagem com TypeScript

Foram utilizadas interfaces para garantir segurança e consistência dos dados.

Exemplo:

* `IAtendimento`

Isso evita erros e melhora a previsibilidade do código.

---

## 📊 Funcionalidades

* Listagem de atendimentos
* Alteração de status (ex: concluir atendimento)
* Dashboard com contadores dinâmicos
* Atualização automática dos dados ao interagir
* Interface responsiva

---

## 📱 Responsividade

O layout foi desenvolvido utilizando o sistema de grid do Bootstrap:

* Desktop: estrutura com sidebar + conteúdo principal
* Mobile: adaptação com empilhamento de colunas

---

## 🧾 Semântica HTML5

Foram utilizadas as seguintes tags semânticas:

* `<header>`
* `<main>`
* `<section>`
* `<aside>`
* `<address>`

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 👨‍🎓 Identificação

**Aluno:** Guilherme Lourenço Guimarães
**Disciplina:** Desenvolvimento Web
**Professor:** Fernando
**Data:** 2026

---

## 📌 Considerações Finais

O projeto foi desenvolvido com foco na organização, clareza e boas práticas de desenvolvimento front-end, utilizando tecnologias modernas e amplamente utilizadas no mercado.
