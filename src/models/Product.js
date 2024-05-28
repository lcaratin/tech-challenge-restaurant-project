import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { 
        type: String, 
        required: true,
        enum: ['lanche', 'acompanhamento', 'bebida', 'sobremesa'],
        default: 'lanche'
    },
    description: { type: String, required: true },
    images: [{ type: String  }]
});

const Product = mongoose.model('Product', productSchema);

export default Product;