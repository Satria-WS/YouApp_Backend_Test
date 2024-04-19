import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
// import { MONGO_URL } from "./config/database";
import { db } from "./config/database";
import { random } from "./helpers/index";
import router from "./router"


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.use(cors({
  credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
// Set up session middleware



const server = http.createServer(app);

// const MONGO_URL = "mongodb+srv://Auth_test:admin@cluster0.cmvtsvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
// mongoose.connection.on("error", (error: Error) => console.log(error));
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

app.use('/', router());


server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
