import { ServiceResponse } from '../interfaces/ServiceResponse';
import AreaModel from '../models/AreaModel';
import IArea from '../interfaces/areas/IArea';

export default class AreaService {
  private model: AreaModel;

  constructor(m: AreaModel = new AreaModel()) {
    this.model = m;
  }

  public async getAll(): Promise<ServiceResponse<IArea[]>> {
    try {
      const areas = await this.model.getAll();
      return { status: 'SUCCESSFUL', data: areas };
    } catch (error) {
      return { status: 'INTERNAL_SERVER_ERROR', data: { message: 'Internal server error' } };
    }
  }
}
