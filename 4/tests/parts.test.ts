import { part1 } from '../part1'
import { part2 } from '../part2'

const sampleInput = '4/inputs/sample.txt'
const puzzleInput = '4/inputs/puzzle.txt'

describe('part1', () => {
  test('sample.txt', () => {
    expect(part1(sampleInput)).toBe(4512)
  })

  test('puzzle.txt', () => {
    expect(part1(puzzleInput)).toBe(69579)
  })
})

describe('part2', () => {
  test('sample.txt', () => {
    expect(part2(sampleInput)).toBe(1924)
  })

  test('puzzle.txt', () => {
    expect(part2(puzzleInput)).toBe(14877)
  })
})
