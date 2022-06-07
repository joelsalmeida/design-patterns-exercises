import { IMove } from '../interfaces';

class Run implements IMove {
  move(): void {
    console.log('Running!');
  }
}

export default Run;
