import { readLines } from '../utils/readlines';
import { calculateIncreaseCount } from './utils/calculateIncreaseCount';

export function part1 (fileName: string) {
  const numbers = readLines(fileName).map(Number);
  return calculateIncreaseCount(numbers, 1);
}
