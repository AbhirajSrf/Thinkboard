import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected successfully!!");
  } catch (err) {
    console.log("Error connecting to MONGODB", err.message);
    process.exit(1); // 1 means exit with failure, 0 means success
  }
};
