import Run from './actions/Run';
import { IVehicle, VehicleType } from './interfaces';

class Car implements IVehicle {
  model: string;

  type = VehicleType.landVehicle;

  private _action = new Run();

  constructor(model: string) {
    this.model = model;
  }

  public move(): void {
    this._action.move();
  }
}

export default Car;
