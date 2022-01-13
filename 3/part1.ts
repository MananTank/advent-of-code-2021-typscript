import { readLines } from '../utils/readlines'
import {
  getBitInfoArray,
  getLeastCommonBits,
  getMostCommonBits
} from './utils/bits'

export function part1(fileName: string) {
  const binaryNumbers = readLines(fileName)

  // count the number of zeros in each bit bitIndex
  const bitInfoArray = getBitInfoArray(binaryNumbers)

  // get most common and least common bits for each bitIndex
  const mostCommonBits = getMostCommonBits(bitInfoArray)
  const leastCommonBits = getLeastCommonBits(bitInfoArray)

  // convert the bits array to decimal
  const gammaRate = parseInt(mostCommonBits.join(''), 2)
  const epsilonRate = parseInt(leastCommonBits.join(''), 2)

  return epsilonRate * gammaRate
}
