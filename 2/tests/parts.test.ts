import { part1 } from '../part1'
import { part2 } from '../part2'

const sampleInput = '2/inputs/sample.txt'
const puzzleInput = '2/inputs/puzzle.txt'

describe('part1', () => {
  test('sample', () => {
    expect(part1(sampleInput)).toBe(150)
  })

  test('puzzle', () => {
    expect(part1(puzzleInput)).toBe(2039912)
  })
})

describe('part2', () => {
  test('sample', () => {
    expect(part2(sampleInput)).toBe(900)
  })

  test('puzzle', () => {
    expect(part2(puzzleInput)).toBe(1942068080)
  })
})
