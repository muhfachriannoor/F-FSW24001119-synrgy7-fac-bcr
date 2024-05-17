import { Request, Response } from "express";
import { Model } from "objection";
import { CarsModel } from "../models/CarsModel";
import { CreateCars, UpdateCars } from "../interfaces/CarsInterface";
import { CarsValidation } from "../validation/CarsValidation";
import { CarsService } from "../services/CarsService";
import knexInstance from "../config/knexInstance";

Model.knex(knexInstance);

export class CarsController {
  public carsService: CarsService;
  public carsValidation: CarsValidation;

  constructor() {
    this.carsService = new CarsService();
    this.carsValidation = new CarsValidation();
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const getAllCars: CarsModel[] = await this.carsService.getAll();

      res.status(200).json({
        status: true,
        message: "Success Get All Cars",
        total: getAllCars.length,
        data: {
          cars: getAllCars,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: (error as Error).message,
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const getCarsId: CarsModel | undefined = await this.carsService.getById(
        Number(req.params.id)
      );

      if (getCarsId) {
        res.status(200).json({
          status: true,
          message: "Success Get Cars By Id",
          data: {
            cars: getCarsId,
          },
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data Not Found",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: (error as Error).message,
      });
    }
  }

  public async addCars(req: Request, res: Response): Promise<void> {
    try {
      const fileBase64: string | undefined =
        req.file?.buffer.toString("base64");
      const file: string = `data:${req.file?.mimetype};base64,${fileBase64}`;

      const reqData: CreateCars = {
        name: req.body.name,
        price: Number(req.body.price),
        size: req.body.size,
        image: req.file,
        start_rent: req.body.start_rent,
        finish_rent: req.body.finish_rent,
        created_at: new Date(),
      };

      await this.carsValidation.CreateCarsValidation(reqData);
      await this.carsService.addCars(reqData, file);

      res.status(201).json({
        status: true,
        message: "Success Add Cars",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: (error as Error).message,
      });
    }
  }

  public async editCars(req: Request, res: Response): Promise<void> {
    try {
      const fileBase64: string | undefined =
        req.file?.buffer.toString("base64");
      const file: string = `data:${req.file?.mimetype};base64,${fileBase64}`;

      const reqData: UpdateCars = {
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        image: req.file,
        start_rent: req.body.start_rent,
        finish_rent: req.body.finish_rent,
        updated_at: new Date(),
      };

      await this.carsValidation.UpdateCarsValidation(reqData);
      await this.carsService.editCars(Number(req.params.id), reqData, file);

      res.status(201).json({
        status: true,
        message: "Success Update Cars",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: (error as Error).message,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.carsService.delete(Number(req.params.id));

      res.status(200).json({
        status: true,
        message: "Success Delete Car",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: (error as Error).message,
      });
    }
  }
}
