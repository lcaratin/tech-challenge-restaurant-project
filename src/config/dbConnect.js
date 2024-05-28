import mongoose, { mongo } from "mongoose";
const mongoUrl = process.env.MONGO_URL || "mongodb+srv://alura:alura123@cluster0.dmt81ez.mongodb.net/alura-node";
console.log('mongo connection ', mongoUrl)

mongoose.connect(mongoUrl);
//?retryWrites=true&w=majority&appName=Cluster0

let db = mongoose.connection;

export default db;

// import mongoose, { mongo } from "mongoose";

// mongoose.connect("mongodb+srv://alura:alura123@cluster0.dmt81ez.mongodb.net/alura-node")
// //?retryWrites=true&w=majority&appName=Cluster0

// let db = mongoose.connection;

// export default db;