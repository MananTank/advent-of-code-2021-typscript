import { getPointsInLine } from '../utils/point'

test('horizontal', () => {
  const points = getPointsInLine([
    { x: 0, y: 2 },
    { x: 0, y: 4 }
  ])

  expect(points).toEqual([
    { x: 0, y: 2 },
    { x: 0, y: 4 },
    { x: 0, y: 3 }
  ])
})

test('diag', () => {
  const points = getPointsInLine([
    { x: 1, y: 1 },
    { x: 4, y: 4 }
  ])

  expect(points).toEqual([
    { x: 1, y: 1 },
    { x: 4, y: 4 },
    { x: 2, y: 2 },
    { x: 3, y: 3 }
  ])
})

test('diag reverse order', () => {
  const points = getPointsInLine([
    { x: 4, y: 4 },
    { x: 1, y: 1 }
  ])

  expect(points).toEqual([
    { x: 4, y: 4 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 }
  ])
})

test('diag 2', () => {
  const points = getPointsInLine([
    { x: 4, y: 4 },
    { x: 6, y: 2 }
  ])

  expect(points).toEqual([
    { x: 4, y: 4 },
    { x: 6, y: 2 },
    { x: 5, y: 3 }
  ])
})

test('diag 2 reverse order', () => {
  const points = getPointsInLine([
    { x: 6, y: 2 },
    { x: 4, y: 4 }
  ])

  expect(points).toEqual([
    { x: 6, y: 2 },
    { x: 4, y: 4 },
    { x: 5, y: 3 }
  ])
})
