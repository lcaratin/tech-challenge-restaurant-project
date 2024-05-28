import express from 'express';
import OrderController from '../controllers/orderController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Retrieve a list of orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/order/', OrderController.getAll);

/**
 * @swagger
 * /order/q:
 *   get:
 *     summary: Retrieve orders by status
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Status of the orders to filter by
 *     responses:
 *       200:
 *         description: A list of orders with the specified status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/order/q', OrderController.getByStatus);

/**
 * @swagger
 * /order/checkout:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client:
 *                 type: string
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     comment:
 *                       type: string
 *             example:
 *               client: "60d21b4667d0d8992e610c85"
 *               products:
 *                 - product: "60d21b4967d0d8992e610c86"
 *                   quantity: 2
 *                   comment: "No onions"
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post('/order/checkout', OrderController.create);

/**
 * @swagger
 * /order/status/{id}:
 *   patch:
 *     summary: Update the status of an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *       - in: body
 *         name: status
 *         required: true
 *         description: The new status of the order
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               enum: [received, preparation, ready, completed]
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 *       400:
 *         description: Invalid status value
 */
router.patch('/order/status/:id', OrderController.updateStatus);

export default router;