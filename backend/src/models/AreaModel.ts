import IArea from '../interfaces/areas/IArea';
import SequelizeArea from '../database/models/SequelizeArea';

export default class AreaModel {
  private model = SequelizeArea;

  public async getAll(): Promise<IArea[]> {
    const areas = await this.model.findAll();
    return areas;
  }
}

