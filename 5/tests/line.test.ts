import { onDiag, stringToLine } from '../utils/line'

test('stringToLine', () => {
  expect(stringToLine('1,2  -> 3,4')).toEqual([
    { x: 2, y: 1 },
    { x: 4, y: 3 }
  ])
})

test('onDiag', () => {
  // 45 deg line
  expect(onDiag({ x: 1, y: 1 }, { x: 3, y: 3 })).toBe(true)
  expect(onDiag({ x: 3, y: 3 }, { x: 1, y: 1 })).toBe(true)

  // -45 deg line
  expect(onDiag({ x: 5, y: 1 }, { x: 3, y: 3 })).toBe(true)
  expect(onDiag({ x: 3, y: 3 }, { x: 5, y: 1 })).toBe(true)
})
