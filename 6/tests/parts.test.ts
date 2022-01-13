import { part1 } from '../part1'
import { part2 } from '../part2'

const sampleInput = '6/inputs/sample.txt'
const puzzleInput = '6/inputs/puzzle.txt'

describe('part1', () => {
  test('sample.txt', () => {
    expect(part1(sampleInput)).toBe(5934)
  })

  test('puzzle.txt', () => {
    expect(part1(puzzleInput)).toBe(391671)
  })
})

describe('part2', () => {
  test('sample.txt', () => {
    expect(part2(sampleInput)).toBe(26984457539)
  })

  test('puzzle.txt', () => {
    expect(part2(puzzleInput)).toBe(1754000560399)
  })
})
