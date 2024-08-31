import mongoose from "mongoose";
require("dotenv").config();

const mongoString = process.env.MONGODB_STRING;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoString ? mongoString : "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("MongoDB conectado com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
