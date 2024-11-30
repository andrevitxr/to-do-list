const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose
    .connect(
    "mongodb+srv://root:admin@cluster0.k3oyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    )
    .then(() => {
    console.log("Conectado ao banco de dados MONGODB");
    })
    .catch((err) => {
    console.log(err);
    });
};

module.exports = connectToDb;
