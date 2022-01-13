import {
  getBitInfoArray,
  getLeastCommonBits,
  getMostCommonBits
} from '../utils/bits'

const arr = ['0100', '1101', '1000']

test('most common bits', () => {
  const bitInfoArray = getBitInfoArray(arr)
  const mostCommonBits = getMostCommonBits(bitInfoArray)
  expect(mostCommonBits).toEqual([1, 1, 0, 0])
})

test('least common bits', () => {
  const bitInfoArray = getBitInfoArray(arr)
  const leastCommonBits = getLeastCommonBits(bitInfoArray)
  expect(leastCommonBits).toEqual([0, 0, 1, 1])
})
