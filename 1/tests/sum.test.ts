import { sum } from '../utils/sum'

const arr = [10, 20, 30, 40, 50]

test('window size: 0', () => {
  expect(sum(arr, 3, 0)).toBe(0)
})

test('window size: 1', () => {
  expect(sum(arr, 3, 1)).toBe(40)
})

test('window size: 2', () => {
  expect(sum(arr, 3, 2)).toBe(40 + 50)
})

test('window size: 3', () => {
  expect(sum(arr, 2, 3)).toBe(30 + 40 + 50)
})
