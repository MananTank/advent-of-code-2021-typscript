import { part1 } from '../part1'
import { part2 } from '../part2'

const sampleInput = '5/inputs/sample.txt'
const puzzleInput = '5/inputs/puzzle.txt'

describe('part1', () => {
  test('sample.txt', () => {
    expect(part1(sampleInput)).toBe(5)
  })

  test('puzzle.txt', () => {
    expect(part1(puzzleInput)).toBe(5124)
  })
})

describe('part2', () => {
  test('sample.txt', () => {
    expect(part2(sampleInput)).toBe(12)
  })

  test('puzzle.txt', () => {
    expect(part2(puzzleInput)).toBe(19771)
  })
})
