const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose
    .connect(
    process.env.DB_URI,
    )
    .then(() => {
    console.log("Conectado ao banco de dados MONGODB");
    })
    .catch((err) => {
    console.log(err);
    });
};

module.exports = connectToDb;
