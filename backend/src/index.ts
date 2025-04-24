import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import mainRouter from "./routes/main.routes";
import Database from "./configs/db.config";

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

const PORT = process.env.PORT || 5000;

Database.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`App started listening on port: ${PORT}`);
  });
});
