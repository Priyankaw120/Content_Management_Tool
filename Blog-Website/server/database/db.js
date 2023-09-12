import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://priyankaw120:wfbyAPtGPPsIvGba@cluster0.hnmrzsi.mongodb.net/Blog`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
