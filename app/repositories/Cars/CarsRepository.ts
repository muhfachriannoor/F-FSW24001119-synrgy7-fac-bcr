import { CarsModel } from "@Models/Cars/CarsModel";
import { CreateCars, UpdateCars } from "@Interfaces/Cars/CarsInterface";
import { Exception } from "@Exceptions/exception";

export class CarsRepository {
  public async getAll(): Promise<CarsModel[]> {
    return await CarsModel.query()
      .select("id", "name", "price", "size", "image", "start_rent", "finish_rent", "available", "created_at", "updated_at", "deleted_at")
      .orderBy("id", "desc")
  }

  public async getById(id: number): Promise<CarsModel[] | undefined> {
    const getCars = await CarsModel.query()
      .select("id", "name", "price", "size", "image", "start_rent", "finish_rent", "available", "created_at", "updated_at", "deleted_at")
      .where("id", id);
      
    if(getCars.length > 0) {
      return getCars;
    } else {
      throw new Exception("Data not found", 404, {});
    }
  }

  public async getCarsAvailable(): Promise<CarsModel[]> {
    return await CarsModel.query()
      .select("id", "name", "price", "size", "image", "start_rent", "finish_rent", "available", "created_at")
      .where("deleted_at", null)
      .where("available", true)
      .orderBy("id", "desc")
  }

  public async addCars(data: CreateCars): Promise<any> {
    return await CarsModel.query().insert({
      name: data.name,
      price: data.price,
      size: data.size,
      image: data.image,
      start_rent: data.start_rent,
      finish_rent: data.finish_rent,
      available: data.available,
      created_at: data.created_at,
    }).returning("id");   
  }

  public async editCars(id: number, data: UpdateCars,): Promise<any> {
    return await CarsModel.query().where("id", id).update({
      name: data.name,
      price: data.price,
      size: data.size,
      image: data.image,
      start_rent: data.start_rent,
      finish_rent: data.finish_rent,
      available: data.available,
      updated_at: data.updated_at,
    });
  }

  public async delete(id: number): Promise<Number> {
    return await CarsModel.query().where("id", id).update({
      deleted_at: new Date(),
    });
  }
}
