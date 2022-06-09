import ISortStrategy from '../interfaces/ISortStrategy';

class Sort implements ISortStrategy {
  sort(arrayOfStrings: string[]): string[] {
    return arrayOfStrings.sort();
  }
}

export default Sort;
