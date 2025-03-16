# Monorepo Template 1.0.0

Bem-vindo ao template de monorepo! Este repositório foi configurado para fornecer uma base sólida para projetos que necessitam de uma API backend e um frontend web. A estrutura do monorepo facilita o desenvolvimento, manutenção e escalabilidade do seu projeto.

## Estrutura do Repositório

A estrutura do repositório está organizada da seguinte maneira:
```shell
  .
  ├── apps
  │ ├── api
  │ │ ├── src
  │ │ ├── .env
  │ │ ├── package.json
  │ │ └── ...
  │ ├── web
  │ │ ├── src
  │ │ ├── public
  │ │ ├── .env
  │ │ ├── package.json
  │ │ └── ...
  ├── .gitignore
  ├── README.md
  └── ...
```

## API

O diretório `api` contém a aplicação backend construída com as seguintes tecnologias:

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Fastify**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Postgres**: Banco de dados relacional SQL.
- **Prisma.js**: ORM (Object-Relational Mapping) para trabalhar com banco de dados SQL.

### Configuração

1. **Instalar dependências**:

```bash
pnpm install
```

2. **Configurar variáveis de ambiente:**:
Crie um arquivo .env no diretório api com as seguintes variáveis:

DATABASE_URL=<sua-url-do-postgres>
MONGODB_URL=<sua-url-do-mongodb>

3. **Executar as migrações do Prisma:**:

```bash
  pnpm prisma migrate dev
```
4. **Iniciar o servidor:**:

```bash
  pnpm run dev
```
# Web
O diretório web contém a aplicação frontend construída com as seguintes tecnologias:

- **React:** Biblioteca para construção de interfaces de usuário.
- **Vite:** Ferramenta de build rápida e otimizada.
- **React Router DOM:** Biblioteca de roteamento para React.

### Configuração
1. **Instalar dependências:**

```bash
  pnpm install
```
2. **Configurar variáveis de ambiente:**
Crie um arquivo .env no diretório web com as seguintes variáveis:

```bash
  VITE_API_URL=http://localhost:3000
```

3. **Iniciar o servidor de desenvolvimento:**

```bash
  pnpm run dev
```

# Contribuição

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades para este template. Para começar, faça um fork deste repositório e crie um pull request com suas alterações.

# Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.