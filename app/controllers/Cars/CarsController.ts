import { CarsModel } from "@Models/Cars/CarsModel";
import { CreateCars, UpdateCars, CreateCarsLogs } from "@Interfaces/Cars/CarsInterface";
import { Exception } from "@Exceptions/exception";
import { CarsService } from "@Services/Cars/CarsService";
import { CarsLogsService } from "@Services/Cars/CarsLogsService";
import { CarsValidationData } from "@Validations/Cars/CarsValidation";
import { Request, Response } from "express";


export class CarsController {
  public carsService: CarsService;
  public carsLogsService: CarsLogsService;
  public carsValidationData: CarsValidationData;

  constructor(carsService: CarsService, carsLogsService: CarsLogsService) {
    this.carsService = carsService;
    this.carsLogsService = carsLogsService;
    this.carsValidationData = new CarsValidationData();
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
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const getCarsId: CarsModel[] | undefined = await this.carsService.getById(Number(req.params.id));
      res.status(200).json({
        status: true,
        message: "Success Get Cars By Id",
        data: {
          cars: getCarsId,
        },
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async addCars(req: any, res: Response): Promise<void> {
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
        available: req.body.available,
        created_at: new Date(),
      };

      const reqAuth: CreateCarsLogs = {
        users_id: req.user.id,
        time_log: new Date(),
        action: "INSERT",
      };

      const checkValidation: CreateCars =
        this.carsValidationData.CreateCarsValidation(reqData);
      await this.carsService.addCars(reqData, reqAuth, file);

      res.status(201).json({
        status: true,
        message: "Success Add Cars",
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async editCars(req: any, res: Response): Promise<void> {
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
        available: req.body.available,
        updated_at: new Date(),
      };

      const reqAuth: CreateCarsLogs = {
        users_id: req.user.id,
        time_log: new Date(),
        action: "UPDATE",
      };

      const checkDataCars: CarsModel[] | undefined =
        await this.carsService.getById(Number(req.params.id));
      const checkValidation: UpdateCars = this.carsValidationData.UpdateCarsValidation(reqData);
      await this.carsService.editCars(Number(req.params.id), reqData, reqAuth, file);

      res.status(201).json({
        status: true,
        message: "Success Update Cars",
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async delete(req: any, res: Response): Promise<void> {
    try {
      const reqAuth: CreateCarsLogs = {
        users_id: req.user.id,
        time_log: new Date(),
        action: "DELETE",
      };

      const checkDataCars: CarsModel[] | undefined =
        await this.carsService.getById(Number(req.params.id));
      await this.carsService.delete(Number(req.params.id), reqAuth);

      res.status(200).json({
        status: true,
        message: "Success Delete Car",
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async getCarsLogs(req: Request, res: Response): Promise<void> {
    try {
      const getAllCarsLogs: CarsModel[] =
        await this.carsLogsService.getAllCarsLogs();

      res.status(200).json({
        status: true,
        message: "Success Get All Cars Logs",
        total: getAllCarsLogs.length,
        data: {
          cars: getAllCarsLogs,
        },
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async getCarsLogsById(req: Request, res: Response): Promise<void> {
    try {
      const checkDataCars: CarsModel[] | undefined = await this.carsService.getById(Number(req.params.idCars));
      const getCarsLogsId: CarsModel[] = await this.carsLogsService.getCarsLogsById(Number(req.params.idCars));

      res.status(200).json({
        status: true,
        message: "Success Get Logs By Cars Id",
        data: {
          cars: getCarsLogsId,
        },
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }

  public async getCarsAvailable(req: Request, res: Response): Promise<void> {
    try {
      const getAllCars: CarsModel[] = await this.carsService.getCarsAvailable();

      res.status(200).json({
        status: true,
        message: "Success Get All Cars Available",
        total: getAllCars.length,
        data: {
          cars: getAllCars,
        },
      });
    } catch (error) {
      if (error instanceof Exception) {
        res.status(error.statusCode).json({
          status: false,
          message: error.message,
          data: error.data,
        });
      } else {
        res.status(500).json({
          status: false,
          message: (error as Error).message,
        });
      }
    }
  }
}
