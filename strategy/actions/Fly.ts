import { IMove } from '../interfaces';

class Fly implements IMove {
  move(): void {
    console.log('Flying!');
  }
}

export default Fly;
