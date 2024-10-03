# API - Customers Management

## Descrição

Esta API foi construída usando o framework **NestJS** e permite a criação, leitura, atualização e exclusão (CRUD) de clientes. A API também fornece recursos como validação de dados, transformação de objetos, e documentação automática usando **Swagger**. 

## Funcionalidades

### Customers

- **Propriedades**: `id`, `nome`, `idade`, `endereço`, etc.
- **Rotas**:
  - **GET** `/customers/hello`: Retorna todos os clientes cadastrados.
  - **GET** `/customers`: Lista todos os clientes com filtro opcional por idade.
    - **Parâmetro de consulta (`Query`)**: 
      - `age`: Filtra clientes por idade.
  - **GET** `/customers/:id`: Retorna os detalhes de um cliente específico com base no `id`.
  - **POST** `/customers`: Cria um novo cliente.
    - **Body**: O payload precisa estar no formato de um objeto JSON contendo as informações do cliente.
  - **PATCH** `/customers/:id`: Atualiza os dados de um cliente específico.
    - **Body**: O payload deve conter os campos a serem atualizados.
  - **DELETE** `/customers/:id`: Remove um cliente específico do sistema com base no `id`.

### Tecnologias Utilizadas

#### Dependências
- **NestJS**: Framework Node.js usado para construir a API.
- **Class Validator**: Usado para validação de dados.
- **Class Transformer**: Usado para transformar objetos entre diferentes representações (ex. DTOs).
- **Swagger**: Gera a documentação da API automaticamente e facilita o teste das rotas.
- **RxJS**: Programação reativa usada dentro do NestJS.

#### Dev Dependencies
- **TypeScript**: Linguagem usada para desenvolvimento da aplicação, com suporte a tipagem estática.
- **ESLint** e **Prettier**: Ferramentas para manter a consistência de estilo e formatação no código.
- **Jest** e **Supertest**: Ferramentas de testes unitários e de integração para garantir a robustez da aplicação.
- **ts-jest**: Suporte para rodar testes com TypeScript.

## Como rodar a aplicação

1. Clone o repositório:
   ```bash
   git clone https://github.com/dev-anderson-rodrigues/Exercicios---Modulo-3-nestJS.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env` (se necessário).

4. Inicie o servidor:
   ```bash
   npm run start
   ```

5. Acesse a documentação da API via Swagger:
   - Disponível em `/api`.

## Estrutura do Projeto

- `customers.controller.ts`: Controlador responsável por lidar com as requisições HTTP.
- `customers.service.ts`: Contém a lógica de negócios e manipulação dos dados dos clientes.
- `dto/`: Diretório que contém os DTOs (Data Transfer Objects) para validação e tipagem dos dados que chegam à API.

## Testes

Para rodar os testes unitários e de integração, utilize os comandos abaixo:

```bash
npm run test
npm run test:e2e
```

## Contribuição

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutirmos melhorias e novas funcionalidades.

---
