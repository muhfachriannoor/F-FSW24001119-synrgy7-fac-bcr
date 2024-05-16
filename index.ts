import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { upload } from "./src/config/multer";
import { CarsController } from "./src/controllers/CarsController";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.APP_PORT) || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/cars", (req: Request, res: Response): void => {
  new CarsController().getAll(req, res);
});

app.get("/api/cars/:id", (req: Request, res: Response): void => {
  new CarsController().getById(req, res);
});

app.post(
  "/api/cars/",
  upload.single("image"),
  (req: Request, res: Response): void => {
    new CarsController().addCars(req, res);
  }
);

app.put(
  "/api/cars/:id",
  upload.single("image"),
  (req: Request, res: Response): void => {
    new CarsController().editCars(req, res);
  }
);

app.delete("/api/cars/:id", (req: Request, res: Response): void => {
  new CarsController().delete(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
