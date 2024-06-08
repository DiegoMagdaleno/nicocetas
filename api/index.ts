import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import food from "./routes/food";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/food", food);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
