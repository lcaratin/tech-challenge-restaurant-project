import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true, unique: true }
});

const Client = mongoose.model('Client', clientSchema);

export default Client;