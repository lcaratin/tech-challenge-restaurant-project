import Product from '../models/Product.js'; // Importa o modelo de Produto

class ProductController {
    static getAll = async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: error });
        }
    }

    static getById = async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            res.status(500).json({ message: error });
        }
    }

    static create = async (req, res) => {
        const { name, category, price , description, images } = req.body;

        try {
            const newProduct = await Product.create({ name, category, price, description, images });
            res.status(201).json(newProduct);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ message: error });
        }
    }

    static update = async (req, res) => {
        const { id } = req.params;
        const { name, description, category, price, images } = req.body;

        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, { name, category, price, description, images }, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ message: error });
        }
    }

    static delete = async (req, res) => {
        const { id } = req.params;

        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ message: error });
        }
    }
}

export default ProductController;