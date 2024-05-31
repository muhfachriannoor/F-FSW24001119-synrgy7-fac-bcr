import { CarsLogsModel } from "@Models/Cars/CarsLogsModel";
import { CarsModel } from "@Models/Cars/CarsModel";
import { CreateCarsLogs } from "@Interfaces/Cars/CarsInterface";
import { AnyQueryBuilder } from "objection";

export class CarsLogsRepository {
  public async getAllCarsLogs(): Promise<CarsModel[]> {
    return await CarsModel.query()
      .select("id", "name", "price", "size", "image", "start_rent", "finish_rent", "available", "created_at", "updated_at", "deleted_at")
      .withGraphFetched("[carsLogs(selectLogs)]")
      .modifiers({
        selectLogs: (builder: AnyQueryBuilder) => {
          builder
            .select("action", "time_log")
            .orderBy("id", "desc")
            .withGraphFetched("[users(selectUsers)]")
            .modifiers({
              selectUsers: (builder: AnyQueryBuilder) => {
                builder.select("name", "email", "role");
              },
            });
        },
      }).orderBy("id","desc");
  }

  public async getCarsLogsById(idCars: number): Promise<CarsModel[]> {
    return await CarsModel.query()
      .select("id", "name", "price", "size", "image", "start_rent", "finish_rent", "available", "created_at", "updated_at", "deleted_at")
      .where("id", idCars)
      .withGraphFetched("[carsLogs(selectLogs)]")
      .modifiers({
        selectLogs: (builder: AnyQueryBuilder) => {
          builder
            .select("action", "time_log")
            .orderBy("id", "desc")
            .withGraphFetched("[users(selectUsers)]")
            .modifiers({
              selectUsers: (builder: AnyQueryBuilder) => {
                builder.select("name", "email", "role");
              },
            });
        },
      });
  }

  public async addCarsLogs(data: CreateCarsLogs): Promise<any> {
    return await CarsLogsModel.query().insert({
      cars_id: data.cars_id,
      users_id: data.users_id,
      time_log: data.time_log,
      action: data.action,
    });
  }
}
