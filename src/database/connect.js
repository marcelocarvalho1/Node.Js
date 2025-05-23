const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bdb670w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectado com sucesso ao banco de dados!");
  } catch (error) {
    console.log("Ocorreu um erro ao tentar se conectar com o banco", error);
  }
};

module.exports = connectToDataBase;
