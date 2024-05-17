import * as Yup from "yup";
import { CreateCars, UpdateCars } from "../interfaces/CarsInterface";

export class CarsValidation {
  public CreateCarsValidation(data: CreateCars): any {
    try {
      const carsSchema = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.number().required().positive().integer(),
        size: Yup.string().required(),
        image: Yup.mixed().required(),
        start_rent: Yup.date(),
        finish_rent: Yup.date(),
      });

      carsSchema.validateSync(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw new Error("Validation failed: " + error.errors);
      } else {
        throw new Error((error as Error).message);
      }
    }
  }

  public UpdateCarsValidation(data: UpdateCars): any {
    try {
      const carsSchema = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.number().required().positive().integer(),
        size: Yup.string().required(),
        image: Yup.mixed().required(),
        start_rent: Yup.date(),
        finish_rent: Yup.date(),
      });

      carsSchema.validateSync(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw new Error("Validation failed: " + error.errors);
      } else {
        throw new Error((error as Error).message);
      }
    }
  }
}
