import { part1 } from '../part1'
import { part2 } from '../part2'

const sampleInput = '3/inputs/sample.txt'
const puzzleInput = '3/inputs/puzzle.txt'

describe('part1', () => {
  test('sample.txt', () => {
    expect(part1(sampleInput)).toBe(198)
  })

  test('puzzle.txt', () => {
    expect(part1(puzzleInput)).toBe(741950)
  })
})

describe('part2', () => {
  test('sample.txt', () => {
    expect(part2(sampleInput)).toBe(230)
  })

  test('puzzle.txt', () => {
    expect(part2(puzzleInput)).toBe(903810)
  })
})
