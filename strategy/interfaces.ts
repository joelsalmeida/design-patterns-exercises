enum VehicleType {
  airVehicle = 'airVehicle',
  landVehicle = 'landVehicle',
  waterVehicle = 'waterVehicle',
}

interface IVehicle {
  model: string;
  type: VehicleType;

  move(): void;
}

interface IMove {
  move(): void;
}

export { IVehicle, IMove, VehicleType };
