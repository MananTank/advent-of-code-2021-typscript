import { readLines } from '../utils/readlines'
import { totalFishesAfter } from './utils/population'

export function part1(fileName: string) {
  const fishes = readLines(fileName)[0].split(',').map(Number)
  return totalFishesAfter(fishes, 80)
}
