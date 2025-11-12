import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config({
  path: "./.env", // ✅ add the dot
});

// Create express app
const app = express();

// Middlewares (optional)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start the server only after DB connects
const startServer = async () => {
  try {
    await connectDB(); // ✅ uses your connectDB from db/index.js

    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running on port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("❌ Error while starting the app:", error);
    process.exit(1);
  }
};

// Run the server
startServer();
