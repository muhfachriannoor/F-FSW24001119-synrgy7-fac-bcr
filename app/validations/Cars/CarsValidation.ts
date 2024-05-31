import * as Yup from "yup";
import { CreateCars, UpdateCars } from "@Interfaces/Cars/CarsInterface";
import { Exception } from "@Exceptions/exception";

export class CarsValidationData {
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

      carsSchema.validateSync(data, { abortEarly: false });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw new Exception("Validation Error", 403, {
          validations: error.inner.map((err) => err.message),
        });
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

      carsSchema.validateSync(data, { abortEarly: false });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw new Exception("Validation Error", 403, {
          validations: error.inner.map((err) => err.message),
        });
      } else {
        throw new Error((error as Error).message);
      }
    }
  }
}
