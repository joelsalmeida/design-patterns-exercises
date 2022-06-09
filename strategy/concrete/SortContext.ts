import ISortStrategy from '../interfaces/ISortStrategy';

class SortContext {
  private _sortAlgorithm: ISortStrategy;

  constructor(sortAlgorithm: ISortStrategy) {
    this._sortAlgorithm = sortAlgorithm;
  }

  public setSortAlgorithm(newAlgorithm: ISortStrategy) {
    this._sortAlgorithm = newAlgorithm;
  }

  public logSortedArray(arrayOfStrings: string[]) {
    return console.log(this._sortAlgorithm.sort(arrayOfStrings));
  }
}

export default SortContext;
