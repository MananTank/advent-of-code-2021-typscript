import { part1 } from '../part1'
import { part2 } from '../part2'

const sampleInput = '7/inputs/sample.txt'
const puzzleInput = '7/inputs/puzzle.txt'

describe('part1', () => {
  test('sample.txt', () => {
    expect(part1(sampleInput)).toBe(37)
  })

  test('puzzle.txt', () => {
    expect(part1(puzzleInput)).toBe(325528)
  })
})

describe('part2', () => {
  test('sample.txt', () => {
    expect(part2(sampleInput)).toBe(168)
  })

  test('puzzle.txt', () => {
    expect(part2(puzzleInput)).toBe(85015836)
  })
})
