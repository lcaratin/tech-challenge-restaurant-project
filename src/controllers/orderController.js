import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Client from "../models/Client.js";

class OrderController {
    // Método para buscar todos os pedidos
    static getAll = async (req, res) => {
        try {
            const orders = await Order.find().populate([
                {
                    path: 'products.product',
                    select: 'name price category'
                },
                {
                    path: 'client',
                    select: 'name cpf'
                },
            ]).sort({date: -1});

            res.status(200).json(orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).json({ message: error });
        }
    }

    // Método para buscar pedidos por status
    static getByStatus = async (req, res) => {
        const { status } = req.query;
        const query = status ? { status } : {};

        try {
            const orders = await Order.find(query).populate([
                {
                    path: 'products.product',
                    select: 'name price category'
                },
                {
                    path: 'client',
                    select: 'name cpf'
                },
            ]).sort({date: -1});

            res.status(200).json(orders);
        } catch (error) {
            console.error('Error fetching orders by status:', error);
            res.status(500).json({ message: error });
        }
    }

    // Método para criar um novo pedido
    static create = async (req, res) => {
        const { client, products } = req.body;

        if (client) {
            const sClient = await Client.findById(client);;
            if (!sClient) {
                return res.status(500).json({ message: 'Client not found' });
            }
        }

        const allProducts = await Product.find({ _id: { $in: products.map(prod => prod.product) } });

        let totalPrice = 0;
        let productNotFounded = false;
        products.forEach((item) => {
            let refProduct = allProducts.find(itProduct => itProduct._id == item.product);

            if (refProduct) {
                let price = refProduct.price * item.quantity;
                item.price = Number(price.toFixed(2));
                totalPrice += item.price;
            }
            else { productNotFounded = true; }
        });

        if (productNotFounded) {
            return res.status(500).json({ message: 'Product not found' });
        }

        totalPrice = Number(totalPrice.toFixed(2));

        try {
            // default status
            const newOrder = await Order.create({ 
                client: client,
                products: products,
                price: totalPrice
            });
            res.status(201).json(newOrder);
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: error });
        }
    }

    static updateStatus = async (req, res) => {
        const { id } = req.params;
        const { status } = req.body;

        try {
            const updatedOrder = await Order.findByIdAndUpdate( 
                id, { status }, { new: true }
            );
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(updatedOrder);
        } catch (error) {
            console.error('Error updating order:', error);
            res.status(500).json({ message: error });
        }
    }
}

export default OrderController;