import Sail from './actions/Sail';
import { IVehicle, VehicleType } from './interfaces';

class Boat implements IVehicle {
  model: string;

  type = VehicleType.landVehicle;

  private _action = new Sail();

  constructor(model: string) {
    this.model = model;
  }

  public move(): void {
    this._action.move();
  }
}

export default Boat;
