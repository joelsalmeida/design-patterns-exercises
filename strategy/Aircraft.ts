import Fly from './actions/Fly';
import { IVehicle, VehicleType } from './interfaces';

class Aircraft implements IVehicle {
  model: string;

  type = VehicleType.airVehicle;

  private _action = new Fly();

  constructor(model: string) {
    this.model = model;
  }

  public move(): void {
    this._action.move();
  }
}

export default Aircraft;
