# FIAP Tech Challenge Fase 01 - Projeto Restaurante
Repositório referente ao projeto de Tech Challenge Fase 1

---

## Índice

1. [Instalação](#instalação)
2. [Configuração](#configuração)
3. [Uso](#uso)
4. [Stacks Utilizadas](#stacks-utilizadas)
5. [Bibliotecas](#bibliotecas)
6. [Swagger](#swagger)
7. [DDD - Event Storming](#ddd---event-storming)
8. [Contribuição](#contribuição)
9. [Licença](#licença)

---

## Instalação

Para instalar o projeto localmente, siga os passos abaixo:

```
git clone <URL_DO_REPOSITÓRIO>
npm install
```

---

## Configuração

Antes de iniciar a aplicação, certifique-se de configurar as seguintes variáveis de ambiente:

- `PORT`: Porta em que a aplicação será executada.
- `MONGODB_URI`: URI de conexão com o banco de dados MongoDB.

---

## Uso

Após a instalação e configuração, você pode iniciar a aplicação usando o seguinte comando:

~npm start

A aplicação estará disponível em `http://localhost:<PORT>`.

---

## Stacks Utilizadas

O projeto utiliza as seguintes tecnologias e ferramentas:

- Node.js
- Express.js
- MongoDB
- Swagger

---

## Bibliotecas

As principais bibliotecas e dependências do projeto são:

- **Express**: Framework web para Node.js
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB
- **Swagger-jsdoc**: Biblioteca para geração automática de documentação Swagger a partir de comentários JSDoc
- **Swagger-ui-express**: Middleware para exibir a documentação Swagger no navegador

---

## Swagger

A documentação da API pode ser acessada em `http://localhost:3000/api-docs`.

---

## Coleção Postman

Uma coleção do Postman com exemplos de solicitações para a API está disponível [aqui](https://api.postman.com/collections/8588306-910507ef-8d75-4359-8b00-43785098e8ee?access_key=).
