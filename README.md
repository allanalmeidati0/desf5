# 🚀 Projeto API com AdonisJS 6

Este projeto é uma API desenvolvida com [AdonisJS 6](https://docs.adonisjs.com/), um framework Node.js robusto que segue o padrão MVC e fornece ferramentas modernas para construção de aplicações web.

---

## 📋 Requisitos

- [Node.js](https://nodejs.org/) **>= 20.x**
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados SQLite (já configurado por padrão)

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone git@github.com:allanalmeidati0/desf5.git
cd desf5
```

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

---

## 🔑 Configuração

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o `.env` com o seguinte conteúdo (configuração padrão para SQLite):

```env
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
NODE_ENV=development
DB_CONNECTION=sqlite
SQLITE_DB_NAME=database.sqlite
```

O arquivo `database.sqlite` será criado automaticamente dentro da pasta `./database/` quando as migrations forem executadas.

---

## 🗄️ Banco de Dados

Criar as tabelas a partir das migrations:

```bash
node ace migration:run
```

Executar os seeders para popular o banco:

```bash
node ace db:seed
```

Se precisar resetar o banco de dados e recriar as tabelas:

```bash
node ace migration:reset
node ace migration:run
node ace db:seed
```

---

## ▶️ Execução do projeto

Iniciar o servidor de desenvolvimento:

```bash
node ace serve --watch
```

A API estará disponível em:

```
http://127.0.0.1:3333
```

---

## 📂 Estrutura do Projeto

```
app/              → Controllers, Models, Validators e Services
config/           → Configurações da aplicação
database/         → Migrations e Seeders
start/            → Rotas e bootstrap da aplicação
.env              → Variáveis de ambiente
```

---

## ✅ Scripts úteis

```bash
# Gerar chave APP_KEY
node ace generate:key

# Criar migration
node ace make:migration nome_tabela

# Criar model
node ace make:model NomeModel

# Criar controller
node ace make:controller NomeController

# Rodar testes (se configurados)
npm run test
```

---

## 📖 Documentação

Mais detalhes na [documentação oficial do AdonisJS](https://docs.adonisjs.com/).
