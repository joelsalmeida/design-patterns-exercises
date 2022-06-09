import ReverseSort from './concrete/ReverseSort';
import Sort from './concrete/Sort';
import SortContext from './concrete/SortContext';

const arrStrings = ['a', 'c', 'd', 'b'];

const defaultSort = new Sort();
const reverseSort = new ReverseSort();

const context = new SortContext(defaultSort);
context.logSortedArray(arrStrings);

context.setSortAlgorithm(reverseSort);
context.logSortedArray(arrStrings);
