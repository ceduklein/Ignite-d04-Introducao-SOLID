# Ignite - Desafio 04 - Introdução ao SOLID

Essa será uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser admin.


## Testes do Model

- [x] Deve ser possível criar um novo usuário com todas as propriedades
```json
{
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;
}
```
A propriedade admin deve sempre ser iniciada como `false` e o `id` deve ser um `uuid`.


## Testes do Repositório

- [x] Deve ser possível criar novos usuários

- [x] Deve ser possível listar todos os usuários.

- [x] Deve ser possível encontrar um usuário pelo id

- [x] Deve ser possível encontrar um usuário pelo email

- [x] Deve ser possível tornar o usuário um admin


## Testes de Casos de Uso

- [x] Deve ser possível criar novos usuários

- [x] Não deve ser possível criar um novo usuário com um e-mail já cadastrado

- [x] Deve ser possível tornar o usuário um admin

- [x] Não deve ser possível tornar um usuário inexistente em admin

- [x] Deve ser possível buscar o perfil de um usuário pelo id

- [x] Não deve ser possível buscar o perfil de um usuário inexistente

- [x] Deve ser possível listar todos os usuários

- [x] Não deve ser possível um usuário não admin listar todos os usuários

- [x] Não deve ser possível um usuário não existente listar todos os usuários


## Testes das Rotas

### Rota [POST] /users

- [x] Deve ser possível criar novos usuários

- [x] Não deve ser possível criar um novo usuário com um e-mail já cadastrado

### Rota [PATCH] /users/:user_id/admin

- [x] Deve ser possível tornar o usuário um admin

- [x] Não deve ser possível tornar um usuário inexistente em admin

### ROTA [GET] /users/:user_id

- [x] Deve ser possível buscar o perfil de um usuário pelo id

- [x] Não deve ser possível buscar o perfil de um usuário inexistente

### ROTA [GET] /users

- [x] Deve ser possível listar todos os usuários

- [x] Não deve ser possível um usuário não admin listar todos os usuários

- [x] Não deve ser possível um usuário não existente listar todos os usuários


## Executando a aplicação

- Após clonar o repositório, navegue até o diretório pelo terminal e execute o comando `yarn` para instalar todas as dependências.

- Execute o comando `yarn dev` para rodar a aplicação em modo de desenvolvimento.

- Execute o comando `yarn test` para rodar os testes.

- A documentação da api estará disponível em: http://localhost:3333/api-docs