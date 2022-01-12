import { calculateIncreaseCount } from '../utils/calculateIncreaseCount'

test('windowSize: 1', () => {
  expect(calculateIncreaseCount([10, 2, 3, 4], 1)).toBe(2)
})

test('windowSize: 2', () => {
  // sums: 12, 5, 7
  // increases: no yes - 1
  expect(calculateIncreaseCount([10, 2, 3, 4], 2)).toBe(1)
})

test('windowSize: 3', () => {
  // sums: 15, 9, 12, 15
  // increases: no yes yes - 2
  expect(calculateIncreaseCount([10, 2, 3, 4, 5, 6], 3)).toBe(2)
})
