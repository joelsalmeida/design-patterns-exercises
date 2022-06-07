import { IMove } from '../interfaces';

class Sail implements IMove {
  move(): void {
    console.log('Sailing!');
  }
}

export default Sail;
