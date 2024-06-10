import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import food from "./routes/food";
import cors from "cors";
import path from "path";
import angular from "./routes/angular";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const frontPath = path.join(__dirname, "../front/dist/front/browser");

app.use(express.json());
app.use(cors());
const router = express.Router();

if (frontPath) {
  const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'js', 'css'],
    index: false,
    maxAge: '1d',
    redirect: true,
  }

  app.use(express.static(frontPath, options));
}

app.use("/", angular);
app.use("/food", food);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
