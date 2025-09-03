
# 📘 Testes Automatizados - Webdojo (Cypress)

Este repositório contém a aplicação **Webdojo** e seus testes automatizados desenvolvidos com **Cypress**.  
Os testes têm como objetivo validar funcionalidades críticas da aplicação e garantir qualidade contínua durante o desenvolvimento.

---

## 🚀 Requisitos

- **Node.js** (versão recomendada: LTS)
- **npm** ou **yarn**

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
npm install
```

---

## ▶️ Executando a aplicação

A aplicação Webdojo está no mesmo repositório. Para rodá-la localmente:

```bash
npm run dev
```

Isso iniciará a aplicação em modo desenvolvimento na porta **3000**.

---

## 🧪 Executando os testes

Os testes foram escritos utilizando o **Cypress**.  

### Scripts disponíveis

- **Rodar os testes em modo headless (padrão desktop):**
  ```bash
  npm run test
  ```

- **Abrir o Test Runner do Cypress (modo interativo):**
  ```bash
  npm run test:ui
  ```

- **Rodar apenas os testes de login (desktop):**
  ```bash
  npm run test:login
  ```

- **Rodar apenas os testes de login (mobile - iPhone XR viewport):**
  ```bash
  npm run test:login:mobile
  ```

---

## 📂 Estrutura do Projeto

Abaixo está a estrutura principal de pastas e arquivos do Cypress dentro do projeto:

```
cypress/
├── e2e/                     # Casos de teste (specs) de ponta a ponta
│
├── fixtures/                # Massa de dados estática para testes
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
├── support/                 
│   ├── actions/             # Arquivos de ações reutilizáveis
│   │   └── consultancy.actions.js
│   ├── commands.js          # Custom commands do Cypress
│   ├── e2e.js               # Configuração global de testes E2E
│   └── utils.js             # Funções utilitárias
```

---

## 🛠️ Convenções adotadas

- **Separação de responsabilidades:**  
  - **Fixtures** → Armazenam dados e documentos usados nos testes.  
  - **Actions** → Centralizam interações reutilizáveis (ex: login, preenchimento de formulários).  
  - **Commands** → Extensões para comandos customizados do Cypress.  
  - **Utils** → Funções auxiliares para tratamento de dados.  

- **Viewport:**  
  Os testes rodam em **1440x900** por padrão (desktop), podendo ser configurados para diferentes tamanhos, como mobile.

---

## 📊 Relatórios e Evidências

(Se você já tiver integração com mochawesome ou outra ferramenta de relatórios, este espaço pode ser usado para documentar como gerar os relatórios e acessar as evidências dos testes.)

---

## 📌 Próximos Passos

- Adicionar relatórios de execução (ex: Mochawesome).  
- Configurar execução em CI/CD (GitHub Actions, GitLab CI, etc).  
- Ampliar cobertura de testes para cenários críticos da aplicação.  

---

## ✅ Exemplo de Teste (Login)

### Em formato **Gherkin** (BDD)

```gherkin
Feature: Login na aplicação Webdojo
  Como usuário cadastrado
  Quero acessar a aplicação
  Para utilizar suas funcionalidades

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When insiro um email válido e senha correta
    And clico no botão de login
    Then devo ser redirecionado para a página inicial
```

### Em formato **Cypress (JavaScript)**

```javascript
describe('Login - Webdojo', () => {
  it('Deve realizar login com credenciais válidas', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('usuario@teste.com');
    cy.get('input[name="password"]').type('senhaSegura123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home');
    cy.contains('Bem-vindo').should('be.visible');
  });
});
```
