# FIAP Tech Challenge Fase 01 - Projeto Restaurante
Repositório referente ao projeto de Tech Challenge Fase 1

---

## Índice

1. [Instalação](#instalação)
2. [Configuração e Uso](#configuração-e-uso)
3. [Stacks Utilizadas](#stacks-utilizadas)
4. [Bibliotecas](#bibliotecas)
5. [Swagger](#swagger)
6. [Coleção Postman](#coleção-postman)
7. [DDD - Dicionário de Linguagem Ubíqua](#dicionário-de-linguagem-ubíqua)
6. [DDD - Event Storming](#ddd---event-storming)


---

## Instalação

Para instalar o projeto localmente, siga os passos abaixo:

```
git clone <URL_DO_REPOSITÓRIO>
npm install
```

---

## Configuração e uso

Antes de iniciar a aplicação, certifique-se de configurar as seguintes variáveis de ambiente:

- `PORT`: Porta em que a aplicação será executada.
- `MONGODB_URI`: URI de conexão com o banco de dados MongoDB.

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

Uma coleção do Postman com exemplos de solicitações para a API está disponível [aqui](https://api.postman.com/collections/8588306-910507ef-8d75-4359-8b00-43785098e8ee?access_key=PMAT-01HZ0QKVX7S6TZDSRNQY86X5C1).

---

## Dicionário de Linguagem Ubíqua

### Cliente
**Definição**: Uma entidade que representa o consumidor final do serviço oferecido pelo sistema. Um cliente pode se identificar via CPF, se cadastrar com nome e e-mail, ou optar por não se identificar.

### Produto
**Definição**: Uma entidade que representa os itens disponíveis para seleção e compra pelo cliente, divididos em categorias específicas.

### Pedido
**Definição**: Uma entidade que representa uma solicitação de compra feita por um cliente. Um pedido pode conter múltiplos produtos e possui um status que reflete seu estado atual no processo de preparação e entrega.

### Produto do Pedido
**Definição**: Uma entidade que representa um item específico dentro de um pedido, incluindo a quantidade e o preço do produto no contexto do pedido.

### Status
**Definição**: Um estado específico do pedido no processo de preparação e entrega.
**Possíveis Valores**:
- `received`: Pedido recebido
- `preparation`: Pedido em preparação
- `ready`: Pedido pronto
- `completed`: Pedido finalizado

### Acompanhamento do Pedido
**Definição**: O processo pelo qual o cliente e o estabelecimento acompanham o progresso do pedido, desde o recebimento até a finalização.

### Cadastro
**Definição**: O processo de registrar um novo cliente ou produto no sistema.

### Pagamento
**Definição**: O processo pelo qual o cliente efetua o pagamento de um pedido. No MVP, a forma de pagamento oferecida será via QRCode do Mercado Pago.

### QRCode
**Definição**: Um código de barras bidimensional que pode ser lido por smartphones e scanners, utilizado para realizar pagamentos de maneira rápida e segura.

### Entrega
**Definição**: O processo pelo qual o pedido é entregue ao cliente após estar pronto. O sistema notifica o cliente quando o pedido está pronto para retirada e atualiza o status do pedido para finalizado após a retirada.

### Monitoramento
**Definição**: Uma funcionalidade que permite ao estabelecimento acompanhar os pedidos em andamento e o tempo de espera de cada pedido.

### Administração
**Definição**: Acesso administrativo para gerenciar clientes, produtos e pedidos.
**Funcionalidades**:
- Gerenciar clientes
- Gerenciar produtos e categorias
- Acompanhar pedidos

### Lanche
**Definição**: Categoria de Produto que agrupa os Produtos do Tipo Lanche.

### Acompanhamento
**Definição**: Categoria de Produto que agrupa os Produtos do Tipo Acompanhamento.

### Bebida
**Definição**: Categoria de Produto que agrupa os Produtos do Tipo Bebida.

### Sobremesa
**Definição**: Categoria de Produto que agrupa os Produtos do Tipo Sobremesa.

---


## DDD - Event Storming

O projeto foi desenvolvido com base nos princípios do Domain-Driven Design (DDD) e foi inicialmente mapeado através do Event Storming. Para visualizar o processo de Event Storming, acesse o [link do Miro](https://miro.com/app/board/uXjVKEK0ulQ=/?share_link_id=946525556601).

