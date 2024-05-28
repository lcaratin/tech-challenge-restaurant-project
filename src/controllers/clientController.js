import Client from "../models/Client.js";

class ClientController {
    // Método para buscar todos os clientes
    static getAll = async (req, res) => {
        try {
            const clients = await Client.find();
            res.status(200).json(clients);
        } catch (error) {
            console.error('Error fetching clients:', error);
            res.status(500).json({ message: error });
        }
    }

    // Método para buscar um cliente pelo CPF
    static getByCPF = async (req, res) => {
        const { cpf } = req.params;

        try {
            const client = await Client.findOne({ cpf });
            if (!client) {
                return res.status(404).json({ message: 'Client not found' });
            }
            res.status(200).json(client);
        } catch (error) {
            console.error('Error fetching client by CPF:', error);
            res.status(500).json({ message: error });
        }
    }

    // Método para criar um novo cliente
    static create = async (req, res) => {
        const { name, email, cpf } = req.body;

        try {
            const newClient = await Client.create({ name, email, cpf });
            res.status(201).json(newClient);
        } catch (error) {
            console.error('Error creating client:', error);
            res.status(500).json({ message: error });
        }
    }

    // Método para atualizar um cliente existente
    static update = async (req, res) => {
        const { cpf } = req.params;
        const { name, email } = req.body;

        try {
            const updatedClient = await Client.findOneAndUpdate({ cpf }, { name, email }, { new: true });
            if (!updatedClient) {
                return res.status(404).json({ message: 'Client not found' });
            }
            res.status(200).json(updatedClient);
        } catch (error) {
            console.error('Error updating client:', error);
            res.status(500).json({ message: error });
        }
    }

    // Método para excluir um cliente existente
    static delete = async (req, res) => {
        const { cpf } = req.params;

        try {
            const deletedClient = await Client.findOneAndDelete({ cpf });
            if (!deletedClient) {
                return res.status(404).json({ message: 'Client not found' });
            }
            res.status(200).json({ message: 'Client deleted successfully' });
        } catch (error) {
            console.error('Error deleting client:', error);
            res.status(500).json({ message: error });
        }
    }
}

export default ClientController;
