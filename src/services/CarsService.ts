import { CarsModel } from "../models/CarsModel";
import { CreateCars, UpdateCars } from "../interfaces/CarsInterface";
import {
  cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from "../config/cloudinary";

export class CarsService {
  public async getAll(): Promise<CarsModel[]> {
    return await CarsModel.query();
  }

  public async getById(id: number): Promise<CarsModel | undefined> {
    return await CarsModel.query().findById(id);
  }

  public async addCars(data: CreateCars, file: string): Promise<any> {
    cloudinary.uploader.upload(
      file,
      {
        folder: "challenge5",
        use_filename: true,
      },
      async (
        err: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ): Promise<void> => {
        try {
          data.image = result?.url;
          await CarsModel.query().insert(data);
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    );
  }

  public async editCars(
    id: number,
    data: UpdateCars,
    file: string
  ): Promise<any> {
    cloudinary.uploader.upload(
      file,
      {
        folder: "challenge5",
        use_filename: true,
      },
      async (
        err: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ): Promise<void> => {
        try {
          data.image = result?.url;
          await CarsModel.query().findById(id).patch(data);
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    );
  }

  public async delete(id: number): Promise<Number> {
    return await CarsModel.query().deleteById(id);
  }
}
