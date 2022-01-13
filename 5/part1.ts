import { readLines } from '../utils/readlines'
import { isHVLine, stringToLine } from './utils/line'
import { countMatchesInMatrix, createMatrixWithLines } from './utils/matrix'

export function part1(fileName: string) {
  const HVLines = readLines(fileName).map(stringToLine).filter(isHVLine)
  const matrix = createMatrixWithLines(HVLines)
  // drawMatrix(matrix)
  // count values in matrix higher than 2
  return countMatchesInMatrix(matrix, (v) => v >= 2)
}
