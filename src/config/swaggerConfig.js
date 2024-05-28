import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Tech Challenge - Projeto restaurante',
            version: '1.0.0',
            description: 'Documentação API para o projeto FIAP Tech Challenge',
            contact: {
                name: 'Léo Caratin',
                email: '@gmail.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Project server'
            }
        ],
        components: {
            schemas: {
                Client: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                        cpf: { type: 'string' }
                    },
                    required: ['name', 'email', 'cpf']
                },
                Order: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        client: { $ref: '#/components/schemas/Client' },
                        products: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    product: { type: 'string' },
                                    quantity: { type: 'number' },
                                    price: { type: 'number' },
                                    comment: { type: 'string' }
                                }
                            }
                        },
                        status: {
                            type: 'string',
                            enum: ['received', 'preparation', 'ready', 'completed']
                        },
                        date: { type: 'string', format: 'date-time' },
                        price: { type: 'number' },
                    },
                    required: ['status', 'date', 'price']
                },
                Product: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        price: { type: 'number' },
                        category: {
                            type: 'string',
                            enum: ['lanche', 'acompanhamento', 'bebida', 'sobremesa']
                        },
                        description: { type: 'string' },
                        images: {
                            type: 'array',
                            items: { type: 'string' }
                        }
                    },
                    required: ['name', 'price', 'category', 'description']
                }
            }
        }
    },
    apis: ['./src/routes/*.js'] // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default swaggerDocs;
