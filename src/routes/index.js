import express from "express";
import clientRoutes from "../routes/clientRoutes.js";
import productRoutes from "../routes/productRoutes.js";
import orderRoutes from "../routes/orderRoutes.js";

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../config/swaggerConfig.js'; // Importa a configuração do Swagger

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: 'Restaurant project back-end'})
    })

    app.use(
        express.json(),
        clientRoutes,
        productRoutes,
        orderRoutes
    )

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

export default routes;
