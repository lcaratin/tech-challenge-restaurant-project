import express from 'express';
import ClientController from '../controllers/clientController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Client management
 */

/**
 * @swagger
 * /client:
 *   get:
 *     summary: Retrieve a list of clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: A list of clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 */
router.get('/client/', ClientController.getAll);

/**
 * @swagger
 * /client/{cpf}:
 *   get:
 *     summary: Retrieve a client by CPF
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: The client's CPF
 *     responses:
 *       200:
 *         description: A single client
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found
 */
router.get('/client/:cpf', ClientController.getByCPF);

/**
 * @swagger
 * /client:
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               cpf:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "john.doe@example.com"
 *               cpf: "12345678901"
 *     responses:
 *       201:
 *         description: Client created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       400:
 *         description: Invalid input
 */
router.post('/client/', ClientController.create);

/**
 * @swagger
 * /client/{cpf}:
 *   put:
 *     summary: Update an existing client
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: The client's CPF
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               name: "John Doe Updated"
 *               email: "john.doe.updated@example.com"
 *     responses:
 *       200:
 *         description: Client updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found
 *       400:
 *         description: Invalid input
 */
router.put('/client/:cpf', ClientController.update);

/**
 * @swagger
 * /client/{cpf}:
 *   delete:
 *     summary: Delete an existing client
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: The client's CPF
 *     responses:
 *       200:
 *         description: Client deleted successfully
 *       404:
 *         description: Client not found
 */
router.delete('/client/:cpf', ClientController.delete);

export default router;
