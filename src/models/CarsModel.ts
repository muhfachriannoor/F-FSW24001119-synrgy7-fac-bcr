import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  size!: string;
  image!: string;
  start_rent?: Date;
  finish_rent?: Date;
  created_at?: Date;
  updated_at?: Date;

  static get tableName() {
    return "cars";
  }
}

export type Cars = ModelObject<CarsModel>;
