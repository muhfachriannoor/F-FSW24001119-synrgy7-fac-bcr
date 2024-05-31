import { CarsModel } from "@Models/Cars/CarsModel";
import { CarsLogsRepository } from "@Repositories/Cars/CarsLogsRepository";

export class CarsLogsService {
  public carsLogsRepository: CarsLogsRepository;

  constructor(carsLogsRepository: CarsLogsRepository) {
    this.carsLogsRepository = carsLogsRepository;
  }

  public async getAllCarsLogs(): Promise<CarsModel[]> {
    return await this.carsLogsRepository.getAllCarsLogs();
  }

  public async getCarsLogsById(idCars: number): Promise<CarsModel[]> {
    return await this.carsLogsRepository.getCarsLogsById(idCars);
  }
}
