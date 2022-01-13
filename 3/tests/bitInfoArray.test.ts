import { getBitInfoArray } from '../utils/bits'

const arr = ['0100', '1101', '1000']

test('getBitInfoArray', () => {
  const bitInfoArray = getBitInfoArray(arr)
  expect(bitInfoArray).toEqual([
    {
      0: new Set([0]),
      1: new Set([1, 2])
    },
    {
      0: new Set([2]),
      1: new Set([0, 1])
    },
    {
      0: new Set([0, 1, 2]),
      1: new Set([])
    },
    {
      0: new Set([0, 2]),
      1: new Set([1])
    }
  ])
})
