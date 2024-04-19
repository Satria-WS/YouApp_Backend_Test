import mongoose from "mongoose";

export const MONGO_URL = "mongodb+srv://Auth_test:admin@cluster0.cmvtsvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
    // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch(error => {
  console.error("Error connecting to MongoDB:", error);
});

// Event listener for successful connection
mongoose.connection.on("open", () => {
  console.log("MongoDB connection opened");
});

// Event listener for connection errors
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Export the mongoose connection
export const db = mongoose.connection;
 // @ts-ignore