export interface Cars {
  name: string;
  price: number;
  size: string;
  image: any;
  start_rent: Date;
  finish_rent: Date;
  created_at: Date;
  updated_at: Date;
}

export interface CreateCars {
  name: string;
  price: number;
  size: string;
  image: any;
  start_rent: Date;
  finish_rent: Date;
  created_at: Date;
}

export interface UpdateCars {
  name: string;
  price: number;
  size: string;
  image: any;
  start_rent: Date;
  finish_rent: Date;
  updated_at: Date;
}
