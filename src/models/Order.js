import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
        price: { type: Number, default: 0 },
        comment: { type: String }
    }],
    status: { type: String, enum: ['received', 'preparation', 'ready', 'completed'], default: 'received', required: true },
    date: { type: Date, default: Date.now, required: true },
    price: { type: Number, default: 0, required: true }
});

const Order = mongoose.model('Order', orderSchema);

export default  Order;