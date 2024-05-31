import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  size!: string;
  image!: string;
  start_rent?: Date;
  finish_rent?: Date;
  available!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  static get tableName() {
    return "cars";
  }

  static get idColumn() {
    return "id";
  }

  static relationMappings = {
    carsLogs: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname.replace("Cars", "")}/Cars/CarsLogsModel`,
      join: {
        from: "cars.id",
        to: "cars_logs.cars_id",
      },
    },
  };
}

export type Cars = ModelObject<CarsModel>;
