import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
   console.log(config.databaseUrl)
   mongoose.connection.on('connected', () => {
      console.log('mongoose connection succeful')
    })

    mongoose.connection.on('error', (err) => {
      console.log('error in DB connection.', err)
    })
    await mongoose.connect("mongodb://localhost:27017/myLib");

  } catch (error) {
    console.log("connected to database succesfully" + error);

    process.exit(1);
  }
};

export default connectDB;
