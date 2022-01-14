import { createPositionMap } from '../utils/positionMap'

test('createPositionMap', () => {
  const positionMap = createPositionMap([10, 1, 2, 1, 5, 10, 20])

  expect(positionMap).toEqual(
    new Map([
      [10, { count: 2, cost: 2 }],
      [1, { count: 2, cost: 2 }],
      [2, { count: 1, cost: 1 }],
      [5, { count: 1, cost: 1 }],
      [20, { count: 1, cost: 1 }]
    ])
  )
})
