import { readLines } from '../utils/readlines'
import { isHVDLine, stringToLine } from './utils/line'
import { countMatchesInMatrix, createMatrixWithLines } from './utils/matrix'

export function part2(fileName: string) {
  const HVDLines = readLines(fileName).map(stringToLine).filter(isHVDLine)
  const matrix = createMatrixWithLines(HVDLines)
  // drawMatrix(matrix)
  // count values in matrix higher than 2
  return countMatchesInMatrix(matrix, (v) => v >= 2)
}
