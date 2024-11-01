# Node Typescript App

Projeto criado para efetuar as 4 principais operações de CRUD: Criar, Ler, Alterar e Deletar.
Por ser um projeto de estudo, deixei o arquivo 

### Rotas:

- `GET - /employee` - busca a lista completa de todos funcionários
- `GET - /employee/:id` - busca apenas um usuário específicado.
- `POST - /employee` - adiciona um novo funcionário à lista.
  - NOTA: Necessário parametros:
  	{
    `name: string`
    `email: string`
    `dob: string`
    `mobile: string`
    }
- `PUT - /employee/:id` - altera funcionário especificado
  - NOTA: Necessário parametros:
  	{
    `name: string`
    `email: string`
    `dob: string`
    `mobile: string`
    }
- `DELETE - /employee/:id` - deleta funcionário especificado

### Técnologias utlizadas:

- Node
- Typescript
- express
- Nodemon
- Mongoose