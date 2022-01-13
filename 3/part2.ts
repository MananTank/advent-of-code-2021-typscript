import { readLines } from '../utils/readlines'
import { bitReducer } from './utils/bitReducer'
import { pickLeastCommonBit, pickMostCommonBit } from './utils/bits'

export function part2(fileName: string) {
  const binaryNumbers = readLines(fileName)

  // get binary values
  const oxygenRatingBinary = bitReducer(binaryNumbers, pickMostCommonBit)
  const co2RatingBinary = bitReducer(binaryNumbers, pickLeastCommonBit)

  // convert to decimal
  const oxygenRating = parseInt(oxygenRatingBinary, 2)
  const co2Rating = parseInt(co2RatingBinary, 2)

  return oxygenRating * co2Rating
}
