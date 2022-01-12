import { part1 } from '../part1';
import { part2 } from '../part2';

const sampleInput = '1/inputs/sample.txt';
const puzzleInput = '1/inputs/puzzle.txt';

describe('part1', () => {
  test('sample.txt', () => {
    expect(part1(sampleInput)).toBe(7)
  })

  test('puzzle.txt', () => {
    expect(part1(puzzleInput)).toBe(1342)
  })
})

describe('part2', () => {
  test('sample.txt', () => {
    expect(part2(sampleInput)).toBe(5)
  })

  test('puzzle.txt', () => {
    expect(part2(puzzleInput)).toBe(1378)
  })
})
