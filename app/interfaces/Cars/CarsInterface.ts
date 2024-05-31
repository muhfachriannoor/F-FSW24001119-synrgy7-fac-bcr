export interface Cars {
  name: string;
  price: number;
  size: string;
  image: any;
  start_rent: Date;
  finish_rent: Date;
  available: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface CreateCars {
  name: string;
  price: number;
  size: string;
  image: any;
  start_rent: Date;
  finish_rent: Date;
  available: string;
  created_at: Date;
}

export interface UpdateCars {
  name: string;
  price: number;
  size: string;
  image: any;
  start_rent: Date;
  finish_rent: Date;
  available: string;
  updated_at: Date;
}

export interface CreateCarsLogs {
  cars_id?: number;
  users_id: number;
  time_log: Date;
  action: string;
}
