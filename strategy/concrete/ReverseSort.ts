import ISortStrategy from '../interfaces/ISortStrategy';

class ReverseSort implements ISortStrategy {
  sort(arrayOfStrings: string[]): string[] {
    return arrayOfStrings.sort().reverse();
  }
}

export default ReverseSort;
